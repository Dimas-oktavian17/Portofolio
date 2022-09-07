// Testimoni Dom
let starOne = document.querySelector(".starSatu");
let starTwo = document.querySelector(".starDua");
let starThree = document.querySelector(".starTiga");
let starFour = document.querySelector(".starEmpat");
let text = document.querySelector("#text");
let isi =
  "“Aplikasi sialan, ini gw jadi kagak bisa alesan lagi buat bolos kelas Pak Sanusi yang galak itu! Tapi aku sekarang jadi rajin kuliah, terima kasih garena!”";
document.querySelector(".btn").addEventListener("click", () => {
  text.textContent = isi;
  starOne.classList.remove("bg-[#FFC93F]");
  starTwo.classList.remove("bg-[#FFC93F]");
  starThree.classList.remove("bg-[#FFC93F]");
  starFour.classList.remove("bg-[#FFC93F]");
  starOne.classList.add("bg-gray-300");
  starTwo.classList.add("bg-gray-300");
  starThree.classList.add("bg-gray-300");
  starFour.classList.add("bg-gray-300");
});
document.querySelector(".btn-2").addEventListener("click", () => {
  text.textContent =
    "“Sebenernya ngga jago-jago amat sih cuma bisa basic-basic, masalah skill tinggal belajar nanti.”";

  starOne.classList.remove("bg-gray-300");
  starTwo.classList.remove("bg-gray-300");
  starThree.classList.remove("bg-gray-300");
  starFour.classList.remove("bg-gray-300");
  starOne.classList.add("bg-[#FFC93F]");
  starTwo.classList.add("bg-[#FFC93F]");
  starThree.classList.add("bg-[#FFC93F]");
  starFour.classList.add("bg-[#FFC93F]");
});

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
}, 22000);

// }, 1000);

// About btn
document.getElementById("closeBtn").addEventListener("click", () => {
  document.getElementById("card").classList.toggle("blur-sm");
});
// Shadow navbar
let nav = document.querySelector(".fixed");
window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    nav.classList.add("backdrop-blur");
  } else {
    nav.classList.remove("backdrop-blur");
  }
});
