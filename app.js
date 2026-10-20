/* ===================================================================
   KHỐI CẤU HÌNH: sửa nội dung ở đây. {to} = cách gọi người xem,
   {from} = tên bạn, {bot} = tên nhân vật. *chữ* tô xanh lá, ~chữ~ tô hồng.
   Sản phẩm, giá, liên hệ là dữ liệu mẫu, hãy thay bằng thông tin thật.
   =================================================================== */
const CONFIG = {
  bot: "Pi",
  from: "QuanPham",
  to: "Cậu",
  facebook: {
    label: "Facebook @quanpham115",
    url: "https://www.facebook.com/quanpham115",
  },
  music: {
    src: "music.mp3",
  },
  lock: {
    pin: "1612",
    title: "MÓN QUÀ CỦA TỚ",
    sub: "DÀNH RIÊNG CHO",
    name: "CẬU" /* tên hiện to dạng chữ viết tay */,
    notif: "Bạn có 1 tin nhắn mới từ {from}",
    hint: "Ngày sinh nhật của mình? (Không nhớ là dỗi nha)",
    wrong: "Chưa đúng rồi, nghĩ lại xem nào~",
    right: "Đúng rồi! Mở khóa thôi...",
  },
  game: {
    sleep: "{bot} đang ngủ say... giữ nút để gọi cậu ấy dậy nhé",
    steps: [
      "Nhẹ nhàng thôi...",
      "Có gì đó đang động đậy...",
      "Sắp rồi, đừng buông tay!",
      "Gần được rồi nè!!",
    ],
    done: "Bạn vừa đánh thức một thứ gì đó",
  },
  letter: {
    /* SỬA LỜI NHẮN Ở ĐÂY: mỗi dòng trong body là một đoạn. Chưa tiết lộ người gửi nên chữ ký để mơ hồ */
    arrive: "{bot} vừa gửi cho {to} một lá thư...",
    tap: "Chạm vào lá thư để mở",
    greet: "Gửi {to},",
    body: [
      "Hôm nay có vài dòng muốn nói với cậu thôi, không dài đâu, nhưng viết bằng cả tấm lòng.",
      "Cảm ơn cậu vì đã luôn ở đó, vì những lần cười vu vơ, những lúc im lặng mà vẫn thấy yên tâm. Có cậu, ngày nào cũng như một ngày đặc biệt.",
      "Nhân ngày 20/10, chúc cậu thật nhiều niềm vui và những điều dịu dàng. Có một món quà nhỏ đang chờ phía sau, đi cùng {bot} nhé.",
    ],
    sign: "Một người luôn nghĩ đến cậu ♥",
    afterClose: "Tớ chỉ là người đưa thư thôi. Ai gửi á? Chốc nữa cậu sẽ biết~",
  },
  say: {
    wake: "{bot} vừa gửi thư xong, đang díu mắt... Chạm vào đâu đó để gọi cậu ấy dậy hẳn nhé",
    intro: [
      "Ơ... có ai ở đó không vậy?",
      "À, là {to} hả! Chào {to} nha",
      "Tớ là *{bot}*, bé robot nhỏ xíu sống trong trang web này nè",
      "{to} thử đưa chuột đến mắt tớ xem, tớ không giận đâu~",
    ],
    pokes: [
      "Á! nhột quá nha",
      "Hihi thôi mà, đừng chọc nữa~",
      "Rồi rồi, tớ chịu thua {to} luôn",
    ],
    afterPoke: [
      "Mà tớ quên mất, hôm nay có người nhờ tớ gửi {to} một món quà",
      "Người đó là *{from}* nè, dặn tớ phải mang thông điệp đến cậu đấy",
    ],
    pink: [
      "Ui... mà {to} xinh quá trời luôn á",
      "Tớ nhìn mà tim cũng đập thình thịch nè",
      "{to} giúp tớ bắt mấy trái ~tim~ đang trốn nha",
    ],
    afterHearts: "Giỏi quá! {to} bắt hết rồi, tim tớ ấm hẳn lên",
    field: [
      "À mà... sắp *20/10* rồi đó",
      "Tớ chạy ra đồng cỏ hái hoa tặng {to} nè",
      "{to} chạm vào đồng cỏ để trồng giúp tớ ba bông hoa nha",
    ],
    planted: [
      "Bông đầu tiên nở rồi!",
      "bông thứ hai, nữa nè~",
      "Bông cuối cùng, đẹp như {to} vậy đó",
    ],
    afterField: "Cánh đồng này là của {to} hết đó nha",
    stars: [
      "Tớ muốn gửi {to} ba điều ước nè",
      "{to} chạm vào từng ngôi sao để mở nhé",
    ],
    wishes: [
      "Chúc {to} thật nhiều *sức khỏe*, ăn ngon ngủ kỹ, không ốm vặt nha",
      "Chúc {to} luôn ~xinh đẹp~ và tự tin, đi đến đâu cũng tỏa sáng",
      "Chúc nụ cười của {to} luôn *rạng rỡ*, đừng để ai làm nó tắt nhé",
    ],
    afterStars:
      "Ba điều ước bay lên trời hết rồi, tớ nghe thấy tiếng vỗ tay đó",
    green: [
      "À còn nữa, tớ có quà cho {to} nè",
      "Một chiếc *cỏ 4 lá* tớ giấu mãi mới tìm được á",
      "{to} giữ chặt nó một chút để nhận quà nha",
    ],
    gotClover: [
      "Nè, cầm lấy đi!",
      "Chúc {to} gặp thật nhiều *may mắn*, chúc cậu mãi xinh đẹp nhé!",
    ],
    ask: ["Nè {to}...", "Tớ nhờ {to} một việc nhỏ xíu được không?"],
    dodge: [
      "Ơ sao lại né tớ vậy~",
      "Tớ buồn xíu đó nha",
      "{to} đừng trêu tớ mà...",
      "Thôi được, cho {to} bấm luôn",
    ],
    yes: "Yeah! tớ biết {to} tốt bụng nhất mà",
    plane: [
      "Việc nhỏ xíu đó là: giúp tớ fix back trang web này nha",
      "{to} bấm nút bên dưới để thả máy bay giấy đi nha",
    ],
    afterPlane: "Máy bay cất cánh rồi! cảm ơn {to} nhiều lắm luôn á",
    planet: [
      "Còn một chuyện nữa thôi, hứa đó",
      "Tớ muốn ra ngoài đời thật chơi, {to} dắt tớ đi được không?",
      "{to} chạm vào bé xe nhỏ này vài cái trước nha, nó mê được chạm lắm",
    ],
    rover: [
      "Bíp!",
      "Bíp bíp!",
      "Bíp bíp bíp! Cậu làm cậu ấy vui lên rồi,cảm ơn nhé",
    ],
    go: "Đi thôi! chào mừng {to} đến Câu hỏi của *{from}*",
  },
  final: {
    qTitle: "Pi có 10 câu hỏi nhỏ cho {to}",
    qNote:
      "Viết câu trả lời vào ô, nếu cậu muốn hãy gửi ngay cho {from} đọc nhé.",
    questions: [
      { q: "Cuối tuần rảnh rỗi, {to} thích làm gì nhất?" },
      { q: "Bài hát nào {to} nghe đi nghe lại hoài không chán?" },
      { q: "Món ăn nào làm {to} vui lên ngay lập tức?" },
      { q: "Nếu được đi chơi ngay bây giờ, {to} muốn đến đâu?" },
      { q: "Bộ phim hoặc cuốn sách nào làm {to} nhớ mãi?" },
      {
        q: "Điều nhỏ xíu nào mình làm khiến bạn thấy được yêu thương nhất?",
      },
      {
        q: "Những lúc buồn, bạn muốn mình im lặng ở cạnh hay ngồi nghe bạn kể?",
      },
      {
        q: "Có điều gì ở mình đôi khi làm bạn hơi phiền không? Nói thật cũng được, mình không giận đâu.",
      },
      {
        q: "Có ước mơ nào bạn chưa kể với ai, để mình cùng bạn thực hiện?",
      },
      { q: "Kỷ niệm nào của hai đứa mình làm bạn nhớ nhất?" },
    ],
    pTitle: "Hành tinh kỷ niệm",
    pNote:
      "Thêm ảnh của {to} vào các ô trống bên dưới, ảnh sẽ bay vòng quanh hành tinh. Chạm vào ảnh đang bay để xem to, hoặc chạm vào khung trống để chọn ảnh.",
    pPriv:
      "Ảnh {to} thêm vào sẽ hiện ngay cho cả {to} và {from} cùng xem, không cần bấm gửi gì cả. Chạm ảnh đang bay để xem to.",
    sendNote:
      "Mọi câu trả lời, ảnh và món quà {to} chọn đều được lưu trực tiếp, {from} mở trang là đọc được.",
    slots: 8,
    maxSlots: 14,
  },
  shop: {
    title: "Phần quà *bất ngờ*",
    note: "Mỗi bên chỉ có đúng một món, và Pi không được phép tiết lộ bên trong có gì đâu nha.",
    contactHow:
      "Chọn món rồi nhắn cho mình qua kênh dưới đây, kèm tên món và số lượng nhé.",
    contactValue: "Facebook: {from}",
    /* art: surprise | surprise2 | keychain | headband | card | candle | giftbox | notebook | tote ; tint: màu nền ảnh ; desc: mô tả dễ thương */
    groups: [
      {
        name: "Dành cho nữ",
        sub: "Một món thôi, nhưng là bất ngờ",
        kind: "a",
        items: [
          {
            name: "Hộp quà bất ngờ cho nữ",
            price: "????",
            note: "Mở ra mới biết~",
            desc: "Hộp quà bí mật được Pi canh giữ cả đêm. Pi không nói bên trong có gì đâu, chỉ biết mở ra là cười toe toét liền!",
            art: "surprise",
            tint: "#f9c9dc",
          },
        ],
      },
      {
        name: "Dành cho nam",
        sub: "Một món thôi, nhưng là bất ngờ",
        kind: "b",
        items: [
          {
            name: "Hộp quà bất ngờ cho nam",
            price: "????",
            note: "Mở ra mới biết~",
            desc: "Một bất ngờ nho nhỏ được gói thật kỹ. Pi đoán bạn sẽ giả vờ bình tĩnh được đúng ba giây rồi cười thôi à!",
            art: "surprise2",
            tint: "#c9efdc",
          },
        ],
      },
    ],
    footTitle: "Cảm ơn {to} đã ủng hộ",
    footText:
      "",
  },
};
/* ===================== HẾT PHẦN CẤU HÌNH ===================== */

/* ---------- Tiện ích ---------- */
const $ = (s, r) => (r || document).querySelector(s);
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const rnd = (a, b) => a + Math.random() * (b - a);
const F = (t) =>
  String(t)
    .replace(/\{to\}/g, CONFIG.to)
    .replace(/\{from\}/g, CONFIG.from)
    .replace(/\{bot\}/g, CONFIG.bot);
let reduce = false;
try {
  reduce = localStorage.getItem("pi2010_fx") === "off";
} catch (e) {}
if (reduce) document.documentElement.classList.add("rm");
let fine = false;
try {
  fine =
    matchMedia("(hover: hover) and (pointer: fine)").matches ||
    matchMedia("(any-hover: hover) and (any-pointer: fine)").matches;
} catch (e) {}
if (!fine) {
  try {
    fine = !("ontouchstart" in window) && !(navigator.maxTouchPoints > 0);
  } catch (e) {}
}
let RUN = 0;
const ABORT = { abort: true };
const guard = (id) => {
  if (id !== RUN) throw ABORT;
};

const ST = {
  heart:
    '<svg viewBox="0 0 30 30"><path d="M15 26S3 18.5 3 10.5C3 6.6 6 4 9.3 4c2.4 0 4.3 1.3 5.7 3.4C16.4 5.3 18.3 4 20.7 4 24 4 27 6.6 27 10.5 27 18.5 15 26 15 26z" fill="#ff6fb1" stroke="#ffe0ef" stroke-width="1.4"/></svg>',
  star: '<svg viewBox="0 0 30 30"><path d="M15 2l3.6 8.2 8.9.8-6.7 5.9 2 8.7L15 21l-7.8 4.6 2-8.7L2.5 11l8.9-.8z" fill="#ffd66b" stroke="#fff6cf" stroke-width="1.3" stroke-linejoin="round"/></svg>',
  flower:
    '<svg viewBox="0 0 40 40"><g fill="#ff9ccc"><circle cx="20" cy="9" r="7"/><circle cx="31" cy="17" r="7"/><circle cx="27" cy="30" r="7"/><circle cx="13" cy="30" r="7"/><circle cx="9" cy="17" r="7"/></g><circle cx="20" cy="20" r="6" fill="#ffd66b"/></svg>',
  butterfly:
    '<svg viewBox="0 0 40 40"><ellipse cx="12" cy="14" rx="9" ry="8" fill="#9b7bff"/><ellipse cx="28" cy="14" rx="9" ry="8" fill="#9b7bff"/><ellipse cx="13" cy="28" rx="7" ry="6" fill="#c9b8ff"/><ellipse cx="27" cy="28" rx="7" ry="6" fill="#c9b8ff"/><rect x="19" y="9" width="2.4" height="24" rx="1.2" fill="#fff"/></svg>',
  cloud:
    '<svg viewBox="0 0 40 40"><g fill="#cfeaff"><circle cx="13" cy="24" r="8"/><circle cx="22" cy="18" r="10"/><circle cx="31" cy="24" r="8"/><rect x="13" y="24" width="18" height="8"/></g></svg>',
  bow: '<svg viewBox="0 0 40 40"><ellipse cx="11" cy="20" rx="10" ry="7" transform="rotate(-20 11 20)" fill="#ff6fb1"/><ellipse cx="29" cy="20" rx="10" ry="7" transform="rotate(20 29 20)" fill="#ff6fb1"/><circle cx="20" cy="21" r="5" fill="#ffd3e8"/></svg>',
  cat: '<svg viewBox="0 0 40 40"><polygon points="8,15 9,3 19,10" fill="#ffe3b8"/><polygon points="32,15 31,3 21,10" fill="#ffe3b8"/><circle cx="20" cy="23" r="13" fill="#ffe3b8"/><circle cx="15" cy="22" r="1.8" fill="#3b1d3f"/><circle cx="25" cy="22" r="1.8" fill="#3b1d3f"/><circle cx="20" cy="26" r="1.5" fill="#ff6fb1"/><path d="M16 29q4 3 8 0" fill="none" stroke="#3b1d3f" stroke-width="1.5" stroke-linecap="round"/></svg>',
  note: '<svg viewBox="0 0 40 40"><path d="M16 30V9l16-4v20" fill="none" stroke="#8ff9ff" stroke-width="3" stroke-linejoin="round"/><circle cx="12" cy="30" r="5" fill="#8ff9ff"/><circle cx="28" cy="26" r="5" fill="#8ff9ff"/></svg>',
  sparkle:
    '<svg viewBox="0 0 40 40"><path d="M20 2l4 14 14 4-14 4-4 14-4-14L2 20l14-4z" fill="#fff"/></svg>',
  clover:
    '<svg viewBox="0 0 40 40"><g fill="#4dff9a"><circle cx="14" cy="14" r="8"/><circle cx="26" cy="14" r="8"/><circle cx="14" cy="26" r="8"/><circle cx="26" cy="26" r="8"/></g><circle cx="20" cy="20" r="3" fill="#0b3a1e"/></svg>',
};
const ST_KEYS = Object.keys(ST);
let stkN = 0;
function sticker(x, y, type) {
  if (reduce || stkN > 26) return;
  const el = document.createElement("div");
  el.className = "stk";
  stkN++;
  el.innerHTML =
    ST[type || ST_KEYS[Math.floor(Math.random() * ST_KEYS.length)]];
  el.style.setProperty("--x", x - 22 + "px");
  el.style.setProperty("--y", y - 22 + "px");
  el.style.setProperty("--dx", rnd(-50, 50).toFixed(0) + "px");
  el.style.setProperty("--r0", rnd(-30, 30).toFixed(0) + "deg");
  el.style.setProperty("--r1", rnd(-12, 12).toFixed(0) + "deg");
  el.style.setProperty("--r2", rnd(-40, 40).toFixed(0) + "deg");
  document.body.appendChild(el);
  el.addEventListener("animationend", () => {
    el.remove();
    stkN--;
  });
}

