AOS.init();

const contextText = document.querySelector('.contextText');
const disclaimModal = document.querySelector('.disclaimModal');

document.querySelector('.disclaimerSVG').addEventListener('click', () => {
    disclaimModal.style.display = '';
    disclaimModal.classList.add('modal');
});

disclaimModal.addEventListener('click', () => {
    disclaimModal.style.display = 'none';
    disclaimModal.classList.remove('modal');
});

const copyBtn = document.querySelector('.copyBTN');
copyBtn.addEventListener('click', copyToClipboard);

function copyToClipboard() {
  const textToCopy = document.querySelector('.contractAdd')
  navigator.clipboard.writeText(textToCopy.innerText)
    .then(() => {
      textToCopy.style.fontFamily = "FetHeavy"
      setTimeout(() => {
        textToCopy.style.fontFamily = "FetLight"
      }, 2000)
    })
    .catch((error) => {
      window.alert('Unable to copy text to clipboard');
    });
};


// LANDING PAGE ANIMATION
var scene = document.getElementById("scene");
var parallaxInstance = new Parallax(scene);

const xIcon = document.querySelector('.xSVG');
const altSVG = document.querySelector('.altSVG');
const mobile_navv = document.querySelector('.mobile-navv');

altSVG.addEventListener('click', () => {
  mobile_navv.style.display = 'flex';
  altSVG.style.display = 'none';
});

xIcon.addEventListener('click', () => {
  mobile_navv.style.display = 'none';
  altSVG.style.display = '';
});

function closeNav (){
  mobile_navv.style.display = 'none';
}