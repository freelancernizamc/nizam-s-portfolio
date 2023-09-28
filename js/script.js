const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('nav');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classlist.add('active');
    })
}
if (close) {
    close.addEventListener('click', () => {
        nav.classlist.remove('active');
    })
}

// download pdf
function downloadPDF() {
    const link = document.createElement('a');
    link.href = "Resume-of-MD-NIZAM-UDDIN.pdf";
    link.download = 'Resume-of-MD-NIZAM-UDDIN.pdf';
    link.click();
}

// banner animation
const images = [
    'imges/nizam.png',
    'imges/md-nizamuddin\ \(1\).jpeg',
    'imges/background.png',
    'imges/Md-Nizam-uddin.jpeg',
    'imges/Nizam\ bd.jpg',
    'imges/nizam.png'
];

let imgIndex = 0;
const imgE1 = document.getElementById('banner-img');

setInterval(() => {
    if (imgIndex === images.length) {
        imgIndex = 0;
    }
    const imgUrl = images[imgIndex];
    console.log(imgIndex, imgUrl);

    imgE1.setAttribute('src', imgUrl);
    imgE1.classList.add('fade-in-out'); // Add the CSS class for animation
    imgIndex++;
}, 1000);

