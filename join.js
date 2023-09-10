import plugin from '../../lib/plugins/plugin.js';
import { segment } from 'oicq';
import common from '../../lib/common/common.js';

const random_name = ["新人", "小萌新", "小可爱", "新来的"];

const random_reply = [
  "欢迎$$，来女个装吧",
  "$$别客气，把自己当群主就行了",
  "欢迎$$",
  "$$可以vivo50吗",
  "又来一位$$",
  "$$来贴贴",
  "你好呀$$",
  "$$别客气，群里的人都很和善（",
  "$$可以女装吗",
  "欢迎$$，可以唱个歌吗",
  "$$快跑，这个群很可怕",
  "$$玩原神吗",
  "$$快跑",
  "$$快来贴贴",
  "$$速速来和我贴贴",
  "$$快表演才艺",
  "$$可以表演才艺吗",
  "$$来讲个笑话",
  "$$快来戳我",
  "$$可以讲个笑话吗",
  "抱抱$$",
  "捕捉$$",
  "贴贴$$",
  "亲亲$$",
  "$$摸摸头",
  "$$叫姐姐",
  "为$$服务",
  "$$来和我玩MC",
  "$$来和我玩原神",
  "$$快跑，这是个原神群",
  "$$快来打个招呼",
  "戳戳$$",
  "$$快跑，你加错群了",
  "$$快跑，群里有恶魔",
  "$$来跳个舞",
  "$$来发个电",
  "$$来表演发电"
];

export class newcomer extends plugin {
  constructor() {
    super({
      name: '欢迎新人',
      dsc: '新人入群欢迎',
      event: 'notice.group.increase',
      priority: 233
    })
  }

  async accept(e) {
    console.log("message test");
    let gainType = e.sub_type
    if (gainType === 'increase') {
      const name_idx = Math.floor(Math.random() * random_name.length);
      const reply_idx = Math.floor(Math.random() * random_reply.length);
      let msg = ' ' + random_reply[reply_idx].replace("$$", random_name[name_idx]);

      try {
        await common.sleep(5000);

        await e.reply([
          segment.at(e.user_id),
          msg
        ])

      }
      catch (error) {
        e.reply(error.message);
      }

      return true;
    }
    return false;
  }
}