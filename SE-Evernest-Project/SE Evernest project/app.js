// First Button //

const likeBtn = document.querySelector(".like__btn");
let likeIcon = document.querySelector("#icon"),
  count = document.querySelector("#count");

let clicked = false;


likeBtn.addEventListener("click", () => {
  if (!clicked) {
    clicked = true;
    likeIcon.innerHTML = `<i class="fas fa-thumbs-up"></i>`;
    count.textContent++;
  } else {
    clicked = false;
    likeIcon.innerHTML = `<i class="far fa-thumbs-up"></i>`;
    count.textContent--;
  }
});

// Second Button //

const likeBtn2 = document.querySelector(".like__btn2");
let likeIcon2 = document.querySelector("#icon2"),
  count2 = document.querySelector("#count2");

let clicked2 = false;


likeBtn2.addEventListener("click", () => {
  if (!clicked2) {
    clicked2 = true;
    likeIcon2.innerHTML = `<i class="fas fa-thumbs-up"></i>`;
    count2.textContent++;
  } else {
    clicked2 = false;
    likeIcon2.innerHTML = `<i class="far fa-thumbs-up"></i>`;
    count2.textContent--;
  }
});

// Third Button //

const likeBtn3 = document.querySelector(".like__btn3");
let likeIcon3 = document.querySelector("#icon3"),
  count3 = document.querySelector("#count3");

let clicked3 = false;


likeBtn3.addEventListener("click", () => {
  if (!clicked3) {
    clicked3 = true;
    likeIcon3.innerHTML = `<i class="fas fa-thumbs-up"></i>`;
    count3.textContent++;
  } else {
    clicked3 = false;
    likeIcon3.innerHTML = `<i class="far fa-thumbs-up"></i>`;
    count3.textContent--;
  }
});

// Fourth Button //

const likeBtn4 = document.querySelector(".like__btn4");
let likeIcon4 = document.querySelector("#icon4"),
  count4 = document.querySelector("#count4");

let clicked4 = false;


likeBtn4.addEventListener("click", () => {
  if (!clicked4) {
    clicked4 = true;
    likeIcon4.innerHTML = `<i class="fas fa-thumbs-up"></i>`;
    count4.textContent++;
  } else {
    clicked4 = false;
    likeIcon4.innerHTML = `<i class="far fa-thumbs-up"></i>`;
    count4.textContent--;
  }
});