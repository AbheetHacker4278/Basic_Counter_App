let plusbtn = document.querySelector('.plus');
let minusbtn = document.querySelector('.minus');
let displ = document.querySelector('.disp');

let count = 0;

plusbtn.addEventListener('click', () => {
    count = count + 1;
    displ.innerHTML = count;
});

minusbtn.addEventListener('click', () => {
    if(count > 0) {
        count = count - 1;
        displ.innerHTML = count;
    }
});
