import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import PropTypes from 'prop-types';
import { browserHistory } from 'react-router';
import Alert from 'react-s-alert';

import './style.scss';

class BodyForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      readySubmit: false,
      ageErr: false,
      statureErr: false,
      weightErr: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.props.existed) {
      Meteor.call('bodydata.first', {
        userId: this.props.userId,
        gender: e.target.gender.value,
        age: e.target.age.value,
        stature: parseFloat(e.target.stature.value),
        datas: [{
          weight: parseFloat(e.target.weight.value),
          type: parseFloat(e.target.type.value),
        }],
      }, (err) => {
        if (err) {
          Alert.warning('录入失败！请重试', {
            position: 'top',
            effect: 'slide',
            timeout: 3000,
          });
          throw new Meteor.Error('body-data-insert-err', err.toString());
        }
        Alert.success('添加成功！添加数据越多，计算越准确', {
          position: 'top',
          effect: 'slide',
          timeout: 3000,
        });
        browserHistory.push('/body');
      });
      return;
    }
    Meteor.call('bodydata.add', {
      userId: this.props.userId,
      weight: parseFloat(e.target.weight.value),
      type: parseFloat(e.target.type.value),
    }, (err) => {
      if (err) {
        Alert.warning('录入失败！请重试', {
          position: 'top',
          effect: 'slide',
          timeout: 3000,
        });
        throw new Meteor.Error('body-data-insert-err', err.toString());
      }
      Alert.success('添加成功！添加数据越多，计算越准确', {
        position: 'top',
        effect: 'slide',
        timeout: 3000,
      });
      browserHistory.push('/body');
    });
  }

  ageValidator(value) {
    const integer = /^[1-9][0-9]$/;
    return integer.test(value);
  }

  statureValidator(value) {
    const integer = /^[1-9]\d{2}$/;
    return integer.test(value);
  }

  floatPointValidator(value) {
    const floatPoint = /^[1-9]\d|[1-9]\d.\d$/;
    return floatPoint.test(value);
  }

  render() {
    if (this.props.existed) {
      return (
        <div className="body-form-page">
          <div className="top-part">
            <div className="shadow">
              {/*<img src="" alt=""/>*/}
              <p>记录身体数据，我们综合分析您的变化，调整您的饮食结构，以达到最适合您当前的状态</p>
            </div>
          </div>
          <form onSubmit={this.handleSubmit} className="form-content">
            <div className="form-input">
              <div>
                <label htmlFor="weight">体重(KG)</label>
                <span>影响计算关键数据！</span>
              </div>
              <input
                id="weight"
                name="weight"
                type="number"
                step="0.1"
                onChange={() => {
                  this.state.weightErr && this.setState({ weightErr: false });
                }}
                onBlur={(v) => {
                  this.floatPointValidator(v.target.value) ?
                    this.setState({
                      weightErr: false,
                      readySubmit: true,
                    }) :
                    this.setState({
                      weightErr: true,
                      readySubmit: false,
                    });
                }}
              />
              {
                this.state.weightErr ? <p style={{ color: 'red', fontSize: '12px' }}>体重输入格式错误</p> : ''
              }
            </div>
            <div className="form-select">
              <div>
                <label htmlFor="type">运动类型</label>
                <span>影响计算关键数据！</span>
              </div>
              <select
                id="type"
                name="type"
                className="over-length"
              >
                <option value="1.2">很少或者不运动</option>
                <option value="1.3">每周大约少量运动1~3次</option>
                <option value="1.5">有持续运动习惯，每周运动3~5次</option>
                <option value="1.7">运动狂热，每周运动6~7次</option>
                <option value="1.9">健身狂热、现役运动员等每天消耗大量能量</option>
              </select>
            </div>
            <button
              type="submit"
              className={
                this.state.readySubmit &&
                !this.state.weightErr ? '' : 'submit-disabled'
              }
              disabled={
                !this.state.weightErr && false
              }
            >
              完成
            </button>
          </form>
        </div>
      );
    }
    return (
      <div className="body-form-page">
        <div className="top-part">
          <div className="shadow">
            <img src="" alt=""/>
          </div>
        </div>
        <form onSubmit={this.handleSubmit} className="form-content">
          <div className="form-select">
            <div>
              <label htmlFor="gender">性别</label>
              <span>不可修改！</span>
            </div>
            <select
              id="gender"
              name="gender"
            >
              <option value="1">男</option>
              <option value="2">女</option>
            </select>
          </div>
          <div className="form-input">
            <div>
              <label htmlFor="age">年龄</label>
              <span>只输入数字即可</span>
            </div>
            <input
              id="age"
              name="age"
              type="number"
              pattern="\d*"
              onChange={() => {
                this.state.ageErr && this.setState({ ageErr: false });
              }}
              onBlur={(v) => {
                this.ageValidator(v.target.value) ?
                  this.setState({
                    ageErr: false,
                  }) :
                  this.setState({
                    ageErr: true,
                  });
              }}
            />
            {
              this.state.ageErr ? <p style={{ color: 'red', fontSize: '12px' }}>年龄输入格式错误</p> : ''
            }
          </div>
          <div className="form-input">
            <div>
              <label htmlFor="stature">身高(CM)</label>
              <span>影响计算不可修改！</span>
            </div>
            <input
              id="stature"
              name="stature"
              type="number"
              onChange={() => {
                this.state.statureErr && this.setState({ statureErr: false });
              }}
              onBlur={(v) => {
                this.statureValidator(v.target.value) ?
                  this.setState({
                    statureErr: false,
                  }) :
                  this.setState({
                    statureErr: true,
                  });
              }}
            />
            {
              this.state.statureErr ? <p style={{ color: 'red', fontSize: '12px' }}>身高输入格式错误</p> : ''
            }
          </div>
          <div className="form-input">
            <div>
              <label htmlFor="weight">体重(KG)</label>
              <span>影响计算关键数据！</span>
            </div>
            <input
              id="weight"
              name="weight"
              type="number"
              step="0.1"
              onChange={() => {
                this.state.weightErr && this.setState({ weightErr: false });
              }}
              onBlur={(v) => {
                this.floatPointValidator(v.target.value) ?
                  this.setState({
                    weightErr: false,
                    readySubmit: true,
                  }) :
                  this.setState({
                    weightErr: true,
                    readySubmit: false,
                  });
              }}
            />
            {
              this.state.weightErr ? <p style={{ color: 'red', fontSize: '12px' }}>体重输入格式错误</p> : ''
            }
          </div>
          <div className="form-select">
            <div>
              <label htmlFor="type">运动类型</label>
              <span>影响计算关键数据！</span>
            </div>
            <select
              id="type"
              name="type"
              className="over-length"
            >
              <option value="1.2">很少或者不运动</option>
              <option value="1.3">每周大约少量运动1~3次</option>
              <option value="1.5">有持续运动习惯，每周运动3~5次</option>
              <option value="1.7">运动狂热，每周运动6~7次</option>
              <option value="1.9">健身狂热、现役运动员等每天消耗大量能量</option>
            </select>
          </div>
          <button
            type="submit"
            className={
              this.state.readySubmit &&
              !this.state.weightErr &&
              !this.state.ageErr &&
              !this.state.statureErr ? '' : 'submit-disabled'
            }
            disabled={
              !this.state.weightErr &&
              !this.state.ageErr &&
              !this.state.statureErr && false
            }
          >
            完成
          </button>
        </form>
      </div>
    );
  }
}

BodyForm.propTypes = {
  userId: PropTypes.string,
  existed: PropTypes.object,
};


export default BodyForm;
