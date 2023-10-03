const images2 = [
    'imges/Contact.jpg',
    'imges/Contact2.jpg',
    'imges/contactus2.gif',
    'imges/contactus.gif',
];

let imgIndex = 0;
const imgE1 = document.getElementById('contact-img');

setInterval(() => {
    if (imgIndex === images2.length) {
        imgIndex = 0;
    }
    const imgUrl = images2[imgIndex];
    console.log(imgIndex, imgUrl);

    imgE1.setAttribute('src', imgUrl);
    imgE1.classList.add('fade-in-out'); // Add the CSS class for animation
    imgIndex++;
}, 3000);


// Email js

(function () {
    emailjs.init("tB1iuQ5YuAZK8YSFE");
})();



const sendEmail = (e) => {
    e.preventDefault()

    emailjs
        .sendForm(
            'service_7hwyzcr',
            'template_8iu9ycx',
            refForm.current,
            'tB1iuQ5YuAZK8YSFE'
        )
        .then(
            () => {
                alert('Your Message has been sent to Gbemisola')
                window.location.reload(false)
            },
            () => {
                alert('Failed to send message, please try again')
            }
        )
}
