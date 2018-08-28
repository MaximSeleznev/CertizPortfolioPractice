//buttons
let fake = document.querySelectorAll('.fake-btn');
let reset = document.querySelector('.reset-btn');
let isVisible = false;
//events
for (let i=0; i<fake.length; i++) {
    fake[i].addEventListener("click", tooltipToggle)
}

for (let i=0; i<fake.length; i++) {
    fake[i].addEventListener("blur", tooltipBlur)
}

reset.addEventListener("click", textReset);

//functions
function tooltipToggle(event) {
    let target = event.target;
    let tooltip = target.querySelector('.tooltiptext');

    if (!isVisible) {
        tooltip.style.visibility = 'visible';
        tooltip.classList.add('img-fadein');
        tooltip.classList.remove('img-fadeout');
    } else {
        tooltip.classList.remove('img-fadein');
        tooltip.classList.add('img-fadeout');

        let timerId = setTimeout(function() {
            tooltip.style.visibility = 'hidden';
        }, 400)
    };

    isVisible = !isVisible;
}

function tooltipBlur(event) {
    let target = event.target;
    let tooltip = target.querySelector('.tooltiptext');

    tooltip.classList.remove('img-fadein');
        tooltip.classList.add('img-fadeout');

        let timerId = setTimeout(function() {
            tooltip.style.visibility = 'hidden';
        }, 400)

        isVisible = false;
}

function textReset() {
    let textarea = document.querySelector('.section-forms-textarea-container textarea');
    let name = document.querySelector('.inputs .name');
    let email = document.querySelector('.inputs .email');

    textarea.value = '';
    name.value = '';
    email.value = '';
}
