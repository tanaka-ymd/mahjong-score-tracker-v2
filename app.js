// ================================================================
// [1] Constants
// ================================================================
const PLAYER_COLORS = ['#1a7a3a', '#1565C0', '#e65100', '#7B1FA2'];

const UMA_OPTIONS = {
  4: [
    { value: '5-10', label: '5-10' },
    { value: '5-15', label: '5-15' },
    { value: '5-20', label: '5-20' },
    { value: '5-25', label: '5-25' },
    { value: '5-30', label: '5-30' },
    { value: '10-15', label: '10-15' },
    { value: '10-20', label: '10-20（ワンツー）' },
    { value: '10-25', label: '10-25' },
    { value: '10-30', label: '10-30（ゴットー）' },
    { value: '10-40', label: '10-40' },
    { value: '10-50', label: '10-50' },
    { value: '15-20', label: '15-20' },
    { value: '15-25', label: '15-25' },
    { value: '15-30', label: '15-30' },
    { value: '20-25', label: '20-25' },
    { value: '20-30', label: '20-30（ニサンマン）' },
    { value: '20-40', label: '20-40' },
    { value: '20-50', label: '20-50' },
    { value: '25-50', label: '25-50' },
    { value: '30-50', label: '30-50' },
    { value: '30-60', label: '30-60' },
    { value: '40-80', label: '40-80' },
    { value: '50-100', label: '50-100' },
    { value: '0-0', label: 'なし' }
  ],
  3: [
    { value: '5-10', label: '5-10（+10/0/-10）' },
    { value: '5-15', label: '5-15（+15/0/-15）' },
    { value: '5-20', label: '5-20（+20/0/-20）' },
    { value: '10-20', label: '10-20（+20/0/-20）' },
    { value: '10-30', label: '10-30（+30/0/-30）' },
    { value: '15-30', label: '15-30（+30/0/-30）' },
    { value: '20-40', label: '20-40（+40/0/-40）' },
    { value: '20-50', label: '20-50（+50/0/-50）' },
    { value: '30-60', label: '30-60（+60/0/-60）' },
    { value: '50-100', label: '50-100（+100/0/-100）' },
    { value: '0-0', label: 'なし' }
  ]
};

const OKA_OPTIONS = {
  4: [
    { value: '25000-30000', label: '25000持ち 30000返し' },
    { value: '25000-50000', label: '25000持ち 50000返し' },
    { value: '30000-30000', label: '30000持ち 30000返し' },
    { value: '30000-50000', label: '30000持ち 50000返し' },
    { value: '25000-25000', label: '25000持ち 25000返し' }
  ],
  3: [
    { value: '35000-40000', label: '35000持ち 40000返し' },
    { value: '35000-50000', label: '35000持ち 50000返し' },
    { value: '30000-40000', label: '30000持ち 40000返し' },
    { value: '30000-50000', label: '30000持ち 50000返し' },
    { value: '35000-35000', label: '35000持ち 35000返し' },
    { value: '25000-30000', label: '25000持ち 30000返し' }
  ]
};

const CHIP_RATE_OPTIONS = [
  { value: 0, label: 'なし' },
  { value: 100, label: '1枚 = 100pt' },
  { value: 200, label: '1枚 = 200pt' },
  { value: 300, label: '1枚 = 300pt' },
  { value: 400, label: '1枚 = 400pt' },
  { value: 500, label: '1枚 = 500pt' }
];

const RATE_OPTIONS = [
  { value: 0, label: 'なし' },
  { value: 10, label: 'テンイチ (1000点=10pt)' },
  { value: 20, label: 'テンニ (1000点=20pt)' },
  { value: 30, label: 'テンサン (1000点=30pt)' },
  { value: 50, label: 'テンゴ (1000点=50pt)' },
  { value: 100, label: 'テンピン (1000点=100pt)' },
  { value: 200, label: 'テンリャンピン (1000点=200pt)' },
  { value: 500, label: 'デカピン (1000点=500pt)' }
];

const POINTS_CHILD = {
  20: { 2: [1300, '400/700'], 3: [2600, '700/1300'], 4: [5200, '1300/2600'] },
  25: { 2: [1600, '-'], 3: [3200, '800/1600'], 4: [6400, '1600/3200'] },
  30: { 1: [1000, '300/500'], 2: [2000, '500/1000'], 3: [3900, '1000/2000'], 4: [7700, '2000/3900'] },
  40: { 1: [1300, '400/700'], 2: [2600, '700/1300'], 3: [5200, '1300/2600'], 4: ['満貫', '満貫'] },
  50: { 1: [1600, '400/800'], 2: [3200, '800/1600'], 3: [6400, '1600/3200'], 4: ['満貫', '満貫'] },
  60: { 1: [2000, '500/1000'], 2: [3900, '1000/2000'], 3: [7700, '2000/3900'], 4: ['満貫', '満貫'] },
  70: { 1: [2300, '600/1200'], 2: [4500, '1200/2300'], 3: ['満貫', '満貫'], 4: ['満貫', '満貫'] },
  80: { 1: [2600, '700/1300'], 2: [5200, '1300/2600'], 3: ['満貫', '満貫'], 4: ['満貫', '満貫'] },
  90: { 1: [2900, '800/1500'], 2: [5800, '1500/2900'], 3: ['満貫', '満貫'], 4: ['満貫', '満貫'] },
  100: { 1: [3200, '800/1600'], 2: [6400, '1600/3200'], 3: ['満貫', '満貫'], 4: ['満貫', '満貫'] },
  110: { 1: [3600, '900/1800'], 2: [7100, '1800/3600'], 3: ['満貫', '満貫'], 4: ['満貫', '満貫'] }
};

const POINTS_PARENT = {
  20: { 2: [2000, '700ALL'], 3: [3900, '1300ALL'], 4: [7700, '2600ALL'] },
  25: { 2: [2400, '-'], 3: [4800, '1600ALL'], 4: [9600, '3200ALL'] },
  30: { 1: [1500, '500ALL'], 2: [2900, '1000ALL'], 3: [5800, '2000ALL'], 4: [11600, '3900ALL'] },
  40: { 1: [2000, '700ALL'], 2: [3900, '1300ALL'], 3: [7700, '2600ALL'], 4: ['満貫', '満貫'] },
  50: { 1: [2400, '800ALL'], 2: [4800, '1600ALL'], 3: [9600, '3200ALL'], 4: ['満貫', '満貫'] },
  60: { 1: [2900, '1000ALL'], 2: [5800, '2000ALL'], 3: [11600, '3900ALL'], 4: ['満貫', '満貫'] },
  70: { 1: [3400, '1200ALL'], 2: [6800, '2300ALL'], 3: ['満貫', '満貫'], 4: ['満貫', '満貫'] },
  80: { 1: [3900, '1300ALL'], 2: [7700, '2600ALL'], 3: ['満貫', '満貫'], 4: ['満貫', '満貫'] },
  90: { 1: [4400, '1500ALL'], 2: [8700, '2900ALL'], 3: ['満貫', '満貫'], 4: ['満貫', '満貫'] },
  100: { 1: [4800, '1600ALL'], 2: [9600, '3200ALL'], 3: ['満貫', '満貫'], 4: ['満貫', '満貫'] },
  110: { 1: [5300, '1800ALL'], 2: [10600, '3600ALL'], 3: ['満貫', '満貫'], 4: ['満貫', '満貫'] }
};

// 3人麻雀ツモ損なし（北家分を残り2人で折半）
// 計算方式: 通常4人麻雀のツモ支払い額を算出後、北家(子)の支払い分をceil100で折半して加算
// 子のツモ: 子払い=通常子払い+ceil100(北家子払い/2), 親払い=通常親払い+ceil100(北家子払い/2)
// 親のツモ: 子払い=通常子払い+ceil100(北家子払い/2) ALL
const POINTS_CHILD_NO_TSUMOZON = {
  20: { 2: [1300, '600/900'], 3: [2600, '1100/1700'], 4: [5200, '2000/3300'] },
  25: { 2: [1600, '-'], 3: [3200, '1200/2000'], 4: [6400, '2400/4000'] },
  30: { 1: [1000, '500/700'], 2: [2000, '800/1300'], 3: [3900, '1500/2500'], 4: [7700, '3000/4900'] },
  40: { 1: [1300, '600/900'], 2: [2600, '1100/1700'], 3: [5200, '2000/3300'], 4: ['満貫', '満貫'] },
  50: { 1: [1600, '600/1000'], 2: [3200, '1200/2000'], 3: [6400, '2400/4000'], 4: ['満貫', '満貫'] },
  60: { 1: [2000, '800/1300'], 2: [3900, '1500/2500'], 3: [7700, '3000/4900'], 4: ['満貫', '満貫'] },
  70: { 1: [2300, '900/1500'], 2: [4500, '1800/2900'], 3: ['満貫', '満貫'], 4: ['満貫', '満貫'] },
  80: { 1: [2600, '1100/1700'], 2: [5200, '2000/3300'], 3: ['満貫', '満貫'], 4: ['満貫', '満貫'] },
  90: { 1: [2900, '1200/1900'], 2: [5800, '2300/3700'], 3: ['満貫', '満貫'], 4: ['満貫', '満貫'] },
  100: { 1: [3200, '1200/2000'], 2: [6400, '2400/4000'], 3: ['満貫', '満貫'], 4: ['満貫', '満貫'] },
  110: { 1: [3600, '1400/2300'], 2: [7100, '2700/4500'], 3: ['満貫', '満貫'], 4: ['満貫', '満貫'] }
};

const POINTS_PARENT_NO_TSUMOZON = {
  20: { 2: [2000, '1100ALL'], 3: [3900, '2000ALL'], 4: [7700, '3900ALL'] },
  25: { 2: [2400, '1200ALL'], 3: [4800, '2400ALL'], 4: [9600, '4800ALL'] },
  30: { 1: [1500, '800ALL'], 2: [2900, '1500ALL'], 3: [5800, '3000ALL'], 4: [11600, '5900ALL'] },
  40: { 1: [2000, '1100ALL'], 2: [3900, '2000ALL'], 3: [7700, '3900ALL'], 4: ['満貫', '満貫'] },
  50: { 1: [2400, '1200ALL'], 2: [4800, '2400ALL'], 3: [9600, '4800ALL'], 4: ['満貫', '満貫'] },
  60: { 1: [2900, '1500ALL'], 2: [5800, '3000ALL'], 3: [11600, '5900ALL'], 4: ['満貫', '満貫'] },
  70: { 1: [3400, '1800ALL'], 2: [6800, '3500ALL'], 3: ['満貫', '満貫'], 4: ['満貫', '満貫'] },
  80: { 1: [3900, '2000ALL'], 2: [7700, '3900ALL'], 3: ['満貫', '満貫'], 4: ['満貫', '満貫'] },
  90: { 1: [4400, '2300ALL'], 2: [8700, '4400ALL'], 3: ['満貫', '満貫'], 4: ['満貫', '満貫'] },
  100: { 1: [4800, '2400ALL'], 2: [9600, '4800ALL'], 3: ['満貫', '満貫'], 4: ['満貫', '満貫'] },
  110: { 1: [5300, '2700ALL'], 2: [10600, '5400ALL'], 3: ['満貫', '満貫'], 4: ['満貫', '満貫'] }
};

// ================================================================
// [2] Store
// ================================================================
function genId(prefix) {
  return prefix + '_' + Date.now() + '_' + Math.random().toString(16).slice(2, 6);
}

function esc(str) {
  const d = document.createElement('div');
  d.textContent = str;
  return d.innerHTML;
}

function getGroupKey(playerIds) {
  return [...playerIds].sort().join(',');
}

function getStorageUsage() {
  let total = 0;
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    total += key.length + (localStorage.getItem(key) || '').length;
  }
  return total * 2; // UTF-16 = 2 bytes per char
}

let storageWarningShown = false;
function checkStorageWarning() {
  if (storageWarningShown) return;
  const used = getStorageUsage();
  const limit = 5 * 1024 * 1024; // 5MB (一般的なlocalStorage上限)
  const ratio = used / limit;
  if (ratio > 0.8) {
    storageWarningShown = true;
    const usedKB = Math.round(used / 1024);
    const limitKB = Math.round(limit / 1024);
    alert(`データ容量が残りわずかです (${usedKB}KB / ${limitKB}KB 使用中)\n設定画面からエクスポートでバックアップを取ることをおすすめします。`);
  }
}

function safeSave(key, value) {
  try {
    localStorage.setItem(key, value);
    checkStorageWarning();
  } catch (e) {
    alert('データの保存に失敗しました。容量が一杯の可能性があります。\n設定画面からエクスポートでバックアップを取ってください。');
    throw e;
  }
}

