//기본 변수선언 & 문제를 만드는 함수작성
let body = document.body;
let nums;
let num_ary;
let make_Question = () => {
  nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  num_ary = [];
  for (let i = 0; i < 3; i += 1) {
    let outed = nums.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
    num_ary.push(outed);
  }
};
//문제를 만들고, HTML 만들기.
make_Question();
let result = document.createElement("h1");
body.append(result);
let form = document.createElement("form");
document.body.append(form);
let input_blank = document.createElement("input");
form.append(input_blank);
input_blank.type = "text";
input_blank.maxLength = 3;
let button = document.createElement("button");
button.textContent = "입력";
form.append(button);

console.log(num_ary);

let wrong = 0;
form.addEventListener("submit", function (event) {
  event.preventDefault();
  let user_answer = input_blank.value;
  if (user_answer === num_ary.join("")) {
    result.textContent = "정답입니다.";
    input_blank.value = "";
    input_blank.focus();
    make_Question();
    wrong = 0;
  } else {
    let answer_ary = user_answer.split("");
    let strike = 0;
    let ball = 0;
    wrong += 1;
    if (wrong > 10) {
      result.textContent = "실패! 정답은" + num_ary.join("") + "입니다";
      input_blank.value = "";
      input_blank.focus();
      make_Question();
      wrong = 0;
      ball = 0;
      strike = 0;
    } else {
      for (let i = 0; i < 3; i += 1) {
        if (Number(answer_ary[i]) === num_ary[i]) {
          strike += 1;
        } else if (num_ary.indexOf(Number(answer_ary[i]) > -1)) {
          ball += 1;
        }
      }
      result.textContent =
        strike +
        "스트라이크" +
        ball +
        "볼 입니다. 현재 남은 횟수" +
        (10 - wrong);
      input_blank.value = "";
      input_blank.focus();
      ball = 0;
      strike = 0;
    }
  }
});
