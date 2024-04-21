const {
  cmd
} = require("../lib");
cmd({
  'pattern': 'insta',
  'desc': "download instagram post.",
  'category': 'downloader',
  'filename': __filename
}, async (_0x4df74a, _0x1629c9, _0x29987b, {
  isCreator: _0x5c82e0
}) => {
  const {
    Insta: _0xc8c183
  } = require("../lib");
  if (!_0x29987b) {
    return _0x1629c9.reply("Need post url.");
  }
  let _0x662553 = await _0xc8c183(_0x29987b);
  for (let _0x2c2e32 = 0x0; _0x2c2e32 < _0x662553.length; _0x2c2e32++) {
    await _0x4df74a.sendFileUrl(_0x1629c9.chat, _0x662553[_0x2c2e32], "*Downloaded Media from instagram.*", _0x1629c9);
  }
});