const Store = {
  // --- Users ---
  getUsers() {
    try { return JSON.parse(localStorage.getItem('mjt2-users')) || []; } catch { return []; }
  },
  saveUsers(users) {
    safeSave('mjt2-users', JSON.stringify(users));
  },
  addUser(name) {
    const users = this.getUsers();
    const user = { id: genId('u'), name, createdAt: Date.now(), deleted: false };
    users.push(user);
    this.saveUsers(users);
    return user;
  },
  updateUser(id, name) {
    const users = this.getUsers();
    const u = users.find(x => x.id === id);
    if (u) { u.name = name; this.saveUsers(users); }
  },
  deleteUser(id) {
    const users = this.getUsers();
    const u = users.find(x => x.id === id);
    if (u) { u.deleted = true; this.saveUsers(users); }
  },
  getActiveUsers() {
    return this.getUsers().filter(u => !u.deleted);
  },
  getUserName(id) {
    const u = this.getUsers().find(x => x.id === id);
    return u ? esc(u.name) : '???';
  },
  getUserNameRaw(id) {
    const u = this.getUsers().find(x => x.id === id);
    return u ? u.name : '???';
  },

  // --- Games ---
  getGames() {
    try { return JSON.parse(localStorage.getItem('mjt2-games')) || []; } catch { return []; }
  },
  saveGames(games) {
    safeSave('mjt2-games', JSON.stringify(games));
  },
  addGame(game) {
    const games = this.getGames();
    games.push(game);
    this.saveGames(games);
    this.updateRecentGroup(game.playerIds, game.timestamp);
  },
  deleteGame(id) {
    const games = this.getGames().filter(g => g.id !== id);
    this.saveGames(games);
  },
  getGamesByGroup(groupKey) {
    return this.getGames().filter(g => g.groupKey === groupKey);
  },
  getGamesByUser(userId) {
    return this.getGames().filter(g => g.playerIds.includes(userId));
  },

  // --- Settings ---
  getSettings() {
    const defaults = {
      defaultUma: { '3': '10-30', '4': '10-30' },
      defaultOka: { '3': '35000-40000', '4': '25000-30000' },
      defaultChipRate: 0,
      defaultRate: 50
    };
    try {
      const saved = JSON.parse(localStorage.getItem('mjt2-settings'));
      return saved ? { ...defaults, ...saved } : defaults;
    } catch { return defaults; }
  },
  saveSettings(settings) {
    safeSave('mjt2-settings', JSON.stringify(settings));
  },

  // --- Recent Groups ---
  getRecentGroups() {
    try { return JSON.parse(localStorage.getItem('mjt2-recent-groups')) || []; } catch { return []; }
  },
  saveRecentGroups(groups) {
    safeSave('mjt2-recent-groups', JSON.stringify(groups));
  },
  updateRecentGroup(playerIds, timestamp) {
    const groups = this.getRecentGroups();
    const key = getGroupKey(playerIds);
    const existing = groups.find(g => g.groupKey === key);
    if (existing) {
      existing.lastPlayedAt = timestamp;
      existing.playCount++;
    } else {
      groups.push({ groupKey: key, playerIds: [...playerIds], lastPlayedAt: timestamp, playCount: 1 });
    }
    groups.sort((a, b) => b.lastPlayedAt - a.lastPlayedAt);
    // Keep max 20
    if (groups.length > 20) groups.length = 20;
    this.saveRecentGroups(groups);
  },

  // --- V1 Migration ---
  migrateV1() {
    const v1raw = localStorage.getItem('mahjong-tracker');
    if (!v1raw) return null;
    // 重複移行防止
    if (localStorage.getItem('mjt2-v1-migrated')) {
      return { alreadyMigrated: true };
    }
    try {
      const v1 = JSON.parse(v1raw);
      if (!v1.players || !v1.players.length) return null;

      // Create users for v1 players
      const users = this.getUsers();
      const nameToId = {};
      v1.players.forEach(name => {
        let existing = users.find(u => u.name === name && !u.deleted);
        if (!existing) {
          existing = { id: genId('u'), name, createdAt: Date.now(), deleted: false };
          users.push(existing);
        }
        nameToId[name] = existing.id;
      });
      this.saveUsers(users);

      const playerIds = v1.players.map(n => nameToId[n]);
      const groupKey = getGroupKey(playerIds);
      const count = v1.playerCount || v1.players.length;

      const games = this.getGames();
      let migrated = 0;
      (v1.games || []).forEach(g => {
        const game = {
          id: genId('g'),
          timestamp: g.timestamp || Date.now(),
          playerCount: count,
          playerIds: [...playerIds],
          rawScores: g.rawScores || [],
          rankings: g.rankings || [],
          finalScores: g.finalScores || [],
          chips: g.chips || new Array(count).fill(0),
          uma: v1.uma || '10-30',
          oka: v1.oka || '25000-30000',
          chipRate: v1.chipRate || 0,
          groupKey: groupKey
        };
        games.push(game);
        migrated++;
      });
      this.saveGames(games);

      if (migrated > 0) {
        this.updateRecentGroup(playerIds, Date.now());
      }

      localStorage.setItem('mjt2-v1-migrated', '1');
      return { playerCount: count, playerNames: v1.players, gameCount: migrated };
    } catch (e) {
      console.error('V1 migration error:', e);
      return null;
    }
  },

  // --- Export/Import ---
  exportAll() {
    return JSON.stringify({
      users: this.getUsers(),
      games: this.getGames(),
      settings: this.getSettings(),
      recentGroups: this.getRecentGroups(),
      exportedAt: Date.now(),
      version: 2
    }, null, 2);
  },
  importAll(jsonStr) {
    const data = JSON.parse(jsonStr);
    if (data.version !== 2) throw new Error('対応していないバージョンです');
    if (!Array.isArray(data.users) || !Array.isArray(data.games)) {
      throw new Error('データ形式が不正です');
    }
    // Validate users structure
    for (const u of data.users) {
      if (!u.id || !u.name) throw new Error('ユーザーデータが不正です');
    }
    // Validate games structure
    for (const g of data.games) {
      if (!g.id || !Array.isArray(g.playerIds) || !Array.isArray(g.finalScores)) {
        throw new Error('対局データが不正です');
      }
    }
    // Backup current data before overwriting
    const backup = this.exportAll();
    try {
      this.saveUsers(data.users);
      this.saveGames(data.games);
      if (data.settings) this.saveSettings(data.settings);
      if (data.recentGroups) this.saveRecentGroups(data.recentGroups);
    } catch (e) {
      // Rollback on error
      const bk = JSON.parse(backup);
      this.saveUsers(bk.users || []);
      this.saveGames(bk.games || []);
      if (bk.settings) this.saveSettings(bk.settings);
      if (bk.recentGroups) this.saveRecentGroups(bk.recentGroups);
      throw e;
    }
  },
  resetAll() {
    localStorage.removeItem('mjt2-users');
    localStorage.removeItem('mjt2-games');
    localStorage.removeItem('mjt2-settings');
    localStorage.removeItem('mjt2-recent-groups');
  }
};

// ================================================================
// [3] Business Logic
// ================================================================
function calculateGame(rawScores, umaStr, okaStr, count) {
  const [startPoints, returnPoints] = okaStr.split('-').map(Number);
  const [umaSmall, umaBig] = umaStr.split('-').map(Number);

  // 全員の点数が開始点と同じ（点数の動きなし）場合はウマ・オカをスキップ
  const allSameAsStart = rawScores.every(s => s === startPoints);

  const adjusted = rawScores.map(s => (s - returnPoints) / 1000);
  const indexed = adjusted.map((score, i) => ({ score, index: i }));
  indexed.sort((a, b) => b.score - a.score);

  const rankings = new Array(count);
  const finalScores = new Array(count);

  if (allSameAsStart) {
    // チップのみの対局：ウマ・オカを適用しない、全員同着
    for (let i = 0; i < count; i++) {
      rankings[i] = 1;
      finalScores[i] = 0;
    }
  } else {
    indexed.forEach((item, rank) => { rankings[item.index] = rank + 1; });

    let umaValues;
    if (count === 4) {
      umaValues = [umaBig, umaSmall, -umaSmall, -umaBig];
    } else {
      umaValues = [umaBig, 0, -umaBig];
    }

    indexed.forEach((item, rank) => {
      finalScores[item.index] = adjusted[item.index] + umaValues[rank];
    });

    if (startPoints !== returnPoints) {
      const oka = ((returnPoints - startPoints) * count) / 1000;
      finalScores[indexed[0].index] += oka;
    }
  }

  return {
    rawScores,
    rankings,
    finalScores: finalScores.map(s => Math.round(s * 10) / 10)
  };
}

function calcStableRating(avgRank, playerCount) {
  // 中央値: 4人=2.5, 3人=2.0
  const center = (playerCount + 1) / 2;
  return Math.round(1500 + (center - avgRank) * 400);
}

function calcStableDan(avgRank, gameCount, playerCount) {
  if (gameCount < 5) return { dan: '-', r: 0 };
  const r = calcStableRating(avgRank, playerCount || 4);
  const danTable = [
    [2000, '天鳳位'], [1900, '十段'], [1800, '九段'], [1700, '八段'],
    [1650, '七段'], [1600, '六段'], [1550, '五段'], [1500, '四段'],
    [1450, '三段'], [1400, '二段'], [1350, '初段'],
    [1300, '1級'], [1250, '2級'], [1200, '3級'],
    [1150, '4級'], [1100, '5級'], [1050, '6級'],
    [1000, '7級'], [950, '8級'], [900, '9級']
  ];
  for (const [threshold, name] of danTable) {
    if (r >= threshold) return { dan: name, r };
  }
  return { dan: '新人', r };
}

function getSessionKey(timestamp) {
  const d = new Date(timestamp);
  return `${d.getFullYear()}/${String(d.getMonth() + 1).padStart(2, '0')}/${String(d.getDate()).padStart(2, '0')}`;
}

function groupGamesBySessions(games) {
  const sessions = [];
  const map = {};
  games.forEach((game, idx) => {
    const key = getSessionKey(game.timestamp);
    if (!map[key]) {
      map[key] = { date: key, games: [], indices: [] };
      sessions.push(map[key]);
    }
    map[key].games.push(game);
    map[key].indices.push(idx);
  });
  return sessions;
}

function computePlayerStats(games, playerIds) {
  const stats = {};
  playerIds.forEach(id => {
    stats[id] = { totalScore: 0, totalChips: 0, gameCount: 0, rankings: [], scores: [], first: 0, second: 0, last: 0 };
  });
  games.forEach(g => {
    g.playerIds.forEach((id, i) => {
      if (!stats[id]) return;
      stats[id].totalScore += g.finalScores[i];
      stats[id].totalChips += (g.chips && g.chips[i]) || 0;
      stats[id].gameCount++;
      stats[id].rankings.push(g.rankings[i]);
      stats[id].scores.push(g.finalScores[i]);
      if (g.rankings[i] === 1) stats[id].first++;
      if (g.rankings[i] === 2) stats[id].second++;
      if (g.rankings[i] === g.playerCount) stats[id].last++;
    });
  });
  // Round totals
  Object.values(stats).forEach(s => {
    s.totalScore = Math.round(s.totalScore * 10) / 10;
  });
  return stats;
}

// ================================================================
// [4] UI Views
// ================================================================
const app = document.getElementById('app');
let currentTab = 'home';
let gameStep = 1; // 1=member select, 2=score input
let selectedPlayerIds = [];
let currentGamePlayerCount = 4;

// Game input state
let gameInputState = {
  uma: null,
  oka: null,
  chipRate: null
};

// Results/Stats state
let resultsMode = 'group'; // 'group' | 'individual'
let resultsSelectedGroup = '';
let resultsSelectedUser = '';
let resultsRate = 50;
let resultsSessionFilter = 'today'; // 'today' | 'all' | 日付文字列(yyyy/mm/dd)

let statsMode = 'all'; // 'all' | 'group' | 'individual'
let statsSelectedGroup = '';
let statsSelectedUser = '';
let statsRecentFilter = 'all'; // 'all' | '10' | '20'
let statsIncomeRate = 50;

let toolsMode = 'points'; // 'points' | 'fu'
let pointsDealer = 'child';
let pointsTsumozon = true; // true=ツモ損あり, false=ツモ損なし

// ---- Tab Navigation ----
document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const tab = btn.dataset.tab;
    switchTab(tab);
  });
});

function switchTab(tab) {
  currentTab = tab;
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.toggle('active', b.dataset.tab === tab));
  render();
}

function render() {
  switch (currentTab) {
    case 'home': renderHome(); break;
    case 'game': renderGame(); break;
    case 'results': renderResults(); break;
    case 'statistics': renderStatistics(); break;
    case 'tools': renderTools(); break;
    case 'settings': renderSettings(); break;
  }
}

// ---- Home ----
function renderHome() {
  const recentGroups = Store.getRecentGroups().slice(0, 3);
  const allGames = Store.getGames();
  const recentGames = allGames.slice(-5).reverse();

  let html = '<div class="page-header"><h2>麻雀スコアトラッカー v2</h2></div>';
  html += '<button class="btn btn-primary" style="margin-bottom:20px" onclick="startNewGame()">新しい対局を始める</button>';

  if (recentGroups.length > 0) {
    html += '<div class="section-title">最近のグループ</div>';
    recentGroups.forEach(g => {
      const names = g.playerIds.map(id => Store.getUserName(id)).join(', ');
      html += `<div class="recent-group-card" onclick="startGameWithGroup('${g.groupKey}')">
        <div><div class="recent-group-names">${names}</div><div class="recent-group-meta">${g.playCount}回対局</div></div>
        <span style="color:var(--text-secondary);font-size:20px">&#8250;</span>
      </div>`;
    });
  }

  if (recentGames.length > 0) {
    html += '<div class="section-title" style="margin-top:20px">最近の対局</div>';
    recentGames.forEach(g => {
      const d = new Date(g.timestamp);
      const dateStr = `${d.getMonth() + 1}/${d.getDate()} ${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}`;
      const winnerIdx = g.rankings.indexOf(1);
      const winnerName = Store.getUserName(g.playerIds[winnerIdx]);
      const playerNames = g.playerIds.map(id => Store.getUserName(id)).join(', ');
      html += `<div class="recent-game-card">
        <div class="recent-game-date">${dateStr}</div>
        <div class="recent-game-players">${playerNames}</div>
        <div class="recent-game-winner">1位: ${winnerName} (${g.finalScores[winnerIdx] >= 0 ? '+' : ''}${g.finalScores[winnerIdx]})</div>
      </div>`;
    });
  }

  if (allGames.length === 0 && recentGroups.length === 0) {
    html += '<div class="empty-state"><p>まだ対局データがありません</p><p>「新しい対局を始める」から始めましょう</p></div>';
  }

  app.innerHTML = html;
}

window.startNewGame = function () {
  gameStep = 1;
  selectedPlayerIds = [];
  switchTab('game');
};

window.startGameWithGroup = function (groupKey) {
  const group = Store.getRecentGroups().find(g => g.groupKey === groupKey);
  if (group) {
    selectedPlayerIds = [...group.playerIds];
    currentGamePlayerCount = selectedPlayerIds.length;
    gameStep = 2;
  } else {
    gameStep = 1;
    selectedPlayerIds = [];
  }
  switchTab('game');
};

// ---- Game (Step 1: Member Select) ----
function renderGame() {
  if (gameStep === 2 && selectedPlayerIds.length >= 3) {
    renderGameStep2();
    return;
  }
  renderGameStep1();
}

function renderGameStep1() {
  const users = Store.getActiveUsers();
  const recentGroups = Store.getRecentGroups().slice(0, 5);

  let html = '<div class="page-header"><h2>メンバー選択</h2></div>';

  // Recent groups
  if (recentGroups.length > 0) {
    html += '<div class="section-title">最近のグループから選択</div>';
    html += '<div class="recent-groups-compact">';
    recentGroups.forEach(g => {
      const names = g.playerIds.map(id => Store.getUserName(id)).join(', ');
      html += `<button class="recent-group-btn" onclick="selectRecentGroup('${g.groupKey}')">${names} (${g.playCount}回)</button>`;
    });
    html += '</div>';
  }

  html += '<div class="section-title">ユーザーを選択 (' + selectedPlayerIds.length + '人選択中)</div>';
  html += '<div class="chip-list">';
  users.forEach(u => {
    const selected = selectedPlayerIds.includes(u.id);
    html += `<button class="chip-item ${selected ? 'selected' : ''}" onclick="togglePlayer('${u.id}')">${u.name}</button>`;
  });
  html += `<button class="chip-item chip-add" onclick="showAddUserModal()">+ 追加</button>`;
  html += '</div>';

  const count = selectedPlayerIds.length;
  const canStart = count === 3 || count === 4;
  if (canStart) {
    html += `<button class="btn btn-primary" onclick="startGameInput()">このメンバーで開始 (${count}人麻雀)</button>`;
  } else {
    html += `<button class="btn btn-primary" style="opacity:0.5;pointer-events:none">メンバーを選択してください</button>`;
  }
  if (count > 0 && count < 3) {
    html += '<p class="error-msg">3人または4人を選択してください</p>';
  }
  if (count > 4) {
    html += '<p class="error-msg">最大4人まで選択できます</p>';
  }

  app.innerHTML = html;
}

