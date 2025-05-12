let timerEl = document.getElementById("timer");  
let timer;  

function startFocus() {
  const focusMinutes = parseInt(document.getElementById("focusTime").value);
  const randA = parseInt(document.getElementById("randA").value);
  const randB = parseInt(document.getElementById("randB").value);
  const microBreak = parseInt(document.getElementById("microBreak").value);
  const longBreak = parseInt(document.getElementById("longBreak").value);

  let remaining = focusMinutes * 60;

  timer = setInterval(() => {  
    if (remaining <= 0) {
      clearInterval(timer);
      speak(`你已经完成专注啦！现在休息 ${longBreak} 分钟吧~`);
      return;
    }
    if (remaining % (getRandomRange(randA, randB) * 60) === 0) {
      speak(getRandomPraise() + `~ 休息 ${microBreak} 秒哦~`);
    }

    let min = Math.floor(remaining / 60);
    let sec = remaining % 60;  
    timerEl.innerText = `${min}:${sec < 10 ? "0" : ""}${sec}`;
    remaining--;
  }, 1000);
}

function resumeFocus() {
  startFocus();
}

function endFocus() {
  clearInterval(timer);
  timerEl.innerText = "已结束";
}

function getRandomRange(a, b) {
  return Math.floor(Math.random() * (b - a + 1)) + a;
}

function getRandomPraise() {
  const lines = [
    "你真的好棒耶！",
    "好认真的你，让我很感动呢~",
    "持续努力中，好值得表扬",
    "又坚持了一段时间，好佩服你",
    "不愧是你呢～",
    "继续加油，我会陪你哦~"
  ];
  return lines[Math.floor(Math.random() * lines.length)];
}

function speak(text) {
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "zh-TW";
  utterance.pitch = 1.2;
  utterance.rate = 1;
  utterance.voice = speechSynthesis.getVoices().find(v => v.lang === "zh-TW" && v.name.includes("Google")) || null;
  speechSynthesis.speak(utterance);  
}