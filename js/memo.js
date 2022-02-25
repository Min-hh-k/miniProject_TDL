const memoBoard = document.querySelector("#memo-board");
const memoForm = document.querySelector("#memo-form");
const memoInput = document.querySelector("#memo-form input");
const savememo = ["미리만들어진 메모","미리만들어진 메모2","추가메모"];
const savememoform = [
  {memo: "메모", time: "12:08"},
  {memo: "메모2", time: "12:09"}
]
for (let m of savememo) {
  let memo = document.createElement("div");
  memoBoard.appendChild(memo);
  memo.innerHTML = m
}

function memoFormSubmit (event) {
  event.preventDefault();
  console.log(memoInput.value);

  //새로운 요소(태그)를 만들어서 memoBoard 추가(div요소)
  //createElement 를 통해 요소 생성
  let memo = document.createElement("div");
  
  // memoBoard 에 요소 추가
  memoBoard.appendChild(memo);
  // 추가된 memo 요소에 html값 추가
  memo.innerHTML = memoInput.value; //사용자 입력값
  memoInput.value = ""; //문자열
  //console.dir(memoInput)
  memoInput.autofocus = true;

}

memoForm.addEventListener('submit', memoFormSubmit);