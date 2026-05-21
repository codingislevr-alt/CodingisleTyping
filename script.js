const GAME_SECONDS = 180;

const wordBank = [
  { en: "agent", zh: "代理人", category: "程式控制" },
  { en: "block", zh: "方塊", category: "建造" },
  { en: "biome", zh: "生態域", category: "世界探索" },
  { en: "command", zh: "指令", category: "程式控制" },
  { en: "coordinate", zh: "座標", category: "數學概念" },
  { en: "crafting", zh: "合成", category: "生存技能" },
  { en: "creeper", zh: "苦力怕", category: "敵方生物" },
  { en: "diamond", zh: "鑽石", category: "資源" },
  { en: "enchant", zh: "附魔", category: "進階玩法" },
  { en: "function", zh: "函式", category: "程式控制" },
  { en: "inventory", zh: "物品欄", category: "操作" },
  { en: "loop", zh: "迴圈", category: "程式概念" },
  { en: "mob", zh: "生物", category: "世界探索" },
  { en: "nether", zh: "地獄", category: "維度" },
  { en: "observer", zh: "偵測器", category: "紅石" },
  { en: "piston", zh: "活塞", category: "紅石" },
  { en: "redstone", zh: "紅石", category: "工程" },
  { en: "repeater", zh: "中繼器", category: "紅石" },
  { en: "skeleton", zh: "骷髏", category: "敵方生物" },
  { en: "spawn", zh: "生成", category: "世界設定" },
  { en: "teleport", zh: "傳送", category: "指令" },
  { en: "variable", zh: "變數", category: "程式概念" },
  { en: "village", zh: "村莊", category: "世界探索" },
  { en: "wither", zh: "凋零怪", category: "敵方生物" },
  { en: "zombie", zh: "殭屍", category: "敵方生物" },
  { en: "makecode", zh: "程式積木", category: "Minecraft Education" },
  { en: "education", zh: "教育版", category: "Minecraft Education" },
  { en: "debug", zh: "除錯", category: "程式概念" },
  { en: "array", zh: "陣列", category: "程式概念" },
  { en: "condition", zh: "條件", category: "程式概念" },
  { en: "redstone torch", zh: "紅石火把", category: "紅石" },
  { en: "coding", zh: "程式設計", category: "程式概念" },
  { en: "lesson", zh: "課程", category: "Minecraft Education" },
  { en: "classroom", zh: "教室", category: "Minecraft Education" },
  { en: "world", zh: "世界", category: "世界探索" },
  { en: "server", zh: "伺服器", category: "多人連線" },
  { en: "survival", zh: "生存模式", category: "遊戲模式" },
  { en: "creative", zh: "創造模式", category: "遊戲模式" },
  { en: "adventure", zh: "冒險模式", category: "遊戲模式" },
  { en: "operator", zh: "管理員", category: "多人連線" },
  { en: "permission", zh: "權限", category: "多人連線" },
  { en: "portfolio", zh: "作品集", category: "Minecraft Education" },
  { en: "camera", zh: "相機", category: "Minecraft Education" },
  { en: "npc", zh: "非玩家角色", category: "Minecraft Education" },
  { en: "chalkboard", zh: "黑板", category: "Minecraft Education" },
  { en: "compound", zh: "化合物", category: "化學" },
  { en: "element", zh: "元素", category: "化學" },
  { en: "constructor", zh: "建構器", category: "化學" },
  { en: "lab table", zh: "實驗桌", category: "化學" },
  { en: "material reducer", zh: "材料分解器", category: "化學" },
  { en: "builder", zh: "建造者", category: "程式控制" },
  { en: "chat command", zh: "聊天指令", category: "指令" },
  { en: "event", zh: "事件", category: "程式概念" },
  { en: "parameter", zh: "參數", category: "程式概念" },
  { en: "boolean", zh: "布林值", category: "程式概念" },
  { en: "random", zh: "隨機", category: "程式概念" },
  { en: "algorithm", zh: "演算法", category: "程式概念" },
  { en: "sequence", zh: "順序", category: "程式概念" },
  { en: "decomposition", zh: "拆解問題", category: "運算思維" },
  { en: "pattern", zh: "模式辨識", category: "運算思維" },
  { en: "abstraction", zh: "抽象化", category: "運算思維" },
  { en: "logic", zh: "邏輯", category: "運算思維" },
  { en: "clone", zh: "複製", category: "指令" },
  { en: "fill", zh: "填滿", category: "指令" },
  { en: "give", zh: "給予", category: "指令" },
  { en: "summon", zh: "召喚", category: "指令" },
  { en: "effect", zh: "效果", category: "指令" },
  { en: "scoreboard", zh: "計分板", category: "指令" },
  { en: "daylight sensor", zh: "日光感測器", category: "紅石" },
  { en: "comparator", zh: "比較器", category: "紅石" },
  { en: "dispenser", zh: "發射器", category: "紅石" },
  { en: "dropper", zh: "投擲器", category: "紅石" },
  { en: "hopper", zh: "漏斗", category: "紅石" },
  { en: "pressure plate", zh: "壓力板", category: "紅石" },
  { en: "lever", zh: "拉桿", category: "紅石" },
  { en: "button", zh: "按鈕", category: "紅石" },
  { en: "minecart", zh: "礦車", category: "交通" },
  { en: "rail", zh: "鐵軌", category: "交通" },
  { en: "powered rail", zh: "動力鐵軌", category: "交通" },
  { en: "elytra", zh: "鞘翅", category: "裝備" },
  { en: "shield", zh: "盾牌", category: "裝備" },
  { en: "trident", zh: "三叉戟", category: "裝備" },
  { en: "netherite", zh: "獄髓", category: "資源" },
  { en: "emerald", zh: "綠寶石", category: "資源" },
  { en: "lapis lazuli", zh: "青金石", category: "資源" },
  { en: "amethyst", zh: "紫水晶", category: "資源" },
  { en: "ender pearl", zh: "終界珍珠", category: "資源" },
  { en: "stronghold", zh: "要塞", category: "建築" },
  { en: "mineshaft", zh: "廢棄礦坑", category: "建築" },
  { en: "bastion", zh: "堡壘遺跡", category: "建築" },
  { en: "ocean monument", zh: "海底神殿", category: "建築" },
  { en: "ancient city", zh: "遠古城市", category: "建築" },
  { en: "the end", zh: "終界", category: "維度" },
  { en: "end portal", zh: "終界傳送門", category: "維度" },
  { en: "ender chest", zh: "終界箱", category: "儲存" },
  { en: "shulker box", zh: "界伏盒", category: "儲存" },
  { en: "warden", zh: "伏守者", category: "敵方生物" },
  { en: "ender dragon", zh: "終界龍", category: "敵方生物" },
  { en: "charged creeper", zh: "閃電苦力怕", category: "敵方生物" },
  { en: "elder guardian", zh: "遠古深海守衛", category: "敵方生物" },
  { en: "evoker", zh: "喚魔者", category: "敵方生物" },
  { en: "ravager", zh: "劫毀獸", category: "敵方生物" },
  { en: "piglin brute", zh: "豬布林蠻兵", category: "敵方生物" },
  { en: "zombified piglin", zh: "殭屍化豬布林", category: "敵方生物" },
  { en: "vindicator", zh: "衛道士", category: "敵方生物" },
  { en: "blaze", zh: "烈焰使者", category: "敵方生物" },
  { en: "hoglin", zh: "豬屍獸", category: "敵方生物" },
  { en: "wither skeleton", zh: "凋零骷髏", category: "敵方生物" },
  { en: "shulker", zh: "界伏蚌", category: "敵方生物" },
  { en: "enderman", zh: "終界使者", category: "敵方生物" },
  { en: "stone", zh: "石頭", category: "方塊" },
  { en: "dirt", zh: "泥土", category: "方塊" },
  { en: "grass block", zh: "草地", category: "方塊" },
  { en: "cobblestone", zh: "鵝卵石", category: "方塊" },
  { en: "sand", zh: "沙子", category: "方塊" },
  { en: "gravel", zh: "礫石", category: "方塊" },
  { en: "clay", zh: "黏土", category: "方塊" },
  { en: "glass", zh: "玻璃", category: "方塊" },
  { en: "ice", zh: "冰", category: "方塊" },
  { en: "snow block", zh: "雪塊", category: "方塊" },
  { en: "obsidian", zh: "黑曜石", category: "方塊" },
  { en: "bedrock", zh: "基岩", category: "方塊" },
  { en: "netherrack", zh: "地獄石", category: "方塊" },
  { en: "soul sand", zh: "靈魂砂", category: "方塊" },
  { en: "end stone", zh: "終界石", category: "方塊" },
  { en: "deepslate", zh: "深板岩", category: "方塊" },
  { en: "calcite", zh: "方解石", category: "方塊" },
  { en: "tuff", zh: "凝灰岩", category: "方塊" },
  { en: "moss block", zh: "苔蘚方塊", category: "方塊" },
  { en: "oak log", zh: "橡木原木", category: "木材" },
  { en: "spruce log", zh: "杉木原木", category: "木材" },
  { en: "birch log", zh: "樺木原木", category: "木材" },
  { en: "jungle log", zh: "叢林木原木", category: "木材" },
  { en: "acacia log", zh: "相思木原木", category: "木材" },
  { en: "dark oak log", zh: "黑橡木原木", category: "木材" },
  { en: "mangrove log", zh: "紅樹林原木", category: "木材" },
  { en: "cherry log", zh: "櫻花木原木", category: "木材" },
  { en: "oak planks", zh: "橡木材", category: "木材" },
  { en: "crimson planks", zh: "緋紅蕈木材", category: "木材" },
  { en: "warped planks", zh: "扭曲蕈木材", category: "木材" },
  { en: "crafting table", zh: "工作台", category: "道具方塊" },
  { en: "furnace", zh: "熔爐", category: "道具方塊" },
  { en: "blast furnace", zh: "高爐", category: "道具方塊" },
  { en: "smoker", zh: "煙燻爐", category: "道具方塊" },
  { en: "anvil", zh: "鐵砧", category: "道具方塊" },
  { en: "grindstone", zh: "砂輪", category: "道具方塊" },
  { en: "loom", zh: "紡織機", category: "道具方塊" },
  { en: "cartography table", zh: "製圖台", category: "道具方塊" },
  { en: "smithing table", zh: "鍛造台", category: "道具方塊" },
  { en: "stonecutter", zh: "切石機", category: "道具方塊" },
  { en: "barrel", zh: "木桶", category: "儲存" },
  { en: "chest", zh: "箱子", category: "儲存" },
  { en: "trapped chest", zh: "陷阱箱", category: "儲存" },
  { en: "bookshelf", zh: "書櫃", category: "裝飾" },
  { en: "lantern", zh: "燈籠", category: "裝飾" },
  { en: "campfire", zh: "營火", category: "裝飾" },
  { en: "torch", zh: "火把", category: "裝飾" },
  { en: "flower pot", zh: "花盆", category: "裝飾" },
  { en: "painting", zh: "畫", category: "裝飾" },
  { en: "item frame", zh: "物品展示框", category: "裝飾" },
  { en: "armor stand", zh: "盔甲座", category: "裝飾" },
  { en: "white wool", zh: "白色羊毛", category: "建材" },
  { en: "orange wool", zh: "橙色羊毛", category: "建材" },
  { en: "blue wool", zh: "藍色羊毛", category: "建材" },
  { en: "terracotta", zh: "陶土", category: "建材" },
  { en: "concrete", zh: "混凝土", category: "建材" },
  { en: "bricks", zh: "紅磚", category: "建材" },
  { en: "stone bricks", zh: "石磚", category: "建材" },
  { en: "quartz block", zh: "石英方塊", category: "建材" },
  { en: "copper block", zh: "銅方塊", category: "建材" },
  { en: "iron block", zh: "鐵方塊", category: "建材" },
  { en: "gold block", zh: "金方塊", category: "建材" },
  { en: "diamond block", zh: "鑽石方塊", category: "建材" },
  { en: "wooden pickaxe", zh: "木鎬", category: "工具" },
  { en: "stone pickaxe", zh: "石鎬", category: "工具" },
  { en: "iron pickaxe", zh: "鐵鎬", category: "工具" },
  { en: "diamond pickaxe", zh: "鑽石鎬", category: "工具" },
  { en: "netherite pickaxe", zh: "獄髓鎬", category: "工具" },
  { en: "wooden axe", zh: "木斧", category: "工具" },
  { en: "iron axe", zh: "鐵斧", category: "工具" },
  { en: "diamond axe", zh: "鑽石斧", category: "工具" },
  { en: "shovel", zh: "鏟子", category: "工具" },
  { en: "hoe", zh: "鋤頭", category: "工具" },
  { en: "fishing rod", zh: "釣竿", category: "工具" },
  { en: "flint and steel", zh: "打火石", category: "工具" },
  { en: "shears", zh: "剪刀", category: "工具" },
  { en: "bucket", zh: "桶子", category: "工具" },
  { en: "water bucket", zh: "水桶", category: "工具" },
  { en: "lava bucket", zh: "熔岩桶", category: "工具" },
  { en: "compass", zh: "指南針", category: "工具" },
  { en: "clock", zh: "時鐘", category: "工具" },
  { en: "map", zh: "地圖", category: "工具" },
  { en: "spyglass", zh: "望遠鏡", category: "工具" },
  { en: "sword", zh: "劍", category: "武器" },
  { en: "bow", zh: "弓", category: "武器" },
  { en: "crossbow", zh: "弩", category: "武器" },
  { en: "arrow", zh: "箭矢", category: "武器" },
  { en: "snowball", zh: "雪球", category: "投擲物" },
  { en: "egg", zh: "雞蛋", category: "投擲物" },
  { en: "firework rocket", zh: "煙火火箭", category: "道具" },
  { en: "name tag", zh: "命名牌", category: "道具" },
  { en: "lead", zh: "拴繩", category: "道具" },
  { en: "saddle", zh: "鞍", category: "道具" },
  { en: "book", zh: "書", category: "道具" },
  { en: "paper", zh: "紙", category: "道具" },
  { en: "bone meal", zh: "骨粉", category: "道具" },
  { en: "string", zh: "線", category: "材料" },
  { en: "feather", zh: "羽毛", category: "材料" },
  { en: "leather", zh: "皮革", category: "材料" },
  { en: "stick", zh: "木棒", category: "材料" },
  { en: "flint", zh: "燧石", category: "材料" },
  { en: "coal", zh: "煤炭", category: "材料" },
  { en: "charcoal", zh: "木炭", category: "材料" },
  { en: "iron ingot", zh: "鐵錠", category: "材料" },
  { en: "gold ingot", zh: "金錠", category: "材料" },
  { en: "copper ingot", zh: "銅錠", category: "材料" },
  { en: "nether star", zh: "地獄之星", category: "材料" },
  { en: "apple", zh: "蘋果", category: "食物" },
  { en: "bread", zh: "麵包", category: "食物" },
  { en: "carrot", zh: "胡蘿蔔", category: "食物" },
  { en: "potato", zh: "馬鈴薯", category: "食物" },
  { en: "beetroot", zh: "甜菜根", category: "食物" },
  { en: "pumpkin pie", zh: "南瓜派", category: "食物" },
  { en: "golden apple", zh: "金蘋果", category: "食物" },
  { en: "cooked beef", zh: "牛排", category: "食物" },
  { en: "cooked chicken", zh: "熟雞肉", category: "食物" },
  { en: "cookie", zh: "餅乾", category: "食物" },
  { en: "cake", zh: "蛋糕", category: "食物" },
  { en: "helmet", zh: "頭盔", category: "裝備" },
  { en: "chestplate", zh: "胸甲", category: "裝備" },
  { en: "leggings", zh: "護腿", category: "裝備" },
  { en: "boots", zh: "靴子", category: "裝備" },
  { en: "leather armor", zh: "皮革盔甲", category: "裝備" },
  { en: "iron armor", zh: "鐵製盔甲", category: "裝備" },
  { en: "diamond armor", zh: "鑽石盔甲", category: "裝備" },
  { en: "netherite armor", zh: "獄髓盔甲", category: "裝備" },
  { en: "potion", zh: "藥水", category: "藥水" },
  { en: "splash potion", zh: "飛濺藥水", category: "藥水" },
  { en: "lingering potion", zh: "滯留藥水", category: "藥水" },
  { en: "awkward potion", zh: "粗製藥水", category: "藥水" },
  { en: "strength", zh: "力量", category: "效果" },
  { en: "speed", zh: "速度", category: "效果" },
  { en: "night vision", zh: "夜視", category: "效果" },
  { en: "water breathing", zh: "水中呼吸", category: "效果" },
  { en: "fire resistance", zh: "抗火", category: "效果" },
  { en: "regeneration", zh: "回復", category: "效果" }
];

