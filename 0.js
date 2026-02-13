const phrases = [
	"NO",
	"Ya 7aywana ?",
	"Hnhzr ?",
	"Bselaaa?????",
	"Wallahi ?",
	"Ha2ol l omk ya Rawan.. "
];






const yesBtn = document.getElementById("yes");

const noBtn = document.getElementById("no");

const yayText = document.getElementById("yay");

const yayText1 = document.getElementById("yay1");

const can1 = document.getElementById("can1");

const can = document.getElementById("can");

noBtn.addEventListener("click", () => {
yesBtn.style.width = `${yesBtn.offsetWidth + 75}px`;

yesBtn.style.height = `${yesBtn.offsetHeight + 75}px`;
X=Math.floor(Math.random()*phrases.length);
console.log(X);
noBtn.textContent=phrases[X];


});

yesBtn.addEventListener("click", () => {
  yayText.style.display = "block";

  yayText1.style.display = "block";

  can.style.display = "none";

  can1.style.display = "none";
});


