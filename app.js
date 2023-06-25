AOS.init();

const contextText = document.querySelector('.contextText');

document.querySelector('.disclaimerSVG').addEventListener('click', () => {
  if (contextText.style.display === 'none') {
    contextText.style.display = ''; // Set the default value
    contextText.scrollIntoView({ behavior: 'smooth' });
  } else {
    contextText.style.display = 'none'; // Set the 'none' value
  }
});

const copyBtn = document.querySelector('.copyBTN');
copyBtn.addEventListener('click', copyToClipboard);

function copyToClipboard() {
  const textToCopy = document.querySelector('.contractAdd')
  navigator.clipboard.writeText(textToCopy.innerText)
    .then(() => {
      textToCopy.style.fontFamily = "JabHeavy"
      setTimeout(() => {
        textToCopy.style.fontFamily = "JabLight"
      }, 2000)
    })
    .catch((error) => {
      window.alert('Unable to copy text to clipboard');
    });
};


// LANDING PAGE ANIMATION
var scene = document.getElementById("scene");
var parallaxInstance = new Parallax(scene);

const xSVG = document.querySelector('.xSVG');
const altSVG = document.querySelector('.altSVG');
const mobile_navv = document.querySelector('.mobile-navv');

altSVG.addEventListener('click', () => {
  console.log('loggin')
  console.log(mobile_navv);
  mobile_navv.style.display = 'flex';
})
xSVG.addEventListener('click', () => {
  mobile_navv.style.display = 'none'
})