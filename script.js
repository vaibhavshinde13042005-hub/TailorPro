const heroTitle = document.getElementById("heroTitle");
const heroSubtitle = document.getElementById("heroSubtitle");
const bookBtn = document.getElementById("bookBtn");
const serviceBtn = document.getElementById("serviceBtn");

document.getElementById("englishBtn").onclick = function () {
    heroTitle.innerText = "TailorPro";
    heroSubtitle.innerText = "Perfect Stitching for Every Occasion";
    bookBtn.innerText = "Book Appointment";
    serviceBtn.innerText = "View Services";
};

document.getElementById("hindiBtn").onclick = function () {
    heroTitle.innerText = "टेलरप्रो";
    heroSubtitle.innerText = "हर अवसर के लिए बेहतरीन सिलाई";
    bookBtn.innerText = "अपॉइंटमेंट बुक करें";
    serviceBtn.innerText = "सेवाएँ देखें";
};

document.getElementById("marathiBtn").onclick = function () {
    heroTitle.innerText = "टेलरप्रो";
    heroSubtitle.innerText = "प्रत्येक प्रसंगासाठी उत्कृष्ट शिवणकाम";
    bookBtn.innerText = "अपॉइंटमेंट बुक करा";
    serviceBtn.innerText = "सेवा पहा";
};
const form = document.getElementById("appointmentForm");

form.addEventListener("submit", function(e) {

    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const mobile = document.getElementById("mobile").value.trim();
    const category = document.getElementById("category").value;
    const service = document.getElementById("service").value;
    const date = document.getElementById("date").value;

    if(name === "" || mobile === "" || category === "" || service === "" || date === ""){
        alert("Please fill all fields.");
        return;
    }

    if(mobile.length !== 10 || isNaN(mobile)){
        alert("Enter a valid 10-digit mobile number.");
        return;
    }

   const message =
`New Appointment

Name: ${name}
Mobile: ${mobile}
Category: ${category}
Service: ${service}
Date: ${date}`;

const whatsappURL =
`https://wa.me/918999635317?text=${encodeURIComponent(message)}`;

window.open(whatsappURL, "_blank");

form.reset();

});
const form = document.getElementById("appointmentForm");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const mobile = document.getElementById("mobile").value.trim();
    const category = document.getElementById("category").value;
    const service = document.getElementById("service").value;
    const date = document.getElementById("date").value;

    if (name === "" || mobile === "" || category === "" || service === "" || date === "") {
        alert("Please fill all fields.");
        return;
    }

    if (mobile.length !== 10 || isNaN(mobile)) {
        alert("Enter a valid 10-digit mobile number.");
        return;
    }

    alert("Appointment Booked Successfully!");

    form.reset();

});