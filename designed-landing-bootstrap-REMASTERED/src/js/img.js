//pics
let img = document.querySelectorAll('.gallery-img');

//event
for (let i=0; i<img.length; i++) {
    img[i].addEventListener("click", popup);
}

//function
function popup(event) {
    let target = event.target;
    let src = target.src;
    console.log(src);
    let div = document.createElement('div');
    div.classList.add('img-popup', 'img-fadein');
    div.innerHTML = `<img src="${src}" class="gallery-img" alt="">`;

    document.body.insertBefore(div, document.body.firstChild);

    div.addEventListener('click', function(event){
        let target = event.target;
        if (target == document.querySelector('.gallery-img')) return;
        div.classList.add('img-fadeout');

        let timerId = setTimeout(function() {
            document.body.removeChild(div);
        }, 500)
    });
}