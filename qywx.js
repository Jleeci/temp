const $ = new Env("测试消息发送");
const notify = $.isNode() ? require("./sendNotify") : "";
const Notify = 1 		//0为关闭通知，1为打开通知,默认为1
// ============================================发送消息============================================ \\

async function SendMsg(message) {
    if (!message) return;

    if (Notify > 0) {
        if ($.isNode()) {
            var notify = require("./sendNotify");
            await notify.sendNotify($.name, message);
        } else {
            $.msg(message);
        }
    } else {
        console.log(message);
    }
}

SendMsg('123123')


