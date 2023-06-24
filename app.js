const contextText = document.querySelector('.contextText');

document.querySelector('.disclaimerSVG').addEventListener('click', () => {
    if (contextText.style.display === 'none') {
        contextText.style.display = ''; // Set the default value
        contextText.scrollIntoView({ behavior: 'smooth' });
    } else {
        contextText.style.display = 'none'; // Set the 'none' value
    }
});

const copyBtn = document.querySelector('.copySVG');
// copyBtn.addEventListener('click', copyToClipboard);

function copyToClipboard() {
    const textToCopy = document.querySelector('.contractAdd')
    navigator.clipboard.writeText(textToCopy.innerText)
        .then(() => {
            copyBtn.style.stroke = '#02a701';
            textToCopy.style.color = "green"
            setTimeout(() => {
                copyBtn.style.stroke = '';
                textToCopy.style.color = ""
            }, 2000)
        })
        .catch((error) => {
            window.alert('Unable to copy text to clipboard');
        });
};

// LANDING PAGE ANIMATION
var scene = document.getElementById("scene");
var parallaxInstance = new Parallax(scene);