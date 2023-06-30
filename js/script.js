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
