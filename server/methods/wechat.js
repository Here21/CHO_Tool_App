import { Meteor } from 'meteor/meteor';
import cookieSession from 'cookie-session';

import wechat from 'wechat';
import OAuth from 'wechat-oauth';

const client = new OAuth(Meteor.settings.public.WechatAppId, Meteor.settings.public.WechatAppSecret);

const config = {
  token: Meteor.settings.public.WechatAppToken,
  appid: Meteor.settings.public.WechatAppId,
  checkSignature: true, // 可选，默认为true。由于微信公众平台接口调试工具在明文模式下不发送签名，所以如要使用该测试工具，请将其设置为false
};

export default function () {
  Meteor.startup(() => {
    WebApp.connectHandlers.use(cookieSession({
      httpOnly: false,
      signed: false,
      cookie: { maxAge: 30 * 24 * 60 * 60 * 1000 },
    }));

    // callback 地址需要做的就是传回通过code获取的openid，其他通过api去调用
    WebApp.connectHandlers.use('/callback', (req, res, next) => {
      if (req.session.openid) {
        next();
      } else {
        const code = req.query.code;
        client.getAccessToken(code, Meteor.bindEnvironment((err, result) => {
          if (err) throw new Meteor.Error('client-getAccessToken-err', err.toString());
          // TODO: save accessToken on globally
          // const accessToken = result.data.access_token;
          const openid = result.data.openid;
          req.session = { openid };
          res.writeHead(302, { 'Location': 'http://www.hiyingyang.com/home' });
          res.end();
        }));
      }
    });

    WebApp.connectHandlers.use('/wechat', wechat(config,
      wechat.text((message, req, res, next) => {
        res.reply('收到文字');
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
          res.reply('欢迎您使用碳氢氧膳食公众号，我们致力于为每一位用户定制属于您自己的膳食计划。根据您的身体数据与生活工作类型，我们有专业的营养师团队为您定制饮食结构');
        }
      }))
    ));
  });
}