window.togglePlayer = function (userId) {
  const idx = selectedPlayerIds.indexOf(userId);
  if (idx >= 0) {
    selectedPlayerIds.splice(idx, 1);
  } else {
    if (selectedPlayerIds.length < 4) {
      selectedPlayerIds.push(userId);
    }
  }
  renderGameStep1();
};

window.selectRecentGroup = function (groupKey) {
  const group = Store.getRecentGroups().find(g => g.groupKey === groupKey);
  if (group) {
    // Verify all players still exist and are active
    const activeIds = Store.getActiveUsers().map(u => u.id);
    const validIds = group.playerIds.filter(id => activeIds.includes(id));
    if (validIds.length === group.playerIds.length) {
      selectedPlayerIds = [...group.playerIds];
      currentGamePlayerCount = selectedPlayerIds.length;
      gameStep = 2;
      renderGame();
      return;
    }
  }
  selectedPlayerIds = [];
  renderGameStep1();
};

window.startGameInput = function () {
  const count = selectedPlayerIds.length;
  if (count < 3 || count > 4) return;
  currentGamePlayerCount = count;
  gameStep = 2;

  // Load defaults
  const settings = Store.getSettings();
  gameInputState.uma = settings.defaultUma[String(count)];
  gameInputState.oka = settings.defaultOka[String(count)];
  gameInputState.chipRate = settings.defaultChipRate;

  renderGame();
};

window.showAddUserModal = function () {
  const overlay = document.createElement('div');
  overlay.className = 'modal-overlay';
  overlay.innerHTML = `
    <div class="modal-content">
      <div class="modal-title">新規ユーザー追加</div>
      <input type="text" class="input-text" id="modal-user-name" placeholder="名前" maxlength="8" autofocus>
      <div class="modal-actions">
        <button class="btn btn-secondary btn-small" onclick="closeModal()">キャンセル</button>
        <button class="btn btn-primary btn-small" onclick="addUserFromModal()">追加</button>
      </div>
    </div>
  `;
  document.body.appendChild(overlay);
  overlay.addEventListener('click', (e) => { if (e.target === overlay) closeModal(); });
  setTimeout(() => document.getElementById('modal-user-name').focus(), 100);
};

window.addUserFromModal = function () {
  const input = document.getElementById('modal-user-name');
  const name = input.value.trim();
  if (!name) return;
  const existing = Store.getActiveUsers().find(u => u.name === name);
  if (existing) {
    alert('同じ名前のユーザーが既に存在します');
    return;
  }
  const user = Store.addUser(name);
  if (selectedPlayerIds.length < 4) {
    selectedPlayerIds.push(user.id);
  }
  closeModal();
  renderGameStep1();
};

window.closeModal = function () {
  const overlay = document.querySelector('.modal-overlay');
  if (overlay) overlay.remove();
};

// ---- Game (Step 2: Score Input) ----
function renderGameStep2() {
  autoFilledIdx = -1;
  const count = currentGamePlayerCount;
  const settings = Store.getSettings();
  const uma = gameInputState.uma || settings.defaultUma[String(count)];
  const oka = gameInputState.oka || settings.defaultOka[String(count)];
  const chipRate = gameInputState.chipRate != null ? gameInputState.chipRate : settings.defaultChipRate;
  const groupGames = Store.getGamesByGroup(getGroupKey(selectedPlayerIds));

  let html = '<div class="page-header"><h2>対局結果入力 (第' + (groupGames.length + 1) + '局)</h2></div>';

  html += '<div class="card">';
  // Player scores
  html += '<div class="section-title">点数入力</div>';
  selectedPlayerIds.forEach((id, i) => {
    const name = Store.getUserName(id);
    const color = PLAYER_COLORS[i] || '#333';
    html += `<div class="input-row">
      <label style="color:${color}">${name}</label>
      <input type="text" id="game-score-${i}" placeholder="点数" inputmode="numeric" pattern="-?[0-9]*" oninput="autoCalcLastScore()">
    </div>`;
  });

  // Options
  html += '<div class="input-options" style="margin-top:16px">';
  html += '<label>ウマ: <select id="game-uma">';
  UMA_OPTIONS[count].forEach(o => {
    html += `<option value="${o.value}" ${o.value === uma ? 'selected' : ''}>${o.label}</option>`;
  });
  html += '</select></label>';

  html += '<label>オカ: <select id="game-oka">';
  OKA_OPTIONS[count].forEach(o => {
    html += `<option value="${o.value}" ${o.value === oka ? 'selected' : ''}>${o.label}</option>`;
  });
  html += '</select></label>';

  html += '<label>チップ: <select id="game-chip-rate" onchange="toggleChipInputs()">';
  CHIP_RATE_OPTIONS.forEach(o => {
    html += `<option value="${o.value}" ${o.value === chipRate ? 'selected' : ''}>${o.label}</option>`;
  });
  html += '</select></label>';
  html += '</div>';

  // Chip inputs
  html += `<div id="chip-section" style="display:${chipRate > 0 ? 'block' : 'none'}">`;
  html += '<div class="section-title">チップ枚数</div>';
  selectedPlayerIds.forEach((id, i) => {
    const name = Store.getUserName(id);
    html += `<div class="input-row">
      <label>${name}</label>
      <input type="text" id="game-chip-${i}" placeholder="±枚数" inputmode="numeric" pattern="-?[0-9]*" value="0">
    </div>`;
  });
  html += '</div>';

  html += '<button class="btn btn-primary" style="margin-top:16px" onclick="recordGame()">対局結果を記録</button>';
  html += '<p id="game-input-error" class="error-msg"></p>';
  html += '</div>';

  html += '<button class="btn btn-secondary" style="margin-top:8px" onclick="backToMemberSelect()">メンバーを変更</button>';

  app.innerHTML = html;
}

window.toggleChipInputs = function () {
  const rate = parseInt(document.getElementById('game-chip-rate').value, 10);
  document.getElementById('chip-section').style.display = rate > 0 ? 'block' : 'none';
};

let autoFilledIdx = -1; // which field was auto-filled

window.autoCalcLastScore = function () {
  const count = currentGamePlayerCount;
  const okaStr = document.getElementById('game-oka').value;
  const startPoints = parseInt(okaStr.split('-')[0], 10);
  const total = startPoints * count;

  // Clear previous auto-fill marker if user edited that field
  if (autoFilledIdx >= 0) {
    const autoInput = document.getElementById('game-score-' + autoFilledIdx);
    if (autoInput && document.activeElement === autoInput) {
      // User is editing the auto-filled field, clear marker
      autoFilledIdx = -1;
    }
  }

  // Count manually entered fields (ignore auto-filled field)
  const values = [];
  let emptyIdx = -1;
  let emptyCount = 0;
  for (let i = 0; i < count; i++) {
    const input = document.getElementById('game-score-' + i);
    const val = input.value.trim();
    if (i === autoFilledIdx || val === '' || isNaN(parseInt(val, 10))) {
      emptyIdx = i;
      emptyCount++;
    } else {
      values.push(parseInt(val, 10));
    }
  }

  // If exactly 1 field is empty/auto-filled, calculate it
  if (emptyCount === 1) {
    const sum = values.reduce((a, b) => a + b, 0);
    const remaining = total - sum;
    const input = document.getElementById('game-score-' + emptyIdx);
    input.value = remaining;
    input.style.color = remaining < 0 ? '#d32f2f' : '';
    input.style.opacity = '0.7';
    autoFilledIdx = emptyIdx;
  } else {
    // Clear auto-fill styling if conditions no longer met
    if (autoFilledIdx >= 0) {
      const prev = document.getElementById('game-score-' + autoFilledIdx);
      if (prev) { prev.style.opacity = ''; prev.style.color = ''; }
      autoFilledIdx = -1;
    }
  }
};

window.backToMemberSelect = function () {
  gameStep = 1;
  renderGame();
};

window.recordGame = function () {
  const errorEl = document.getElementById('game-input-error');
  errorEl.textContent = '';

  const count = currentGamePlayerCount;
  const scores = [];
  for (let i = 0; i < count; i++) {
    const val = document.getElementById(`game-score-${i}`).value;
    if (val === '') {
      errorEl.textContent = '全員の点数を入力してください';
      return;
    }
    scores.push(parseInt(val, 10));
  }

  if (scores.some(s => isNaN(s))) {
    errorEl.textContent = '数値を入力してください';
    return;
  }

  const okaStr = document.getElementById('game-oka').value;
  const startPoints = parseInt(okaStr.split('-')[0], 10);
  const expected = startPoints * count;
  const total = scores.reduce((a, b) => a + b, 0);

  if (Math.abs(total - expected) > 1000) {
    if (!confirm(`合計点が${total}点です（期待値${expected}点と${total - expected}点差）。\nこのまま記録しますか？`)) {
      return;
    }
  }

  const umaStr = document.getElementById('game-uma').value;
  const chipRate = parseInt(document.getElementById('game-chip-rate').value, 10);

  // Save state for next input
  gameInputState.uma = umaStr;
  gameInputState.oka = okaStr;
  gameInputState.chipRate = chipRate;

  const chips = [];
  for (let i = 0; i < count; i++) {
    chips.push(parseInt(document.getElementById(`game-chip-${i}`).value, 10) || 0);
  }

  const result = calculateGame(scores, umaStr, okaStr, count);

  const game = {
    id: genId('g'),
    timestamp: Date.now(),
    playerCount: count,
    playerIds: [...selectedPlayerIds],
    rawScores: scores,
    rankings: result.rankings,
    finalScores: result.finalScores,
    chips,
    uma: umaStr,
    oka: okaStr,
    chipRate,
    groupKey: getGroupKey(selectedPlayerIds)
  };

  Store.addGame(game);

  // Clear form for continuous input
  for (let i = 0; i < count; i++) {
    document.getElementById(`game-score-${i}`).value = '';
    const chipEl = document.getElementById(`game-chip-${i}`);
    if (chipEl) chipEl.value = '0';
  }

  // Show results tab with this group (today's session)
  resultsMode = 'group';
  resultsSelectedGroup = game.groupKey;
  resultsSessionFilter = 'today';
  switchTab('results');
};

// ---- Results ----
function renderResults() {
  let html = '<div class="page-header"><h2>成績</h2></div>';

  html += '<div class="segment-control">';
  html += `<button class="segment-btn ${resultsMode === 'group' ? 'active' : ''}" onclick="setResultsMode('group')">グループ別</button>`;
  html += `<button class="segment-btn ${resultsMode === 'individual' ? 'active' : ''}" onclick="setResultsMode('individual')">個人別</button>`;
  html += '</div>';

  if (resultsMode === 'group') {
    html += renderResultsGroup();
  } else {
    html += renderResultsIndividual();
  }

  app.innerHTML = html;

  // Render graphs after DOM is set
  if (resultsMode === 'group' && resultsSelectedGroup) {
    const allGroupGames = Store.getGamesByGroup(resultsSelectedGroup);
    const games = filterGamesBySession(allGroupGames, resultsSessionFilter);
    if (games.length >= 2) {
      renderScoreGraph('results-graph-canvas', 'results-graph-tooltip', 'results-graph-legend', games);
    }
    attachSessionToggleEvents();
    attachDeleteGameEvents();
  } else if (resultsMode === 'individual' && resultsSelectedUser) {
    const games = Store.getGamesByUser(resultsSelectedUser);
    if (games.length >= 2) {
      renderIndividualGraph('individual-graph-canvas', 'individual-graph-tooltip', 'individual-graph-legend', games, resultsSelectedUser);
    }
  }
}

window.setResultsMode = function (mode) {
  resultsMode = mode;
  renderResults();
};

function getTodaySessionKey() {
  const d = new Date();
  return `${d.getFullYear()}/${String(d.getMonth() + 1).padStart(2, '0')}/${String(d.getDate()).padStart(2, '0')}`;
}

function filterGamesBySession(games, filter) {
  if (filter === 'all') return games;
  const targetDate = filter === 'today' ? getTodaySessionKey() : filter;
  return games.filter(g => getSessionKey(g.timestamp) === targetDate);
}