/* ---------- Toast & sao chép ---------- */
let tt;
function toast(m) {
  const t = $("#toast");
  t.textContent = m;
  t.hidden = false;
  clearTimeout(tt);
  tt = setTimeout(() => {
    t.hidden = true;
  }, 2200);
}
function copyFrom(input) {
  const ok = () => toast("Đã sao chép"),
    no = () => {
      input.focus();
      input.select();
      toast("Đã chọn sẵn, hãy nhấn Ctrl+C hoặc giữ để sao chép");
    };
  try {
    if (navigator.clipboard && navigator.clipboard.writeText)
      navigator.clipboard.writeText(input.value).then(ok, no);
    else no();
  } catch (e) {
    no();
  }
}

/* ---------- Lời thoại gõ chữ ---------- */
const lineEl = $("#line");
let typeTimer = 0,
  typeDone = null,
  typeChars = [],
  typeI = 0;
function finishType() {
  clearTimeout(typeTimer);
  typeChars.forEach((c) => c.classList.add("v"));
  const l = typeChars[typeChars.length - 1];
  if (l) l.classList.remove("cr");
  typeChars = [];
  if (typeDone) {
    const d = typeDone;
    typeDone = null;
    d();
  }
}
async function lineOut() {
  if (!lineEl.textContent) return;
  finishType();
  lineEl.classList.add("out");
  await sleep(reduce ? 0 : 360);
  lineEl.classList.remove("out");
  lineEl.textContent = "";
}
function say(text, o) {
  o = o || {};
  const id = RUN;
  return new Promise(async (res, rej) => {
    try {
      await lineOut();
      guard(id);
    } catch (e) {
      return rej(e);
    }
    lineEl.textContent = "";
    typeChars = [];
    typeI = 0;
    let cls = "";
    F(text)
      .split(/(\*|~)/)
      .forEach((p) => {
        if (p === "*") {
          cls = cls ? "" : "hl";
          return;
        }
        if (p === "~") {
          cls = cls ? "" : "hp";
          return;
        }
        p.split(/(\s+)/).forEach((w) => {
          if (!w) return;
          const word = document.createElement("span");
          word.style.whiteSpace = /\s/.test(w) ? "normal" : "nowrap";
          if (cls) word.className = cls;
          w.split("").forEach((ch) => {
            const s = document.createElement("span");
            s.className = "c";
            s.textContent = ch;
            word.appendChild(s);
            typeChars.push(s);
          });
          lineEl.appendChild(word);
        });
      });
    typeDone = async () => {
      try {
        await sleep(o.hold === undefined ? 700 : o.hold);
        guard(id);
        res();
      } catch (e) {
        rej(e);
      }
    };
    if (reduce) {
      finishType();
      return;
    }
    const step = () => {
      if (id !== RUN) {
        typeDone = null;
        return rej(ABORT);
      }
      if (typeI > 0) typeChars[typeI - 1].classList.remove("cr");
      if (typeI >= typeChars.length) {
        finishType();
        return;
      }
      typeChars[typeI].classList.add("v", "cr");
      typeI++;
      typeTimer = setTimeout(step, o.speed || 34);
    };
    step();
  });
}
async function sayAll(arr, o) {
  for (const t of arr) await say(t, o);
}
lineEl.addEventListener("click", () => {
  if (typeChars.length) finishType();
});

/* ---------- Nền, cảm xúc, Pi ---------- */
function bg(name) {
  document
    .querySelectorAll(".bg")
    .forEach((b) => b.classList.toggle("on", b.dataset.b === name));
}
const bot = $("#bot");
function mood(m) {
  bot.classList.remove("m-happy", "m-excited", "m-hide");
  if (m) bot.classList.add("m-" + m);
}
function showBot(on) {
  bot.classList.toggle("hide", !on);
  if (on && bot.classList.contains("m-hide")) mood("");
}
function blush(on) {
  bot.classList.toggle("blushing", !!on);
}
function poke() {
  bot.classList.remove("poke");
  void bot.offsetWidth;
  bot.classList.add("poke");
}

/* ---------- Khu tương tác ---------- */
const actEl = $("#act"),
  decoEl = $("#deco");
function actClear() {
  actEl.textContent = "";
}
function decoClear() {
  decoEl.textContent = "";
}
function addBtn(label, cls) {
  const b = document.createElement("button");
  b.className = "btn " + (cls || "");
  b.textContent = F(label);
  actEl.appendChild(b);
  return b;
}
function waitClick(b) {
  return new Promise((r) =>
    b.addEventListener("click", () => r(b), { once: true }),
  );
}
function hint(t) {
  const h = document.createElement("div");
  h.className = "hint";
  h.textContent = F(t);
  actEl.appendChild(h);
  return h;
}
function counter(t) {
  let c = actEl.querySelector(".counter");
  if (!c) {
    c = document.createElement("div");
    c.className = "counter";
    actEl.appendChild(c);
  }
  c.textContent = t;
  return c;
}

/* ---------- Hạt (canvas) ---------- */
const fx = $("#fx"),
  fc = fx.getContext("2d");
let W = innerWidth,
  H = innerHeight,
  DPR = Math.min(devicePixelRatio || 1, 1.6);
function sizeFx() {
  W = innerWidth;
  H = innerHeight;
  [fx, $("#grass")].forEach((c) => {
    c.width = W * DPR;
    c.height = H * DPR;
  });
  fc.setTransform(DPR, 0, 0, DPR, 0, 0);
}
addEventListener("resize", sizeFx);
sizeFx();
const sprites = {};
function spr(col) {
  if (sprites[col]) return sprites[col];
  const c = document.createElement("canvas");
  c.width = c.height = 32;
  const x = c.getContext("2d"),
    g = x.createRadialGradient(16, 16, 0, 16, 16, 16);
  g.addColorStop(0, "rgba(" + col + ",1)");
  g.addColorStop(0.35, "rgba(" + col + ",0.55)");
  g.addColorStop(1, "rgba(" + col + ",0)");
  x.fillStyle = g;
  x.fillRect(0, 0, 32, 32);
  return (sprites[col] = c);
}
const COL = {
  cy: "53,243,255",
  pink: "255,111,177",
  gold: "255,214,107",
  green: "77,255,154",
  white: "255,255,255",
  orange: "255,150,60",
  violet: "155,123,255",
};
let P = [],
  ambient = "none";
const MAXP = 110;
function spawn(p) {
  if (P.length < MAXP) P.push(p);
}
function burst(x, y, n, cols, power) {
  if (reduce) return;
  cols = cols || ["pink", "gold", "cy"];
  for (let i = 0; i < n; i++) {
    const a = rnd(0, 6.283),
      s = rnd(1.5, 6) * (power || 1);
    spawn({
      x,
      y,
      vx: Math.cos(a) * s,
      vy: Math.sin(a) * s - 2,
      g: 0.12,
      life: 1,
      d: rnd(0.012, 0.022),
      s: rnd(10, 22),
      c: spr(COL[cols[i % cols.length]]),
    });
  }
}
function setAmbient(a) {
  ambient = a;
}
function amb() {
  if (
    reduce ||
    ambient === "none" ||
    P.length > MAXP - 12 ||
    Math.random() > 0.35
  )
    return;
  const r = Math.random();
  if (ambient === "pink")
    spawn({
      x: rnd(0, W),
      y: H + 10,
      vx: rnd(-0.3, 0.3),
      vy: -rnd(0.5, 1.6),
      g: 0,
      life: 1,
      d: 0.0045,
      s: rnd(6, 14),
      c: spr(r < 0.6 ? COL.pink : COL.orange),
    });
  else if (ambient === "fire")
    spawn({
      x: rnd(0, W),
      y: rnd(H * 0.35, H),
      vx: rnd(-0.3, 0.3),
      vy: rnd(-0.4, 0.1),
      g: 0,
      life: 1,
      d: 0.004,
      s: rnd(8, 16),
      ph: rnd(0, 6),
      c: spr(COL.gold),
    });
  else if (ambient === "stars")
    spawn({
      x: rnd(0, W),
      y: rnd(0, H),
      vx: 0,
      vy: 0,
      g: 0,
      life: 1,
      d: 0.006,
      s: rnd(6, 14),
      tw: 1,
      c: spr(r < 0.5 ? COL.white : COL.violet),
    });
  else if (ambient === "green")
    spawn({
      x: rnd(0, W),
      y: H + 10,
      vx: rnd(-0.5, 0.5),
      vy: -rnd(0.6, 1.8),
      g: 0,
      life: 1,
      d: 0.004,
      s: rnd(10, 24),
      c: spr(COL.green),
    });
  else if (ambient === "snow")
    spawn({
      x: rnd(0, W),
      y: -10,
      vx: rnd(-0.3, 0.3),
      vy: rnd(0.4, 1.2),
      g: 0,
      life: 1,
      d: 0.004,
      s: rnd(5, 11),
      c: spr(COL.cy),
    });
}
let lastT = 0;
function frame(t) {
  requestAnimationFrame(frame);
  if (document.hidden) return;
  fc.clearRect(0, 0, W, H);
  amb();
  for (let i = P.length - 1; i >= 0; i--) {
    const p = P[i];
    p.vy += p.g;
    p.x += p.vx + (p.ph !== undefined ? Math.sin(t / 700 + p.ph) * 0.5 : 0);
    p.y += p.vy;
    p.life -= p.d;
    if (p.life <= 0 || p.y < -30 || p.y > H + 30) {
      P.splice(i, 1);
      continue;
    }
    fc.globalAlpha =
      Math.min(p.life * 1.6, 1) *
      (p.tw ? 0.55 + 0.45 * Math.sin(t / 300 + p.x) : 1);
    fc.drawImage(p.c, p.x - p.s, p.y - p.s, p.s * 2, p.s * 2);
  }
  fc.globalAlpha = 1;
  tickCursor(t);
  if (grassOn) drawGrass(t);
}

/* ---------- Con trỏ hình sao/trái tim + Pi nhìn theo ---------- */
const cur = $("#cur");
let tx = W / 2,
  ty = H / 2,
  cx = tx,
  cy = ty,
  lastMove = 0,
  trailT = 0,
  lx = 0,
  ly = 0;
const HIT =
  "button,a,input,textarea,.item,.clover,.star-b,.heartbub,.rover,.stk-hit,.of,.pslot";
if (fine) {
  addEventListener(
    "pointermove",
    (e) => {
      if (e.pointerType === "touch") return;
      tx = e.clientX;
      ty = e.clientY;
      lastMove = performance.now();
      if (!cur.classList.contains("vis")) {
        cur.classList.add("vis");
        document.documentElement.classList.add("hascur");
        cx = tx;
        cy = ty;
      }
      cur.classList.toggle(
        "over",
        !!(e.target.closest && e.target.closest(HIT)),
      );
    },
    { passive: true },
  );
  addEventListener("pointerdown", () => cur.classList.add("down"));
  addEventListener("pointerup", () => cur.classList.remove("down"));
  document.documentElement.addEventListener("mouseleave", () => {
    cur.classList.remove("vis");
    document.documentElement.classList.remove("hascur");
  });
}
function tickCursor(t) {
  if (!fine) return;
  cx += (tx - cx) * 0.3;
  cy += (ty - cy) * 0.3;
  cur.style.transform =
    "translate(" + (cx - 15).toFixed(1) + "px," + (cy - 15).toFixed(1) + "px)";
  if (t - trailT > 55 && t - lastMove < 120 && P.length < MAXP - 20) {
    trailT = t;
    spawn({
      x: cx,
      y: cy,
      vx: rnd(-0.4, 0.4),
      vy: rnd(-0.2, 0.6),
      g: 0.02,
      life: 0.8,
      d: 0.03,
      s: rnd(5, 9),
      c: spr(COL.gold),
    });
  }
  if (!bot.classList.contains("hide")) {
    const r = bot.getBoundingClientRect(),
      dx = cx - (r.left + r.width / 2),
      dy = cy - (r.top + r.height / 2),
      d = Math.hypot(dx, dy) || 1,
      k = Math.min(d / 280, 1);
    lx += ((dx / d) * k - lx) * 0.12;
    ly += ((dy / d) * k - ly) * 0.12;
    bot.style.setProperty("--lx", lx.toFixed(3));
    bot.style.setProperty("--ly", ly.toFixed(3));
  }
}
/* Chạm bất kỳ đâu: tung sticker nhỏ (cả chuột và cảm ứng) */
addEventListener(
  "pointerdown",
  (e) => {
    if (e.target.closest && e.target.closest("input,textarea,.overlay")) return;
    if ($("#stage").style.display === "none") return;
    sticker(
      e.clientX,
      e.clientY,
      ["heart", "star", "sparkle", "flower", "butterfly", "note"][
        Math.floor(Math.random() * 6)
      ],
    );
    burst(e.clientX, e.clientY, 6, ["gold", "cy"], 0.6);
  },
  { passive: true },
);

