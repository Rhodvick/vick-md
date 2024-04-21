const {
  cmd,
  tlang,
  sleep
} = require("../lib");
cmd({
  'pattern': 'restart',
  'desc': "To restart bot",
  'category': "tools",
  'filename': __filename
}, async (_0x3b306c, _0xcd8bcf, _0x444925, {
  isCreator: _0xbbd16a
}) => {
  if (!_0xbbd16a) {
    return _0xcd8bcf.reply(tlang().owner);
  }
  const {
    exec: _0x49ed9b
  } = require("child_process");
  _0xcd8bcf.reply("Vick-Md is Restarting...");
  await sleep(0x7d0);
  _0x49ed9b("pm2 restart all");
});