function renderResultsGroup() {
  const allGames = Store.getGames();
  const groupKeys = [...new Set(allGames.map(g => g.groupKey))];

  if (groupKeys.length === 0) {
    return '<div class="empty-state"><p>対局データがありません</p></div>';
  }

  if (!resultsSelectedGroup || !groupKeys.includes(resultsSelectedGroup)) {
    resultsSelectedGroup = groupKeys[0];
  }

  let html = '<select class="dropdown-select" onchange="changeResultsGroup(this.value)">';
  groupKeys.forEach(key => {
    const games = Store.getGames().filter(g => g.groupKey === key);
    if (games.length === 0) return;
    const names = games[0].playerIds.map(id => Store.getUserName(id)).join(', ');
    html += `<option value="${key}" ${key === resultsSelectedGroup ? 'selected' : ''}>${names} (${games.length}局)</option>`;
  });
  html += '</select>';

  const allGroupGames = Store.getGamesByGroup(resultsSelectedGroup);
  if (allGroupGames.length === 0) return html + '<div class="empty-state"><p>対局データがありません</p></div>';

  // セッション（日付）フィルター
  const sessionDates = [...new Set(allGroupGames.map(g => getSessionKey(g.timestamp)))].sort().reverse();
  const todayKey = getTodaySessionKey();

  // todayフィルターで今日のデータがない場合はallにフォールバック
  if (resultsSessionFilter === 'today' && !sessionDates.includes(todayKey)) {
    resultsSessionFilter = 'all';
  }

  html += '<div class="session-filter" style="margin-top:12px">';
  html += '<select class="dropdown-select" onchange="changeSessionFilter(this.value)">';
  html += `<option value="today" ${resultsSessionFilter === 'today' ? 'selected' : ''}>今日 (${todayKey})</option>`;
  html += `<option value="all" ${resultsSessionFilter === 'all' ? 'selected' : ''}>全期間</option>`;
  sessionDates.forEach(date => {
    if (date === todayKey) return;
    const gamesOnDate = allGroupGames.filter(g => getSessionKey(g.timestamp) === date);
    html += `<option value="${date}" ${resultsSessionFilter === date ? 'selected' : ''}>${date} (${gamesOnDate.length}局)</option>`;
  });
  html += '</select></div>';

  const games = filterGamesBySession(allGroupGames, resultsSessionFilter);
  if (games.length === 0) return html + '<div class="empty-state"><p>選択した期間に対局データがありません</p></div>';

  const playerIds = games[0].playerIds;
  const count = games[0].playerCount;
  const stats = computePlayerStats(games, playerIds);
  const chipRate = games[games.length - 1].chipRate || 0;

  // Summary cards
  const ranked = playerIds.map(id => ({
    id,
    name: Store.getUserName(id),
    total: stats[id].totalScore,
    chips: stats[id].totalChips,
    first: stats[id].first,
    last: stats[id].last
  }));
  ranked.sort((a, b) => {
    const at = chipRate > 0 ? a.total + a.chips * chipRate : a.total;
    const bt = chipRate > 0 ? b.total + b.chips * chipRate : b.total;
    return bt - at;
  });

  html += `<div class="summary-cards ${count === 3 ? 'three-players' : ''}">`;
  const rankLabels = ['1st', '2nd', '3rd', '4th'];
  ranked.forEach((p, rank) => {
    const totalWithChip = chipRate > 0 ? Math.round((p.total + p.chips * chipRate) * 10) / 10 : p.total;
    const scoreClass = totalWithChip >= 0 ? 'positive' : 'negative';
    const sign = totalWithChip >= 0 ? '+' : '';
    const hasChips = ranked.some(r => r.chips !== 0);
    let chipHtml = '';
    if (hasChips) {
      const chipSign = p.chips >= 0 ? '+' : '';
      chipHtml = `<div class="chip-info">${chipSign}${p.chips}枚${chipRate > 0 ? ` (${chipSign}${p.chips * chipRate}pt)` : ''}</div>`;
    }
    const colorIdx = playerIds.indexOf(p.id);
    html += `<div class="summary-card">
      <div class="rank">${rankLabels[rank]}</div>
      <div class="player-name" style="color:${PLAYER_COLORS[colorIdx]}">${p.name}</div>
      <div class="score ${scoreClass}">${sign}${totalWithChip}</div>
      ${chipHtml}
      <div class="win-rate">トップ${p.first} / ラス${p.last}</div>
    </div>`;
  });
  html += '</div>';

  // Score graph
  if (games.length >= 2) {
    html += '<h3>スコア推移</h3>';
    html += '<div class="card graph-card">';
    html += '<canvas class="graph-canvas" id="results-graph-canvas"></canvas>';
    html += '<div class="graph-tooltip" id="results-graph-tooltip"></div>';
    html += '<div class="graph-legend" id="results-graph-legend"></div>';
    html += '</div>';
  }

  // History table with sessions
  html += '<h3>対局履歴</h3>';
  html += '<div class="table-wrapper">';
  html += '<table><thead><tr><th>#</th>';
  playerIds.forEach((id, i) => {
    html += `<th style="color:white">${Store.getUserName(id)}</th>`;
  });
  html += '<th></th></tr></thead><tbody id="results-history-body">';

  const sessions = groupGamesBySessions(games);
  if (sessions.length > 1) {
    sessions.forEach((session, si) => {
      const isLatest = si === sessions.length - 1;
      html += `<tr class="session-header-row"><td colspan="${count + 2}">
        <div class="session-header" data-session="${si}">
          <span class="session-title">${session.date} (${session.games.length}局)</span>
          <span class="session-toggle ${isLatest ? '' : 'collapsed'}">&#9660;</span>
        </div>
      </td></tr>`;

      session.games.forEach((game, gi) => {
        const globalIdx = session.indices[gi];
        const display = isLatest ? '' : 'display:none';
        html += `<tr class="session-game-row session-group-${si}" style="${display}"><td>${globalIdx + 1}</td>`;
        game.finalScores.forEach((score, pi) => {
          const cls = score >= 0 ? 'positive' : 'negative';
          const sign = score >= 0 ? '+' : '';
          const rankBadge = game.rankings[pi] === 1 ? ' (1)' : '';
          const chipDisplay = (game.chips && game.chips[pi] !== 0) ? `<br><small class="chip-badge">${game.chips[pi] > 0 ? '+' : ''}${game.chips[pi]}枚</small>` : '';
          html += `<td class="${cls}">${sign}${score}${rankBadge}${chipDisplay}</td>`;
        });
        html += `<td><button class="btn-delete-game" data-game-id="${game.id}" title="削除">x</button></td></tr>`;
      });

      // Subtotal
      const subTotals = new Array(count).fill(0);
      const subChips = new Array(count).fill(0);
      session.games.forEach(game => {
        game.finalScores.forEach((s, i) => subTotals[i] += s);
        if (game.chips) game.chips.forEach((c, i) => subChips[i] += c);
      });
      html += `<tr class="session-subtotal-row session-group-${si}" style="${isLatest ? '' : 'display:none'}"><td>小計</td>`;
      subTotals.forEach((t, i) => {
        const rounded = Math.round(t * 10) / 10;
        const finalSub = chipRate > 0 ? Math.round((rounded + subChips[i] * chipRate) * 10) / 10 : rounded;
        const cls = finalSub >= 0 ? 'positive' : 'negative';
        const sign = finalSub >= 0 ? '+' : '';
        html += `<td class="${cls}">${sign}${finalSub}</td>`;
      });
      html += '<td></td></tr>';
    });
  } else {
    games.forEach((game, gi) => {
      html += `<tr><td>${gi + 1}</td>`;
      game.finalScores.forEach((score, pi) => {
        const cls = score >= 0 ? 'positive' : 'negative';
        const sign = score >= 0 ? '+' : '';
        const rankBadge = game.rankings[pi] === 1 ? ' (1)' : '';
        const chipDisplay = (game.chips && game.chips[pi] !== 0) ? `<br><small class="chip-badge">${game.chips[pi] > 0 ? '+' : ''}${game.chips[pi]}枚</small>` : '';
        html += `<td class="${cls}">${sign}${score}${rankBadge}${chipDisplay}</td>`;
      });
      html += `<td><button class="btn-delete-game" data-game-id="${game.id}" title="削除">x</button></td></tr>`;
    });
  }

  // Total row
  html += '<tr class="total-row"><td>計</td>';
  const totals = new Array(count).fill(0);
  const chipTotals = new Array(count).fill(0);
  games.forEach(game => {
    game.finalScores.forEach((s, i) => totals[i] += s);
    if (game.chips) game.chips.forEach((c, i) => chipTotals[i] += c);
  });
  totals.forEach((t, i) => {
    const rounded = Math.round(t * 10) / 10;
    const finalTotal = chipRate > 0 ? Math.round((rounded + chipTotals[i] * chipRate) * 10) / 10 : rounded;
    const cls = finalTotal >= 0 ? 'positive' : 'negative';
    const sign = finalTotal >= 0 ? '+' : '';
    const hasChips = chipTotals.some(c => c !== 0);
    const chipDisplay = hasChips ? `<br><small class="chip-badge">${chipTotals[i] >= 0 ? '+' : ''}${chipTotals[i]}枚</small>` : '';
    html += `<td class="${cls}">${sign}${finalTotal}${chipDisplay}</td>`;
  });
  html += '<td></td></tr>';

  html += '</tbody></table></div>';

  // Settlement
  html += renderSettlement(games, playerIds, count, chipRate);

  return html;
}

function renderSettlement(games, playerIds, count, chipRate) {
  const settings = Store.getSettings();
  const rate = resultsRate;

  let html = '<div class="card" style="margin-top:16px">';
  html += '<h3>精算</h3>';
  html += '<div class="input-options"><label>レート: <select id="results-rate-select" onchange="changeResultsRate(this.value)">';
  RATE_OPTIONS.forEach(o => {
    html += `<option value="${o.value}" ${o.value === rate ? 'selected' : ''}>${o.label}</option>`;
  });
  html += '</select></label></div>';

  if (rate === 0) {
    html += '<p class="settlement-none">レートを選択してください</p>';
  } else {
    const totals = new Array(count).fill(0);
    const chipTotals = new Array(count).fill(0);
    games.forEach(game => {
      game.finalScores.forEach((s, i) => totals[i] += s);
      if (game.chips) game.chips.forEach((c, i) => chipTotals[i] += c);
    });

    const results = playerIds.map((id, i) => {
      const scorePoints = Math.round(totals[i] * rate * 10) / 10;
      const chipPoints = chipRate > 0 ? chipTotals[i] * chipRate : 0;
      const total = Math.round((scorePoints + chipPoints) * 10) / 10;
      return { name: Store.getUserName(id), total };
    });
    results.sort((a, b) => b.total - a.total);

    html += '<div class="settlement-list">';
    results.forEach(r => {
      const cls = r.total >= 0 ? 'positive' : 'negative';
      const sign = r.total >= 0 ? '+' : '';
      html += `<div class="settlement-row">
        <span class="settlement-name">${r.name}</span>
        <span class="settlement-points ${cls}">${sign}${r.total}pt</span>
      </div>`;
    });
    html += '</div>';
  }
  html += '</div>';
  return html;
}

window.changeResultsGroup = function (groupKey) {
  resultsSelectedGroup = groupKey;
  resultsSessionFilter = 'today'; // グループ変更時はデフォルトに戻す
  renderResults();
};

window.changeSessionFilter = function (val) {
  resultsSessionFilter = val;
  renderResults();
};

window.changeResultsRate = function (val) {
  resultsRate = parseInt(val, 10);
  renderResults();
};

function attachSessionToggleEvents() {
  document.querySelectorAll('.session-header').forEach(hdr => {
    hdr.addEventListener('click', () => {
      const si = hdr.dataset.session;
      const groupClass = `session-group-${si}`;
      const toggle = hdr.querySelector('.session-toggle');
      const isCollapsed = toggle.classList.contains('collapsed');
      toggle.classList.toggle('collapsed');
      document.querySelectorAll(`.${groupClass}`).forEach(row => {
        row.style.display = isCollapsed ? '' : 'none';
      });
    });
  });
}

function attachDeleteGameEvents() {
  document.querySelectorAll('.btn-delete-game').forEach(btn => {
    btn.addEventListener('click', () => {
      const gameId = btn.dataset.gameId;
      if (confirm('この対局を削除しますか？')) {
        Store.deleteGame(gameId);
        renderResults();
      }
    });
  });
}

// ---- Results: Individual ----
function renderResultsIndividual() {
  const users = Store.getActiveUsers();
  const allGames = Store.getGames();

  if (users.length === 0 || allGames.length === 0) {
    return '<div class="empty-state"><p>データがありません</p></div>';
  }

  // Filter to users who have games
  const usersWithGames = users.filter(u => allGames.some(g => g.playerIds.includes(u.id)));
  if (usersWithGames.length === 0) {
    return '<div class="empty-state"><p>対局データがありません</p></div>';
  }

  if (!resultsSelectedUser || !usersWithGames.find(u => u.id === resultsSelectedUser)) {
    resultsSelectedUser = usersWithGames[0].id;
  }

  let html = '<select class="dropdown-select" onchange="changeResultsUser(this.value)">';
  usersWithGames.forEach(u => {
    html += `<option value="${u.id}" ${u.id === resultsSelectedUser ? 'selected' : ''}>${u.name}</option>`;
  });
  html += '</select>';

  const games = Store.getGamesByUser(resultsSelectedUser);
  const userName = Store.getUserName(resultsSelectedUser);

  // Stats
  let totalScore = 0;
  let rankSum = 0;
  let first = 0;
  let last = 0;
  games.forEach(g => {
    const idx = g.playerIds.indexOf(resultsSelectedUser);
    totalScore += g.finalScores[idx];
    rankSum += g.rankings[idx];
    if (g.rankings[idx] === 1) first++;
    if (g.rankings[idx] === g.playerCount) last++;
  });
  totalScore = Math.round(totalScore * 10) / 10;
  const avgRank = games.length > 0 ? (rankSum / games.length).toFixed(2) : '-';

  html += '<div class="card">';
  html += `<h3>${userName} の成績</h3>`;
  html += '<div class="stats-grid">';
  html += `<div class="stats-item"><span class="stats-label">通算スコア</span><span class="stats-value ${totalScore >= 0 ? 'positive' : 'negative'}">${totalScore >= 0 ? '+' : ''}${totalScore}</span></div>`;
  html += `<div class="stats-item"><span class="stats-label">対局数</span><span class="stats-value">${games.length}</span></div>`;
  html += `<div class="stats-item"><span class="stats-label">平均順位</span><span class="stats-value">${avgRank}位</span></div>`;
  html += `<div class="stats-item"><span class="stats-label">トップ/ラス</span><span class="stats-value">${first}/${last}</span></div>`;
  html += '</div></div>';

  // Opponent win rates
  const opponentStats = {};
  games.forEach(g => {
    const myIdx = g.playerIds.indexOf(resultsSelectedUser);
    const myRank = g.rankings[myIdx];
    g.playerIds.forEach((pid, i) => {
      if (pid === resultsSelectedUser) return;
      if (!opponentStats[pid]) opponentStats[pid] = { games: 0, wins: 0 };
      opponentStats[pid].games++;
      if (myRank < g.rankings[i]) opponentStats[pid].wins++;
    });
  });

  if (Object.keys(opponentStats).length > 0) {
    html += '<div class="card"><h3>対戦相手別勝率</h3>';
    html += '<table class="ranking-table"><thead><tr><th>相手</th><th>対局数</th><th>勝率</th></tr></thead><tbody>';
    Object.entries(opponentStats)
      .sort((a, b) => (b[1].wins / b[1].games) - (a[1].wins / a[1].games))
      .forEach(([pid, s]) => {
        const winRate = ((s.wins / s.games) * 100).toFixed(1);
        html += `<tr><td>${Store.getUserName(pid)}</td><td>${s.games}</td><td>${winRate}%</td></tr>`;
      });
    html += '</tbody></table></div>';
  }

  // Individual score graph
  if (games.length >= 2) {
    html += '<h3>スコア推移</h3>';
    html += '<div class="card graph-card">';
    html += '<canvas class="graph-canvas" id="individual-graph-canvas"></canvas>';
    html += '<div class="graph-tooltip" id="individual-graph-tooltip"></div>';
    html += '<div class="graph-legend" id="individual-graph-legend"></div>';
    html += '</div>';
  }

  return html;
}

window.changeResultsUser = function (userId) {
  resultsSelectedUser = userId;
  renderResults();
};

