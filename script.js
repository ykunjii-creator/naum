const bpmEl = document.querySelector(".bpm");
const dangerText = document.querySelector(".danger-text");

function getRandomBpm() {
  return Math.floor(Math.random() * 60) + 40;
}

function update() {
  const bpm = getRandomBpm();
  bpmEl.textContent = bpm;

  if (bpm < 50) {
    dangerText.textContent = "맥박 수가 떨어져요!";
  } else if (bpm > 100) {
    dangerText.textContent = "맥박 수가 너무 높아요!";
  } else {
    dangerText.textContent = "정상 상태입니다";
  }
}

function showPage(pageId, element) {
  // 페이지 전환
  document.querySelectorAll(".page").forEach(page => {
    page.classList.remove("active");
  });
  document.getElementById(pageId).classList.add("active");

  // 네비 active 처리
  document.querySelectorAll(".nav-item").forEach(item => {
    item.classList.remove("active");
    const pill = item.querySelector(".active-pill");
    if (pill) pill.remove();
  });

  element.classList.add("active");

  const pill = document.createElement("div");
  pill.className = "active-pill";
  element.prepend(pill);
}


setInterval(update, 3000);
