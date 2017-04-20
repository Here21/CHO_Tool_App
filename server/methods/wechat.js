import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import cookieSession from 'cookie-session';

import wechat from 'wechat';
import WechatAPI from 'wechat-api';
import OAuth from 'wechat-oauth';

const client = new OAuth(Meteor.settings.public.WechatAppId, Meteor.settings.public.WechatAppSecret);
const api = new WechatAPI(Meteor.settings.public.WechatAppId, Meteor.settings.public.WechatAppSecret);

const config = {
  token: Meteor.settings.public.WechatAppToken,
  appid: Meteor.settings.public.WechatAppId,
  checkSignature: true, // 可选，默认为true。由于微信公众平台接口调试工具在明文模式下不发送签名，所以如要使用该测试工具，请将其设置为false
};

export default function () {
  Meteor.startup(() => {
    // WebApp.connectHandlers.use('/auth', (req, res, next) => {
    //   const url = client.getAuthorizeURL('http://www.100th.top/callback', '', 'snsapi_base');
    //   res.writeHead(302, { 'Location': url });
    //   res.end();
    // });

    WebApp.connectHandlers.use(cookieSession({
      httpOnly: false,
      signed: false,
      cookie: { maxAge: 30 * 24 * 60 * 60 * 1000 },
    }));

    // WebApp.connectHandlers.use('/test', (req, res, next) => {
    //   // const url = client.getAuthorizeURL('http://www.100th.top/callback', '', 'snsapi_base');
    //   console.log('usl ----- test');
    //   req.session = { openid: 'yuiokjnbghukyuiklmnbg' };
    //   res.writeHead(302, { 'Location': 'http://www.100th.top/home' });
    //   res.end();
    // });

    // WebApp.connectHandlers.use('/home', (req, res, next) => {
    //   console.log('222');
    //   console.log(req.session.openid);
    //   res.end();
    // });

    WebApp.connectHandlers.use('/callback', (req, res, next) => {
      const code = req.query.code;
      let openid = '';
      client.getAccessToken(code, Meteor.bindEnvironment((err, result) => {
        const accessToken = result.data.access_token;
        openid = result.data.openid;
        const unionid = result.data.unionid;

        console.log('token=' + accessToken);
        console.log('openid=' + openid);
        // 只有为snsapi_userinfo时，才可以使用client.getUser，否侧返回48001
        // client.getUser(openid, (err, result) => {
        //   console.log(result);
        // });
        req.session = { openid: openid };

        const call = Meteor.call('user.excited', openid);
        api.getUser({ openid, lang: 'en' }, Meteor.bindEnvironment((err, res) => {
          Meteor.call('user.update', res);
        }));
      }));
      console.log('----openid=' + openid);
      console.log(req.session);
      res.writeHead(302, { 'Location': 'http://www.100th.top/home' });
      res.end();
    });

    WebApp.connectHandlers.use('/wechat', wechat(config,
      wechat.text((message, req, res, next) => {
        api.getUser({ openid: message.FromUserName, lang: 'en' }, (e, r) => {
          console.log(r);
          res.reply(r.nickname);
        });
        // message为文本内容
        // { ToUserName: 'gh_d3e07d51b513',
        // FromUserName: 'oPKu7jgOibOA-De4u8J2RuNKpZRw',
        // CreateTime: '1359125035',
        // MsgType: 'text',
        // Content: 'http',
        // MsgId: '5837397576500011341' }
      })
      .image((message, req, res, next) => {
        res.reply('收到图片');
          // message为图片内容
        // { ToUserName: 'gh_d3e07d51b513',
        // FromUserName: 'oPKu7jgOibOA-De4u8J2RuNKpZRw',
        // CreateTime: '1359124971',
        // MsgType: 'image',
        // PicUrl: 'http://mmsns.qpic.cn/mmsns/bfc815ygvIWcaaZlEXJV7NzhmA3Y2fc4eBOxLjpPI60Q1Q6ibYicwg/0',
        // MediaId: 'media_id',
        // MsgId: '5837397301622104395' }
      })
      .voice((message, req, res, next) => {
        res.reply('收到语音');
          // message为音频内容
        // { ToUserName: 'gh_d3e07d51b513',
        // FromUserName: 'oPKu7jgOibOA-De4u8J2RuNKpZRw',
        // CreateTime: '1359125022',
        // MsgType: 'voice',
        // MediaId: 'OMYnpghh8fRfzHL8obuboDN9rmLig4s0xdpoNT6a5BoFZWufbE6srbCKc_bxduzS',
        // Format: 'amr',
        // MsgId: '5837397520665436492' }
      })
      .event(Meteor.bindEnvironment((message, req, res, next) => {
        if (message.Event === 'subscribe') {
          Accounts.createUser({ username: message.FromUserName, createdAt: new Date() });
          res.reply('欢迎您使用碳氢氧膳食公众号');
        }
      }))
      // .device_text((message, req, res, next) => {
      //   console.log(message)
      //   // TODO
      // })
      // .device_event((message, req, res, next) => {
      //   console.log(message)
      //   // TODO
      // })
    ));
  });
}