// ---- Statistics ----
function renderStatistics() {
  let html = '<div class="page-header"><h2>統計</h2></div>';

  html += '<div class="segment-control">';
  html += `<button class="segment-btn ${statsMode === 'all' ? 'active' : ''}" onclick="setStatsMode('all')">全体</button>`;
  html += `<button class="segment-btn ${statsMode === 'group' ? 'active' : ''}" onclick="setStatsMode('group')">グループ別</button>`;
  html += `<button class="segment-btn ${statsMode === 'individual' ? 'active' : ''}" onclick="setStatsMode('individual')">個人別</button>`;
  html += '</div>';

  if (statsMode === 'all') {
    html += renderStatsAll();
  } else if (statsMode === 'group') {
    html += renderStatsGroup();
  } else {
    html += renderStatsIndividual();
  }

  app.innerHTML = html;

  // DOM描画後のCanvas処理
  if (statsMode === 'group' && statsSelectedGroup) {
    const allGames = Store.getGames();
    let games = allGames.filter(g => g.groupKey === statsSelectedGroup);
    if (statsRecentFilter !== 'all') {
      games = games.slice(-parseInt(statsRecentFilter, 10));
    }
    if (games.length > 0) {
      const playerIds = games[0].playerIds;
      const count = games[0].playerCount;
      const stats = computePlayerStats(games, playerIds);
      // 順位分布グラフ
      playerIds.forEach((id, pi) => {
        if (stats[id] && stats[id].rankings.length > 0) {
          renderRankDistributionGraph(`stats-rank-dist-${pi}`, stats[id].rankings, count);
        }
      });
      // 収支グラフ
      if (games.length >= 2 && statsIncomeRate > 0) {
        const chipRate = games[games.length - 1].chipRate || 0;
        renderIncomeGraph('stats-income-canvas', 'stats-income-legend', games, playerIds, statsIncomeRate, chipRate);
      }
    }
  }

  if (statsMode === 'individual' && statsSelectedUser) {
    const games = Store.getGamesByUser(statsSelectedUser);
    if (games.length > 0) {
      // 順位分布グラフ: 3人麻雀と4人麻雀を分けて描画
      const games4 = games.filter(g => g.playerCount === 4);
      const games3 = games.filter(g => g.playerCount === 3);
      if (games4.length > 0) {
        const rankings4 = games4.map(g => g.rankings[g.playerIds.indexOf(statsSelectedUser)]);
        renderRankDistributionGraph('stats-individual-rank-dist-4', rankings4, 4);
      }
      if (games3.length > 0) {
        const rankings3 = games3.map(g => g.rankings[g.playerIds.indexOf(statsSelectedUser)]);
        renderRankDistributionGraph('stats-individual-rank-dist-3', rankings3, 3);
      }
      // 月別成績推移
      if (games.length >= 2) {
        renderMonthlyGraph('stats-monthly-canvas', games, statsSelectedUser);
      }
    }
  }
}

window.setStatsMode = function (mode) {
  statsMode = mode;
  renderStatistics();
};

function renderStatsAll() {
  const allGames = Store.getGames();
  if (allGames.length === 0) {
    return '<div class="empty-state"><p>対局データがありません</p></div>';
  }

  let html = '<div class="card stats-overview"><div class="stats-total-games">総対局数: ' + allGames.length + '</div></div>';

  // Collect stats per user
  const userStats = {};
  allGames.forEach(g => {
    g.playerIds.forEach((id, i) => {
      if (!userStats[id]) userStats[id] = { sum: 0, count: 0, first: 0, second: 0, last: 0, playerCounts: {} };
      userStats[id].sum += g.rankings[i];
      userStats[id].count++;
      if (g.rankings[i] === 1) userStats[id].first++;
      if (g.rankings[i] === 2) userStats[id].second++;
      if (g.rankings[i] === g.playerCount) userStats[id].last++;
      userStats[id].playerCounts[g.playerCount] = (userStats[id].playerCounts[g.playerCount] || 0) + 1;
    });
  });

  const ranking = Object.entries(userStats)
    .map(([id, s]) => {
      const avg = s.sum / s.count;
      const rentaiRate = ((s.first + s.second) / s.count * 100).toFixed(1);
      const lastAvoidRate = (((s.count - s.last) / s.count) * 100).toFixed(1);
      // 最頻のplayerCountを取得
      const mainPlayerCount = Object.entries(s.playerCounts).sort((a, b) => b[1] - a[1])[0][0];
      const dan = calcStableDan(avg, s.count, parseInt(mainPlayerCount, 10));
      return { id, name: Store.getUserName(id), avg, count: s.count, rentaiRate, lastAvoidRate, dan };
    })
    .filter(r => r.name !== '???') // 削除済みユーザーを除外
    .sort((a, b) => a.avg - b.avg);

  html += '<div class="card"><h3>総合ランキング</h3>';
  html += '<div class="table-wrapper"><table class="ranking-table"><thead><tr><th>#</th><th>名前</th><th>平均順位</th><th>連対率</th><th>ラス回避</th><th>安定段位</th><th>局数</th></tr></thead><tbody>';
  ranking.forEach((r, i) => {
    html += `<tr><td>${i + 1}</td><td>${r.name}</td><td>${r.avg.toFixed(2)}位</td><td>${r.rentaiRate}%</td><td>${r.lastAvoidRate}%</td><td>${r.dan.dan}<br><small style="color:#757575">R${r.dan.r}</small></td><td>${r.count}</td></tr>`;
  });
  html += '</tbody></table></div></div>';

  return html;
}

function renderStatsGroup() {
  const allGames = Store.getGames();
  const groupKeys = [...new Set(allGames.map(g => g.groupKey))];

  if (groupKeys.length === 0) {
    return '<div class="empty-state"><p>対局データがありません</p></div>';
  }

  if (!statsSelectedGroup || !groupKeys.includes(statsSelectedGroup)) {
    statsSelectedGroup = groupKeys[0];
  }

  let html = '<select class="dropdown-select" onchange="changeStatsGroup(this.value)">';
  groupKeys.forEach(key => {
    const games = allGames.filter(g => g.groupKey === key);
    const names = games[0].playerIds.map(id => Store.getUserName(id)).join(', ');
    html += `<option value="${key}" ${key === statsSelectedGroup ? 'selected' : ''}>${names} (${games.length}局)</option>`;
  });
  html += '</select>';

  const allGroupGames = allGames.filter(g => g.groupKey === statsSelectedGroup);
  if (allGroupGames.length === 0) return html;

  // 直近N局フィルター
  html += '<div class="segment-control" style="margin-top:12px">';
  html += `<button class="segment-btn ${statsRecentFilter === 'all' ? 'active' : ''}" onclick="setStatsRecentFilter('all')">全期間</button>`;
  html += `<button class="segment-btn ${statsRecentFilter === '10' ? 'active' : ''}" onclick="setStatsRecentFilter('10')">直近10局</button>`;
  html += `<button class="segment-btn ${statsRecentFilter === '20' ? 'active' : ''}" onclick="setStatsRecentFilter('20')">直近20局</button>`;
  html += '</div>';

  let games = allGroupGames;
  if (statsRecentFilter !== 'all') {
    const n = parseInt(statsRecentFilter, 10);
    games = allGroupGames.slice(-n);
  }
  if (games.length === 0) return html + '<div class="empty-state"><p>対局データがありません</p></div>';

  const playerIds = games[0].playerIds;
  const count = games[0].playerCount;
  const stats = computePlayerStats(games, playerIds);

  playerIds.forEach((id, pi) => {
    const s = stats[id];
    if (!s || s.gameCount === 0) return;
    const avgRank = (s.rankings.reduce((a, b) => a + b, 0) / s.rankings.length).toFixed(2);
    const winRate = ((s.first / s.gameCount) * 100).toFixed(1);
    const avgScore = (s.totalScore / s.gameCount).toFixed(1);
    const maxScore = Math.max(...s.scores);
    const minScore = Math.min(...s.scores);

    let maxStreak = 0, streak = 0;
    s.rankings.forEach(r => {
      if (r === 1) { streak++; maxStreak = Math.max(maxStreak, streak); } else { streak = 0; }
    });

    const rentaiRate = s.gameCount > 0 ? (((s.first + s.second) / s.gameCount) * 100).toFixed(1) : '0.0';
    const lastAvoidRate = s.gameCount > 0 ? (((s.gameCount - s.last) / s.gameCount) * 100).toFixed(1) : '0.0';

    html += `<div class="stats-player-card">
      <div class="stats-player-name" style="color:${PLAYER_COLORS[pi]}">${Store.getUserName(id)}</div>
      <div class="stats-grid">
        <div class="stats-item"><span class="stats-label">平均順位</span><span class="stats-value">${avgRank}位</span></div>
        <div class="stats-item"><span class="stats-label">勝率(1位率)</span><span class="stats-value">${winRate}%</span></div>
        <div class="stats-item"><span class="stats-label">連対率</span><span class="stats-value">${rentaiRate}%</span></div>
        <div class="stats-item"><span class="stats-label">ラス回避率</span><span class="stats-value">${lastAvoidRate}%</span></div>
        <div class="stats-item"><span class="stats-label">最大連勝</span><span class="stats-value">${maxStreak}連勝</span></div>
        <div class="stats-item"><span class="stats-label">平均スコア</span><span class="stats-value ${parseFloat(avgScore) >= 0 ? 'positive' : 'negative'}">${parseFloat(avgScore) >= 0 ? '+' : ''}${avgScore}</span></div>
        <div class="stats-item"><span class="stats-label">最高スコア</span><span class="stats-value ${maxScore >= 0 ? 'positive' : 'negative'}">${maxScore >= 0 ? '+' : ''}${maxScore}</span></div>
        <div class="stats-item"><span class="stats-label">最低スコア</span><span class="stats-value ${minScore >= 0 ? 'positive' : 'negative'}">${minScore >= 0 ? '+' : ''}${minScore}</span></div>
        <div class="stats-item"><span class="stats-label">安定段位</span><span class="stats-value">${(() => { const d = calcStableDan(parseFloat(avgRank), s.gameCount, count); return d.dan + (d.r ? '<br><small style="color:#757575">R' + d.r + '</small>' : ''); })()}</span></div>
      </div>
      <div class="card" style="margin-top:8px"><h4>順位分布</h4><canvas class="graph-canvas" id="stats-rank-dist-${pi}"></canvas></div>
    </div>`;
  });

  // 収支グラフ
  if (games.length >= 2) {
    html += '<div class="card" style="margin-top:16px"><h3>収支推移</h3>';
    html += '<div class="input-options"><label>レート: <select id="stats-income-rate" onchange="changeStatsIncomeRate(this.value)">';
    RATE_OPTIONS.forEach(o => {
      html += `<option value="${o.value}" ${o.value === statsIncomeRate ? 'selected' : ''}>${o.label}</option>`;
    });
    html += '</select></label></div>';
    if (statsIncomeRate > 0) {
      html += '<canvas class="graph-canvas" id="stats-income-canvas"></canvas>';
      html += '<div class="graph-legend" id="stats-income-legend"></div>';
    } else {
      html += '<p style="color:#757575;text-align:center;padding:16px 0">レートを選択してください</p>';
    }
    html += '</div>';
  }

  return html;
}

window.changeStatsGroup = function (groupKey) {
  statsSelectedGroup = groupKey;
  statsRecentFilter = 'all';
  renderStatistics();
};

window.setStatsRecentFilter = function (val) {
  statsRecentFilter = val;
  renderStatistics();
};

window.changeStatsIncomeRate = function (val) {
  statsIncomeRate = parseInt(val, 10);
  renderStatistics();
};

