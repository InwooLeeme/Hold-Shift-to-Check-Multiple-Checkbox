const checkboxes = document.querySelectorAll('.item > input[type="checkbox"]');

let lastChecked;
let isBetween = false;

function handleClick(event){
    // shiftkey가 true이고 그리고 그것이 checked가 true라면 실행
    if(event.shiftKey && this.checked){
        checkboxes.forEach(checkbox => {
            if(checkbox.checked === true || lastChecked === this){
                isBetween = !isBetween;
            }
            if(isBetween){
                checkbox.checked = true;
            }
        })
    }
    lastChecked = this;
}

function init() {
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('click',handleClick);
    });
}

init();