const ranks = [
  { min: 0, name: "雞蛋初心者", icon: "CH", message: "先熟悉鍵盤位置，慢慢把節奏找回來。" },
  { min: 250, name: "兔子跳跳學徒", icon: "RB", message: "已經開始動起來了，下一場試著少停頓。" },
  { min: 550, name: "貓咪敏捷手", icon: "CA", message: "反應變快了，準度穩住就能升階。" },
  { min: 900, name: "狼群小隊員", icon: "WF", message: "基礎輸入能力成形，開始挑戰連擊。" },
  { min: 1300, name: "海豚衝浪手", icon: "DP", message: "速度有出來，保持流暢就會更強。" },
  { min: 1800, name: "狐狸夜行者", icon: "FX", message: "輸入節奏更靈活，錯字也慢慢減少。" },
  { min: 2400, name: "熊貓穩定派", icon: "PA", message: "穩定度提升了，適合開始追求高連擊。" },
  { min: 3100, name: "鐵魔像守護者", icon: "IG", message: "你已經有守住長時間練習的耐力。" },
  { min: 3900, name: "終界使者旅人", icon: "EN", message: "已經走出新手區，開始掌握題目節奏。" },
  { min: 4800, name: "界伏蚌守備員", icon: "SH", message: "已經能守住基本準度，下一步挑戰連擊。" },
  { min: 5800, name: "凋零骷髏弓手", icon: "WS", message: "輸入節奏開始成形，錯字也慢慢變少。" },
  { min: 6900, name: "豬屍獸衝鋒手", icon: "HG", message: "答題速度更有衝勁，分數開始明顯成長。" },
  { min: 8100, name: "烈焰使者火球手", icon: "BL", message: "輸入火力升溫了，連擊加乘開始有感。" },
  { min: 9400, name: "衛道士斧手", icon: "VI", message: "精準又果斷，已經很少被題目拖慢。" },
  { min: 10800, name: "殭屍化豬布林鬥士", icon: "ZP", message: "持續輸入能力很好，幾乎不掉節奏。" },
  { min: 12300, name: "豬布林蠻兵猛將", icon: "PB", message: "速度夠硬，分數也開始進入高段班。" },
  { min: 13900, name: "劫毀獸破壞王", icon: "RV", message: "輸入衝擊力很強，連續答題很有壓制感。" },
  { min: 15600, name: "喚魔者術士", icon: "EV", message: "反應和判斷都很俐落，已經像在施法。" },
  { min: 17400, name: "遠古深海守衛霸主", icon: "EG", message: "穩定度很高，長題也能守住準度。" },
  { min: 19300, name: "閃電苦力怕爆破手", icon: "CC", message: "連擊爆發感很強，分數成長速度驚人。" },
  { min: 21300, name: "終界龍打字傳說", icon: "ED", message: "速度、準度、穩定度都到位，已經是傳說級。" },
  { min: 23400, name: "凋零王者", icon: "WI", message: "高壓題目也能穩穩處理，段位含金量很高。" },
  { min: 25600, name: "伏守者至尊", icon: "W", message: "codingisle 認證的最強打字冒險家。" },
  { min: 70000, name: "創世神", icon: "W", message: "當個創世神" }
];