/* ---------- Nhạc: Blob URL trước, dự phòng WebAudio, tự phát ở lần chạm đầu ---------- */
const bgm = $("#bgm"),
  mBtn = $("#musicBtn");
let userPaused = false,
  mode = "none",
  actx = null,
  abuf = null,
  asrc = null,
  musicBytes = null;
bgm.volume = 0.85;
function b64ToBytes(uri) {
  const bin = atob(uri.slice(uri.indexOf(",") + 1)),
    u = new Uint8Array(bin.length);
  for (let k = 0; k < bin.length; k++) u[k] = bin.charCodeAt(k);
  return u;
}
function setOn(on) {
  mBtn.classList.toggle("on", !!on);
}
function isPlaying() {
  return mode === "webaudio"
    ? !!(actx && actx.state === "running")
    : !bgm.paused;
}
async function startWebAudio() {
  try {
    if (!musicBytes) {
      const response = await fetch(CONFIG.music.src);
      if (!response.ok)
        throw new Error(`Unable to load music (${response.status})`);
      musicBytes = new Uint8Array(await response.arrayBuffer());
    }
    if (!actx) {
      const AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) return false;
      actx = new AC();
      actx.onstatechange = () => setOn(actx.state === "running" && !userPaused);
    }
    if (!abuf)
      abuf = await new Promise((res, rej) => {
        const p = actx.decodeAudioData(musicBytes.buffer.slice(0), res, rej);
        if (p && p.catch) p.catch(rej);
      });
    if (!asrc) {
      asrc = actx.createBufferSource();
      asrc.buffer = abuf;
      asrc.loop = true;
      const g = actx.createGain();
      g.gain.value = 0.85;
      asrc.connect(g);
      g.connect(actx.destination);
      asrc.start(0);
    }
    mode = "webaudio";
    try {
      bgm.pause();
    } catch (e) {}
    if (!userPaused) {
      const r = actx.resume();
      if (r && r.catch) r.catch(() => {});
    }
    return true;
  } catch (e) {
    return false;
  }
}
async function playMusic() {
  if (userPaused) return;
  if (mode === "webaudio") {
    if (actx && actx.state !== "running") {
      const r = actx.resume();
      if (r && r.catch) r.catch(() => {});
    }
    return;
  }
  if (!bgm.getAttribute("src")) return;
  try {
    await bgm.play();
    mode = "audio";
    setOn(true);
  } catch (err) {
    if (err && err.name === "NotAllowedError") return;
    if (!(await startWebAudio()) && !bgm.error)
      toast("Không phát được nhạc trên thiết bị này");
  }
}
bgm.addEventListener("play", () => {
  if (mode !== "webaudio") setOn(true);
});
bgm.addEventListener("pause", () => {
  if (mode !== "webaudio") setOn(false);
});
bgm.addEventListener("error", async () => {
  if (mode === "webaudio") return;
  if (!(await startWebAudio())) toast("Không mở được file nhạc");
});
(function initMusic() {
  const src = CONFIG.music.src;
  if (!src) return;
  try {
    if (/^data:/.test(src)) musicBytes = b64ToBytes(src);
  } catch (e) {
    musicBytes = null;
  }
  if (CONFIG.music.mode === "webaudio" && musicBytes) {
    startWebAudio();
    return;
  }
  try {
    if (musicBytes)
      bgm.src = URL.createObjectURL(
        new Blob([musicBytes], {
          type: (src.match(/^data:([^;,]+)/) || [])[1] || "audio/mpeg",
        }),
      );
    else bgm.src = src;
  } catch (e) {
    bgm.src = src;
  }
})();
playMusic();
["pointerdown", "pointerup", "keydown", "touchend", "click"].forEach((ev) =>
  addEventListener(ev, playMusic, { passive: true }),
);
mBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  if (isPlaying()) {
    userPaused = true;
    if (mode === "webaudio") {
      actx.suspend();
    } else bgm.pause();
    setOn(false);
  } else {
    userPaused = false;
    playMusic();
    if (mode === "webaudio") setOn(true);
  }
});
mBtn.addEventListener("pointerdown", (e) => e.stopPropagation());

const ART = {
  keychain:
    '<svg viewBox="0 0 160 120"><circle cx="80" cy="14" r="10" fill="none" stroke="var(--ink)" stroke-width="3"/><path d="M80 24v20" stroke="var(--ink)" stroke-width="3"/><g fill="var(--petal)"><circle cx="80" cy="56" r="14"/><circle cx="97" cy="69" r="14"/><circle cx="90" cy="89" r="14"/><circle cx="70" cy="89" r="14"/><circle cx="63" cy="69" r="14"/></g><circle cx="80" cy="76" r="12" fill="var(--face)"/><circle cx="76" cy="75" r="1.8" fill="var(--ink)"/><circle cx="84" cy="75" r="1.8" fill="var(--ink)"/></svg>',
  headband:
    '<svg viewBox="0 0 160 120"><path d="M16 96 Q80 -12 144 96" fill="none" stroke="var(--accent)" stroke-width="12" stroke-linecap="round"/><ellipse cx="62" cy="38" rx="20" ry="11" transform="rotate(-24 62 38)" fill="var(--petal)" stroke="var(--ink)" stroke-width="2.5"/><ellipse cx="98" cy="38" rx="20" ry="11" transform="rotate(24 98 38)" fill="var(--petal)" stroke="var(--ink)" stroke-width="2.5"/><circle cx="80" cy="40" r="8" fill="var(--face)" stroke="var(--ink)" stroke-width="2.5"/></svg>',
  card: '<svg viewBox="0 0 160 120"><g transform="rotate(-6 80 60)"><rect x="42" y="12" width="76" height="96" rx="8" fill="var(--card)" stroke="var(--ink)" stroke-width="3"/><path d="M80 94 V52" stroke="var(--leaf)" stroke-width="3" stroke-linecap="round"/><path d="M80 78 Q66 72 64 62 Q76 62 80 78Z M80 70 Q94 64 96 54 Q84 54 80 70Z" fill="var(--leaf)"/><g fill="var(--petal)"><circle cx="80" cy="36" r="8"/><circle cx="90" cy="44" r="8"/><circle cx="70" cy="44" r="8"/></g><circle cx="80" cy="42" r="6" fill="var(--face)"/><rect x="56" y="98" width="48" height="3" rx="1.5" fill="var(--line)"/></g></svg>',
  candle:
    '<svg viewBox="0 0 160 120"><path d="M80 16 Q94 34 80 48 Q66 34 80 16Z" fill="var(--face)" stroke="var(--accent)" stroke-width="3" stroke-linejoin="round"/><path d="M80 48 V58" stroke="var(--ink)" stroke-width="3" stroke-linecap="round"/><rect x="48" y="58" width="64" height="52" rx="12" fill="var(--petal)" stroke="var(--ink)" stroke-width="3"/><rect x="48" y="78" width="64" height="18" fill="var(--card)" stroke="var(--ink)" stroke-width="3"/><circle cx="80" cy="87" r="4" fill="var(--accent)"/></svg>',
  giftbox:
    '<svg viewBox="0 0 160 120"><rect x="36" y="54" width="88" height="56" rx="6" fill="var(--accent)" stroke="var(--ink)" stroke-width="3"/><rect x="30" y="40" width="100" height="20" rx="6" fill="var(--petal)" stroke="var(--ink)" stroke-width="3"/><rect x="73" y="40" width="14" height="70" fill="var(--face)" stroke="var(--ink)" stroke-width="3"/><ellipse cx="64" cy="30" rx="18" ry="10" transform="rotate(-22 64 30)" fill="none" stroke="var(--ink)" stroke-width="3"/><ellipse cx="96" cy="30" rx="18" ry="10" transform="rotate(22 96 30)" fill="none" stroke="var(--ink)" stroke-width="3"/></svg>',
  notebook:
    '<svg viewBox="0 0 160 120"><g transform="rotate(5 80 60)"><rect x="44" y="10" width="72" height="100" rx="8" fill="var(--leaf)" stroke="var(--ink)" stroke-width="3"/><rect x="44" y="10" width="12" height="100" rx="6" fill="var(--ink)" opacity="0.28"/><rect x="64" y="30" width="44" height="30" rx="4" fill="var(--card)" stroke="var(--ink)" stroke-width="2.5"/><path d="M71 41h30M71 50h20" stroke="var(--line)" stroke-width="3" stroke-linecap="round"/><path d="M104 10 V110" stroke="var(--face)" stroke-width="5"/></g></svg>',
  tote: '<svg viewBox="0 0 160 120"><path d="M58 46 Q58 12 80 12 Q102 12 102 46" fill="none" stroke="var(--ink)" stroke-width="4" stroke-linecap="round"/><rect x="34" y="44" width="92" height="68" rx="10" fill="var(--face)" stroke="var(--ink)" stroke-width="3"/><g fill="var(--petal)"><circle cx="80" cy="66" r="9"/><circle cx="91" cy="76" r="9"/><circle cx="85" cy="90" r="9"/><circle cx="75" cy="90" r="9"/><circle cx="69" cy="76" r="9"/></g><circle cx="80" cy="79" r="7" fill="var(--accent)"/></svg>',
  surprise:
    '<svg viewBox="0 0 160 120"><rect x="38" y="54" width="84" height="54" rx="8" fill="#ff6fb1" stroke="#3b1d3f" stroke-width="3"/><rect x="30" y="40" width="100" height="22" rx="8" fill="#ff9ccc" stroke="#3b1d3f" stroke-width="3"/><rect x="73" y="40" width="14" height="68" fill="#ffd66b" stroke="#3b1d3f" stroke-width="3"/><path d="M80 40 C60 8 34 22 56 38Z M80 40 C100 8 126 22 104 38Z" fill="#ffd66b" stroke="#3b1d3f" stroke-width="3" stroke-linejoin="round"/><text x="54" y="92" text-anchor="middle" font-family="Baloo 2,sans-serif" font-weight="800" font-size="26" fill="#fff">?</text><text x="106" y="92" text-anchor="middle" font-family="Baloo 2,sans-serif" font-weight="800" font-size="26" fill="#fff">?</text><path d="M140 14l3 8 8 3-8 3-3 8-3-8-8-3 8-3z" fill="#fff" stroke="#3b1d3f" stroke-width="2" stroke-linejoin="round"/><path d="M20 22l2 5 5 2-5 2-2 5-2-5-5-2 5-2z" fill="#ffd66b" stroke="#3b1d3f" stroke-width="1.6" stroke-linejoin="round"/></svg>',
  surprise2:
    '<svg viewBox="0 0 160 120"><rect x="38" y="54" width="84" height="54" rx="8" fill="#3aa6c8" stroke="#1b2a55" stroke-width="3"/><rect x="30" y="40" width="100" height="22" rx="8" fill="#7fd3e8" stroke="#1b2a55" stroke-width="3"/><rect x="73" y="40" width="14" height="68" fill="#ffd66b" stroke="#1b2a55" stroke-width="3"/><path d="M80 40 C60 8 34 22 56 38Z M80 40 C100 8 126 22 104 38Z" fill="#ffd66b" stroke="#1b2a55" stroke-width="3" stroke-linejoin="round"/><text x="54" y="92" text-anchor="middle" font-family="Baloo 2,sans-serif" font-weight="800" font-size="26" fill="#fff">?</text><text x="106" y="92" text-anchor="middle" font-family="Baloo 2,sans-serif" font-weight="800" font-size="26" fill="#fff">?</text><path d="M140 14l3 8 8 3-8 3-3 8-3-8-8-3 8-3z" fill="#fff" stroke="#1b2a55" stroke-width="2" stroke-linejoin="round"/><path d="M20 22l2 5 5 2-5 2-2 5-2-5-5-2 5-2z" fill="#ffd66b" stroke="#1b2a55" stroke-width="1.6" stroke-linejoin="round"/></svg>',
};
/* ---------- Đồng cỏ (canvas) ---------- */
let grassOn = false,
  grassGrow = 0,
  blades = [];
const gc = $("#grass").getContext("2d");
function growGrass() {
  blades = [];
  const n = Math.min(130, Math.floor(W / 7));
  for (let i = 0; i < n; i++)
    blades.push({
      x: rnd(-10, W + 10),
      h: rnd(60, 190),
      w: rnd(2, 4.2),
      ph: rnd(0, 6.28),
      hue: Math.random(),
      o: 0,
    });
  grassGrow = 0;
}
function drawGrass(t) {
  gc.setTransform(DPR, 0, 0, DPR, 0, 0);
  gc.clearRect(0, 0, W, H);
  gc.lineCap = "round";
  grassGrow = Math.min(grassGrow + 0.012, 1);
  const k = 1 - Math.pow(1 - grassGrow, 3);
  for (const b of blades) {
    const dx = b.x - cx,
      near =
        !reduce && Math.abs(dx) < 130 && cy > H - 300
          ? (1 - Math.abs(dx) / 130) * Math.sign(dx) * 44
          : 0;
    b.o += (Math.sin(t / 900 + b.ph) * 7 + near - b.o) * 0.12;
    const h = b.h * k;
    gc.strokeStyle =
      "hsl(" +
      (170 - b.hue * 85).toFixed(0) +
      ",85%," +
      (40 + b.hue * 16).toFixed(0) +
      "%)";
    gc.lineWidth = b.w;
    gc.beginPath();
    gc.moveTo(b.x, H + 2);
    gc.quadraticCurveTo(b.x + b.o * 0.3, H - h * 0.55, b.x + b.o, H - h);
    gc.stroke();
  }
}
function grass(on) {
  grassOn = on;
  if (on) growGrass();
  else {
    gc.setTransform(DPR, 0, 0, DPR, 0, 0);
    gc.clearRect(0, 0, W, H);
  }
}

