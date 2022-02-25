const images = ["0.jpg","1.jpg","2.jpg"];
// let index = Math.floor(Math.random()*images.length);
// const choseImage = images[index];
const choseImage = images[Math.floor(Math.random()*images.length)];
// 이미지 파일이름을 랜덤으로 가져옴
const bodyBackground = document.querySelector("body");

// CSS style을 이용해서 bodyBackground 에 추가
bodyBackground.style.background = `url(./img/${choseImage})`;
// style = "background: url="./img/0.jpg"; 배경고정