function renderStatsIndividual() {
  const users = Store.getActiveUsers();
  const allGames = Store.getGames();
  const usersWithGames = users.filter(u => allGames.some(g => g.playerIds.includes(u.id)));

  if (usersWithGames.length === 0) {
    return '<div class="empty-state"><p>対局データがありません</p></div>';
  }

  if (!statsSelectedUser || !usersWithGames.find(u => u.id === statsSelectedUser)) {
    statsSelectedUser = usersWithGames[0].id;
  }

  let html = '<select class="dropdown-select" onchange="changeStatsUser(this.value)">';
  usersWithGames.forEach(u => {
    html += `<option value="${u.id}" ${u.id === statsSelectedUser ? 'selected' : ''}>${u.name}</option>`;
  });
  html += '</select>';

  const games = Store.getGamesByUser(statsSelectedUser);
  const name = Store.getUserName(statsSelectedUser);

  let totalScore = 0, rankSum = 0, first = 0, second = 0, last = 0;
  const scores = [];
  games.forEach(g => {
    const idx = g.playerIds.indexOf(statsSelectedUser);
    totalScore += g.finalScores[idx];
    rankSum += g.rankings[idx];
    scores.push(g.finalScores[idx]);
    if (g.rankings[idx] === 1) first++;
    if (g.rankings[idx] === 2) second++;
    if (g.rankings[idx] === g.playerCount) last++;
  });
  totalScore = Math.round(totalScore * 10) / 10;

  let maxStreak = 0, streak = 0;
  games.forEach(g => {
    const idx = g.playerIds.indexOf(statsSelectedUser);
    if (g.rankings[idx] === 1) { streak++; maxStreak = Math.max(maxStreak, streak); } else { streak = 0; }
  });

  const avgRank = games.length > 0 ? (rankSum / games.length).toFixed(2) : '-';
  const avgRankNum = games.length > 0 ? rankSum / games.length : 0;
  const winRate = games.length > 0 ? ((first / games.length) * 100).toFixed(1) : '0.0';
  const rentaiRate = games.length > 0 ? (((first + second) / games.length) * 100).toFixed(1) : '0.0';
  const lastAvoidRate = games.length > 0 ? (((games.length - last) / games.length) * 100).toFixed(1) : '0.0';
  const avgScore = games.length > 0 ? (totalScore / games.length).toFixed(1) : '0';
  const maxScore = scores.length > 0 ? Math.max(...scores) : 0;
  const minScore = scores.length > 0 ? Math.min(...scores) : 0;
  // 最頻のplayerCountを使用
  const pcCounts = {};
  games.forEach(g => { pcCounts[g.playerCount] = (pcCounts[g.playerCount] || 0) + 1; });
  const mainPc = parseInt(Object.entries(pcCounts).sort((a, b) => b[1] - a[1])[0][0], 10);
  const dan = calcStableDan(avgRankNum, games.length, mainPc);

  html += `<div class="stats-player-card">
    <div class="stats-player-name">${name}</div>
    <div class="stats-grid">
      <div class="stats-item"><span class="stats-label">通算スコア</span><span class="stats-value ${totalScore >= 0 ? 'positive' : 'negative'}">${totalScore >= 0 ? '+' : ''}${totalScore}</span></div>
      <div class="stats-item"><span class="stats-label">対局数</span><span class="stats-value">${games.length}</span></div>
      <div class="stats-item"><span class="stats-label">平均順位</span><span class="stats-value">${avgRank}位</span></div>
      <div class="stats-item"><span class="stats-label">勝率(1位率)</span><span class="stats-value">${winRate}%</span></div>
      <div class="stats-item"><span class="stats-label">連対率</span><span class="stats-value">${rentaiRate}%</span></div>
      <div class="stats-item"><span class="stats-label">ラス回避率</span><span class="stats-value">${lastAvoidRate}%</span></div>
      <div class="stats-item"><span class="stats-label">最大連勝</span><span class="stats-value">${maxStreak}連勝</span></div>
      <div class="stats-item"><span class="stats-label">平均スコア</span><span class="stats-value ${parseFloat(avgScore) >= 0 ? 'positive' : 'negative'}">${parseFloat(avgScore) >= 0 ? '+' : ''}${avgScore}</span></div>
      <div class="stats-item"><span class="stats-label">最高スコア</span><span class="stats-value ${maxScore >= 0 ? 'positive' : 'negative'}">${maxScore >= 0 ? '+' : ''}${maxScore}</span></div>
      <div class="stats-item"><span class="stats-label">最低スコア</span><span class="stats-value ${minScore >= 0 ? 'positive' : 'negative'}">${minScore >= 0 ? '+' : ''}${minScore}</span></div>
      <div class="stats-item"><span class="stats-label">安定段位</span><span class="stats-value">${dan.dan}${dan.r ? `<br><small style="color:#757575">R${dan.r}</small>` : ''}</span></div>
    </div>
  </div>`;

  // 順位分布グラフ（3人/4人麻雀別）
  const games4p = games.filter(g => g.playerCount === 4);
  const games3p = games.filter(g => g.playerCount === 3);
  if (games4p.length > 0 || games3p.length > 0) {
    html += '<div class="card"><h3>順位分布</h3>';
    if (games4p.length > 0) {
      html += `<h4 style="color:#757575;margin:8px 0 4px">4人麻雀 (${games4p.length}局)</h4>`;
      html += '<canvas class="graph-canvas" id="stats-individual-rank-dist-4"></canvas>';
    }
    if (games3p.length > 0) {
      html += `<h4 style="color:#757575;margin:8px 0 4px">3人麻雀 (${games3p.length}局)</h4>`;
      html += '<canvas class="graph-canvas" id="stats-individual-rank-dist-3"></canvas>';
    }
    html += '</div>';
  }

  // 月別成績推移
  if (games.length >= 2) {
    html += '<div class="card"><h3>月別平均順位</h3><canvas class="graph-canvas" id="stats-monthly-canvas"></canvas></div>';
  }

  // 相性マトリクス（対戦相手別詳細統計）
  const opponentStats = {};
  games.forEach(g => {
    const myIdx = g.playerIds.indexOf(statsSelectedUser);
    const myRank = g.rankings[myIdx];
    const myScore = g.finalScores[myIdx];
    g.playerIds.forEach((pid, i) => {
      if (pid === statsSelectedUser) return;
      if (!opponentStats[pid]) opponentStats[pid] = { games: 0, wins: 0, myRankSum: 0, myScoreSum: 0 };
      opponentStats[pid].games++;
      if (myRank < g.rankings[i]) opponentStats[pid].wins++;
      opponentStats[pid].myRankSum += myRank;
      opponentStats[pid].myScoreSum += myScore;
    });
  });

  if (Object.keys(opponentStats).length > 0) {
    html += '<div class="card"><h3>相性マトリクス</h3>';
    html += '<div class="table-wrapper"><table class="ranking-table"><thead><tr><th>相手</th><th>局数</th><th>勝率</th><th>平均順位</th><th>通算スコア</th></tr></thead><tbody>';
    Object.entries(opponentStats)
      .sort((a, b) => (b[1].wins / b[1].games) - (a[1].wins / a[1].games))
      .forEach(([pid, s]) => {
        const winRate = ((s.wins / s.games) * 100).toFixed(1);
        const avgRk = (s.myRankSum / s.games).toFixed(2);
        const totalSc = Math.round(s.myScoreSum * 10) / 10;
        const scCls = totalSc >= 0 ? 'positive' : 'negative';
        const scSign = totalSc >= 0 ? '+' : '';
        html += `<tr><td>${Store.getUserName(pid)}</td><td>${s.games}</td><td>${winRate}%</td><td>${avgRk}位</td><td class="${scCls}">${scSign}${totalSc}</td></tr>`;
      });
    html += '</tbody></table></div></div>';
  }

  // 参加グループ一覧
  const groupKeys = [...new Set(games.map(g => g.groupKey))];
  if (groupKeys.length > 0) {
    html += '<div class="card"><h3>参加グループ一覧</h3>';
    groupKeys.forEach(key => {
      const gGames = games.filter(g => g.groupKey === key);
      const names = gGames[0].playerIds.map(id => Store.getUserName(id)).join(', ');
      html += `<div class="recent-group-card" onclick="viewGroupFromStats('${key}')">
        <div><div class="recent-group-names">${names}</div><div class="recent-group-meta">${gGames.length}局</div></div>
        <span style="color:var(--text-secondary);font-size:20px">&#8250;</span>
      </div>`;
    });
    html += '</div>';
  }

  return html;
}

window.changeStatsUser = function (userId) {
  statsSelectedUser = userId;
  renderStatistics();
};

window.viewGroupFromStats = function (groupKey) {
  resultsMode = 'group';
  resultsSelectedGroup = groupKey;
  switchTab('results');
};

// ---- Tools ----
function renderTools() {
  let html = '<div class="page-header"><h2>ツール</h2></div>';

  html += '<div class="segment-control">';
  html += `<button class="segment-btn ${toolsMode === 'points' ? 'active' : ''}" onclick="setToolsMode('points')">点数早見表</button>`;
  html += `<button class="segment-btn ${toolsMode === 'fu' ? 'active' : ''}" onclick="setToolsMode('fu')">符計算</button>`;
  html += '</div>';

  if (toolsMode === 'points') {
    html += renderPointsTable();
  } else {
    html += renderFuCalculator();
  }

  app.innerHTML = html;

  if (toolsMode === 'fu') {
    document.getElementById('btn-calc-fu').addEventListener('click', calculateFu);
  }
}

window.setToolsMode = function (mode) {
  toolsMode = mode;
  renderTools();
};

function renderPointsTable() {
  let html = '<div class="toggle-row">';
  html += `<button class="toggle-btn ${pointsDealer === 'child' ? 'active' : ''}" onclick="setPointsDealer('child')">子</button>`;
  html += `<button class="toggle-btn ${pointsDealer === 'parent' ? 'active' : ''}" onclick="setPointsDealer('parent')">親</button>`;
  html += '</div>';

  html += '<div class="toggle-row" style="margin-top:8px">';
  html += `<button class="toggle-btn ${pointsTsumozon ? 'active' : ''}" onclick="setPointsTsumozon(true)">ツモ損あり</button>`;
  html += `<button class="toggle-btn ${!pointsTsumozon ? 'active' : ''}" onclick="setPointsTsumozon(false)">ツモ損なし</button>`;
  html += '<span style="font-size:11px;color:#757575;margin-left:8px">※3麻用</span>';
  html += '</div>';

  let data;
  if (pointsTsumozon) {
    data = pointsDealer === 'child' ? POINTS_CHILD : POINTS_PARENT;
  } else {
    data = pointsDealer === 'child' ? POINTS_CHILD_NO_TSUMOZON : POINTS_PARENT_NO_TSUMOZON;
  }
  const fuList = [20, 25, 30, 40, 50, 60, 70, 80, 90, 100, 110];

  html += '<div class="table-wrapper"><table class="points-table"><thead><tr><th>符＼翻</th><th>1翻</th><th>2翻</th><th>3翻</th><th>4翻</th></tr></thead><tbody>';
  fuList.forEach(fu => {
    const row = data[fu];
    if (!row) return;
    html += `<tr><td>${fu}符</td>`;
    for (let han = 1; han <= 4; han++) {
      if (row[han]) {
        const [ron, tsumo] = row[han];
        html += `<td>${ron}<br><small style="color:#757575">${tsumo}</small></td>`;
      } else {
        html += '<td>-</td>';
      }
    }
    html += '</tr>';
  });
  html += '</tbody></table></div>';

  const isParent = pointsDealer === 'parent';
  const noTsumozon = !pointsTsumozon;
  html += '<div class="card mangan-list"><h4>満貫以上</h4>';
  if (isParent) {
    html += `<div class="mangan-item"><span class="label">満貫 (5翻)</span><span class="values">ロン12000 / ツモ${noTsumozon ? '6000' : '4000'}ALL</span></div>`;
    html += `<div class="mangan-item"><span class="label">跳満 (6-7翻)</span><span class="values">ロン18000 / ツモ${noTsumozon ? '9000' : '6000'}ALL</span></div>`;
    html += `<div class="mangan-item"><span class="label">倍満 (8-10翻)</span><span class="values">ロン24000 / ツモ${noTsumozon ? '12000' : '8000'}ALL</span></div>`;
    html += `<div class="mangan-item"><span class="label">三倍満 (11-12翻)</span><span class="values">ロン36000 / ツモ${noTsumozon ? '18000' : '12000'}ALL</span></div>`;
    html += `<div class="mangan-item"><span class="label">役満</span><span class="values">ロン48000 / ツモ${noTsumozon ? '24000' : '16000'}ALL</span></div>`;
    if (noTsumozon) {
      html += '<p style="font-size:11px;color:#757575;margin-top:8px">※北家(子)の支払い分を残り2人で折半(100点単位切り上げ)</p>';
    }
  } else {
    html += `<div class="mangan-item"><span class="label">満貫 (5翻)</span><span class="values">ロン8000 / ツモ${noTsumozon ? '3000/5000' : '2000/4000'}</span></div>`;
    html += `<div class="mangan-item"><span class="label">跳満 (6-7翻)</span><span class="values">ロン12000 / ツモ${noTsumozon ? '4500/7500' : '3000/6000'}</span></div>`;
    html += `<div class="mangan-item"><span class="label">倍満 (8-10翻)</span><span class="values">ロン16000 / ツモ${noTsumozon ? '6000/10000' : '4000/8000'}</span></div>`;
    html += `<div class="mangan-item"><span class="label">三倍満 (11-12翻)</span><span class="values">ロン24000 / ツモ${noTsumozon ? '9000/15000' : '6000/12000'}</span></div>`;
    html += `<div class="mangan-item"><span class="label">役満</span><span class="values">ロン32000 / ツモ${noTsumozon ? '12000/20000' : '8000/16000'}</span></div>`;
    if (noTsumozon) {
      html += '<p style="font-size:11px;color:#757575;margin-top:8px">※北家(子)の支払い分を残り2人で折半(100点単位切り上げ)</p>';
    }
  }
  html += '</div>';

  return html;
}

window.setPointsDealer = function (dealer) {
  pointsDealer = dealer;
  renderTools();
};

window.setPointsTsumozon = function (val) {
  pointsTsumozon = val;
  renderTools();
};

function renderFuCalculator() {
  const mentsuOptions = `
    <option value="0">なし</option>
    <option value="2">明刻（中張牌）</option>
    <option value="4">明刻（幺九牌）</option>
    <option value="4">暗刻（中張牌）</option>
    <option value="8">暗刻（幺九牌）</option>
    <option value="8">明槓（中張牌）</option>
    <option value="16">明槓（幺九牌）</option>
    <option value="16">暗槓（中張牌）</option>
    <option value="32">暗槓（幺九牌）</option>
  `;

  let html = '<div class="card">';
  html += '<div class="fu-section"><h4>基本符（副底: 20符）</h4>';
  html += '<div class="fu-check"><label><input type="checkbox" id="fu-tsumo"> ツモアガリ (+2符)</label></div>';
  html += '<div class="fu-check"><label><input type="checkbox" id="fu-menzen"> メンゼンロン (+10符)</label></div>';
  html += '</div>';

  html += '<div class="fu-section"><h4>雀頭</h4>';
  html += '<select id="fu-jantou" class="dropdown-select">';
  html += '<option value="0">数牌・オタ風 (0符)</option>';
  html += '<option value="2">役牌 (2符)</option>';
  html += '<option value="4">ダブ東・ダブ南 (4符)</option>';
  html += '</select></div>';

  html += '<div class="fu-section"><h4>面子</h4>';
  for (let i = 0; i < 4; i++) {
    html += `<div class="fu-mentsu-row"><select class="fu-mentsu-type">${mentsuOptions}</select></div>`;
  }
  html += '</div>';

  html += '<div class="fu-section"><h4>待ち</h4>';
  html += '<select id="fu-machi" class="dropdown-select">';
  html += '<option value="0">両面・シャボ (0符)</option>';
  html += '<option value="2">カンチャン・ペンチャン・単騎 (2符)</option>';
  html += '</select></div>';

  html += '<button id="btn-calc-fu" class="btn btn-primary">符を計算</button>';
  html += '<div id="fu-result" class="result-box"></div>';
  html += '</div>';

  return html;
}

function calculateFu() {
  const isTsumo = document.getElementById('fu-tsumo').checked;
  const isMenzen = document.getElementById('fu-menzen').checked;
  const jantouFu = parseInt(document.getElementById('fu-jantou').value, 10);
  const machiFu = parseInt(document.getElementById('fu-machi').value, 10);

  if (isTsumo && isMenzen) {
    document.getElementById('fu-result').textContent = 'ツモとメンゼンロンは同時に選べません';
    return;
  }

  let totalFu = 20;
  if (isTsumo) totalFu += 2;
  if (isMenzen) totalFu += 10;
  totalFu += jantouFu;
  totalFu += machiFu;

  document.querySelectorAll('.fu-mentsu-type').forEach(sel => {
    totalFu += parseInt(sel.value, 10);
  });

  let roundedFu = Math.ceil(totalFu / 10) * 10;
  const resultEl = document.getElementById('fu-result');

  if (totalFu === 22 && isTsumo) {
    resultEl.textContent = `合計: ${totalFu}符 → 20符（ピンフツモ）`;
  } else if (roundedFu < 30) {
    resultEl.textContent = `合計: ${totalFu}符 → 30符（最低30符）`;
  } else {
    resultEl.textContent = `合計: ${totalFu}符 → ${roundedFu}符（切り上げ）`;
  }
}

