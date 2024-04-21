const Config = require("../config");
const axios = require("axios");
const fetch = require('node-fetch');
cmd({
  'pattern': "poke",
  'category': "reaction",
  'use': '<quote|reply|tag>'
}, async (_0x5f4d64, _0x1ac94a) => {
  var _0x14686e = await fetchJson("https://api.waifu.pics/sfw/poke");
  const _0x33ff6e = await axios.get(_0x14686e.url, {
    'responseType': "arraybuffer"
  });
  const _0x840163 = Buffer.from(_0x33ff6e.data, "utf-8");
  let _0x59f45a = _0x1ac94a.mentionedJid ? _0x1ac94a.mentionedJid[0x0] : _0x1ac94a.msg.contextInfo.participant || false;
  let _0x5be1b6 = await GIFBufferToVideoBuffer(_0x840163);
  if (_0x59f45a) {
    let _0x152a90 = '@' + _0x1ac94a.sender.split('@')[0x0] + " poked to @" + _0x59f45a.split('@')[0x0] + " ";
    _0x5f4d64.sendMessage(_0x1ac94a.chat, {
      'video': _0x5be1b6,
      'gifPlayback': true,
      'mentions': [_0x59f45a, _0x1ac94a.sender],
      'caption': _0x152a90
    }, {
      'quoted': _0x1ac94a
    });
  } else {
    let _0xa2fa05 = '@' + _0x1ac94a.sender.split('@')[0x0] + " poked to everyone. ";
    _0x5f4d64.sendMessage(_0x1ac94a.chat, {
      'video': _0x5be1b6,
      'gifPlayback': true,
      'mentions': [_0x1ac94a.sender],
      'caption': _0xa2fa05
    }, {
      'quoted': _0x1ac94a
    });
  }
});
cmd({
  'pattern': "hug",
  'category': "reaction",
  'use': "<quote|reply|tag>"
}, async (_0x388321, _0x969162) => {
  var _0x4bca38 = await fetchJson("https://api.waifu.pics/sfw/hug");
  const _0x4f7015 = await axios.get(_0x4bca38.url, {
    'responseType': "arraybuffer"
  });
  const _0x5bf9d0 = Buffer.from(_0x4f7015.data, 'utf-8');
  let _0x3be673 = _0x969162.mentionedJid ? _0x969162.mentionedJid[0x0] : _0x969162.msg.contextInfo.participant || false;
  let _0x295d29 = await GIFBufferToVideoBuffer(_0x5bf9d0);
  if (_0x3be673) {
    let _0xf0d0c1 = '@' + _0x969162.sender.split('@')[0x0] + " hug to @" + _0x3be673.split('@')[0x0] + " ";
    _0x388321.sendMessage(_0x969162.chat, {
      'video': _0x295d29,
      'gifPlayback': true,
      'mentions': [_0x3be673, _0x969162.sender],
      'caption': _0xf0d0c1
    }, {
      'quoted': _0x969162
    });
  } else {
    let _0x483dba = '@' + _0x969162.sender.split('@')[0x0] + " huged to everyone. ";
    _0x388321.sendMessage(_0x969162.chat, {
      'video': _0x295d29,
      'gifPlayback': true,
      'mentions': [_0x969162.sender],
      'caption': _0x483dba
    }, {
      'quoted': _0x969162
    });
  }
});
cmd({
  'pattern': "hold",
  'category': 'reaction',
  'use': "<quote|reply|tag>"
}, async (_0x28ff40, _0x1ecc70) => {
  var _0x8e25c0 = await fetchJson("https://api.waifu.pics/sfw/handhold");
  const _0x24b444 = await axios.get(_0x8e25c0.url, {
    'responseType': 'arraybuffer'
  });
  const _0x19ffd5 = Buffer.from(_0x24b444.data, 'utf-8');
  let _0x143787 = _0x1ecc70.mentionedJid ? _0x1ecc70.mentionedJid[0x0] : _0x1ecc70.msg.contextInfo.participant || false;
  let _0x702960 = await GIFBufferToVideoBuffer(_0x19ffd5);
  if (_0x143787) {
    let _0x774ea3 = '@' + _0x1ecc70.sender.split('@')[0x0] + " hold hand of @" + _0x143787.split('@')[0x0] + " ";
    _0x28ff40.sendMessage(_0x1ecc70.chat, {
      'video': _0x702960,
      'gifPlayback': true,
      'mentions': [_0x143787, _0x1ecc70.sender],
      'caption': _0x774ea3
    }, {
      'quoted': _0x1ecc70
    });
  } else {
    let _0x922e2d = '@' + _0x1ecc70.sender.split('@')[0x0] + " holed to everyone. ";
    _0x28ff40.sendMessage(_0x1ecc70.chat, {
      'video': _0x702960,
      'gifPlayback': true,
      'mentions': [_0x1ecc70.sender],
      'caption': _0x922e2d
    }, {
      'quoted': _0x1ecc70
    });
  }
});
cmd({
  'pattern': "hifi",
  'category': "reaction",
  'use': "<quote|reply|tag>"
}, async (_0x18dc62, _0x59b751) => {
  var _0x58410a = await fetchJson("https://api.waifu.pics/sfw/highfive");
  const _0x3f3705 = await axios.get(_0x58410a.url, {
    'responseType': "arraybuffer"
  });
  const _0x2a96ad = Buffer.from(_0x3f3705.data, 'utf-8');
  let _0x43d082 = _0x59b751.mentionedJid ? _0x59b751.mentionedJid[0x0] : _0x59b751.msg.contextInfo.participant || false;
  let _0x20b457 = await GIFBufferToVideoBuffer(_0x2a96ad);
  if (_0x43d082) {
    let _0x246c17 = '@' + _0x59b751.sender.split('@')[0x0] + " highfive with @" + _0x43d082.split('@')[0x0] + " ";
    _0x18dc62.sendMessage(_0x59b751.chat, {
      'video': _0x20b457,
      'gifPlayback': true,
      'mentions': [_0x43d082, _0x59b751.sender],
      'caption': _0x246c17
    }, {
      'quoted': _0x59b751
    });
  } else {
    let _0x368b03 = '@' + _0x59b751.sender.split('@')[0x0] + " highfived with everyone. ";
    _0x18dc62.sendMessage(_0x59b751.chat, {
      'video': _0x20b457,
      'gifPlayback': true,
      'mentions': [_0x59b751.sender],
      'caption': _0x368b03
    }, {
      'quoted': _0x59b751
    });
  }
});
cmd({
  'pattern': "waifu",
  'desc': "To get Waifu Random Pics",
  'category': "Anime Pics",
  'filename': __filename
}, async (_0x1f3286, _0x51d5cb, _0x1453fc) => {
  let _0xf75e3a = _0x1453fc.split('|')[0x0] || '';
  let _0x2eec10 = _0x1453fc.split('|')[0x1] || '1';
  let _0x306449 = _0x1453fc.split('|')[0x1] ? '' : "---Waifu Pics Here---";
  for (let _0x5b72f7 = 0x0; _0x5b72f7 < _0x2eec10; _0x5b72f7++) {
    let _0x45a875;
    if (_0xf75e3a == "nsfw") {
      _0x45a875 = await fetch("https://api.waifu.pics/nsfw/waifu");
    } else {
      _0x45a875 = await fetch("https://api.waifu.pics/sfw/waifu");
    }
    const _0x1a6d89 = await _0x45a875.json();
    let _0x41c5d2 = {
      'image': {
        'url': _0x1a6d89.url
      },
      'caption': _0x306449,
      'headerType': 0x1
    };
    await _0x1f3286.sendMessage(_0x51d5cb.chat, _0x41c5d2, {
      'quoted': _0x51d5cb
    });
  }
});
cmd({
  'pattern': "naruto",
  'desc': "To get Naruto Random Videos",
  'category': "Anime Pics",
  'filename': __filename
}, async (_0x4b496e, _0x50eaf8, _0x39ee43) => {
  let _0xf6a0d1 = await axios.get("https://raw.githubusercontent.com/mask-sir/api.mask-ser/main/Naruto.json");
  let _0x71d32e = _0xf6a0d1.data.result[Math.floor(Math.random() * _0xf6a0d1.data.result.length)];
  return await _0x4b496e.sendMessage(_0x50eaf8.chat, {
    'video': {
      'url': _0x71d32e
    },
    'caption': Config.caption
  }, {
    'quoted': _0x50eaf8
  });
});
cmd({
  'pattern': "neko",
  'category': "Anime Pics",
  'desc': "Sends a Neko Image in chat",
  'filename': __filename
}, async (_0x11774e, _0x32879b, _0xe406cb) => {
  let _0x2d653b = _0xe406cb.split('|')[0x0] || '';
  let _0x5871d4 = _0xe406cb.split('|')[0x1] || '1';
  let _0x46f26b = _0xe406cb.split('|')[0x1] ? '' : "Here we go😊!!!!";
  for (let _0x548c06 = 0x0; _0x548c06 < _0x5871d4; _0x548c06++) {
    let _0x2ea627;
    if (_0x2d653b == "nsfw") {
      _0x2ea627 = await fetch("https://waifu.pics/api/nsfw/neko");
    } else {
      _0x2ea627 = await fetch('https://waifu.pics/api/sfw/neko');
    }
    const _0x123a70 = await _0x2ea627.json();
    let _0x1318e6 = {
      'image': {
        'url': _0x123a70.url
      },
      'caption': _0x46f26b,
      'headerType': 0x1
    };
    await _0x11774e.sendMessage(_0x32879b.chat, _0x1318e6, {
      'quoted': _0x32879b
    });
  }
});
cmd({
  'pattern': "foxgirl",
  'category': "Anime Pics",
  'desc': "Sends image of Fox Girl in current chat.",
  'filename': __filename
}, async (_0x1455db, _0x1a9c74, _0x1f7ba8) => {
  let _0x1aea19 = await axios.get("https://nekos.life/api/v2/img/fox_girl");
  await _0x1455db.sendMessage(_0x1a9c74.chat, {
    'image': {
      'url': _0x1aea19.data.url
    }
  }, {
    'quoted': _0x1a9c74
  });
});
cmd({
  'pattern': "animenews",
  'category': "Anime Pics",
  'desc': "Sends Anime News in chat",
  'filename': __filename
}, async (_0x540563, _0x46e5e1, _0x38cdf7) => {
  let _0x3a4cb3 = ["Anime News Today", "New Anime", "Uocoming Anime News", "New Anime Info", "Whats news in Anime", "Anime Series", "Manga News today", "Anime New News", "Anime News today"];
  let _0x3c149f = _0x3a4cb3[Math.floor(Math.random() * _0x3a4cb3.length)];
  let _0x4323c8 = "https://newsapi.org/v2/everything?q=" + _0x3c149f + '&domains=techcrunch.com,animenewsnetwork.com,myanimelist.net,comingsoon.net,crunchyroll.com&language=en&sortby=publishedat&apikey=cd4116be09ef4a0caceedf21b6258460&pageSize=8';
  const _0x4f1609 = await axios.get(_0x4323c8);
  let _0x57b577 = await _0x4f1609;
  _0x57b577 = _0x57b577.data.articles;
  _0x57b577.map(async (_0x58e4c9, _0x368d0e) => {
    _0x540563.sendMessage(_0x46e5e1.chat, {
      'image': {
        'url': _0x58e4c9.urlToImage
      },
      'caption': "*Title🔰:* " + _0x58e4c9.title + "\n\n*Content🧩:* " + _0x58e4c9.content + "\n*Author📌:* " + _0x58e4c9.author + "\n*Source♦️:* " + _0x58e4c9.source.name + "\n*Created On☘️:* " + _0x58e4c9.publishedAt + "\n*More on✨:* " + _0x58e4c9.url + "\n\n*Powered by " + tlang().title + '*'
    }, {
      'quoted': _0x46e5e1
    });
  });
});
cmd({
  'pattern': 'loli',
  'category': "Anime Pics",
  'filename': __filename,
  'desc': "Sends image of loli in current chat."
}, async (_0x1a0886, _0x1d2890, _0x47fb74) => {
  waifud = await axios.get("https://waifu.pics/api/sfw/shinobu");
  await _0x1a0886.sendMessage(_0x1d2890.chat, {
    'image': {
      'url': waifud.data.url
    }
  }, {
    'quoted': _0x1d2890
  });
});
cmd({
  'pattern': "pokemon",
  'category': "Anime Pics",
  'filename': __filename,
  'desc': "Sends info of pokemon in current chat."
}, async (_0x3f98f6, _0x12049f, _0x27da50) => {
  if (!_0x27da50) {
    return _0x12049f.reply("```Uhh Please Give Me Poki Name```");
  }
  try {
    let {
      data: _0x3f8fda
    } = await axios.get('https://pokeapi.co/api/v2/pokemon/' + _0x27da50);
    if (!_0x3f8fda.name) {
      return _0x12049f.reply("❌ Could not found any pokemon with that name");
    }
    let _0x5ac4e = "*•Name: " + _0x3f8fda.name + "*\n*•Pokedex ID: " + _0x3f8fda.id + "*\n*•Height: " + _0x3f8fda.height + "*\n*•Weight: " + _0x3f8fda.weight + "*\n*•Abilities: " + _0x3f8fda.abilities[0x0].ability.name + ", " + _0x3f8fda.abilities[0x1].ability.name + "*\n*•Base Experience: " + _0x3f8fda.base_experience + "*\n*•Type: " + _0x3f8fda.types[0x0].type.name + "*\n*•Base Stat: " + _0x3f8fda.stats[0x0].base_stat + "*\n*•Attack: " + _0x3f8fda.stats[0x1].base_stat + "*\n*•Defense: " + _0x3f8fda.stats[0x2].base_stat + "*\n*•Special Attack: " + _0x3f8fda.stats[0x3].base_stat + "*\n*•Special Defense:" + _0x3f8fda.stats[0x4].base_stat + "*\n*•Speed: " + _0x3f8fda.stats[0x5].base_stat + "*\n";
    _0x3f98f6.sendMessage(_0x12049f.chat, {
      'image': {
        'url': _0x3f8fda.sprites.front_default
      },
      'caption': _0x5ac4e
    }, {
      'quoted': _0x12049f
    });
  } catch (_0x1015d8) {
    _0x12049f.reply("Ahh,Couldn't found any pokemon.");
  }
});
cmd({
  'pattern': "manga",
  'category': "Anime Pics",
  'filename': __filename,
  'desc': "Sends info about asked manga."
}, async (_0x2d6d8f, _0x2eebec, _0x2654d1) => {
  const {
    Manga: _0x180f0a
  } = require('@shineiichijo/marika');
  const _0x234394 = new _0x180f0a();
  if (!_0x2654d1) {
    return _0x2eebec.reply("Which Manga do you want to Search? \n _Please give me a name._");
  }
  let _0x54184a = await _0x234394.searchManga(_0x2654d1);
  let _0x2dd5bc = "*🎀Title: " + _0x54184a.data[0x0].title + "*\n";
  _0x2dd5bc += "*📈Status: " + _0x54184a.data[0x0].status + "*\n";
  _0x2dd5bc += "*🌸Total Volumes: " + _0x54184a.data[0x0].volumes + "*\n";
  _0x2dd5bc += "*🎗Total Chapters: " + _0x54184a.data[0x0].chapters + "*\n";
  _0x2dd5bc += "*🧧Genres:*\n";
  for (let _0x57480a = 0x0; _0x57480a < _0x54184a.data[0x0].genres.length; _0x57480a++) {
    _0x2dd5bc += "\t\t\t\t\t\t\t\t*" + _0x54184a.data[0x0].genres[_0x57480a].name + "*\n";
  }
  _0x2dd5bc += "*✨Published on: " + _0x54184a.data[0x0].published.from + "*\n";
  _0x2dd5bc += "*🌟Score: " + _0x54184a.data[0x0].scored + "*\n";
  _0x2dd5bc += "*🎐Popularity: " + _0x54184a.data[0x0].popularity + "*\n";
  _0x2dd5bc += "*🎏Favorites: " + _0x54184a.data[0x0].favorites + "*\n";
  _0x2dd5bc += "*✍Authors:*\n";
  for (let _0x1338a4 = 0x0; _0x1338a4 < _0x54184a.data[0x0].authors.length; _0x1338a4++) {
    _0x2dd5bc += "\t\t\t\t\t\t\t\t\t*" + _0x54184a.data[0x0].authors[_0x1338a4].name + "* *(" + _0x54184a.data[0x0].authors[0x0].type + ")*\n";
  }
  _0x2dd5bc += "\n*🌐URL: " + _0x54184a.data[0x0].url + "*\n\n";
  if (_0x54184a.data[0x0].background !== null) {
    _0x2dd5bc += "*🎆Background:* " + _0x54184a.data[0x0].background;
  }
  _0x2dd5bc += "*❄️Description:* " + _0x54184a.data[0x0].synopsis;
  _0x2d6d8f.sendMessage(_0x2eebec.chat, {
    'image': {
      'url': _0x54184a.data[0x0].images.jpg.large_image_url
    },
    'caption': _0x2dd5bc
  }, {
    'quoted': _0x2eebec
  });
});
cmd({
  'pattern': 'anime',
  'category': "Anime Pics",
  'desc': "Searches Info about Anime and Provides result."
}, async (_0x2fd16f, _0x2603d5, _0x15c67f) => {
  const _0x43a419 = new Anime();
  if (!_0x15c67f) {
    return _0x2603d5.reply("Which Anime do you want to search?\n _Please give me a name._");
  }
  let _0x1f4b3d = await _0x43a419.searchAnime(_0x15c67f);
  let _0x1d28f1 = _0x1f4b3d.data[0x0];
  let _0x2619d1 = "🎀Title: " + _0x1d28f1.title + "\n";
  _0x2619d1 += "🎋Format: " + _0x1d28f1.type + "\n";
  _0x2619d1 += "*📈Status: " + _0x1d28f1.status.toUpperCase().replace(/\_/g, " ") + "*\n";
  _0x2619d1 += "🍥Total episodes: " + _0x1d28f1.episodes + "\n";
  _0x2619d1 += "🎈Duration: " + _0x1d28f1.duration + "\n";
  _0x2619d1 += "🧧Genres:\n";
  for (let _0x45af62 = 0x0; _0x45af62 < _0x1d28f1.genres.length; _0x45af62++) {
    _0x2619d1 += "\t\t\t\t\t\t\t\t*" + _0x1d28f1.genres[_0x45af62].name + "*\n";
  }
  _0x2619d1 += "✨Based on: " + _0x1d28f1.source.toUpperCase() + "\n";
  _0x2619d1 += "📍Studio:\n";
  for (let _0x66d944 = 0x0; _0x66d944 < _0x1d28f1.studios.length; _0x66d944++) {
    _0x2619d1 += "\t\t\t\t\t\t\t\t*" + _0x1d28f1.studios[_0x66d944].name + "*\n";
  }
  _0x2619d1 += "🎴Producers:\n";
  for (let _0x173dff = 0x0; _0x173dff < _0x1d28f1.producers.length; _0x173dff++) {
    _0x2619d1 += "\t\t\t\t\t\t\t\t\t\t*" + _0x1d28f1.producers[_0x173dff].name + "*\n";
  }
  _0x2619d1 += "💫Premiered on: " + _0x1d28f1.aired.from + "\n";
  _0x2619d1 += "🎗Ended on: " + _0x1d28f1.aired.to + "\n";
  _0x2619d1 += "🎐Popularity: " + _0x1d28f1.popularity + "\n";
  _0x2619d1 += "🎏Favorites: " + _0x1d28f1.favorites + "\n";
  _0x2619d1 += "🎇Rating: " + _0x1d28f1.rating + "\n";
  _0x2619d1 += "🏅Rank: " + _0x1d28f1.rank + "\n\n";
  if (_0x1d28f1.trailer.url !== null) {
    _0x2619d1 += "♦Trailer: " + _0x1d28f1.trailer.url + "\n\n";
  }
  _0x2619d1 += "🌐URL: " + _0x1d28f1.url + "\n\n";
  if (_0x1d28f1.background !== null) {
    _0x2619d1 += "🎆Background: " + _0x1d28f1.background + "*\n\n";
  }
  _0x2619d1 += "❄Description: " + _0x1d28f1.synopsis;
  _0x2fd16f.sendMessage(_0x2603d5.chat, {
    'image': {
      'url': _0x1d28f1.images.jpg.large_image_url
    },
    'caption': _0x2619d1
  }, {
    'quoted': _0x2603d5
  });
});
cmd({
  'pattern': "wallpaper",
  'desc': "To get Random Pics",
  'category': "Anime Pics",
  'filename': __filename
}, async (_0x3c6b57, _0x566e45, _0xfd1649) => {
  const _0x3f34db = await fetch("https://api.unsplash.com/photos/random?client_id=72utkjatCBC-PDcx7-Kcvgod7-QOFAm2fXwEeW8b8cc");
  const _0x23eeb7 = await _0x3f34db.json();
  const _0x5f3410 = _0x23eeb7.urls.regular;
  let _0x248e9d = {
    'image': {
      'url': _0x5f3410
    },
    'caption': "*---Random Wallpapers Here---*",
    'footer': tlang().footer,
    'headerType': 0x4
  };
  return await _0x3c6b57.sendMessage(_0x566e45.chat, _0x248e9d, {
    'quoted': _0x566e45
  });
});
