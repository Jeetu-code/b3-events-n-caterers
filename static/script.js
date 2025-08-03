                               
document.addEventListener("DOMContentLoaded", function () {
const date = document.getElementById("date");
const DishesMenu = document.getElementById("DishesMenu");
const PeopleCount = document.getElementById("PeopleCount"); 
const Location = document.getElementById("LocationMenu");
const Decorations = document.getElementById("DecorationMenu");
const Event = document.getElementById("EventMenu");
const submitButton = document.querySelector('.submit button');


function showPopup() {
    document.getElementById("popup").style.display = "flex";
    document.body.classList.add("no-scroll");
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
    document.body.classList.remove("no-scroll");
}
 function ShowPopup() {
            document.getElementById("popup").style.display = "block";
        }

        function ClosePopup() {
            document.getElementById("popup").style.display = "none";
        }
    
    const dateInput = document.getElementById("date");
    if (dateInput) {
        dateInput.placeholder = "";
        flatpickr(dateInput, {
            dateFormat: "Y-m-d",
            minDate: "today",
            allowInput: true, // allow manual input if needed
        });
      
    }


    // server/node_emailer/server.js
function sendBookingMail(subject, text) {
    fetch('http://localhost:5000/v1/text-mail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ subject, text })
    })
    .then(res => res.json())
    .then(data => {
        if (data.status === "success") {
            alert("Booking email sent!");
        } else {
            alert("Error: " + data.message);
        }
    })
    .catch(err => alert("Network error: " + err));
}

submitButton.addEventListener('click', function(e) {
    e.preventDefault();
    // Collect data from your form fields
    const subject = "New Booking";
    const text = "Date: " + date.value + 
        "\nMenu: " + DishesMenu.value +
        "\nPeople: " + PeopleCount.value +
        "\nLocation: " + Location.value +
        "\nDecorations: " + Decorations.value +
        "\nEvent: " + Event.value;
    sendBookingMail(subject, text);
});
});

