// Testimoni Dom
// let starOne = document.querySelector(".starSatu");
// let starTwo = document.querySelector(".starDua");
// let starThree = document.querySelector(".starTiga");
// let starFour = document.querySelector(".starEmpat");
// let deskripsiTestimoni = document.querySelector(
//   '[aria-label="text-testimoni"]'
// );
// let isiTestimoni =
//   "“Aplikasi sialan, ini gw jadi kagak bisa alesan lagi buat bolos kelas Pak Sanusi yang galak itu! Tapi aku sekarang jadi rajin kuliah, terima kasih garena!”";
// document.querySelector(".btn").addEventListener("click", () => {
//   deskripsiTestimoni.textContent = isiTestimoni;
//   starOne.classList.remove("bg-[#FFC93F]");
//   starTwo.classList.remove("bg-[#FFC93F]");
//   starThree.classList.remove("bg-[#FFC93F]");
//   starFour.classList.remove("bg-[#FFC93F]");
//   starOne.classList.add("bg-gray-300");
//   starTwo.classList.add("bg-gray-300");
//   starThree.classList.add("bg-gray-300");
//   starFour.classList.add("bg-gray-300");
// });
// document.querySelector(".btn-2").addEventListener("click", () => {
//   deskripsiTestimoni.textContent =
//     "“Sebenernya ngga jago-jago amat sih cuma bisa basic-basic, masalah skill tinggal belajar nanti.”";
//   starOne.classList.remove("bg-gray-300");
//   starTwo.classList.remove("bg-gray-300");
//   starThree.classList.remove("bg-gray-300");
//   starFour.classList.remove("bg-gray-300");
//   starOne.classList.add("bg-[#FFC93F]");
//   starTwo.classList.add("bg-[#FFC93F]");
//   starThree.classList.add("bg-[#FFC93F]");
//   starFour.classList.add("bg-[#FFC93F]");
// });

// Set Time out Compleate project
let total = document.getElementById("total");
// set inerval
let count = 0;
let interval = setInterval(() => {
  // console.log(count++);
  total.innerHTML = count++ + "+";
}, 2000);
//
setTimeout(() => {
  clearInterval(interval);
}, 8000);

// // }, 1000);

// // About btn
// document.getElementById("closeBtn").addEventListener("click", () => {
//   document.getElementById("card").classList.toggle("blur-sm");
// });
// Shadow navbar
let nav = document.querySelector(".fixed");
window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    nav.classList.add("backdrop-blur");
  } else {
    nav.classList.remove("backdrop-blur");
  }
});

// Swipper Js
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  grabCursor: true,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
});

// Hamburger active
document
  .querySelector("[data-collapse-toggle]")
  .addEventListener("click", () => {
    document.querySelector("[data-collapse-toggle]").classList.toggle("active");
    document.getElementById("mobile-menu-3").classList.toggle("hidden");
  });
// menu
document.getElementById("mobile-menu-3").addEventListener("click", () => {
  document.getElementById("mobile-menu-3").classList.toggle("hidden");
  document.querySelector("[data-collapse-toggle").classList.toggle("active");
});

// Contact form
const scriptURL =
  "https://script.google.com/macros/s/AKfycbxMG5sEz9hel9z8UzDQwKm46OU-Ej19o-6-BJ0RjVXHuf2hOQz_WfcmaJoaDh9BYKGi/exec";
const form = document.forms["submit-to-google-sheet"];
const btnKirim = document.querySelector(".btn-kirim");
const btnLoading = document.getElementById("btn-loading");
const myAlert = document.getElementById("alert-3");
const alertClose = document.querySelector('[aria-label="Close"]');

form.addEventListener("submit", (e) => {
  // if btn-submit di click
  // tampilkan btn-loading, remove btn-submit
  btnLoading.classList.toggle("hidden");
  btnKirim.classList.toggle("hidden");
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      // tampilkan btn-submit, remove btn-loading
      btnLoading.classList.toggle("hidden");
      btnKirim.classList.toggle("hidden");
      console.log("Success!", response);
      // tampilkan alert
      myAlert.classList.toggle("hidden");
      // close alert
      alertClose.addEventListener("click", () => {
        myAlert.classList.toggle("hidden");
      });
      // reset form'nya

      form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});
