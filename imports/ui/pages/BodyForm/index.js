import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import PropTypes from 'prop-types';
import { browserHistory } from 'react-router';

import './style.scss';

class BodyData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      age: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const data = {
      userId: this.props.userId,
      gender: e.target.gender.value,
      datas: [{
        stature: parseFloat(e.target.stature.value),
        weight: parseFloat(e.target.weight.value),
        type: parseFloat(e.target.type.value),
      }],
    };
    if (!this.props.existed) {
      Meteor.call('bodydata.first', data, (err) => {
        if (err) throw new Meteor.Error('body-data-insert-err', err.toString());
        browserHistory.push('/body');
      });
      return;
    }
    Meteor.call('bodydata.add', { userId: this.props.userId, datas: data.datas[0] }, (err) => {
      if (err) throw new Meteor.Error('body-data-insert-err', err.toString());
      browserHistory.push('/body');
    });
  }

  render() {
    console.log(this.props);
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
              <span>（不可修改！）</span>
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
              <span>（输入数字即可）</span>
            </div>
            <input
              id="age"
              name="age"
              placeholder="24"
              onChange={(v) => { console.log(v.target.value); }}
            />
          </div>
          <div className="form-input">
            <div>
              <label htmlFor="stature">身高</label>
              <span>（影响计算不可修改！）</span>
            </div>
            <input
              id="stature"
              name="stature"
              onChange={() => {}}
            />
          </div>
          <div className="form-input">
            <div>
              <label htmlFor="weight">体重</label>
              <span>（影响计算关键数据！）</span>
            </div>
            <input
              id="weight"
              name="weight"
              onChange={() => {}}
            />
          </div>
          <div className="form-select">
            <div>
              <label htmlFor="type">运动类型</label>
              <span>（影响计算关键数据！）</span>
            </div>
            <select
              id="type"
              name="type"
              className="over-length"
            >
              <option value="1.2">白领、学生很少或者不运动</option>
              <option value="1.3">偶尔运动或者逛街，每周大约少量运动1~3次</option>
              <option value="1.5">有持续运动习惯，或是会上健身房，每周运动3~5次</option>
              <option value="1.7">运动狂热，每周运动6~7次或是工作量大</option>
              <option value="1.9">工作或生活作息需要大量劳动，相当消耗能量</option>
            </select>
          </div>
          <button type="submit">完成</button>
        </form>
      </div>
    );
  }
}

BodyData.propTypes = {
  userId: PropTypes.string,
  existed: PropTypes.object,
};


export default BodyData;
