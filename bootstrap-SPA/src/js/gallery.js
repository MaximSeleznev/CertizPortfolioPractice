//buttons
let btn = document.querySelectorAll('.gallery-btn');

//event
for (let i=0; i<btn.length; i++) {
    btn[i].addEventListener("click", btnClick)
}

//function
function btnClick(event) {
    let target= event.target;
    let id = target.id;
    let img = document.querySelectorAll('.gallery-img');

    for (let i=0; i<img.length; i++) {
        img[i].classList.add('d-none');
        if (img[i].classList.contains(id)) {
            img[i].classList.remove('d-none');
        }
    }
}