const modeSettings = {
  mixed: { label: "中英混合", multiplier: 1.35 },
  chinese: { label: "中文", multiplier: 1.15 },
  english: { label: "英文", multiplier: 1 }
};

const todayKey = new Date().toLocaleDateString("en-CA");
const dailyStorageKey = `codingisle-typing-${todayKey}`;
const bestScoreStorageKey = "codingisle-typing-best-score";

const state = {
  mode: "mixed",
  currentAnswer: "",
  currentWord: null,
  score: 0,
  combo: 0,
  bestCombo: 0,
  typed: 0,
  correct: 0,
  completed: 0,
  timeLeft: GAME_SECONDS,
  health: 3,
  skipsLeft: 3,
  wrongStreak: 0,
  endReason: "time",
  timer: null,
  running: false,
  todayPlaySeconds: 0,
  bestScore: 0
};

const els = {
  segments: document.querySelectorAll(".segment"),
  startBtn: document.querySelector("#start-btn"),
  rankTableBtn: document.querySelector("#rank-table-btn"),
  modeWeightCurrent: document.querySelector("#mode-weight-current"),
  roundProgress: document.querySelector("#round-progress"),
  score: document.querySelector("#score"),
  combo: document.querySelector("#combo"),
  comboMultiplier: document.querySelector("#combo-multiplier"),
  accuracy: document.querySelector("#accuracy"),
  timeLeft: document.querySelector("#time-left"),
  todayPlayTime: document.querySelector("#today-play-time"),
  bestScore: document.querySelector("#best-score"),
  health: document.querySelector("#health"),
  dangerFill: document.querySelector("#danger-fill"),
  enemyStatus: document.querySelector("#enemy-status"),
  wordCategory: document.querySelector("#word-category"),
  targetWord: document.querySelector("#target-word"),
  wordHint: document.querySelector("#word-hint"),
  typingInput: document.querySelector("#typing-input"),
  skipBtn: document.querySelector("#skip-btn"),
  rankList: document.querySelector("#rank-list"),
  resultPanel: document.querySelector("#result-panel"),
  finalScore: document.querySelector("#final-score"),
  finalWords: document.querySelector("#final-words"),
  finalAccuracy: document.querySelector("#final-accuracy"),
  finalCombo: document.querySelector("#final-combo"),
  finalPlayTime: document.querySelector("#final-play-time"),
  finalBestScore: document.querySelector("#final-best-score"),
  rankName: document.querySelector("#rank-name"),
  rankIcon: document.querySelector("#rank-icon"),
  rankMessage: document.querySelector("#rank-message"),
  modal: document.querySelector("#game-over-modal"),
  modalKicker: document.querySelector("#modal-kicker"),
  modalRankIcon: document.querySelector("#modal-rank-icon"),
  modalRankName: document.querySelector("#modal-rank-name"),
  modalScore: document.querySelector("#modal-score"),
  modalWords: document.querySelector("#modal-words"),
  modalCombo: document.querySelector("#modal-combo"),
  modalCloseBtn: document.querySelector("#modal-close-btn"),
  mob: document.querySelector(".mob")
};