/* ---------- Trợ giúp cảnh ---------- */
const waitEl = (el) =>
  new Promise((r) => el.addEventListener("click", () => r(), { once: true }));
const dotsEl = $("#dots");
for (let i = 0; i < 8; i++) dotsEl.appendChild(document.createElement("i"));
function setDot(n) {
  [...dotsEl.children].forEach((d, k) => {
    d.classList.toggle("on", k <= n);
    d.classList.toggle("now", k === n);
  });
  if (n >= 2) $("#skipBtn").classList.add("show");
}
function center(el) {
  const r = el.getBoundingClientRect();
  return [r.left + r.width / 2, r.top + r.height / 2];
}
function reset() {
  lineEl.textContent = "";
  actClear();
  decoClear();
  grass(false);
  setAmbient("none");
  P = [];
  blush(false);
  mood("hide");
  bot.classList.add("hide");
  bg("night");
  $("#stage").style.cssText = "";
  $("#stage").hidden = false;
  $("#shop").hidden = true;
  $("#shopBg").hidden = true;
  document.documentElement.classList.add("story");
  $("#skipBtn").classList.remove("show");
  dotsEl.querySelectorAll("i").forEach((d) => d.classList.remove("on", "now"));
}
const S = CONFIG.say;

/* ---------- Các cảnh ---------- */
async function s0(id) {
  setDot(0);
  bg("night");
  mood("happy");
  showBot(true);
  bot.style.opacity = "0.4";
  const wk = hint(S.wake.replace("{bot}", CONFIG.bot));
  wk.classList.add("big");
  await new Promise((r) => {
    const f = () => {
      removeEventListener("pointerdown", f);
      removeEventListener("keydown", f);
      r();
    };
    addEventListener("pointerdown", f);
    addEventListener("keydown", f);
  });
  guard(id);
  actClear();
  burst(W / 2, H * 0.4, 30, ["cy", "white"], 1);
  bot.style.opacity = "";
  mood("");
  poke();
  await sleep(900);
  guard(id);
  await sayAll(S.intro.slice(0, 3));
  guard(id);
  await say(S.intro[3], { hold: 100 });
  guard(id);
  hint("chạm vào mắt Pi nè");
  for (let n = 0; n < 3; n++) {
    await waitEl(bot);
    guard(id);
    actClear();
    poke();
    const c = center(bot);
    sticker(c[0], c[1] - 30, n === 2 ? "heart" : "sparkle");
    burst(c[0], c[1], 14, ["cy", "white"], 1);
    if (n === 1) mood("happy");
    await say(S.pokes[n], { hold: 250 });
    guard(id);
    if (n === 1) mood("");
    if (n < 2) hint("chạm thêm lần nữa nè");
  }
  actClear();
  await sayAll(S.afterPoke);
  guard(id);
}
async function s1(id) {
  setDot(1);
  bg("pink");
  setAmbient("pink");
  blush(true);
  mood("happy");
  await sleep(300);
  await sayAll(S.pink);
  guard(id);
  mood("");
  let left = 5;
  const cnt = counter("trái tim: 0/5");
  for (let i = 0; i < 5; i++) {
    const b = document.createElement("button");
    b.className = "heartbub";
    b.setAttribute("aria-label", "Bắt trái tim");
    b.innerHTML = ST.heart;
    b.style.left = (i % 2 ? rnd(6, 24) : rnd(72, 90)).toFixed(0) + "%";
    b.style.top = (14 + i * 13 + rnd(-3, 3)).toFixed(0) + "%";
    b.style.animationDelay = (-rnd(0, 3)).toFixed(1) + "s";
    b.addEventListener("click", () => {
      const c = center(b);
      b.classList.add("pop");
      sticker(c[0], c[1], "heart");
      burst(c[0], c[1], 12, ["pink", "gold"], 1);
      left--;
      cnt.textContent = "trái tim: " + (5 - left) + "/5";
      setTimeout(() => b.remove(), 400);
      poke();
    });
    decoEl.appendChild(b);
  }
  await new Promise((r) => {
    const iv = setInterval(() => {
      if (id !== RUN || left <= 0) {
        clearInterval(iv);
        r();
      }
    }, 120);
  });
  guard(id);
  actClear();
  mood("happy");
  burst(W / 2, H * 0.4, 40, ["pink", "gold"], 1.2);
  await say(S.afterHearts);
  guard(id);
  mood("");
}
async function s2(id) {
  setDot(2);
  blush(false);
  decoClear();
  bg("field");
  setAmbient("fire");
  grass(true);
  await sleep(500);
  await sayAll(S.field);
  guard(id);
  let n = 0;
  const cnt = counter("hoa đã trồng: 0/3");
  await new Promise((res) => {
    const h = (e) => {
      if (id !== RUN) {
        removeEventListener("pointerdown", h);
        return res();
      }
      if (e.clientY < H * 0.5) {
        toast("chạm xuống đồng cỏ phía dưới nhé");
        return;
      }
      const pl = document.createElement("div");
      pl.className = "pl";
      pl.innerHTML = ST.flower;
      pl.style.left = e.clientX + "px";
      pl.style.top = e.clientY + "px";
      document.body.appendChild(pl);
      requestAnimationFrame(() =>
        requestAnimationFrame(() => pl.classList.add("g")),
      );
      setTimeout(() => pl.remove(), 6000);
      burst(e.clientX, e.clientY, 16, ["pink", "gold", "green"], 1);
      say(S.planted[n], { hold: 150 }).catch(() => {});
      n++;
      cnt.textContent = "hoa đã trồng: " + n + "/3";
      if (n >= 3) {
        removeEventListener("pointerdown", h);
        res();
      }
    };
    addEventListener("pointerdown", h);
  });
  guard(id);
  await sleep(2200);
  guard(id);
  actClear();
  mood("happy");
  await say(S.afterField);
  guard(id);
  mood("");
}
async function s3(id) {
  setDot(3);
  grass(false);
  decoClear();
  bg("stars");
  setAmbient("stars");
  await sleep(400);
  await sayAll(S.stars);
  guard(id);
  const pts = [
    [18, 26],
    [50, 13],
    [82, 26],
  ];
  decoEl.insertAdjacentHTML(
    "beforeend",
    '<svg id="cons" viewBox="0 0 100 100" preserveAspectRatio="none"><line x1="18" y1="26" x2="50" y2="13" vector-effect="non-scaling-stroke"/><line x1="50" y1="13" x2="82" y2="26" vector-effect="non-scaling-stroke"/></svg>',
  );
  const lines = decoEl.querySelectorAll("#cons line"),
    stars = pts.map((p) => {
      const b = document.createElement("button");
      b.className = "star-b";
      b.setAttribute("aria-label", "Mở điều ước");
      b.innerHTML = ST.star;
      b.style.left = p[0] + "%";
      b.style.top = p[1] + "%";
      decoEl.appendChild(b);
      return b;
    });
  const cnt = counter("điều ước: 0/3");
  let lit = 0,
    lastSay = Promise.resolve();
  await new Promise((res) => {
    stars.forEach((b) =>
      b.addEventListener("click", () => {
        if (b.classList.contains("lit") || id !== RUN) return;
        b.classList.add("lit");
        lit++;
        cnt.textContent = "điều ước: " + lit + "/3";
        const c = center(b);
        sticker(c[0], c[1], "star");
        burst(c[0], c[1], 22, ["gold", "white"], 1.1);
        if (
          stars[0].classList.contains("lit") &&
          stars[1].classList.contains("lit")
        )
          lines[0].classList.add("on");
        if (
          stars[1].classList.contains("lit") &&
          stars[2].classList.contains("lit")
        )
          lines[1].classList.add("on");
        lastSay = say(S.wishes[lit - 1], { hold: 1500 }).catch(() => {});
        if (lit >= 3) lastSay.then(res);
      }),
    );
  });
  guard(id);
  actClear();
  mood("happy");
  burst(W / 2, H * 0.3, 50, ["gold", "white", "violet"], 1.3);
  await say(S.afterStars);
  guard(id);
  mood("");
}
const CLOVER =
  '<svg viewBox="0 0 100 160"><g transform="translate(50 50)">' +
  [0, 90, 180, 270]
    .map(
      (a) =>
        '<path transform="rotate(' +
        a +
        ')" d="M0 -4 C-16 -12 -26 -34 -10 -42 C-4 -45 0 -40 0 -34 C0 -40 4 -45 10 -42 C26 -34 16 -12 0 -4Z" fill="rgba(77,255,154,0.28)" stroke="#4dff9a" stroke-width="2.6" stroke-linejoin="round"/>',
    )
    .join("") +
  '</g><circle cx="50" cy="50" r="3.5" fill="#d9ffe9"/><path d="M50 54 C50 92 34 112 52 156" fill="none" stroke="#4dff9a" stroke-width="3.5" stroke-linecap="round"/></svg><svg class="ring" viewBox="0 0 100 100"><circle cx="50" cy="50" r="46"/></svg>';
async function s4(id) {
  setDot(4);
  decoClear();
  bg("green");
  setAmbient("green");
  mood("");
  await sleep(500);
  await sayAll(S.green);
  guard(id);
  const cl = document.createElement("button");
  cl.className = "clover";
  cl.setAttribute("aria-label", "Giữ hoặc chạm liên tục để nhận cỏ bốn lá");
  cl.innerHTML = CLOVER;
  decoEl.appendChild(cl);
  hint("giữ chặt (hoặc chạm liên tục) vào cỏ 4 lá");
  const circle = cl.querySelector(".ring circle");
  let prog = 0,
    down = false;
  cl.addEventListener("pointerdown", () => {
    down = true;
  });
  addEventListener("pointerup", () => {
    down = false;
  });
  cl.addEventListener("click", () => {
    prog = Math.min(1, prog + 0.18);
    const c = center(cl);
    sticker(c[0], c[1] - 20, "clover");
  });
  await new Promise((res) => {
    let last = performance.now();
    const iv = setInterval(() => {
      const now = performance.now(),
        dt = now - last;
      last = now;
      if (id !== RUN) {
        clearInterval(iv);
        return res();
      }
      prog += down ? dt * 0.0009 : -dt * 0.00025;
      prog = Math.max(0, Math.min(1, prog));
      circle.style.strokeDashoffset = (289 * (1 - prog)).toFixed(1);
      if (down && Math.random() < 0.3) {
        const c = center(cl);
        burst(c[0], c[1] - 20, 2, ["green"], 0.5);
      }
      if (prog >= 1) {
        clearInterval(iv);
        res();
      }
    }, 30);
  });
  guard(id);
  actClear();
  mood("excited");
  cl.classList.add("gone");
  burst(W * 0.75, H * 0.6, 50, ["green", "gold", "white"], 1.4);
  for (let i = 0; i < 8; i++)
    setTimeout(
      () => sticker(rnd(W * 0.5, W * 0.9), rnd(H * 0.3, H * 0.7), "clover"),
      i * 120,
    );
  await sleep(1300);
  guard(id);
  await sayAll(S.gotClover);
  guard(id);
  mood("");
}
async function s5(id) {
  setDot(5);
  decoClear();
  bg("blue");
  setAmbient("snow");
  mood("");
  await sleep(400);
  await sayAll(S.ask);
  guard(id);
  const yes = addBtn("Được chứ!", "solid"),
    no = addBtn("Để tớ nghĩ đã...", "pink dodge");
  let d = 0;
  const move = () => {
    if (d >= 4) return;
    d++;
    no.style.transform =
      "translate(" +
      rnd(-110, 110).toFixed(0) +
      "px," +
      rnd(-50, 50).toFixed(0) +
      "px)";
    say(S.dodge[d - 1], { hold: 100 }).catch(() => {});
    if (d >= 4) no.textContent = "ừm, thôi được...";
    const c = center(no);
    sticker(c[0], c[1], "cloud");
  };
  no.addEventListener("pointerenter", (e) => {
    if (e.pointerType === "mouse") move();
  });
  no.addEventListener("pointerdown", (e) => {
    if (e.pointerType !== "mouse" && d < 4) {
      e.preventDefault();
      move();
    }
  });
  await new Promise((r) => {
    yes.addEventListener("click", () => r());
    no.addEventListener("click", () => {
      if (d >= 4) r();
    });
  });
  guard(id);
  actClear();
  mood("excited");
  burst(W / 2, H * 0.4, 40, ["cy", "white", "gold"], 1.2);
  await say(S.yes);
  guard(id);
  mood("");
}
const PLANE =
  '<svg viewBox="-6 0 126 52"><path d="M4 28 L96 24 Q116 24 116 28 Q116 32 96 32 L4 30z" fill="#e9fdff"/><path d="M52 26 L38 4 L50 4 L72 26z" fill="#8ff9ff"/><path d="M52 30 L38 50 L50 50 L72 30z" fill="#8ff9ff"/><path d="M6 27 L-4 12 L8 12 L18 26z" fill="#8ff9ff"/></svg>';
