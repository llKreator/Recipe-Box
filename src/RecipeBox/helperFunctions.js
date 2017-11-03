export function toggleButtons(toggler){
    let allBTN = document.getElementsByClassName("myBTN");
    [].forEach.call(allBTN, (e) => {
        e.disabled = toggler;
    })
}