const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('nav');

if (bar) {
    bar.addEventListener('click', () =>{
            nav.classlist.add('active');
        })
}
if (close) {
    close.addEventListener('click', () =>{
            nav.classlist.remove('active');
        })
}