loadDailyStats();
renderRankTable();
updateHud();

els.segments.forEach((button) => {
  button.addEventListener("click", () => {
    els.segments.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    state.mode = button.dataset.mode;
    updateHud();
  });
});

els.startBtn.addEventListener("click", startGame);
els.skipBtn.addEventListener("click", skipWord);
els.modalCloseBtn.addEventListener("click", () => els.modal.classList.add("hidden"));
els.rankTableBtn.addEventListener("click", () => {
  document.querySelector(".rank-reference").scrollIntoView({ behavior: "smooth", block: "start" });
});

els.typingInput.addEventListener("input", () => {
  if (!state.running) return;
  const value = els.typingInput.value;
  const expectedSlice = state.currentAnswer.slice(0, value.length);
  const isWrong = value !== expectedSlice;
  els.typingInput.classList.toggle("wrong", isWrong);
  if (isWrong) {
    setEnemyStatus("輸入不一致，先修正再送出", "warning");
  } else if (value.length > 0) {
    setEnemyStatus("方向正確，繼續輸入", "success");
  } else {
    setEnemyStatus("苦力怕正在盯著你", "");
  }
});

els.typingInput.addEventListener("keydown", (event) => {
  if (!state.running || event.key !== "Enter" || event.isComposing) return;
  event.preventDefault();
  submitAnswer();
});

