import wechat from './wechat';
import users from './users';
import policy from './policy';
import tips from './tips';
import plans from './plans';
import bodyData from './bodyDate';

export default function () {
  wechat();
  users();
  policy();
  tips();
  plans();
  bodyData();
}