async function s6(id) {
  setDot(6);
  decoClear();
  bg("plane");
  setAmbient("stars");
  mood("");
  await sleep(400);
  await sayAll(S.plane);
  guard(id);
  decoEl.insertAdjacentHTML(
    "beforeend",
    '<div class="plane-wrap"><div class="card-ph"></div><svg id="trail" viewBox="0 0 100 60" preserveAspectRatio="none"><path d="M14 40 C 30 20, 50 56, 86 36" vector-effect="non-scaling-stroke"/></svg><div class="plane">' +
      PLANE +
      "</div></div>",
  );
  const row = document.createElement("div");
  row.style.cssText =
    "display:flex;gap:8px;width:100%;flex-wrap:wrap;justify-content:center";
  const inp = document.createElement("input");
  inp.readOnly = true;
  inp.value = (function () {
    try {
      return location.href.split("#")[0];
    } catch (e) {
      return "";
    }
  })();
  inp.setAttribute("aria-label", "Đường dẫn của trang");
  inp.style.cssText =
    "flex:1;min-width:150px;max-width:300px;font:inherit;font-family:var(--mono);font-size:.85rem;color:var(--ink);background:rgba(255,255,255,.07);border:1.5px solid var(--line);border-radius:999px;padding:10px 16px";
  row.appendChild(inp);
  actEl.appendChild(row);
  const go = addBtn("Sao chép & thả máy bay", "solid");
  await waitEl(go);
  guard(id);
  copyFrom(inp);
  go.remove();
  const pl = decoEl.querySelector(".plane");
  pl.classList.add("fly");
  mood("happy");
  const c = center(pl);
  sticker(c[0], c[1], "heart");
  burst(c[0], c[1], 30, ["cy", "white", "pink"], 1.2);
  [0, 300, 600, 900].forEach((t) =>
    setTimeout(() => {
      const q = center(pl);
      sticker(q[0], q[1], ["cloud", "sparkle", "heart", "star"][t / 300]);
    }, 400 + t),
  );
  await sleep(2200);
  guard(id);
  actClear();
  await say(S.afterPlane);
  guard(id);
  mood("");
}
const ROVER =
  '<svg viewBox="0 0 100 70"><rect x="8" y="44" width="84" height="20" rx="10" fill="#6b4a2a"/><circle cx="20" cy="54" r="7" fill="#3b2a18"/><circle cx="50" cy="54" r="7" fill="#3b2a18"/><circle cx="80" cy="54" r="7" fill="#3b2a18"/><rect x="18" y="24" width="56" height="24" rx="6" fill="#ff9a3c"/><rect x="42" y="10" width="26" height="18" rx="5" fill="#ffb25c"/><circle cx="55" cy="19" r="4" fill="#3b1d3f"/><path d="M30 24V8" stroke="#ffd66b" stroke-width="3"/><circle cx="30" cy="7" r="4" fill="#ff6fb1"/></svg>';
async function s7(id) {
  setDot(7);
  decoClear();
  bg("planet");
  setAmbient("stars");
  mood("");
  await sleep(400);
  await sayAll(S.planet);
  guard(id);
  decoEl.insertAdjacentHTML("afterbegin", '<div class="planet"></div>');
  const rv = document.createElement("button");
  rv.className = "rover";
  rv.setAttribute("aria-label", "Chú xe nhỏ, chạm để nghe bíp");
  rv.innerHTML = ROVER;
  decoEl.appendChild(rv);
  let x = W / 2,
    going = true,
    clicks = 0;
  (function loop() {
    if (!going || id !== RUN) return;
    const tg =
      fine && cur.classList.contains("vis")
        ? cx
        : W / 2 + Math.sin(performance.now() / 1800) * W * 0.25;
    x += (tg - x) * 0.04;
    rv.style.transform = "translate(" + (x - 46).toFixed(1) + "px,0)";
    requestAnimationFrame(loop);
  })();
  hint("chú xe chạy theo con trỏ của bạn đó, thử xem");
  await new Promise((res) => {
    rv.addEventListener("click", () => {
      rv.classList.remove("hop");
      void rv.offsetWidth;
      rv.classList.add("hop");
      const c = center(rv);
      sticker(c[0], c[1] - 20, "note");
      burst(c[0], c[1], 14, ["gold", "cy"], 1);
      if (clicks < 3) say(S.rover[clicks], { hold: 100 }).catch(() => {});
      clicks++;
      if (clicks === 3) res();
    });
  });
  guard(id);
  actClear();
  await sleep(1400);
  guard(id);
  const go = addBtn("Đi thôi nào!", "solid");
  await waitEl(go);
  guard(id);
  actClear();
  mood("excited");
  await say(S.go);
  guard(id);
  going = false;
  await enterShop();
}

/* ---------- Gian hàng ---------- */
let shopBuilt = false;
function hlText(el, t) {
  el.textContent = "";
  F(t)
    .split("*")
    .forEach((p, i) => {
      if (!p) return;
      if (i % 2) {
        const s = document.createElement("span");
        s.style.cssText = "color:var(--green)";
        s.textContent = p;
        el.appendChild(s);
      } else el.appendChild(document.createTextNode(p));
    });
}
function buildShop() {
  if (shopBuilt) return;
  shopBuilt = true;
  const SH = CONFIG.shop,
    cells = [];
  hlText($("#shopTitle"), SH.title);
  $("#shopNote").textContent = F(SH.note);
  const host = $("#panels");
  SH.groups.forEach((g) => {
    const p = document.createElement("section");
    p.className = "panel " + (g.kind || "a");
    p.innerHTML = '<div class="flags">' + "<i></i>".repeat(9) + "</div>";
    const h = document.createElement("h3");
    h.textContent = F(g.name);
    const sub = document.createElement("div");
    sub.className = "sub";
    sub.textContent = F(g.sub || "");
    p.appendChild(h);
    p.appendChild(sub);
    const grid = document.createElement("div");
    grid.className = "grid" + (g.items.length === 1 ? " single" : "");
    g.items.forEach((it, k) => {
      const cell = document.createElement("div");
      cell.className = "cell";
      cell.style.setProperty("--d", (k % 4) * 0.09 + "s");
      const c = document.createElement("div");
      c.className = "item";
      const art = document.createElement("div");
      art.className = "art";
      art.style.setProperty("--tint", it.tint || "#f9c9dc");
      art.innerHTML = ART[it.art] || ART.giftbox;
      const info = document.createElement("div");
      info.className = "info";
      info.innerHTML =
        '<div class="nm"></div><div class="nt"></div><div class="pr"></div>';
      info.children[0].textContent = it.name;
      info.children[1].textContent = it.note || "";
      info.children[2].textContent = it.price;
      if (it.desc) {
        const d = document.createElement("p");
        d.className = "ds";
        d.textContent = F(it.desc);
        info.insertBefore(d, info.children[2]);
      }
      const btn = document.createElement("button");
      btn.className = "btn";
      btn.textContent = "Chọn món";
      btn.addEventListener("click", () => {
        chooseGift(it, g);
        openBuy(it);
      });
      info.appendChild(btn);
      c.appendChild(art);
      c.appendChild(info);
      cell.appendChild(c);
      grid.appendChild(cell);
      cells.push(cell);
      if (fine && !reduce) {
        c.addEventListener("pointermove", (e) => {
          const r = c.getBoundingClientRect(),
            x = (e.clientX - r.left) / r.width - 0.5,
            y = (e.clientY - r.top) / r.height - 0.5;
          c.style.transform =
            "perspective(700px) rotateY(" +
            (x * 10).toFixed(1) +
            "deg) rotateX(" +
            (-y * 10).toFixed(1) +
            "deg) translateY(-4px)";
        });
        c.addEventListener("pointerleave", () => {
          c.style.transform = "";
        });
      }
    });
    p.appendChild(grid);
    host.appendChild(p);
  });
  $("#footTitle").textContent = FF(SH.footTitle);
  $("#footText").textContent = FF(SH.footText);
  const fl = $("#footLink");
  fl.textContent = "";
  const a = document.createElement("a");
  a.href = CONFIG.facebook.url;
  a.target = "_blank";
  a.rel = "noopener";
  a.textContent = CONFIG.facebook.label;
  fl.appendChild(a);
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      (es) =>
        es.forEach((en) => {
          if (en.isIntersecting) {
            en.target.classList.add("in");
            io.unobserve(en.target);
          }
        }),
      { threshold: 0.1 },
    );
    cells.forEach((c) => io.observe(c));
  }
  setTimeout(() => cells.forEach((c) => c.classList.add("in")), 1800);
}
async function enterShop() {
  const st = $("#stage");
  st.style.transition = "opacity .8s ease";
  st.style.opacity = "0";
  await sleep(reduce ? 0 : 850);
  st.hidden = true;
  document.documentElement.classList.remove("story");
  setAmbient("none");
  grass(false);
  $("#shopBg").hidden = false;
  $("#shop").hidden = false;
  buildShop();
  buildFinal();
  window.scrollTo(0, 0);
  burst(W / 2, H * 0.2, 30, ["cy", "pink", "gold"], 1);
}
const overlay = $("#overlay");
let lastFocus = null;
let chosenGift = null;
try {
  chosenGift = JSON.parse(localStorage.getItem("pi2010_gift") || "null");
} catch (e) {}
function chooseGift(it, g) {
  chosenGift = { name: it.name, group: g && g.name ? g.name : "" };
  try {
    localStorage.setItem("pi2010_gift", JSON.stringify(chosenGift));
  } catch (e) {}
  toast("Pi đã ghi nhớ món cậu chọn rồi nha");
  if (window.__sync) __sync.gift(chosenGift);
  if (window.__sendRefresh) window.__sendRefresh();
}
function openBuy(it) {
  const SH = CONFIG.shop;
  lastFocus = document.activeElement;
  $("#dlgName").textContent = it.name;
  $("#dlgPrice").textContent = it.price;
  $("#dlgHow").textContent = F(SH.contactHow);
  $("#dlgContact").value = F(SH.contactValue);
  const l = $("#dlgLink");
  l.href = CONFIG.facebook.url;
  l.hidden = !CONFIG.facebook.url;
  overlay.hidden = false;
  $("#dlgClose").focus();
  const r = overlay.getBoundingClientRect();
  sticker(W / 2, H / 2, "heart");
  burst(W / 2, H / 2, 22, ["pink", "gold", "cy"], 1);
}
function closeBuy() {
  overlay.hidden = true;
  if (lastFocus && lastFocus.focus) lastFocus.focus();
}
$("#dlgClose").addEventListener("click", closeBuy);
$("#dlgCopy").addEventListener("click", () => copyFrom($("#dlgContact")));
overlay.addEventListener("click", (e) => {
  if (e.target === overlay) closeBuy();
});
addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !overlay.hidden) closeBuy();
});

