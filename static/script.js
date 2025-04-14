function showPopup() {
    document.getElementById("popup").style.display = "flex";
    document.body.classList.add("no-scroll");
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
    document.body.classList.remove("no-scroll");
}
