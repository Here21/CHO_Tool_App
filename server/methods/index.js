import wechat from './wechat';
import users from './users';
import policy from './policy';
import tips from './tips';
import plans from './plans';

export default function () {
  wechat();
  users();
  policy();
  tips();
  plans();
}