// ---- Settings ----
function renderSettings() {
  const users = Store.getUsers();
  const activeUsers = users.filter(u => !u.deleted);
  const settings = Store.getSettings();

  let html = '<div class="page-header"><h2>設定</h2></div>';

  // User Management
  html += '<div class="settings-section"><h3>ユーザー管理</h3><div class="card">';
  if (activeUsers.length === 0) {
    html += '<p style="color:var(--text-secondary);text-align:center;padding:16px 0">ユーザーが登録されていません</p>';
  } else {
    activeUsers.forEach(u => {
      html += `<div class="user-list-item">
        <span class="user-name">${u.name}</span>
        <div class="user-actions">
          <button class="btn-edit" onclick="editUser('${u.id}')">編集</button>
          <button class="btn-delete" onclick="deleteUser('${u.id}')">削除</button>
        </div>
      </div>`;
    });
  }
  html += `<button class="btn btn-secondary" style="margin-top:12px" onclick="showAddUserSettingsModal()">ユーザーを追加</button>`;
  html += '</div></div>';

  // Default Rules
  html += '<div class="settings-section"><h3>デフォルトルール設定</h3>';

  // 4-player defaults
  html += '<div class="card"><h4 style="margin-bottom:12px;color:var(--primary)">4人麻雀</h4>';
  html += '<div class="input-options">';
  html += '<label>ウマ: <select id="settings-uma-4" onchange="saveSettingsFromUI()">';
  UMA_OPTIONS[4].forEach(o => {
    html += `<option value="${o.value}" ${o.value === settings.defaultUma['4'] ? 'selected' : ''}>${o.label}</option>`;
  });
  html += '</select></label>';
  html += '<label>オカ: <select id="settings-oka-4" onchange="saveSettingsFromUI()">';
  OKA_OPTIONS[4].forEach(o => {
    html += `<option value="${o.value}" ${o.value === settings.defaultOka['4'] ? 'selected' : ''}>${o.label}</option>`;
  });
  html += '</select></label>';
  html += '</div></div>';

  // 3-player defaults
  html += '<div class="card"><h4 style="margin-bottom:12px;color:var(--primary)">3人麻雀</h4>';
  html += '<div class="input-options">';
  html += '<label>ウマ: <select id="settings-uma-3" onchange="saveSettingsFromUI()">';
  UMA_OPTIONS[3].forEach(o => {
    html += `<option value="${o.value}" ${o.value === settings.defaultUma['3'] ? 'selected' : ''}>${o.label}</option>`;
  });
  html += '</select></label>';
  html += '<label>オカ: <select id="settings-oka-3" onchange="saveSettingsFromUI()">';
  OKA_OPTIONS[3].forEach(o => {
    html += `<option value="${o.value}" ${o.value === settings.defaultOka['3'] ? 'selected' : ''}>${o.label}</option>`;
  });
  html += '</select></label>';
  html += '</div></div>';

  // Common defaults
  html += '<div class="card"><h4 style="margin-bottom:12px;color:var(--primary)">共通</h4>';
  html += '<div class="input-options">';
  html += '<label>チップ: <select id="settings-chip-rate" onchange="saveSettingsFromUI()">';
  CHIP_RATE_OPTIONS.forEach(o => {
    html += `<option value="${o.value}" ${o.value === settings.defaultChipRate ? 'selected' : ''}>${o.label}</option>`;
  });
  html += '</select></label>';
  html += '<label>レート: <select id="settings-rate" onchange="saveSettingsFromUI()">';
  RATE_OPTIONS.forEach(o => {
    html += `<option value="${o.value}" ${o.value === settings.defaultRate ? 'selected' : ''}>${o.label}</option>`;
  });
  html += '</select></label>';
  html += '</div></div>';
  html += '</div>';

  // Data Management
  html += '<div class="settings-section"><h3>データ管理</h3>';

  html += '<div class="card"><div class="data-section-title">エクスポート</div>';
  html += '<p class="data-description">全データをJSONファイルとしてダウンロードします。</p>';
  html += '<button class="btn btn-primary" onclick="exportData()">データをエクスポート</button></div>';

  html += '<div class="card"><div class="data-section-title">インポート</div>';
  html += '<p class="data-description">JSONファイルからデータを復元します。現在のデータは上書きされます。</p>';
  html += '<input type="file" id="import-file" accept=".json,application/json" style="display:none">';
  html += '<button class="btn btn-primary" onclick="importData()">データをインポート</button></div>';

  html += '<div class="card"><div class="data-section-title">v1データ移行</div>';
  html += '<p class="data-description">旧バージョンのデータがある場合、v2形式に変換します。</p>';
  html += '<button class="btn btn-secondary" onclick="migrateV1()">v1データを移行</button></div>';

  html += '<div class="card"><div class="data-section-title">データリセット</div>';
  html += '<p class="data-description">全データを削除してリセットします。この操作は元に戻せません。</p>';
  html += '<button class="btn btn-danger" onclick="resetAllData()">データリセット</button></div>';

  html += '</div>';

  app.innerHTML = html;
}

window.editUser = function (userId) {
  const user = Store.getUsers().find(u => u.id === userId);
  if (!user) return;
  const overlay = document.createElement('div');
  overlay.className = 'modal-overlay';
  overlay.innerHTML = `
    <div class="modal-content">
      <div class="modal-title">ユーザー名を編集</div>
      <input type="text" class="input-text" id="modal-edit-name" value="${esc(user.name)}" maxlength="8">
      <div class="modal-actions">
        <button class="btn btn-secondary btn-small" onclick="closeModal()">キャンセル</button>
        <button class="btn btn-primary btn-small" onclick="saveEditUser('${userId}')">保存</button>
      </div>
    </div>
  `;
  document.body.appendChild(overlay);
  overlay.addEventListener('click', (e) => { if (e.target === overlay) closeModal(); });
  setTimeout(() => document.getElementById('modal-edit-name').focus(), 100);
};

window.saveEditUser = function (userId) {
  const name = document.getElementById('modal-edit-name').value.trim();
  if (!name) return;
  Store.updateUser(userId, name);
  closeModal();
  renderSettings();
};

window.deleteUser = function (userId) {
  const name = Store.getUserName(userId);
  if (confirm(`「${name}」を削除しますか？\n（対局データは保持されます）`)) {
    Store.deleteUser(userId);
    renderSettings();
  }
};

window.showAddUserSettingsModal = function () {
  const overlay = document.createElement('div');
  overlay.className = 'modal-overlay';
  overlay.innerHTML = `
    <div class="modal-content">
      <div class="modal-title">新規ユーザー追加</div>
      <input type="text" class="input-text" id="modal-settings-user-name" placeholder="名前" maxlength="8">
      <div class="modal-actions">
        <button class="btn btn-secondary btn-small" onclick="closeModal()">キャンセル</button>
        <button class="btn btn-primary btn-small" onclick="addUserFromSettings()">追加</button>
      </div>
    </div>
  `;
  document.body.appendChild(overlay);
  overlay.addEventListener('click', (e) => { if (e.target === overlay) closeModal(); });
  setTimeout(() => document.getElementById('modal-settings-user-name').focus(), 100);
};

window.addUserFromSettings = function () {
  const input = document.getElementById('modal-settings-user-name');
  const name = input.value.trim();
  if (!name) return;
  const existing = Store.getActiveUsers().find(u => u.name === name);
  if (existing) {
    alert('同じ名前のユーザーが既に存在します');
    return;
  }
  Store.addUser(name);
  closeModal();
  renderSettings();
};

window.saveSettingsFromUI = function () {
  const settings = Store.getSettings();
  const uma4El = document.getElementById('settings-uma-4');
  const oka4El = document.getElementById('settings-oka-4');
  const uma3El = document.getElementById('settings-uma-3');
  const oka3El = document.getElementById('settings-oka-3');
  const chipEl = document.getElementById('settings-chip-rate');
  const rateEl = document.getElementById('settings-rate');

  if (uma4El) settings.defaultUma['4'] = uma4El.value;
  if (oka4El) settings.defaultOka['4'] = oka4El.value;
  if (uma3El) settings.defaultUma['3'] = uma3El.value;
  if (oka3El) settings.defaultOka['3'] = oka3El.value;
  if (chipEl) settings.defaultChipRate = parseInt(chipEl.value, 10);
  if (rateEl) settings.defaultRate = parseInt(rateEl.value, 10);

  Store.saveSettings(settings);
};

window.exportData = function () {
  const data = Store.exportAll();
  const blob = new Blob([data], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const now = new Date();
  const dateStr = `${now.getFullYear()}${String(now.getMonth() + 1).padStart(2, '0')}${String(now.getDate()).padStart(2, '0')}`;
  const a = document.createElement('a');
  a.href = url;
  a.download = `mahjong_v2_backup_${dateStr}.json`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  setTimeout(() => URL.revokeObjectURL(url), 1000);
};

window.importData = function () {
  const fileInput = document.getElementById('import-file');
  // Androidで同じファイル再選択時にonchangeが発火するようリセット
  fileInput.value = '';
  fileInput.onchange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    if (!confirm('現在のデータを上書きします。よろしいですか？')) {
      fileInput.value = '';
      return;
    }
    const reader = new FileReader();
    reader.onload = (ev) => {
      try {
        Store.importAll(ev.target.result);
        alert('インポートが完了しました');
        renderSettings();
      } catch (err) {
        alert('インポートに失敗しました: ' + err.message);
      }
      fileInput.value = '';
    };
    reader.readAsText(file);
  };
  fileInput.click();
};

window.migrateV1 = function () {
  const v1raw = localStorage.getItem('mahjong-tracker');
  if (!v1raw) {
    alert('v1のデータが見つかりません');
    return;
  }
  if (!confirm('v1のデータをv2に移行します。v1データはそのまま残ります。よろしいですか？')) return;

  const result = Store.migrateV1();
  if (result && result.alreadyMigrated) {
    alert('v1データは既に移行済みです');
  } else if (result) {
    alert(`移行完了: ${result.playerNames.join(', ')} の ${result.gameCount} 局を移行しました`);
    renderSettings();
  } else {
    alert('移行できるデータがありませんでした');
  }
};

window.resetAllData = function () {
  if (confirm('全データをリセットしますか？この操作は元に戻せません。')) {
    if (confirm('本当に削除してよろしいですか？')) {
      Store.resetAll();
      location.reload();
    }
  }
};

// ================================================================
// [5] Graph Rendering (Canvas)
// ================================================================

// --- 順位分布棒グラフ ---
function renderRankDistributionGraph(canvasId, rankings, playerCount) {
  const canvas = document.getElementById(canvasId);
  if (!canvas) return;

  const dpr = window.devicePixelRatio || 1;
  const rect = canvas.parentElement.getBoundingClientRect();
  const w = rect.width - 16;
  const h = 120;
  canvas.width = w * dpr;
  canvas.height = h * dpr;
  canvas.style.width = w + 'px';
  canvas.style.height = h + 'px';

  const ctx = canvas.getContext('2d');
  ctx.scale(dpr, dpr);
  ctx.clearRect(0, 0, w, h);

  const total = rankings.length;
  if (total === 0) return;

  const counts = new Array(playerCount).fill(0);
  rankings.forEach(r => { if (r >= 1 && r <= playerCount) counts[r - 1]++; });

  const colors = ['#f9a825', '#90a4ae', '#a1887f', '#d32f2f'];
  const labels = ['1位', '2位', '3位', '4位'];
  const padding = { top: 20, bottom: 20, left: 10, right: 10 };
  const barAreaW = w - padding.left - padding.right;
  const barAreaH = h - padding.top - padding.bottom;
  const barW = Math.min(barAreaW / playerCount * 0.6, 60);
  const gap = (barAreaW - barW * playerCount) / (playerCount + 1);

  const maxCount = Math.max(...counts, 1);

  for (let i = 0; i < playerCount; i++) {
    const x = padding.left + gap * (i + 1) + barW * i;
    const barH = (counts[i] / maxCount) * barAreaH;
    const y = padding.top + barAreaH - barH;

    if (barH === 0) { /* スキップ */ } else {
      ctx.fillStyle = colors[i] || '#999';
      if (ctx.roundRect) {
        ctx.beginPath();
        ctx.roundRect(x, y, barW, barH, 4);
        ctx.fill();
      } else {
        ctx.fillRect(x, y, barW, barH);
      }
    }

    // パーセンテージ
    const pct = ((counts[i] / total) * 100).toFixed(0);
    ctx.fillStyle = '#333';
    ctx.font = 'bold 11px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(`${pct}%`, x + barW / 2, y - 4);

    // ラベル
    ctx.fillStyle = '#757575';
    ctx.font = '10px sans-serif';
    ctx.fillText(labels[i], x + barW / 2, h - 4);
  }
}

// --- 月別成績推移グラフ ---
function renderMonthlyGraph(canvasId, games, userId) {
  const canvas = document.getElementById(canvasId);
  if (!canvas) return;

  // 月別に集計
  const monthData = {};
  games.forEach(g => {
    const idx = g.playerIds.indexOf(userId);
    if (idx < 0) return;
    const d = new Date(g.timestamp);
    const key = `${d.getFullYear()}/${String(d.getMonth() + 1).padStart(2, '0')}`;
    if (!monthData[key]) monthData[key] = { rankSum: 0, count: 0, scoreSum: 0 };
    monthData[key].rankSum += g.rankings[idx];
    monthData[key].count++;
    monthData[key].scoreSum += g.finalScores[idx];
  });

  const months = Object.keys(monthData).sort();
  if (months.length < 2) return;

  const dpr = window.devicePixelRatio || 1;
  const rect = canvas.parentElement.getBoundingClientRect();
  const w = rect.width - 16;
  const h = 180;
  canvas.width = w * dpr;
  canvas.height = h * dpr;
  canvas.style.width = w + 'px';
  canvas.style.height = h + 'px';

  const ctx = canvas.getContext('2d');
  ctx.scale(dpr, dpr);
  ctx.clearRect(0, 0, w, h);

  const avgRanks = months.map(m => monthData[m].rankSum / monthData[m].count);
  const padding = { top: 20, right: 16, bottom: 30, left: 40 };
  const graphW = w - padding.left - padding.right;
  const graphH = h - padding.top - padding.bottom;

  // Y軸: 順位（上が1位=良い）
  const minRank = Math.min(...avgRanks) - 0.2;
  const maxRank = Math.max(...avgRanks) + 0.2;
  const xStep = graphW / (months.length - 1);

  function toX(i) { return padding.left + i * xStep; }
  function toY(val) { return padding.top + ((val - minRank) / (maxRank - minRank)) * graphH; }

  // グリッド
  ctx.strokeStyle = '#e0e0e0';
  ctx.lineWidth = 1;
  ctx.fillStyle = '#757575';
  ctx.font = '10px sans-serif';
  ctx.textAlign = 'right';
  for (let r = 1; r <= 4; r++) {
    if (r >= minRank && r <= maxRank) {
      const y = toY(r);
      ctx.beginPath();
      ctx.moveTo(padding.left, y);
      ctx.lineTo(w - padding.right, y);
      ctx.stroke();
      ctx.fillText(`${r}位`, padding.left - 4, y + 3);
    }
  }

  // X軸ラベル
  ctx.fillStyle = '#757575';
  ctx.font = '10px sans-serif';
  ctx.textAlign = 'center';
  months.forEach((m, i) => {
    const label = m.split('/')[1] + '月';
    if (months.length <= 12 || i === 0 || i === months.length - 1 || i % Math.ceil(months.length / 8) === 0) {
      ctx.fillText(label, toX(i), h - padding.bottom + 16);
    }
  });

  // 折れ線
  ctx.strokeStyle = PLAYER_COLORS[0];
  ctx.lineWidth = 2.5;
  ctx.lineJoin = 'round';
  ctx.beginPath();
  avgRanks.forEach((val, i) => {
    const x = toX(i);
    const y = toY(val);
    if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
  });
  ctx.stroke();

  // ポイント
  avgRanks.forEach((val, i) => {
    ctx.beginPath();
    ctx.arc(toX(i), toY(val), 3, 0, Math.PI * 2);
    ctx.fillStyle = PLAYER_COLORS[0];
    ctx.fill();
  });
}