els.typingInput.addEventListener("paste", (event) => {
  event.preventDefault();

  if (state.running) {
    setEnemyStatus("不能貼上，請自己輸入喔", "warning");
  }
});

document.addEventListener("copy", (event) => {
  if (state.running) {
    event.preventDefault();
    setEnemyStatus("不能複製題目喔", "warning");
  }
});

function startGame() {
  clearInterval(state.timer);
  state.timeLeft = GAME_SECONDS;
  state.score = 0;
  state.combo = 0;
  state.bestCombo = 0;
  state.typed = 0;
  state.correct = 0;
  state.completed = 0;
  state.health = 3;
  state.skipsLeft = 3;
  state.wrongStreak = 0;
  state.endReason = "time";
  state.running = true;

  els.modal.classList.add("hidden");
  els.resultPanel.classList.add("hidden");
  els.targetWord.classList.remove("long-word");
  els.targetWord.classList.remove("extra-long-word");
  els.typingInput.disabled = false;
  els.skipBtn.disabled = false;
  els.typingInput.placeholder = "輸入答案後按 Enter";
  els.typingInput.focus();
  els.startBtn.textContent = "重新開始";
  setEnemyStatus("苦力怕正在盯著你", "");
  nextWord();
  updateHud();

  state.timer = setInterval(() => {
    state.timeLeft -= 1;
    state.todayPlaySeconds += 1;
    saveStats();
    updateHud();
    if (state.timeLeft <= 0) endGame("time");
  }, 1000);
}

