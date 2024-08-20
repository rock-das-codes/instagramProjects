const messages = [
  "Hey, I am sorry I could not come",
  "I know how much you waited for me",
  "A really important work came so I could not come",
  "Hey, don't worry, here is my hand, gimme the rakhi"
];

const images = [
 "panda-1300187_1280.png",
  "crypanda.png",
  "panda-1722702_1280.png",
  "panda-154984_1280.png"
];

let currentIndex = 0;
const chatBox = document.getElementById('chat-box');
const nextBtn = document.getElementById('next-btn');
const handContainer = document.getElementById('hand-container');
const handSvg = document.getElementById('hand-svg');
const rakhi = document.getElementById('rakhi');
const imageBox = document.getElementById('image-box');
const cuteImage = document.getElementById('cute-image');
const popup = document.getElementById('thank-you-popup');
const backgroundMusic = document.getElementById('background-music');

function showMessage() {
  if (currentIndex < messages.length) {
      chatBox.textContent = messages[currentIndex];
      cuteImage.src = images[currentIndex];
      imageBox.classList.remove('hidden');
      nextBtn.classList.remove('hidden');
  } else {
      nextBtn.classList.add('hidden');
      handContainer.classList.remove('hidden');
      rakhi.classList.remove('hidden');
  }
}
function handleNextClick() {
  currentIndex++;
  if (currentIndex < messages.length) {
      showMessage();
  } else if (currentIndex === messages.length) {
      showMessage();
      document.addEventListener('mousemove', moveRakhi);
  }
}

function moveRakhi(event) {
  rakhi.style.left = event.pageX + 60 + 'px';
  rakhi.style.top = event.pageY - 65 + 'px';

  const handRect = handSvg.getBoundingClientRect();
  const rakhiRect = rakhi.getBoundingClientRect();

  if (rakhiRect.right > handRect.left &&
      rakhiRect.left < handRect.right &&
      rakhiRect.bottom > handRect.top &&
      rakhiRect.top < handRect.bottom) {
      handSvg.classList.add('with-rakhi');
      setTimeout(() => {
          showPopup();
      }, 500);
      document.removeEventListener('mousemove', moveRakhi);
  }
}

function showPopup() {
  popup.classList.remove('hidden');
  backgroundMusic.play();
  setTimeout(() => {
      popup.style.bottom = '20px';
  }, 100);
}


nextBtn.addEventListener('click', handleNextClick);
showMessage();