// --- 収支グラフ ---
function renderIncomeGraph(canvasId, legendId, games, playerIds, rate, chipRate) {
  const canvas = document.getElementById(canvasId);
  const legendEl = document.getElementById(legendId);
  if (!canvas) return;

  const count = playerIds.length;
  const dpr = window.devicePixelRatio || 1;
  const rect = canvas.parentElement.getBoundingClientRect();
  const w = rect.width - 16;
  const h = 220;
  canvas.width = w * dpr;
  canvas.height = h * dpr;
  canvas.style.width = w + 'px';
  canvas.style.height = h + 'px';

  const ctx = canvas.getContext('2d');
  ctx.scale(dpr, dpr);
  ctx.clearRect(0, 0, w, h);

  // 累計収支を計算
  const cumIncome = [];
  for (let pi = 0; pi < count; pi++) {
    const series = [0];
    let cum = 0;
    games.forEach(game => {
      const scorePt = game.finalScores[pi] * rate;
      const chipPt = chipRate > 0 && game.chips ? game.chips[pi] * chipRate : 0;
      cum += scorePt + chipPt;
      series.push(Math.round(cum));
    });
    cumIncome.push(series);
  }

  const numPoints = games.length + 1;
  if (numPoints < 2) return;
  const allValues = cumIncome.flat();
  let minVal = Math.min(...allValues);
  let maxVal = Math.max(...allValues);
  if (minVal === maxVal) { minVal -= 100; maxVal += 100; }

  const padding = { top: 20, right: 16, bottom: 30, left: 50 };
  const graphW = w - padding.left - padding.right;
  const graphH = h - padding.top - padding.bottom;
  const xStep = graphW / (numPoints - 1);

  function toX(i) { return padding.left + i * xStep; }
  function toY(val) { return padding.top + graphH - ((val - minVal) / (maxVal - minVal)) * graphH; }

  // グリッド
  ctx.strokeStyle = '#e0e0e0';
  ctx.lineWidth = 1;
  ctx.fillStyle = '#757575';
  ctx.font = '10px sans-serif';
  ctx.textAlign = 'right';
  for (let i = 0; i <= 5; i++) {
    const val = minVal + (maxVal - minVal) * i / 5;
    const y = toY(val);
    ctx.beginPath();
    ctx.moveTo(padding.left, y);
    ctx.lineTo(w - padding.right, y);
    ctx.stroke();
    ctx.fillText(Math.round(val) + 'pt', padding.left - 4, y + 3);
  }

  // ゼロライン
  if (minVal < 0 && maxVal > 0) {
    ctx.strokeStyle = '#bdbdbd';
    ctx.lineWidth = 1.5;
    ctx.setLineDash([4, 4]);
    ctx.beginPath();
    ctx.moveTo(padding.left, toY(0));
    ctx.lineTo(w - padding.right, toY(0));
    ctx.stroke();
    ctx.setLineDash([]);
  }

  // 折れ線
  for (let pi = 0; pi < count; pi++) {
    ctx.strokeStyle = PLAYER_COLORS[pi] || '#333';
    ctx.lineWidth = 2.5;
    ctx.lineJoin = 'round';
    ctx.beginPath();
    cumIncome[pi].forEach((val, i) => {
      const x = toX(i);
      const y = toY(val);
      if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
    });
    ctx.stroke();

    cumIncome[pi].forEach((val, i) => {
      ctx.beginPath();
      ctx.arc(toX(i), toY(val), 3, 0, Math.PI * 2);
      ctx.fillStyle = PLAYER_COLORS[pi] || '#333';
      ctx.fill();
    });
  }

  // 凡例
  if (legendEl) {
    legendEl.innerHTML = '';
    playerIds.forEach((id, i) => {
      const lastVal = cumIncome[i][cumIncome[i].length - 1];
      const sign = lastVal >= 0 ? '+' : '';
      const item = document.createElement('span');
      item.className = 'graph-legend-item';
      item.innerHTML = `<span class="graph-legend-color" style="background:${PLAYER_COLORS[i]}"></span>${Store.getUserName(id)} (${sign}${lastVal}pt)`;
      legendEl.appendChild(item);
    });
  }
}

function renderScoreGraph(canvasId, tooltipId, legendId, games) {
  const canvas = document.getElementById(canvasId);
  const legendEl = document.getElementById(legendId);
  if (!canvas) return;

  const playerIds = games[0].playerIds;
  const count = games[0].playerCount;

  const dpr = window.devicePixelRatio || 1;
  const rect = canvas.parentElement.getBoundingClientRect();
  const w = rect.width - 16;
  const h = 220;
  canvas.width = w * dpr;
  canvas.height = h * dpr;
  canvas.style.width = w + 'px';
  canvas.style.height = h + 'px';

  const ctx = canvas.getContext('2d');
  ctx.scale(dpr, dpr);
  ctx.clearRect(0, 0, w, h);

  // Cumulative scores
  const cumScores = [];
  for (let pi = 0; pi < count; pi++) {
    const series = [0];
    let cum = 0;
    games.forEach(game => {
      cum += game.finalScores[pi];
      series.push(Math.round(cum * 10) / 10);
    });
    cumScores.push(series);
  }

  const numPoints = games.length + 1;
  const allValues = cumScores.flat();
  let minVal = Math.min(...allValues);
  let maxVal = Math.max(...allValues);
  if (minVal === maxVal) { minVal -= 10; maxVal += 10; }

  const padding = { top: 20, right: 16, bottom: 30, left: 45 };
  const graphW = w - padding.left - padding.right;
  const graphH = h - padding.top - padding.bottom;
  const xStep = graphW / (numPoints - 1);

  function toX(i) { return padding.left + i * xStep; }
  function toY(val) { return padding.top + graphH - ((val - minVal) / (maxVal - minVal)) * graphH; }

  // Grid lines
  ctx.strokeStyle = '#e0e0e0';
  ctx.lineWidth = 1;
  ctx.fillStyle = '#757575';
  ctx.font = '10px sans-serif';
  ctx.textAlign = 'right';
  const yTicks = 5;
  for (let i = 0; i <= yTicks; i++) {
    const val = minVal + (maxVal - minVal) * i / yTicks;
    const y = toY(val);
    ctx.beginPath();
    ctx.moveTo(padding.left, y);
    ctx.lineTo(w - padding.right, y);
    ctx.stroke();
    ctx.fillText(Math.round(val * 10) / 10, padding.left - 4, y + 3);
  }

  // Zero line
  if (minVal < 0 && maxVal > 0) {
    ctx.strokeStyle = '#bdbdbd';
    ctx.lineWidth = 1.5;
    ctx.setLineDash([4, 4]);
    ctx.beginPath();
    ctx.moveTo(padding.left, toY(0));
    ctx.lineTo(w - padding.right, toY(0));
    ctx.stroke();
    ctx.setLineDash([]);
  }

  // X-axis labels
  ctx.fillStyle = '#757575';
  ctx.font = '10px sans-serif';
  ctx.textAlign = 'center';
  for (let i = 0; i < numPoints; i++) {
    const label = i === 0 ? '開始' : `${i}`;
    if (numPoints <= 12 || i === 0 || i === numPoints - 1 || i % Math.ceil(numPoints / 10) === 0) {
      ctx.fillText(label, toX(i), h - padding.bottom + 16);
    }
  }

  // Draw lines
  const pointPositions = [];
  for (let pi = 0; pi < count; pi++) {
    ctx.strokeStyle = PLAYER_COLORS[pi] || '#333';
    ctx.lineWidth = 2.5;
    ctx.lineJoin = 'round';
    ctx.beginPath();
    const pts = [];
    cumScores[pi].forEach((val, i) => {
      const x = toX(i);
      const y = toY(val);
      pts.push({ x, y, val, gameIdx: i });
      if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
    });
    ctx.stroke();
    pointPositions.push(pts);

    pts.forEach(pt => {
      ctx.beginPath();
      ctx.arc(pt.x, pt.y, 3, 0, Math.PI * 2);
      ctx.fillStyle = PLAYER_COLORS[pi] || '#333';
      ctx.fill();
    });
  }

  // Store for tooltip
  canvas._graphData = { pointPositions, cumScores, count, playerIds, w, h, dpr };

  // Legend
  legendEl.innerHTML = '';
  playerIds.forEach((id, i) => {
    const item = document.createElement('span');
    item.className = 'graph-legend-item';
    item.innerHTML = `<span class="graph-legend-color" style="background:${PLAYER_COLORS[i]}"></span>${Store.getUserName(id)}`;
    legendEl.appendChild(item);
  });

  // Tooltip events
  const tooltip = document.getElementById(tooltipId);
  setupGraphTooltip(canvas, tooltip, playerIds);
}

function renderIndividualGraph(canvasId, tooltipId, legendId, games, userId) {
  const canvas = document.getElementById(canvasId);
  const legendEl = document.getElementById(legendId);
  if (!canvas) return;

  const dpr = window.devicePixelRatio || 1;
  const rect = canvas.parentElement.getBoundingClientRect();
  const w = rect.width - 16;
  const h = 220;
  canvas.width = w * dpr;
  canvas.height = h * dpr;
  canvas.style.width = w + 'px';
  canvas.style.height = h + 'px';

  const ctx = canvas.getContext('2d');
  ctx.scale(dpr, dpr);
  ctx.clearRect(0, 0, w, h);

  const series = [0];
  let cum = 0;
  games.forEach(g => {
    const idx = g.playerIds.indexOf(userId);
    cum += g.finalScores[idx];
    series.push(Math.round(cum * 10) / 10);
  });

  const numPoints = series.length;
  let minVal = Math.min(...series);
  let maxVal = Math.max(...series);
  if (minVal === maxVal) { minVal -= 10; maxVal += 10; }

  const padding = { top: 20, right: 16, bottom: 30, left: 45 };
  const graphW = w - padding.left - padding.right;
  const graphH = h - padding.top - padding.bottom;
  const xStep = graphW / (numPoints - 1);

  function toX(i) { return padding.left + i * xStep; }
  function toY(val) { return padding.top + graphH - ((val - minVal) / (maxVal - minVal)) * graphH; }

  // Grid
  ctx.strokeStyle = '#e0e0e0';
  ctx.lineWidth = 1;
  ctx.fillStyle = '#757575';
  ctx.font = '10px sans-serif';
  ctx.textAlign = 'right';
  for (let i = 0; i <= 5; i++) {
    const val = minVal + (maxVal - minVal) * i / 5;
    const y = toY(val);
    ctx.beginPath();
    ctx.moveTo(padding.left, y);
    ctx.lineTo(w - padding.right, y);
    ctx.stroke();
    ctx.fillText(Math.round(val * 10) / 10, padding.left - 4, y + 3);
  }

  if (minVal < 0 && maxVal > 0) {
    ctx.strokeStyle = '#bdbdbd';
    ctx.lineWidth = 1.5;
    ctx.setLineDash([4, 4]);
    ctx.beginPath();
    ctx.moveTo(padding.left, toY(0));
    ctx.lineTo(w - padding.right, toY(0));
    ctx.stroke();
    ctx.setLineDash([]);
  }

  ctx.fillStyle = '#757575';
  ctx.font = '10px sans-serif';
  ctx.textAlign = 'center';
  for (let i = 0; i < numPoints; i++) {
    const label = i === 0 ? '開始' : `${i}`;
    if (numPoints <= 12 || i === 0 || i === numPoints - 1 || i % Math.ceil(numPoints / 10) === 0) {
      ctx.fillText(label, toX(i), h - padding.bottom + 16);
    }
  }

  // Line
  ctx.strokeStyle = PLAYER_COLORS[0];
  ctx.lineWidth = 2.5;
  ctx.lineJoin = 'round';
  ctx.beginPath();
  const pts = [];
  series.forEach((val, i) => {
    const x = toX(i);
    const y = toY(val);
    pts.push({ x, y, val, gameIdx: i });
    if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
  });
  ctx.stroke();

  pts.forEach(pt => {
    ctx.beginPath();
    ctx.arc(pt.x, pt.y, 3, 0, Math.PI * 2);
    ctx.fillStyle = PLAYER_COLORS[0];
    ctx.fill();
  });

  canvas._graphData = { pointPositions: [pts], cumScores: [series], count: 1, playerIds: [userId], w, h, dpr };

  legendEl.innerHTML = `<span class="graph-legend-item"><span class="graph-legend-color" style="background:${PLAYER_COLORS[0]}"></span>${Store.getUserName(userId)}</span>`;

  const tooltip = document.getElementById(tooltipId);
  setupGraphTooltip(canvas, tooltip, [userId]);
}

function setupGraphTooltip(canvas, tooltip, playerIds) {
  function handleInteraction(clientX, clientY) {
    if (!canvas._graphData) return;
    const { pointPositions, count, dpr } = canvas._graphData;
    const rect = canvas.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;

    let closest = null;
    let minDist = 30;
    for (let pi = 0; pi < count; pi++) {
      pointPositions[pi].forEach(pt => {
        const dist = Math.sqrt((pt.x - x) ** 2 + (pt.y - y) ** 2);
        if (dist < minDist) {
          minDist = dist;
          closest = { pi, ...pt };
        }
      });
    }

    if (closest) {
      const name = Store.getUserName(playerIds[closest.pi]);
      const label = closest.gameIdx === 0 ? '開始' : `第${closest.gameIdx}局`;
      tooltip.textContent = `${name}: ${label} ${closest.val >= 0 ? '+' : ''}${closest.val}`;
      tooltip.style.display = 'block';
      tooltip.style.left = (closest.x + 8) + 'px';
      tooltip.style.top = (closest.y - 8) + 'px';
    } else {
      tooltip.style.display = 'none';
    }
  }

  canvas.addEventListener('mousemove', (e) => handleInteraction(e.clientX, e.clientY));
  canvas.addEventListener('touchstart', (e) => { e.preventDefault(); handleInteraction(e.touches[0].clientX, e.touches[0].clientY); }, { passive: false });
  canvas.addEventListener('touchmove', (e) => { e.preventDefault(); handleInteraction(e.touches[0].clientX, e.touches[0].clientY); }, { passive: false });
  canvas.addEventListener('mouseleave', () => { tooltip.style.display = 'none'; });
  canvas.addEventListener('touchend', () => { tooltip.style.display = 'none'; });
}

// ================================================================
// [6] Initialization
// ================================================================
(function init() {
  // Load saved rate
  const settings = Store.getSettings();
  resultsRate = settings.defaultRate || 50;
  statsIncomeRate = settings.defaultRate || 50;

  render();
})();
