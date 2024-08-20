const messages = [
  "Hey, I am sorry I could not come",
  "I know how much you waited for me",
  "A really important work came so I could not come",
  "Hey, don't worry, here is my hand, put the rakhi in it"
];

const images = [
 "panda-1300187_1280.png",
  "crypanda.png",
  "panda-1722702_1280.png",
  "https://cdn.pixabay.com/photo/2016/10/07/22/12/panda-1722702_1280.png"
];

let currentIndex = 0;
const chatBox = document.getElementById('chat-box');
const nextBtn = document.getElementById('next-btn');
const handContainer = document.getElementById('hand-container');
const handSvg = document.getElementById('hand-svg');
const rakhi = document.getElementById('rakhi');
const imageBox = document.getElementById('image-box');
const cuteImage = document.getElementById('cute-image');

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
  rakhi.style.left = event.pageX - 25 + 'px';
  rakhi.style.top = event.pageY - 25 + 'px';

  const handRect = handSvg.getBoundingClientRect();
  const rakhiRect = rakhi.getBoundingClientRect();

  if (rakhiRect.right > handRect.left &&
      rakhiRect.left < handRect.right &&
      rakhiRect.bottom > handRect.top &&
      rakhiRect.top < handRect.bottom) {
      handSvg.classList.add('with-rakhi');
      setTimeout(() => {
          alert("Rakhi tied successfully!");
          rakhi.classList.add('hidden');
      }, 500);
      document.removeEventListener('mousemove', moveRakhi);
  }
}

nextBtn.addEventListener('click', handleNextClick);
showMessage();
