const os = require('os');
const moment = require("moment-timezone");
const Config = require("../config");
const Secktor = require('../lib/commands');
Secktor.cmd({
  'pattern': "help",
  'alias': ["menu"],
  'desc': "Help list",
  'category': 'core',
  'react': '📟',
  'filename': __filename
}, async (_0x1a17f7, _0x2a78e4, _0x4be1be) => {
  const {
    commands: _0x18c470
  } = require("../lib");
  if (_0x4be1be.split(" ")[0x0]) {
    let _0x4fd740 = [];
    const _0x1ebca0 = _0x18c470.find(_0x1ebdf6 => _0x1ebdf6.pattern === _0x4be1be.split(" ")[0x0].toLowerCase());
    if (!_0x1ebca0) {
      return await _0x2a78e4.reply("*❌No Such commands.*");
    } else {
      _0x4fd740.push("*🍁Command:* " + _0x1ebca0.pattern);
    }
    if (_0x1ebca0.category) {
      _0x4fd740.push("*🧩Category:* " + _0x1ebca0.category);
    }
    if (_0x1ebca0.alias) {
      _0x4fd740.push("*🧩Alias:* " + _0x1ebca0.alias);
    }
    if (_0x1ebca0.desc) {
      _0x4fd740.push("*🧩Description:* " + _0x1ebca0.desc);
    }
    if (_0x1ebca0.use) {
      _0x4fd740.push("*〽️Usage:*\n ```" + prefix + _0x1ebca0.pattern + " " + _0x1ebca0.use + "```");
    }
    return await _0x2a78e4.reply(_0x4fd740.join("\n"));
  } else {
    const _0x775940 = {};
    _0x18c470.map(async (_0x261bed, _0x5ad2c4) => {
      if (_0x261bed.dontAddCommandList === false && _0x261bed.pattern !== undefined) {
        if (!_0x775940[_0x261bed.category]) {
          _0x775940[_0x261bed.category] = [];
        }
        _0x775940[_0x261bed.category].push(_0x261bed.pattern);
      }
    });
    moment.tz.setDefault("Africa/Nairobi").locale('id');
    const _0x52eda0 = moment.tz("Africa/Nairobi").format("DD/MM/YYYY");
    let _0x4df824 = "┎───═❮ *" + Config.botname + "* ❯═──⊷❍\n";
    _0x4df824 += "```" + ("┃❖╭──────────────◆\n\n┃❖┃ 𝙋𝙡𝙪𝙜𝙞𝙣𝙨: " + _0x18c470.length + "\n\n┃❖┃ 𝙐𝙨𝙚𝙧: " + _0x2a78e4.pushName + "\n\n┃❖┃ 𝙊𝙬𝙣𝙚𝙧: " + Config.ownername + "\n\n┃❖┃ 𝙋𝙧𝙚𝙛𝙞𝙭: [ " + prefix + " ]\n\n┃❖┃ 𝙈𝙚𝙢: " + formatp(os.totalmem() - os.freemem()) + '/' + formatp(os.totalmem()) + "\n\n┃❖┃ 𝘿𝙖𝙩𝙚: " + _0x52eda0 + "\n\n┃❖┃ 𝙈𝙤𝙙𝙚: " + Config.WORKTYPE + "\n\n┃❖┃ 𝙋𝙡𝙖𝙩𝙚𝙛𝙤𝙧𝙢: King•Linux\n\n┃❖┃ 𝙑𝙚𝙧𝙨𝙞𝙤𝙣: 1.2.1\n\n┃❖┃ \n\n┃❖┃ ✦ ▍▌▌▉▏▎▌▉▐▏▌✦\n\n┃❖┃ ✦ ▍▌▌▉▏▎▌▉▐▏▌✦\n\n┃❖┃ \n\n┃❖┃ © 𝘽𝙮: " + Config.ownername + "\n\n┃❖╰━═━═━═━═━━━───◆\n\n╰━━━━═━═━═━═──⊷◆\n\n\n") + "```";
    for (const _0x21a004 in _0x775940) {
      _0x4df824 += "┎━═══{ *" + tiny(_0x21a004) + "* }═══━⊷❍\n┃✯╭────────────···▸\n┻✯│\n";
      if (_0x4be1be.toLowerCase() == _0x21a004.toLowerCase()) {
        _0x4df824 = "┎━═══{ *" + tiny(_0x21a004) + "* }═══━⊷❍\n┃✯╭────────────···▸\n┻✯│\n";
        for (const _0x424507 of _0x775940[_0x21a004]) {
          _0x4df824 += "│✯│◦➛ " + fancytext(_0x424507, 0x1) + "\n";
        }
        _0x4df824 += "┳✯│\n┃✯╰────────────···▸\n╰━═════════════━⊷❍\n";
        break;
      } else {
        for (const _0x2e54c4 of _0x775940[_0x21a004]) {
          _0x4df824 += "│✯│◦➛ " + fancytext(_0x2e54c4, 0x1) + "\n";
        }
        _0x4df824 += "┳✯│\n┃✯╰────────────···▸\n╰━═════════════━⊷❍\n";
      }
    }
    _0x4df824 += "🔥 VICK-MD *_MULTI DEVICE_*🎯";
    let _0x277340 = {
      'image': {
        'url': THUMB_IMAGE
      },
      'caption': _0x4df824
    };
    return await _0x1a17f7.sendMessage(_0x2a78e4.chat, _0x277340);
  }
});
Secktor.cmd({
  'pattern': "owner",
  'desc': "To find owner number",
  'category': "core",
  'react': '💜',
  'filename': __filename
}, async (_0xdb4250, _0xbb958b) => {
  const _0x3de5a0 = require("../config");
  const _0x1bde10 = "BEGIN:VCARD\nVERSION:3.0\nFN:" + _0x3de5a0.ownername + "\n" + "ORG:;\n" + "TEL;type=CELL;type=VOICE;waid=" + owner[0x0] + ':+' + owner[0x0] + "\n" + "END:VCARD";
  let _0x5797b9 = {
    'contacts': {
      'displayName': _0x3de5a0.ownername,
      'contacts': [{
        'vcard': _0x1bde10
      }]
    },
    'contextInfo': {
      'externalAdReply': {
        'title': _0x3de5a0.ownername,
        'body': "Touch here.",
        'renderLargerThumbnail': true,
        'thumbnailUrl': '',
        'thumbnail': log0,
        'mediaType': 0x2,
        'mediaUrl': '',
        'sourceUrl': "https://wa.me/+" + owner[0x0] + "?text=Hii bro,I am " + _0xbb958b.pushName
      }
    }
  };
  return await _0xdb4250.sendMessage(_0xbb958b.chat, _0x5797b9, {
    'quoted': _0xbb958b
  });
});
Secktor.cmd({
  'pattern': "core",
  'desc': "to get extact name where that command is in repo.\nSo user can edit that.",
  'category': 'general',
  'react': '✨',
  'filename': __filename
}, async (_0x26349f, _0x32296b, _0xfd22d0) => {
  const {
    commands: _0x42c3b4
  } = require("../lib");
  let _0x528be2 = [];
  const _0x57f16c = _0x42c3b4.find(_0x44fa12 => _0x44fa12.pattern === _0xfd22d0.split(" ")[0x0].toLowerCase());
  if (!_0x57f16c) {
    return await _0x32296b.reply("*❌No Such commands.*");
  } else {
    _0x528be2.push("*🍁Command:* " + _0x57f16c.pattern);
  }
  if (_0x57f16c.category) {
    _0x528be2.push("*🧩Type:* " + _0x57f16c.category);
  }
  if (_0x57f16c.filename) {
    _0x528be2.push("✨FileName: " + _0x57f16c.filename);
  }
  return _0x32296b.reply(_0x528be2.join("\n"));
});
