const eco = require('discord-mongoose-economy');
cmd({
  'pattern': "delttt",
  'desc': "deletes TicTacToe running session.",
  'filename': __filename,
  'category': "game"
}, async (_0x3ea330, _0x9e56ad, _0x36e874, {
  isCreator: _0x28e889
}) => {
  if (!_0x9e56ad.isGroup) {
    return _0x9e56ad.reply(tlang().group);
  }
  const _0x334256 = await getAdmin(_0x3ea330, _0x9e56ad);
  const _0x4056da = _0x9e56ad.isGroup ? _0x334256.includes(_0x9e56ad.sender) : false;
  if (!_0x4056da && !_0x28e889) {
    return _0x9e56ad.reply("This command is only for Group Admin and my owner.");
  }
  this.game = this.game ? this.game : false;
  return Object.values(this.game).find(_0x262d02 => _0x262d02.id.startsWith("tictactoe")) ? (delete this.game, _0x9e56ad.reply("_Successfully Deleted running TicTacToe game._")) : _0x9e56ad.reply("No TicTacToe game🎮 is running.");
});
cmd({
  'pattern': "ttt",
  'desc': "Play TicTacToe",
  'filename': __filename,
  'category': "game"
}, async (_0x3e8050, _0x217151, _0x339204) => {
  if (!_0x217151.isGroup) {
    return _0x217151.reply(tlang().group);
  }
  {
    let _0x3a70d7 = require("../lib/ttt");
    this.game = this.game ? this.game : {};
    if (Object.values(this.game).find(_0x4f9465 => _0x4f9465.id.startsWith("tictactoe") && [_0x4f9465.game.playerX, _0x4f9465.game.playerO].includes(_0x217151.sender))) {
      return _0x217151.reply("_A game is already going on_");
    }
    let _0x2ccc2e = Object.values(this.game).find(_0x5b813e => _0x5b813e.state === "WAITING" && (_0x339204 ? _0x5b813e.name === _0x339204 : true));
    if (_0x2ccc2e) {
      _0x2ccc2e.o = _0x217151.chat;
      _0x2ccc2e.game.playerO = _0x217151.sender || _0x217151.mentionedJid[0x0];
      _0x2ccc2e.state = 'PLAYING';
      let _0x27de99 = _0x2ccc2e.game.render().map(_0x29216b => {
        return {
          'X': '❌',
          'O': '⭕',
          0x1: "1️⃣",
          0x2: '2️⃣',
          0x3: "3️⃣",
          0x4: "4️⃣",
          0x5: "5️⃣",
          0x6: '6️⃣',
          0x7: '7️⃣',
          0x8: "8️⃣",
          0x9: "9️⃣"
        }[_0x29216b];
      });
      let _0x3a977d = "\nCurrent turn: @" + _0x2ccc2e.game.currentTurn.split('@')[0x0] + "\nRoom ID: " + _0x2ccc2e.id + "\n" + _0x27de99.slice(0x0, 0x3).join("  ") + "\n" + _0x27de99.slice(0x3, 0x6).join("  ") + "\n" + _0x27de99.slice(0x6).join("  ") + "\n";
      return await _0x3e8050.sendMessage(_0x217151.chat, {
        'text': _0x3a977d,
        'mentions': [_0x2ccc2e.game.currentTurn]
      });
    } else {
      _0x2ccc2e = {
        'id': "tictactoe-" + +new Date(),
        'x': _0x217151.chat,
        'o': '',
        'game': new _0x3a70d7(_0x217151.sender, 'o'),
        'state': "WAITING"
      };
      if (_0x339204) {
        _0x2ccc2e.name = _0x339204;
      }
      _0x217151.reply("_Waiting for player,use /ttt to join this game._ ");
      this.game[_0x2ccc2e.id] = _0x2ccc2e;
    }
  }
});
cmd({
  'on': "text"
}, async (_0x567b50, _0x1104a6, _0x21c671) => {
  if (!_0x1104a6.isGroup) {
    return;
  }
  this.game = this.game ? this.game : {};
  let _0x40c655 = Object.values(this.game).find(_0x4ce5d5 => _0x4ce5d5.id && _0x4ce5d5.game && _0x4ce5d5.state && _0x4ce5d5.id.startsWith("tictactoe") && [_0x4ce5d5.game.playerX, _0x4ce5d5.game.playerO].includes(_0x1104a6.sender) && _0x4ce5d5.state == "PLAYING");
  if (_0x40c655) {
    let _0x35666a;
    let _0x976df1 = false;
    let _0x5ba755 = false;
    let _0x517756 = false;
    if (!/^([1-9]|(me)?give_up|surr?ender|off|skip)$/i.test(_0x1104a6.text)) {
      return;
    }
    _0x517756 = !/^[1-9]$/.test(_0x1104a6.text);
    if (_0x1104a6.sender !== _0x40c655.game.currentTurn) {
      if (!_0x517756) {
        return true;
      }
    }
    if (!_0x517756 && 0x1 > (_0x35666a = _0x40c655.game.turn(_0x1104a6.sender === _0x40c655.game.playerO, parseInt(_0x1104a6.text) - 0x1))) {
      _0x1104a6.reply({
        '-3': "The game is over.",
        '-2': "Invalid",
        '-1': "_Invalid Position_",
        0x0: "_Invalid Position_"
      }[_0x35666a]);
      return true;
    }
    if (_0x1104a6.sender === _0x40c655.game.winner) {
      _0x976df1 = true;
    } else {
      if (_0x40c655.game.board === 0x1ff) {
        _0x5ba755 = true;
      }
    }
    let _0x9161c2 = _0x40c655.game.render().map(_0x3b1539 => {
      return {
        'X': '❌',
        'O': '⭕',
        0x1: "1️⃣",
        0x2: "2️⃣",
        0x3: "3️⃣",
        0x4: '4️⃣',
        0x5: "5️⃣",
        0x6: '6️⃣',
        0x7: '7️⃣',
        0x8: "8️⃣",
        0x9: "9️⃣"
      }[_0x3b1539];
    });
    if (_0x517756) {
      _0x40c655.game._currentTurn = _0x1104a6.sender === _0x40c655.game.playerX;
      _0x976df1 = true;
    }
    let _0x2639cc = _0x517756 ? _0x40c655.game.currentTurn : _0x40c655.game.winner;
    let _0x3c9c9e = "Room ID: " + _0x40c655.id + "\n      \n" + _0x9161c2.slice(0x0, 0x3).join("  ") + "\n" + _0x9161c2.slice(0x3, 0x6).join("  ") + "\n" + _0x9161c2.slice(0x6).join("  ") + "\n" + (_0x976df1 ? '@' + _0x2639cc.split('@')[0x0] + " Won ! and got 2000💎 in wallet🤑" : _0x5ba755 ? "Game Tied,well done to both of you players." : "Current Turn " + ['❌', '⭕'][0x1 * _0x40c655.game._currentTurn] + " @" + _0x40c655.game.currentTurn.split('@')[0x0]) + "\n⭕:- @" + _0x40c655.game.playerO.split('@')[0x0] + "\n❌:- @" + _0x40c655.game.playerX.split('@')[0x0];
    if ((_0x40c655.game._currentTurn ^ _0x517756 ? _0x40c655.x : _0x40c655.o) !== _0x1104a6.chat) {
      _0x40c655[_0x40c655.game._currentTurn ^ _0x517756 ? 'x' : 'o'] = _0x1104a6.chat;
    }
    if (_0x976df1) {
      await eco.give(_0x1104a6.sender, "secktor", 0x7d0);
    }
    if (_0x976df1 || _0x5ba755) {
      await _0x567b50.sendMessage(_0x1104a6.chat, {
        'text': _0x3c9c9e,
        'mentions': [_0x40c655.game.playerO, _0x40c655.game.playerX]
      });
    } else {
      await _0x567b50.sendMessage(_0x1104a6.chat, {
        'text': _0x3c9c9e,
        'mentions': [_0x40c655.game.playerO, _0x40c655.game.playerX]
      });
    }
    if (_0x5ba755 || _0x976df1) {
      delete this.game[_0x40c655.id];
    }
  }
});
cmd({
  'pattern': 'ship',
  'category': "fun"
}, async (_0x45e32a, _0x5ac9fb, _0x47ecd1) => {
  const {
    tlang: _0x384348
  } = require("../lib");
  if (!_0x5ac9fb.isGroup) {
    return _0x5ac9fb.reply(_0x384348().group);
  }
  const _0x421f65 = _0x5ac9fb.isGroup ? await _0x45e32a.groupMetadata(_0x5ac9fb.chat)["catch"](_0xf55519 => {}) : '';
  const _0x1c8a57 = _0x5ac9fb.isGroup ? await _0x421f65.participants : '';
  let _0x1fd152 = _0x1c8a57.map(_0x23a8a1 => _0x23a8a1.id);
  const _0x38f176 = Math.floor(Math.random() * 0x64);
  async function _0x438cc2(_0x217d3c) {
    var _0x10bf16;
    if (_0x217d3c < 0x19) {
      _0x10bf16 = "\t\t\t\t\t*ShipCent : " + _0x38f176 + "%* \n\t\tThere's still time to reconsider your choices";
    } else {
      if (_0x217d3c < 0x32) {
        _0x10bf16 = "\t\t\t\t\t*ShipCent : " + _0x38f176 + "%* \n\t\t Good enough, I guess! 💫";
      } else {
        if (_0x217d3c < 0x4b) {
          _0x10bf16 = "\t\t\t\t\t*ShipCent : " + _0x38f176 + "%* \n\t\t\tStay together and you'll find a way ⭐️";
        } else if (_0x217d3c < 0x5a) {
          _0x10bf16 = "\t\t\t\t\t*ShipCent : " + _0x38f176 + "%* \n\tAmazing! You two will be a good couple 💖 ";
        } else {
          _0x10bf16 = "\t\t\t\t\t*ShipCent : " + _0x38f176 + "%* \n\tYou two are fated to be together 💙";
        }
      }
    }
    return _0x10bf16;
  }
  var _0x1c8969 = _0x5ac9fb.mentionedJid ? _0x5ac9fb.mentionedJid[0x0] : _0x5ac9fb.msg.contextInfo.participant || false;
  var _0x224ba8;
  if (_0x1c8969) {
    _0x224ba8 = _0x1c8969;
  } else {
    _0x224ba8 = _0x1fd152[Math.floor(Math.random() * _0x1fd152.length)];
  }
  let _0x166821 = "\t❣️ *Matchmaking...* ❣️ \n";
  _0x166821 += "\t\t✯────────────────────✯\n";
  _0x166821 += '@' + _0x5ac9fb.sender.split('@')[0x0] + "  x  @" + _0x224ba8.split('@')[0x0] + "\n";
  _0x166821 += "\t\t✯────────────────────✯\n";
  _0x166821 += await _0x438cc2(_0x38f176);
  if (_0x5ac9fb.sender.split('@')[0x0] === _0x224ba8.split('@')[0x0]) {
    return _0x5ac9fb.reply("```Wait... What!!!,You wanna do matchmaking with yourself```");
  }
  await _0x45e32a.sendMessage(_0x5ac9fb.chat, {
    'text': _0x166821,
    'mentions': [_0x5ac9fb.sender, _0x224ba8]
  }, {
    'quoted': _0x5ac9fb
  });
});