function nextWord() {
  const index = Math.floor(Math.random() * wordBank.length);
  state.currentWord = wordBank[index];

  const language = chooseLanguage();
  state.currentAnswer = language === "zh" ? state.currentWord.zh : state.currentWord.en;
  els.wordCategory.textContent = `${state.currentWord.category} / ${language === "zh" ? "中文題" : "英文題"} / ${modeSettings[state.mode].label}`;
  els.targetWord.textContent = state.currentAnswer;
  els.targetWord.classList.toggle("long-word", state.currentAnswer.length >= 10);
  els.targetWord.classList.toggle("extra-long-word", state.currentAnswer.length >= 16);
  els.wordHint.classList.remove("hidden-hint");
  els.wordHint.textContent =
    language === "zh"
      ? `英文對照：${state.currentWord.en}`
      : `中文意思：${state.currentWord.zh}`;
  els.typingInput.value = "";
  els.typingInput.classList.remove("wrong");
  els.typingInput.classList.remove("danger");
  updateHud();
}

function chooseLanguage() {
  if (state.mode === "chinese") return "zh";
  if (state.mode === "english") return "en";
  return Math.random() > 0.5 ? "zh" : "en";
}

function submitAnswer() {
  const answer = els.typingInput.value.trim();
  const expected = state.currentAnswer.trim();
  state.typed += expected.length;

  if (answer === expected) {
    state.correct += expected.length;
    state.combo += 1;
    state.wrongStreak = 0;
    state.health = 3;
    state.bestCombo = Math.max(state.bestCombo, state.combo);
    state.completed += 1;

    const baseScore = getBaseScore(expected);
    const modeMultiplier = modeSettings[state.mode].multiplier;
    const comboMultiplier = getComboMultiplier(state.combo);
    state.score += Math.round(baseScore * modeMultiplier * comboMultiplier);

    setEnemyStatus(`命中！${modeSettings[state.mode].label} 權重 x${modeMultiplier.toFixed(2)}`, "success");
    punchMob();
    nextWord();
    return;
  }

  state.combo = 0;
  state.wrongStreak += 1;
  state.health = Math.max(0, 3 - state.wrongStreak);
  state.score = Math.max(0, state.score - 30);
  els.typingInput.classList.add("wrong");
  els.typingInput.classList.toggle("danger", state.health <= 1);
  setEnemyStatus(`答錯！連續錯誤 ${state.wrongStreak} / 3`, "warning");
  updateHud();

  if (state.wrongStreak >= 3) {
    endGame("death");
  }
}

