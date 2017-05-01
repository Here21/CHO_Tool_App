import { Meteor } from 'meteor/meteor';
import { BrowserPolicy } from 'meteor/browser-policy-common';

export default function () {
  Meteor.startup(() => {
    BrowserPolicy.content.allowImageOrigin('op99wrlxr.bkt.clouddn.com');
    // BrowserPolicy.content.allowScriptOrigin('*');
    BrowserPolicy.content.allowScriptOrigin('g.tbcdn.cn/');
    BrowserPolicy.content.allowImageOrigin('wx.qlogo.cn');
    BrowserPolicy.content.allowDataUrlForAll();
  });
}