/* ---------- Phần cuối: câu hỏi nhỏ + hành tinh ảnh ---------- */
let finalBuilt = false;
/* {to} đứng đầu câu thì viết hoa như cấu hình, đứng giữa câu thì viết thường */
const FF = (t) => {
  const low = CONFIG.to.charAt(0).toLowerCase() + CONFIG.to.slice(1);
  return F(
    String(t)
      .replace(/(^|[.!?]\s+)\{to\}/g, "$1\u0001")
      .replace(/\{to\}/g, low),
  ).replace(/\u0001/g, CONFIG.to);
};
function revealList(list) {
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      (es) =>
        es.forEach((en) => {
          if (en.isIntersecting) {
            en.target.classList.add("in");
            io.unobserve(en.target);
          }
        }),
      { threshold: 0.1 },
    );
    list.forEach((c) => io.observe(c));
  }
  setTimeout(() => list.forEach((c) => c.classList.add("in")), 1800);
}
function buildFinal() {
  if (finalBuilt) return;
  finalBuilt = true;
  const FN = CONFIG.final;
  /* --- 10 câu hỏi --- */
  $("#qTitle").textContent = FF(FN.qTitle);
  $("#qNote").textContent = FF(FN.qNote);
  let saved = {};
  try {
    saved = JSON.parse(localStorage.getItem("pi2010_q") || "{}") || {};
  } catch (e) {
    saved = {};
  }
  const save = () => {
    try {
      localStorage.setItem("pi2010_q", JSON.stringify(saved));
    } catch (e) {}
  };
  const updCount = () => {
    const n = Object.keys(saved).filter(
      (k) => saved[k] && saved[k].done,
    ).length;
    $("#qCount").textContent = "Đã hỏi " + n + "/" + FN.questions.length;
  };
  const qg = $("#qgrid"),
    qcells = [];
  FN.questions.forEach((it, i) => {
    const st = saved[i] || {},
      cell = document.createElement("div");
    cell.className = "cell";
    cell.style.setProperty("--d", (i % 3) * 0.09 + "s");
    const card = document.createElement("article");
    card.className = "qcard" + (st.done ? " done" : "");
    const head = document.createElement("div");
    head.className = "qh";
    const no = document.createElement("span");
    no.className = "qtag";
    no.textContent = "Câu hỏi " + (i + 1);
    head.appendChild(no);
    const q = document.createElement("h3");
    q.className = "qq";
    q.textContent = FF(it.q);
    const ta = document.createElement("textarea");
    ta.className = "qa";
    ta.rows = 2;
    ta.id = "qa" + i;
    ta.placeholder = "Viết câu trả lời ở đây...";
    ta.setAttribute("aria-label", "Câu trả lời cho câu " + (i + 1));
    ta.value = st.a || "";
    ta.addEventListener("input", () => {
      saved[i] = Object.assign(saved[i] || {}, { a: ta.value });
      save();
      window.__sync && __sync.ans(i, ta.value, !!saved[i].done);
    });
    const mk = document.createElement("button");
    mk.type = "button";
    mk.className = "btn mark";
    mk.setAttribute("aria-pressed", st.done ? "true" : "false");
    mk.textContent = st.done ? "Đã hỏi rồi!" : "Đánh dấu đã hỏi";
    mk.addEventListener("click", () => {
      const on = !card.classList.contains("done");
      card.classList.toggle("done", on);
      mk.setAttribute("aria-pressed", on ? "true" : "false");
      mk.textContent = on ? "Đã hỏi rồi!" : "Đánh dấu đã hỏi";
      saved[i] = Object.assign(saved[i] || {}, { done: on });
      save();
      updCount();
      window.__sync && __sync.ans(i, ta.value, on);
      if (on) {
        const c = center(mk);
        sticker(c[0], c[1], i % 2 ? "heart" : "star");
        burst(c[0], c[1], 14, ["pink", "gold", "cy"], 1);
      }
    });
    (window.__qRef = window.__qRef || {})[i] = { ta, card, mk };
    [head, q, ta, mk].forEach((n) => card.appendChild(n));
    cell.appendChild(card);
    qg.appendChild(cell);
    qcells.push(cell);
  });
  updCount();
  revealList(qcells);

  /* --- Hành tinh ảnh --- */
  $("#pTitle").textContent = FF(FN.pTitle);
  $("#pNote").textContent = FF(FN.pNote);
  $("#pPriv").textContent = FF(FN.pPriv);
  $("#sendNote").textContent = FF(FN.sendNote);
  window.__setAns = (i, a, d) => {
    const r = window.__qRef && __qRef[i];
    if (!r) return;
    if (document.activeElement !== r.ta) r.ta.value = a || "";
    r.card.classList.toggle("done", !!d);
    r.mk.textContent = d ? "Đã hỏi rồi!" : "Đánh dấu đã hỏi";
    saved[i] = Object.assign(saved[i] || {}, { a: a || "", done: !!d });
    save();
    updCount();
  };
  window.__qSaved = () => saved;

  /* --- 6 cặp mèo chibi (vẽ bằng SVG, tự thiết kế) --- */
  const CATV = [
    {
      bg: ["#ffe3ee", "#ffc2dc"],
      a: ["#fff7ef", "#ffb4c8", 0],
      b: ["#ffb978", "#ff8f8f", 1],
      x: "heart",
    },
    {
      bg: ["#dff4ff", "#b6e0ff"],
      a: ["#9fa8b8", "#ffb4c8", 1],
      b: ["#454a59", "#ff9cb8", 0],
      x: "scarf",
    },
    {
      bg: ["#fff1cf", "#ffd98f"],
      a: ["#fff0d2", "#ffb4c8", 0],
      b: ["#c58a5a", "#ffb4c8", 1],
      x: "flower",
    },
    {
      bg: ["#e8defc", "#cbb8f7"],
      a: ["#ffffff", "#ffb4c8", 0],
      b: ["#2f3140", "#ff9cb8", 0],
      x: "stars",
    },
    {
      bg: ["#d9f7e6", "#aeeccb"],
      a: ["#ffcf99", "#ffb4c8", 1],
      b: ["#f6f1ea", "#ffb4c8", 0],
      x: "fish",
    },
    {
      bg: ["#ffe0d6", "#ffbfae"],
      a: ["#d9d2c8", "#ffb4c8", 1],
      b: ["#fff7ef", "#ffb4c8", 0],
      x: "balloon",
    },
  ];
  function cat(cx, cy, c, rot, flip) {
    const [fur, ear, st] = c,
      dk = "#3b2a33";
    const stripes = st
      ? '<path d="M-6 -30q2 7 0 12M0 -32v12M6 -30q-2 7 0 12" stroke="rgba(0,0,0,.22)" stroke-width="3" stroke-linecap="round" fill="none"/>'
      : "";
    return (
      '<g transform="translate(' +
      cx +
      " " +
      cy +
      ") rotate(" +
      rot +
      ") scale(" +
      (flip ? -1 : 1) +
      ' 1)">' +
      '<ellipse cx="0" cy="52" rx="27" ry="21" fill="' +
      fur +
      '" stroke="' +
      dk +
      '" stroke-width="2.5"/>' +
      '<path d="M26 56q22 -4 18 -26" stroke="' +
      fur +
      '" stroke-width="9" stroke-linecap="round" fill="none"/>' +
      '<path d="M-31 -14l-5 -30l26 15z" fill="' +
      fur +
      '" stroke="' +
      dk +
      '" stroke-width="2.5" stroke-linejoin="round"/><path d="M-28 -21l-2 -15l13 8z" fill="' +
      ear +
      '"/>' +
      '<path d="M31 -14l5 -30l-26 15z" fill="' +
      fur +
      '" stroke="' +
      dk +
      '" stroke-width="2.5" stroke-linejoin="round"/><path d="M28 -21l2 -15l-13 8z" fill="' +
      ear +
      '"/>' +
      '<ellipse cx="0" cy="8" rx="40" ry="34" fill="' +
      fur +
      '" stroke="' +
      dk +
      '" stroke-width="2.5"/>' +
      stripes +
      '<ellipse cx="-15" cy="6" rx="5.5" ry="7" fill="' +
      dk +
      '"/><ellipse cx="15" cy="6" rx="5.5" ry="7" fill="' +
      dk +
      '"/>' +
      '<circle cx="-13.5" cy="3" r="2.2" fill="#fff"/><circle cx="16.5" cy="3" r="2.2" fill="#fff"/>' +
      '<ellipse cx="-27" cy="19" rx="7" ry="4.5" fill="#ff9db8" opacity=".75"/><ellipse cx="27" cy="19" rx="7" ry="4.5" fill="#ff9db8" opacity=".75"/>' +
      '<path d="M-3 14h6l-3 4z" fill="#ff7f9f"/><path d="M-9 21q6 6 9 0q3 6 9 0" stroke="' +
      dk +
      '" stroke-width="2" fill="none" stroke-linecap="round"/>' +
      '<path d="M-44 10l-14 -3M-44 17l-14 3M44 10l14 -3M44 17l14 3" stroke="' +
      dk +
      '" stroke-width="1.6" stroke-linecap="round"/></g>'
    );
  }
  const HEART = (x, y, k, col) =>
    '<path transform="translate(' +
    x +
    " " +
    y +
    ") scale(" +
    k +
    ')" d="M0 8C-14 -4 -10 -16 0 -9C10 -16 14 -4 0 8z" fill="' +
    (col || "#ff5c93") +
    '" stroke="#fff" stroke-width="1.5"/>';
  function catSVG(v) {
    const L = cat(66, 92, v.a, -7, false),
      R = cat(136, 96, v.b, 7, true);
    let ex = "";
    if (v.x === "heart")
      ex =
        HEART(101, 36, 2.2) +
        HEART(60, 40, 0.9, "#ffa3c4") +
        HEART(143, 44, 0.8, "#ffa3c4");
    if (v.x === "scarf")
      ex =
        '<path d="M30 140q70 22 140 0l-2 16q-68 22 -136 0z" fill="#ff6b81" stroke="#fff" stroke-width="2"/><path d="M96 150l-6 30h14l6 -28z" fill="#ff6b81" stroke="#fff" stroke-width="2"/>' +
        HEART(101, 38, 1.5);
    if (v.x === "flower")
      ex =
        '<g transform="translate(101 150)"><path d="M0 0v22" stroke="#4caf6a" stroke-width="3"/>' +
        [0, 72, 144, 216, 288]
          .map(
            (r) =>
              '<ellipse cx="0" cy="-9" rx="5" ry="8" fill="#ff8fb3" transform="rotate(' +
              r +
              ')"/>',
          )
          .join("") +
        '<circle r="4.5" fill="#ffd66b"/></g>' +
        HEART(101, 36, 1.7);
    if (v.x === "stars")
      ex =
        [
          [40, 36, 1],
          [101, 26, 1.4],
          [162, 40, 1],
          [24, 120, 0.7],
          [178, 124, 0.7],
        ]
          .map(
            (p) =>
              '<path transform="translate(' +
              p[0] +
              " " +
              p[1] +
              ") scale(" +
              p[2] +
              ')" d="M0 -9l2.6 6.2 6.6.6-5 4.4 1.5 6.5L0 5l-5.7 3.7 1.5-6.5-5-4.4 6.6-.6z" fill="#ffd66b" stroke="#fff" stroke-width="1.2"/>',
          )
          .join("") + HEART(101, 52, 1.6);
    if (v.x === "fish")
      ex =
        '<g transform="translate(101 160)"><ellipse rx="17" ry="9" fill="#7fd1ff" stroke="#3b2a33" stroke-width="2"/><path d="M15 0l13 -9v18z" fill="#7fd1ff" stroke="#3b2a33" stroke-width="2" stroke-linejoin="round"/><circle cx="-9" cy="-2" r="2" fill="#3b2a33"/></g>' +
        HEART(101, 36, 1.9);
    if (v.x === "balloon")
      ex =
        '<path d="M101 40v-6" stroke="#fff" stroke-width="2"/><g transform="translate(101 26)">' +
        HEART(0, 0, 2.6, "#ff4f86") +
        '</g><path d="M101 46q-6 40 -2 56" stroke="#fff" stroke-width="2" fill="none"/>';
    const svg =
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="' +
      v.bg[0] +
      '"/><stop offset="1" stop-color="' +
      v.bg[1] +
      '"/></linearGradient></defs><rect width="200" height="200" rx="26" fill="url(#g)"/>' +
      L +
      R +
      ex +
      "</svg>";
    return "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svg);
  }
  const CATS = CATV.map(catSVG);
  const FILES = {},
    MAXS = FN.maxSlots || 14,
    photos = [],
    orbit = $("#orbit"),
    slotsEl = $("#slots"),
    input = $("#photoInput");
  for (let i = 0; i < (FN.slots || 8); i++)
    photos.push(i < CATS.length ? CATS[i] : null);
  let frames = [],
    pending = -1,
    ang = 0,
    spd = 0.5,
    spdT = 0.5,
    lastO = 0,
    vis = false,
    G = { w: 0, h: 0, rx: 0, ry: 0, fs: 90 };
  const TILT = -0.2,
    cT = Math.cos(TILT),
    sT = Math.sin(TILT);
  function layout() {
    const w = orbit.clientWidth,
      h = orbit.clientHeight;
    if (!w || !h) return;
    const fs = Math.max(60, Math.min(118, w * 0.16)),
      rx = w / 2 - fs * 0.5 - 8,
      ry = Math.max(30, Math.min(rx * 0.34, h / 2 - fs * 0.6 - rx * 0.2)),
      os = Math.min(w * 0.34, h * 0.6, 230);
    G = { w, h, rx, ry, fs };
    orbit.style.setProperty("--fs", fs + "px");
    const orb = $("#orb");
    orb.style.width = orb.style.height = os + "px";
    const ring = $("#orbRing");
    ring.style.width = rx * 2 + "px";
    ring.style.height = ry * 2 + "px";
    ring.style.transform = "translate(-50%,-50%) rotate(" + TILT + "rad)";
    place();
  }
  function place() {
    const n = frames.length;
    if (!n || !G.w) return;
    frames.forEach((el, i) => {
      const a = ang + (i * 2 * Math.PI) / n,
        px = G.rx * Math.cos(a),
        py = G.ry * Math.sin(a),
        X = px * cT - py * sT,
        Y = px * sT + py * cT,
        d = (Math.sin(a) + 1) / 2;
      el.style.transform =
        "translate3d(" +
        (G.w / 2 + X - G.fs / 2).toFixed(1) +
        "px," +
        (G.h / 2 + Y - G.fs * 0.56).toFixed(1) +
        "px,0) scale(" +
        (0.6 + 0.5 * d).toFixed(3) +
        ")";
      el.style.opacity = (0.5 + 0.5 * d).toFixed(2);
      el.style.zIndex = Math.sin(a) > 0 ? 3 : 1;
    });
  }
  function renderPhotos() {
    frames.forEach((f) => f.remove());
    frames = [];
    slotsEl.textContent = "";
    photos.forEach((url, i) => {
      const f = document.createElement("button");
      f.type = "button";
      f.className = "of" + (url ? "" : " empty");
      f.dataset.i = i;
      f.setAttribute(
        "aria-label",
        url
          ? "Xem ảnh số " + (i + 1)
          : "Chọn ảnh cho khung trống số " + (i + 1),
      );
      f.innerHTML =
        '<span class="fr">' +
        (url ? "" : i % 2 ? ST.star : ST.heart) +
        "</span>";
      if (url) {
        const im = document.createElement("img");
        im.src = url;
        im.alt = "Ảnh " + (i + 1);
        im.draggable = false;
        f.firstChild.appendChild(im);
      }
      orbit.appendChild(f);
      frames.push(f);
      const sl = document.createElement("div");
      sl.className = "pslot" + (url ? " has" : "");
      const pk = document.createElement("button");
      pk.type = "button";
      pk.className = "pick";
      pk.setAttribute("aria-label", "Chọn ảnh cho ô số " + (i + 1));
      pk.innerHTML = url ? "" : "<b>+</b><span>Thêm ảnh</span>";
      if (url) {
        const im = document.createElement("img");
        im.src = url;
        im.alt = "Ảnh " + (i + 1);
        sl.appendChild(im);
      }
      pk.addEventListener("click", () => choose(i));
      sl.appendChild(pk);
      if (url) {
        const rm = document.createElement("button");
        rm.type = "button";
        rm.className = "rm";
        rm.textContent = "✕";
        rm.setAttribute("aria-label", "Xóa ảnh số " + (i + 1));
        rm.addEventListener("click", () => {
          try {
            URL.revokeObjectURL(url);
          } catch (e) {}
          photos[i] = i < CATS.length ? CATS[i] : null;
          window.__sync && __sync.unphoto(i);
          renderPhotos();
        });
        sl.appendChild(rm);
      }
      slotsEl.appendChild(sl);
    });
    $("#addSlot").disabled = photos.length >= MAXS;
    $("#clearPhotos").disabled = !photos.some(
      (u) => u && /^(blob:|data:image\/jpeg)/.test(u),
    );
    place();
  }
  function choose(i) {
    pending = i;
    input.click();
  }
  function accept(file) {
    if (!file || !/^image\//.test(file.type)) {
      toast("Hãy chọn file ảnh nhé");
      return null;
    }
    if (file.size > 30 * 1024 * 1024) {
      toast("Ảnh lớn quá, hãy chọn ảnh dưới 30MB");
      return null;
    }
    try {
      const u = URL.createObjectURL(file);
      FILES[u] = file;
      return u;
    } catch (e) {
      toast("Không mở được ảnh này");
      return null;
    }
  }
  function putAt(i, url) {
    if (FILES[url] && window.__sync) __sync.photo(i, FILES[url]);
    if (photos[i]) {
      try {
        URL.revokeObjectURL(photos[i]);
      } catch (e) {}
    }
    photos[i] = url;
  }
  input.addEventListener("change", () => {
    const files = Array.from(input.files || []);
    input.value = "";
    let added = 0,
      k = 0;
    if (pending >= 0 && files.length) {
      const u = accept(files[0]);
      if (u) {
        putAt(pending, u);
        added++;
      }
      k = 1;
    }
    pending = -1;
    for (; k < files.length; k++) {
      let slot = photos.findIndex((p) => !p);
      if (slot < 0) {
        if (photos.length >= MAXS) {
          toast("Đã đủ " + MAXS + " ô ảnh rồi nhé");
          break;
        }
        photos.push(null);
        slot = photos.length - 1;
      }
      const u = accept(files[k]);
      if (u) {
        putAt(slot, u);
        added++;
      }
    }
    renderPhotos();
    if (added) {
      const c = center(orbit);
      sticker(c[0], c[1], "heart");
      burst(c[0], c[1], 26, ["pink", "gold", "cy"], 1.2);
      toast("Đã thêm " + added + " ảnh, xem ảnh bay quanh hành tinh nhé");
    }
  });
  $("#addPhotos").addEventListener("click", () => {
    pending = -1;
    input.click();
  });
  $("#addSlot").addEventListener("click", () => {
    if (photos.length < MAXS) {
      photos.push(null);
      renderPhotos();
    }
  });
  $("#clearPhotos").addEventListener("click", () => {
    for (let i = 0; i < photos.length; i++) {
      const u = photos[i];
      if (u && /^(blob:|data:image\/jpeg)/.test(u)) {
        try {
          URL.revokeObjectURL(u);
        } catch (e) {}
        photos[i] = i < CATS.length ? CATS[i] : null;
        window.__sync && __sync.unphoto(i);
      }
    }
    renderPhotos();
  });
  /* chạm vào ảnh đang bay: xem to; chạm khung trống: chọn ảnh */
  orbit.addEventListener("click", (e) => {
    const f = e.target.closest && e.target.closest(".of");
    if (!f) return;
    const i = +f.dataset.i;
    if (photos[i]) {
      $("#lbImg").src = photos[i];
      $("#lightbox").hidden = false;
      $("#lbClose").focus();
    } else choose(i);
  });
  orbit.addEventListener("pointerover", (e) => {
    spdT = e.target.closest && e.target.closest(".of") ? 0.12 : 0.5;
  });
  orbit.addEventListener("pointerleave", () => {
    spdT = 0.5;
  });
  const lbClose = () => {
    $("#lightbox").hidden = true;
  };
  $("#lbClose").addEventListener("click", lbClose);
  $("#lightbox").addEventListener("click", (e) => {
    if (e.target === $("#lightbox")) lbClose();
  });
  addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !$("#lightbox").hidden) lbClose();
  });
  (function tick(t) {
    requestAnimationFrame(tick);
    const dt = Math.min((t - lastO) / 1000, 0.05);
    lastO = t;
    if (!vis || document.hidden) return;
    spd += (spdT - spd) * 0.08;
    ang += dt * spd * (reduce ? 0.4 : 1);
    place();
  })(0);
  if ("IntersectionObserver" in window)
    new IntersectionObserver(
      (es) => {
        vis = es[0].isIntersecting;
      },
      { threshold: 0.01 },
    ).observe(orbit);
  else vis = true;
  if ("ResizeObserver" in window) new ResizeObserver(layout).observe(orbit);
  addEventListener("resize", layout);
  window.__setPhotos = (map) => {
    const mx = Math.max(-1, ...Object.keys(map).map(Number));
    while (photos.length <= mx && photos.length < MAXS) photos.push(null);
    photos.forEach((u, i) => {
      if (map[i]) photos[i] = map[i];
      else if (u && /^data:image\/jpeg/.test(u))
        photos[i] = i < CATS.length ? CATS[i] : null;
    });
    renderPhotos();
  };
  renderPhotos();
  layout();
  window.__applyAll && __applyAll();
  revealList([$("#pSec")].map((x) => x));
}