function skipWord() {
  if (!state.running || state.skipsLeft <= 0) return;
  state.skipsLeft -= 1;
  state.combo = 0;
  state.wrongStreak = 0;
  state.health = 3;
  els.skipBtn.disabled = state.skipsLeft <= 0;
  setEnemyStatus(`已跳過，剩下 ${state.skipsLeft} 次機會`, "");
  nextWord();
}

function getBaseScore(answer) {
  return 80 + answer.length * 12;
}

function getComboMultiplier(combo) {
  return Math.min(2.5, 1 + Math.floor(combo / 3) * 0.1);
}

function punchMob() {
  els.mob.classList.add("hit");
  window.setTimeout(() => els.mob.classList.remove("hit"), 180);
}

function updateHud() {
  const accuracy = state.typed === 0 ? 100 : Math.round((state.correct / state.typed) * 100);
  els.roundProgress.textContent = `完成 ${state.completed} 題`;
  els.score.textContent = state.score;
  els.combo.textContent = state.combo;
  els.comboMultiplier.textContent = `x${getComboMultiplier(state.combo).toFixed(2)}`;
  els.accuracy.textContent = `${accuracy}%`;
  els.timeLeft.textContent = formatClock(state.timeLeft);
  els.todayPlayTime.textContent = formatClock(state.todayPlaySeconds);
  els.bestScore.textContent = state.bestScore;
  els.health.textContent = `${state.health} / 3`;
  els.skipBtn.textContent = `跳過（${state.skipsLeft}）`;
  els.modeWeightCurrent.textContent = `${modeSettings[state.mode].label} x${modeSettings[state.mode].multiplier.toFixed(2)}`;
  els.dangerFill.style.transform = `scaleX(${Math.max(state.timeLeft, 0) / GAME_SECONDS})`;
}

