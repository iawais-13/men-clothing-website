function sendMsg(event) {
    event.preventDefault();
    alert("Thank you! Your message has been submitted.");
}

document.querySelectorAll(".add-cart").forEach(function(btn) {
    btn.addEventListener("click", function() {
        let itemName = this.getAttribute("data-name");
        alert(itemName + " added to cart!");
    });
});