/* ---------- Mở đầu: khóa màn hình, mini game, lá thư ---------- */
const PRE = $("#pre"),
  wt = (ms) => sleep(reduce ? 0 : ms),
  esc = (s) =>
    String(s).replace(
      /[&<>]/g,
      (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;" })[c],
    );
const HRT =
  '<svg viewBox="0 0 30 30"><path d="M15 26S3 18.5 3 10.5C3 6.6 6 4 9.3 4c2.4 0 4.3 1.3 5.7 3.4C16.4 5.3 18.3 4 20.7 4 24 4 27 6.6 27 10.5 27 18.5 15 26 15 26z"/></svg>';
function lockScreen() {
  const L = CONFIG.lock;
  return new Promise((res) => {
    PRE.className = "lock";
    PRE.style.display = "";
    PRE.innerHTML =
      '<div class="lk-in"><h1>' +
      esc(L.title) +
      '</h1><div class="lk-sub"><i></i>' +
      esc(L.sub) +
      '<i></i></div><div class="lk-name">' +
      esc(F(L.name)) +
      '</div><div class="lk-note"><b>✉</b><span>' +
      esc(F(L.notif)).replace(
        esc(CONFIG.from),
        "<em>" + esc(CONFIG.from) + "</em>",
      ) +
      '</span><em>now</em><u>1</u></div><div class="lk-dots">' +
      ("<span>" + HRT + "</span>").repeat(4) +
      '</div><p class="lk-hint">' +
      esc(F(L.hint)) +
      '</p><div class="lk-pad">' +
      [1, 2, 3, 4, 5, 6, 7, 8, 9, "", 0, "⌫"]
        .map(
          (k) =>
            '<button type="button" class="' +
            (k === "" ? "no" : "") +
            '" data-k="' +
            k +
            '">' +
            k +
            "</button>",
        )
        .join("") +
      "</div></div>";
    const dots = PRE.querySelector(".lk-dots"),
      hintEl = PRE.querySelector(".lk-hint"),
      sp = [...dots.children];
    let code = "",
      busy = false;
    const paint = () =>
      sp.forEach((s, i) => s.classList.toggle("on", i < code.length));
    async function press(k) {
      if (busy) return;
      if (k === "⌫") code = code.slice(0, -1);
      else if (code.length < 4) code += k;
      paint();
      const c = center(sp[Math.max(0, code.length - 1)]);
      sticker(c[0], c[1], "heart");
      if (code.length < 4) return;
      busy = true;
      await wt(250);
      if (code === String(L.pin)) {
        dots.classList.add("ok");
        hintEl.textContent = F(L.right);
        burst(W / 2, H * 0.5, 50, ["pink", "gold", "white"], 1.3);
        await wt(1100);
        PRE.classList.add("unl");
        await wt(800);
        cleanup();
        res("ok");
      } else {
        dots.classList.add("shake");
        hintEl.textContent = F(L.wrong);
        await wt(550);
        dots.classList.remove("shake");
        code = "";
        paint();
        busy = false;
      }
    }
    PRE.querySelector(".lk-pad").addEventListener("click", (e) => {
      const b = e.target.closest("button[data-k]");
      if (b && b.dataset.k !== "") press(b.dataset.k);
    });
    const kd = (e) => {
      if (/^\d$/.test(e.key)) press(e.key);
      else if (e.key === "Backspace") press("⌫");
    };
    addEventListener("keydown", kd);
    const cleanup = () => removeEventListener("keydown", kd);
    Promise.resolve()
      .then(() => window.__whoP)
      .then((o) => {
        if (!o) return;
        const b = document.createElement("button");
        b.className = "lk-own";
        b.textContent = "Chủ trang: xem thẳng phần trả lời ›";
        b.addEventListener("click", () => {
          cleanup();
          res("skip");
        });
        PRE.querySelector(".lk-in").appendChild(b);
      });
  });
}
function gameScreen() {
  const G = CONFIG.game;
  return new Promise((res) => {
    PRE.className = "game";
    PRE.classList.remove("unl");
    PRE.innerHTML =
      '<div class="gm-in"><div class="gm-eyes"><i></i><i></i></div><div class="gm-z">z z z</div><p class="gm-t"></p><button type="button" class="gm-btn" aria-label="Giữ để đánh thức Pi">♥</button><div class="gm-bar"><b></b><em>♥</em></div><div class="gm-pct">0%</div></div>';
    const $$ = (s) => PRE.querySelector(s),
      btn = $$(".gm-btn"),
      bar = $$(".gm-bar b"),
      run = $$(".gm-bar em"),
      pct = $$(".gm-pct"),
      txt = $$(".gm-t"),
      eyes = $$(".gm-eyes");
    let p = 0,
      down = false,
      done = false,
      last = performance.now(),
      si = -1;
    txt.textContent = F(G.sleep);
    const on = (v) => () => {
      down = v;
      btn.classList.toggle("hold", v);
    };
    btn.addEventListener("pointerdown", (e) => {
      e.preventDefault();
      try {
        btn.setPointerCapture(e.pointerId);
      } catch (x) {}
      on(true)();
    });
    ["pointerup", "pointercancel", "lostpointercapture"].forEach((n) =>
      btn.addEventListener(n, on(false)),
    );
    btn.addEventListener("keydown", (e) => {
      if (e.key === " " || e.key === "Enter") {
        e.preventDefault();
        on(true)();
      }
    });
    btn.addEventListener("keyup", on(false));
    btn.addEventListener("contextmenu", (e) => e.preventDefault());
    const iv = setInterval(async () => {
      const now = performance.now(),
        dt = now - last;
      last = now;
      if (done) return;
      p = Math.max(0, Math.min(1, p + (down ? dt * 0.00032 : -dt * 0.00016)));
      bar.style.width = p * 100 + "%";
      run.style.left = p * 100 + "%";
      pct.textContent = Math.floor(p * 100) + "%";
      eyes.style.setProperty("--g", p.toFixed(3));
      btn.style.transform = down
        ? "translate(" +
          (rnd(-1, 1) * p * 5).toFixed(1) +
          "px," +
          (rnd(-1, 1) * p * 5).toFixed(1) +
          "px) scale(.94)"
        : "";
      const k = p > 0.85 ? 3 : p > 0.6 ? 2 : p > 0.3 ? 1 : p > 0.05 ? 0 : -1;
      if (k !== si && down && k >= 0) {
        si = k;
        txt.textContent = G.steps[k];
      }
      if (down && Math.random() < 0.25) {
        const c = center(btn);
        burst(c[0], c[1], 2, ["pink", "gold"], 0.6);
      }
      if (p >= 1) {
        done = true;
        clearInterval(iv);
        btn.style.transform = "";
        PRE.classList.add("flash");
        const c = center(eyes);
        burst(c[0], c[1], 60, ["cy", "pink", "gold", "white"], 1.6);
        txt.textContent = "";
        $$(".gm-z").textContent = "";
        const dots = document.createElement("span");
        txt.append(F(G.done), dots);
        for (let i = 0; i < 6; i++) {
          await wt(380);
          dots.textContent += ".";
        }
        await wt(1500);
        PRE.classList.add("fade");
        await wt(900);
        res();
      }
    }, 30);
  });
}
function letterScreen() {
  const T = CONFIG.letter;
  return new Promise(async (res) => {
    PRE.className = "mail";
    PRE.style.display = "";
    PRE.innerHTML =
      '<p class="ml-cap"></p><div class="env" tabindex="0" role="button" aria-label="Mở lá thư"><div class="e-back"></div><div class="e-paper"><i></i><i></i><i></i><i></i></div><div class="e-front"></div><div class="e-flap"></div><div class="e-seal">♥</div></div><div class="ml-act"></div><div class="sh-wrap" hidden><div class="sheet"></div><button type="button" class="btn pink">Gấp thư lại</button></div>';
    const $$ = (s) => PRE.querySelector(s),
      env = $$(".env"),
      cap = $$(".ml-cap"),
      act = $$(".ml-act"),
      wrap = $$(".sh-wrap"),
      sheet = $$(".sheet"),
      paper = $$(".e-paper"),
      close = wrap.querySelector(".btn");
    let busy = true,
      step = 0;
    const say2 = (t) => {
      cap.style.animation = "none";
      void cap.offsetWidth;
      cap.style.animation = "";
      cap.textContent = F(t);
    };
    sheet.innerHTML =
      '<p class="gr">' +
      esc(F(T.greet)) +
      "</p>" +
      T.body
        .map(
          (t, i) =>
            '<p style="animation-delay:' +
            (1 + i * 0.7) +
            's">' +
            esc(F(t)) +
            "</p>",
        )
        .join("") +
      '<p class="sg" style="animation-delay:' +
      (1 + T.body.length * 0.7) +
      's">' +
      esc(F(T.sign)) +
      "</p>";
    say2(T.arrive);
    await wt(1300);
    env.classList.add("idle");
    const hn = document.createElement("div");
    hn.className = "hint big";
    hn.textContent = T.tap;
    act.appendChild(hn);
    busy = false;
    async function openIt() {
      if (busy) return;
      busy = true;
      act.textContent = "";
      env.classList.remove("idle");
      env.classList.add("open");
      const c = center(env);
      sticker(c[0], c[1], "heart");
      burst(c[0], c[1], 24, ["pink", "gold"], 1);
      await wt(750);
      env.classList.add("out");
      await wt(950);
      wrap.hidden = false;
      wrap.classList.remove("rd");
      sheet.scrollTop = 0;
      sheet.querySelectorAll("p").forEach((p) => {
        p.style.animationName = "none";
        void p.offsetWidth;
        p.style.animationName = "";
      });
      const pr = paper.getBoundingClientRect(),
        sr = sheet.getBoundingClientRect();
      sheet.style.transition = "none";
      sheet.style.opacity = 0;
      sheet.style.transform =
        "translate(" +
        (pr.left - sr.left) +
        "px," +
        (pr.top - sr.top) +
        "px) scale(" +
        pr.width / sr.width +
        "," +
        pr.height / sr.height +
        ")";
      paper.style.visibility = "hidden";
      void sheet.offsetWidth;
      sheet.style.transition =
        "transform 1s cubic-bezier(.2,.9,.3,1),opacity .5s";
      sheet.style.transform = "none";
      sheet.style.opacity = 1;
      await wt(1100);
      wrap.classList.add("rd");
      say2("");
      busy = false;
    }
    async function closeIt() {
      if (busy) return;
      busy = true;
      wrap.classList.remove("rd");
      const pr = paper.getBoundingClientRect(),
        sr = sheet.getBoundingClientRect();
      sheet.style.transform =
        "translate(" +
        (pr.left - sr.left) +
        "px," +
        (pr.top - sr.top) +
        "px) scale(" +
        pr.width / sr.width +
        "," +
        pr.height / sr.height +
        ")";
      sheet.style.opacity = 0;
      await wt(1000);
      wrap.hidden = true;
      paper.style.visibility = "";
      env.classList.remove("out");
      await wt(950);
      env.classList.remove("open");
      await wt(750);
      env.classList.add("idle");
      say2(T.afterClose);
      const go = document.createElement("button");
      go.className = "btn solid";
      go.textContent = "Tiếp tục ›";
      act.appendChild(go);
      const hn2 = document.createElement("div");
      hn2.className = "hint";
      hn2.textContent = "hoặc chạm vào thư để đọc lại";
      act.appendChild(hn2);
      busy = false;
      go.addEventListener("click", async () => {
        busy = true;
        PRE.classList.add("fade");
        await wt(950);
        PRE.style.display = "none";
        res();
      });
    }
    env.addEventListener("click", () => {
      if (!env.classList.contains("open")) openIt();
    });
    env.addEventListener("keydown", (e) => {
      if (
        (e.key === "Enter" || e.key === " ") &&
        !env.classList.contains("open")
      ) {
        e.preventDefault();
        openIt();
      }
    });
    close.addEventListener("click", closeIt);
  });
}
async function runPre(id) {
  PRE.style.display = "";
  PRE.className = "";
  const r = await lockScreen();
  guard(id);
  if (r === "skip") {
    PRE.style.display = "none";
    return "skip";
  }
  await gameScreen();
  guard(id);
  await letterScreen();
  guard(id);
  return "ok";
}

/* ---------- Chạy ---------- */
const SCENES = [s0, s1, s2, s3, s4, s5, s6, s7];
const testMode = new URLSearchParams(location.search).get("test") === "1";
const testControls = $("#testControls");
const testToggle = $("#testToggle");
const testPanel = $("#testPanel");
if (testMode) {
  testControls.hidden = false;
  const choices = [
    "Màn 1 — Đánh thức Pi",
    "Màn 2 — Bắt trái tim",
    "Màn 3 — Trồng hoa",
    "Màn 4 — Điều ước",
    "Màn 5 — Cỏ bốn lá",
    "Màn 6 — Câu hỏi",
    "Màn 7 — Máy bay giấy",
    "Màn 8 — Chú xe nhỏ",
    "Gian hàng",
  ];
  choices.forEach((label, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.dataset.testRun = index < SCENES.length ? String(index) : "shop";
    button.textContent = label;
    $("#testChoices").appendChild(button);
  });
}
testToggle.addEventListener("click", () => {
  testPanel.hidden = !testPanel.hidden;
  testToggle.setAttribute("aria-expanded", String(!testPanel.hidden));
});
$("#testClose").addEventListener("click", () => {
  testPanel.hidden = true;
  testToggle.setAttribute("aria-expanded", "false");
  testToggle.focus();
});
$("#testChoices").addEventListener("click", async (event) => {
  const button = event.target.closest("button[data-test-run]");
  if (!button) return;

  testPanel.hidden = true;
  testToggle.setAttribute("aria-expanded", "false");
  const target = button.dataset.testRun;
  if (target === "shop") {
    RUN++;
    reset();
    PRE.style.display = "none";
    await enterShop();
    return;
  }

  const sceneIndex = Number(target);
  if (!Number.isInteger(sceneIndex) || !SCENES[sceneIndex]) return;
  const id = ++RUN;
  reset();
  PRE.style.display = "none";
  try {
    await SCENES[sceneIndex](id);
    guard(id);
  } catch (e) {
    if (e !== ABORT) console.error(e);
  }
});
async function start(replay) {
  const id = ++RUN;
  reset();
  try {
    if (replay) PRE.style.display = "none";
    else if ((await runPre(id)) === "skip") {
      await enterShop();
      return;
    }
    guard(id);
    for (let i = 0; i < SCENES.length; i++) {
      await SCENES[i](id);
      guard(id);
    }
  } catch (e) {
    if (e !== ABORT) console.error(e);
  }
}
$("#skipBtn").addEventListener("click", async (e) => {
  e.stopPropagation();
  RUN++;
  actClear();
  decoClear();
  lineEl.textContent = "";
  await enterShop();
});
$("#skipBtn").addEventListener("pointerdown", (e) => e.stopPropagation());
$("#replayBtn").addEventListener("click", () => {
  $("#panels").textContent = "";
  shopBuilt = false;
  window.scrollTo(0, 0);
  start(true);
});
requestAnimationFrame(frame);
if (testMode) {
  reset();
  PRE.style.display = "none";
} else start();
document.documentElement.classList.add("js-ready");

/* ---------- Trả lời trực tiếp: người gửi và người trả lời cùng đọc được ---------- */
(function () {
  const fx = $("#fxBtn");
  const setFx = () => {
    fx.textContent = reduce ? "Hiệu ứng: tắt" : "Hiệu ứng: bật";
    document.documentElement.classList.toggle("rm", reduce);
  };
  setFx();
  fx.addEventListener("click", () => {
    reduce = !reduce;
    try {
      localStorage.setItem("pi2010_fx", reduce ? "off" : "on");
    } catch (e) {}
    setFx();
    toast(reduce ? "Đã giảm hiệu ứng" : "Đã bật đầy đủ hiệu ứng");
  });
  const FROM = CONFIG.from,
    TO = CONFIG.to,
    bar = $("#liveBar"),
    NQ = CONFIG.final.questions.length,
    st = { a: {}, p: {}, g: null },
    tm = {};
  $("#sendTitle").textContent = F($("#sendTitle").textContent);
  let db = null,
    owner = false,
    okW = true,
    chain = Promise.resolve();
  $("#sendFbLink").href = CONFIG.facebook.url;
  const stat = (m) => {
    $("#sendStat").textContent = m;
  };
  const q = (f) => {
    chain = chain.then(f).catch(() => {
      okW = false;
      fallback();
    });
  };
  function summary() {
    const sv = (window.__qSaved && __qSaved()) || {},
      L = [
        "Tin nhắn gửi " + FROM + " từ " + TO,
        "Món quà đã chọn: " + (chosenGift ? chosenGift.name : "chưa chọn"),
        "",
      ];
    CONFIG.final.questions.forEach((x, i) => {
      const a = sv[i] || {};
      L.push("Câu hỏi " + (i + 1) + ": " + FF(x.q));
      L.push("  Trả lời: " + (a.a && a.a.trim() ? a.a.trim() : "(để trống)"));
    });
    return L.join("\n");
  }
  window.__sendRefresh = () => {
    if (!$("#sendFb").hidden) $("#sendText").value = summary();
  };
  function fallback() {
    if (owner) return;
    $("#sendFb").hidden = false;
    $("#sendText").value = summary();
    $("#sendShare").hidden = !navigator.share;
    stat(
      "Trang chưa gửi trực tiếp được cho " +
        FROM +
        ", nên " +
        TO +
        " hãy sao chép nội dung bên dưới rồi nhắn cho " +
        FROM +
        " nhé.",
    );
    paint();
  }
  $("#sendCopy").addEventListener("click", () => {
    const t = $("#sendText");
    t.value = summary();
    t.select();
    let ok = false;
    try {
      ok = document.execCommand("copy");
    } catch (e) {}
    try {
      if (navigator.clipboard) {
        navigator.clipboard.writeText(t.value);
        ok = true;
      }
    } catch (e) {}
    toast(
      ok ? "Đã sao chép, dán vào tin nhắn nhé" : "Hãy bôi đen rồi sao chép nhé",
    );
  });
  $("#sendShare").addEventListener("click", async () => {
    try {
      await navigator.share({ title: "Gửi " + FROM, text: summary() });
    } catch (e) {}
  });
  function paint() {
    const n = Object.values(st.a).filter((x) => x && (x.a || "").trim()).length,
      p = Object.keys(st.p).length,
      g = st.g && st.g.name ? ", món quà đã chọn: " + st.g.name : "";
    if (owner)
      bar.textContent =
        n || p || g
          ? "💌 " +
            TO +
            " vừa trả lời " +
            n +
            "/" +
            NQ +
            " câu hỏi, gửi " +
            p +
            " tấm ảnh" +
            g +
            ". " +
            FROM +
            " đọc được hết rồi nè"
          : "🌙 " + TO + " chưa viết gì cả, " + FROM + " vẫn đang đợi nè...";
    else if (!db || !okW)
      bar.textContent =
        " " +
        TO +
        " share lại cho người gửi sau khi đã điền xong hoặc dùng phần sao chép ở cuối trang nhé";
    else
      bar.textContent =
        "💗 Những gì " +
        TO +
        " viết và gửi ở đây, " +
        FROM +
        " đều đọc được ngay (" +
        n +
        "/" +
        NQ +
        " câu · " +
        p +
        " ảnh)";
  }
  window.__applyAll = () => {
    if (!window.__setAns || !window.__setPhotos) return;
    Object.keys(st.a).forEach((k) => __setAns(+k, st.a[k].a, st.a[k].done));
    __setPhotos(
      Object.fromEntries(Object.entries(st.p).map(([k, v]) => [k, v.data])),
    );
    if (owner) {
      document.body.classList.add("ro");
      document.querySelectorAll(".qa").forEach((t) => {
        t.readOnly = true;
      });
      $("#sendSec").hidden = true;
    }
  };
  async function shrink(f) {
    const u = URL.createObjectURL(f);
    try {
      const im = await new Promise((r, j) => {
        const m = new Image();
        m.onload = () => r(m);
        m.onerror = j;
        m.src = u;
      });
      for (const [mx, qq] of [
        [900, 0.72],
        [700, 0.6],
        [520, 0.5],
        [380, 0.45],
      ]) {
        const k = Math.min(1, mx / Math.max(im.naturalWidth, im.naturalHeight)),
          c = document.createElement("canvas");
        c.width = Math.round(im.naturalWidth * k);
        c.height = Math.round(im.naturalHeight * k);
        c.getContext("2d").drawImage(im, 0, 0, c.width, c.height);
        const d = c.toDataURL("image/jpeg", qq);
        if (d.length < 220000) return d;
      }
    } catch (e) {
    } finally {
      URL.revokeObjectURL(u);
    }
    return null;
  }
  window.__sync = {
    ans(i, a, done) {
      if (!db || !okW || owner) return;
      clearTimeout(tm[i]);
      tm[i] = setTimeout(
        () =>
          q(() =>
            db.doc("qa/q" + i).set({
              i,
              q: FF(CONFIG.final.questions[i].q),
              a,
              done: !!done,
              at: Date.now(),
            }),
          ),
        700,
      );
    },
    async photo(i, f) {
      if (!db || !okW || owner) return;
      const d = await shrink(f);
      if (!d) {
        toast("Ảnh này nặng quá, thử ảnh khác nhé");
        return;
      }
      q(() => db.doc("ph/p" + i).set({ i, data: d, at: Date.now() }));
    },
    unphoto(i) {
      if (db && okW && !owner) q(() => db.doc("ph/p" + i).delete());
    },
    gift(g) {
      if (db && okW && !owner) q(() => db.doc("meta/gift").set(g));
    },
  };
  window.__whoP = (async () => {
    try {
      if (!(window.claude && claude.use)) return false;
      const u = await claude.use("user");
      owner = !!(u && (await u.isOwner()));
      if (u && !owner && (await u.can("data.write")) === false) okW = false;
      db = await claude.use("db");
    } catch (e) {}
    return owner;
  })();
  window.__whoP.then(() => {
    if (!db) {
      paint();
      fallback();
      stat(
        owner
          ? "Chỉ xem được khi trang đã được đăng."
          : $("#sendStat").textContent,
      );
      return;
    }
    if (owner)
      stat("Bạn đang xem trực tiếp, mọi thứ " + TO + " viết sẽ hiện ra ngay.");
    else if (okW)
      stat(
        "Đã kết nối ✓ mọi thứ " +
          TO +
          " viết hoặc thêm đều tự động gửi cho " +
          FROM +
          ".",
      );
    else fallback();
    const sub = (path, on, off, note) => {
      let f = true;
      db.collection(path).onSnapshot(
        (s) => {
          s.docChanges().forEach((c) => {
            const v = c.doc.data() || {};
            if (c.type === "removed") off(v);
            else {
              on(v);
              if (!f && owner && !c.doc.metadata.hasPendingWrites) {
                toast(note(v));
                burst(W / 2, H * 0.4, 20, ["pink", "gold"], 1);
              }
            }
          });
          f = false;
          paint();
          window.__applyAll();
        },
        () => {},
      );
    };
    sub(
      "qa",
      (v) => {
        st.a[v.i] = v;
      },
      (v) => {
        delete st.a[v.i];
      },
      (v) => "💌 " + TO + " vừa trả lời câu " + (v.i + 1),
    );
    sub(
      "ph",
      (v) => {
        st.p[v.i] = v;
      },
      (v) => {
        delete st.p[v.i];
      },
      () => "📷 " + TO + " vừa thêm một tấm ảnh",
    );
    db.doc("meta/gift").onSnapshot(
      (d) => {
        st.g = d.exists ? d.data() : null;
        paint();
      },
      () => {},
    );
    paint();
  });
})();