function setEnemyStatus(message, tone) {
  els.enemyStatus.textContent = message;
  els.enemyStatus.classList.toggle("warning", tone === "warning");
  els.enemyStatus.classList.toggle("success", tone === "success");
}

function endGame(reason = "time") {
  if (!state.running) return;
  clearInterval(state.timer);
  state.endReason = reason;
  state.running = false;
  els.typingInput.disabled = true;
  els.skipBtn.disabled = true;
  els.typingInput.placeholder = "按開始再挑戰一次";
  els.startBtn.textContent = "再玩一次";
  showResults();
  showGameOverModal();
}

function showResults() {
  const accuracy = state.typed === 0 ? 0 : Math.round((state.correct / state.typed) * 100);
  if (state.score > state.bestScore) {
    state.bestScore = state.score;
    saveStats();
  }

  const rank = getRank(state.score);
  els.finalScore.textContent = state.score;
  els.finalWords.textContent = state.completed;
  els.finalAccuracy.textContent = `${accuracy}%`;
  els.finalCombo.textContent = state.bestCombo;
  els.finalPlayTime.textContent = formatClock(state.todayPlaySeconds);
  els.finalBestScore.textContent = state.bestScore;
  els.rankName.textContent = rank.name;
  els.rankIcon.textContent = rank.icon;
  els.rankMessage.textContent = rank.message;
  els.resultPanel.classList.remove("hidden");
  updateHud();
}

function showGameOverModal() {
  const rank = getRank(state.score);
  els.modalKicker.textContent = state.endReason === "death" ? "你死亡了" : "挑戰結束";
  els.modalRankIcon.textContent = rank.icon;
  els.modalRankName.textContent = rank.name;
  els.modalScore.textContent = state.score;
  els.modalWords.textContent = state.completed;
  els.modalCombo.textContent = state.bestCombo;
  els.modal.classList.remove("hidden");
}

function getRank(score) {
  return ranks.reduce((best, rank) => (score >= rank.min ? rank : best), ranks[0]);
}

function renderRankTable() {
  els.rankList.innerHTML = ranks
    .map((rank, index) => {
      const nextRank = ranks[index + 1];
      const range = nextRank ? `${rank.min} - ${nextRank.min - 1}` : `${rank.min}+`;
      return `
        <div class="rank-row">
          <span class="rank-row-icon">${rank.icon}</span>
          <strong>${rank.name}</strong>
          <span>${range} 分</span>
        </div>
      `;
    })
    .join("");
}

function loadDailyStats() {
  try {
    const saved = JSON.parse(localStorage.getItem(dailyStorageKey)) || {};
    state.todayPlaySeconds = Number(saved.todayPlaySeconds) || 0;
    state.bestScore = Number(localStorage.getItem(bestScoreStorageKey)) || 0;
  } catch {
    state.todayPlaySeconds = 0;
    state.bestScore = 0;
  }
}

function saveStats() {
  localStorage.setItem(
    dailyStorageKey,
    JSON.stringify({
      todayPlaySeconds: state.todayPlaySeconds
    })
  );
  localStorage.setItem(bestScoreStorageKey, String(state.bestScore));
}

function formatClock(seconds) {
  const safeSeconds = Math.max(0, seconds);
  const minutes = Math.floor(safeSeconds / 60);
  const remainingSeconds = safeSeconds % 60;
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;

  if (hours > 0) {
    return `${hours}:${String(remainingMinutes).padStart(2, "0")}:${String(remainingSeconds).padStart(2, "0")}`;
  }

  return `${String(remainingMinutes).padStart(2, "0")}:${String(remainingSeconds).padStart(2, "0")}`;
}
