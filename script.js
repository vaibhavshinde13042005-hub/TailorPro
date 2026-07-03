

const englishBtn = document.getElementById("englishBtn");
const hindiBtn = document.getElementById("hindiBtn");
const marathiBtn = document.getElementById("marathiBtn");

const bookBtn = document.getElementById("bookBtn");
const serviceBtn = document.getElementById("serviceBtn");



const heroTitle = document.getElementById("heroTitle");
const heroSubtitle = document.getElementById("heroSubtitle");



const collectionTitle = document.getElementById("collectionTitle");
const serviceTitle = document.getElementById("serviceTitle");
const galleryTitle = document.getElementById("galleryTitle");
const whyTitle = document.getElementById("whyTitle");
const appointmentTitle = document.getElementById("appointmentTitle");
const contactTitle = document.getElementById("contactTitle");
const footerTitle = document.getElementById("footerTitle");
const footerSubtitle = document.getElementById("footerSubtitle");

const gentsTitle = document.getElementById("gentsTitle");
const gentsText = document.getElementById("gentsText");

const ladiesTitle = document.getElementById("ladiesTitle");
const ladiesText = document.getElementById("ladiesText");



bookBtn.addEventListener("click", () => {
    document.getElementById("appointment").scrollIntoView({
        behavior: "smooth"
    });
});

serviceBtn.addEventListener("click", () => {
    document.getElementById("services").scrollIntoView({
        behavior: "smooth"
    });
});


englishBtn.addEventListener("click", function () {

    heroTitle.innerText = "TailorPro";
    heroSubtitle.innerText = "Perfect Stitching For Every Occasion";

    bookBtn.innerText = "Book Appointment";
    serviceBtn.innerText = "View Services";

    collectionTitle.innerText = "Choose Your Category";
    serviceTitle.innerText = "Our Services";
    galleryTitle.innerText = "Our Gallery";
    whyTitle.innerText = "Why Choose Us?";
    appointmentTitle.innerText = "Book Your Appointment";
    contactTitle.innerText = "Contact Us";

    footerTitle.innerText = "TailorPro";
    footerSubtitle.innerText = "Perfect Stitching For Every Occasion";

    gentsTitle.innerText = "👔 Gents Collection";
    gentsText.innerText =
    "Shirts, Pants, Suits, Blazers, Sherwani & Alterations";

    ladiesTitle.innerText = "👗 Ladies Collection";
    ladiesText.innerText =
    "Blouse, Kurti, Gown, Dresses, Salwar Suit & Alterations";

});



hindiBtn.addEventListener("click", function () {

    heroTitle.innerText = "टेलरप्रो";
    heroSubtitle.innerText = "हर अवसर के लिए बेहतरीन सिलाई";

    bookBtn.innerText = "अपॉइंटमेंट बुक करें";
    serviceBtn.innerText = "सेवाएँ देखें";

    collectionTitle.innerText = "अपनी श्रेणी चुनें";
    serviceTitle.innerText = "हमारी सेवाएँ";
    galleryTitle.innerText = "हमारी गैलरी";
    whyTitle.innerText = "हमें क्यों चुनें?";
    appointmentTitle.innerText = "अपॉइंटमेंट बुक करें";
    contactTitle.innerText = "संपर्क करें";

    footerTitle.innerText = "टेलरप्रो";
    footerSubtitle.innerText = "हर अवसर के लिए बेहतरीन सिलाई";

    gentsTitle.innerText = "👔 जेंट्स कलेक्शन";
    gentsText.innerText =
    "शर्ट, पैंट, सूट, ब्लेज़र, शेरवानी और अल्टरशन";

    ladiesTitle.innerText = "👗 लेडीज़ कलेक्शन";
    ladiesText.innerText =
    "ब्लाउज, कुर्ती, गाउन, ड्रेस, सलवार सूट और अल्टरशन";

});



marathiBtn.addEventListener("click", function () {

    heroTitle.innerText = "टेलरप्रो";
    heroSubtitle.innerText = "प्रत्येक प्रसंगासाठी उत्कृष्ट शिवणकाम";

    bookBtn.innerText = "अपॉइंटमेंट बुक करा";
    serviceBtn.innerText = "सेवा पहा";

    collectionTitle.innerText = "तुमची श्रेणी निवडा";
    serviceTitle.innerText = "आमच्या सेवा";
    galleryTitle.innerText = "आमची गॅलरी";
    whyTitle.innerText = "आम्हालाच का निवडाल?";
    appointmentTitle.innerText = "अपॉइंटमेंट बुक करा";
    contactTitle.innerText = "संपर्क करा";

    footerTitle.innerText = "टेलरप्रो";
    footerSubtitle.innerText = "प्रत्येक प्रसंगासाठी उत्कृष्ट शिवणकाम";

    gentsTitle.innerText = "👔 पुरुष कलेक्शन";
    gentsText.innerText =
    "शर्ट, पॅन्ट, सूट, ब्लेझर, शेरवानी व अल्टरशन";

    ladiesTitle.innerText = "👗 महिला कलेक्शन";
    ladiesText.innerText =
    "ब्लाउज, कुर्ती, गाऊन, ड्रेस, सलवार सूट व अल्टरशन";

});


const form = document.getElementById("appointmentForm");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const mobile = document.getElementById("mobile").value.trim();
    const category = document.getElementById("category").value;
    const service = document.getElementById("service").value;
    const date = document.getElementById("date").value;

    if (
        name === "" ||
        mobile === "" ||
        category === "" ||
        service === "" ||
        date === ""
    ) {
        alert("Please fill all fields.");
        return;
    }

    if (!/^[0-9]{10}$/.test(mobile)) {
        alert("Please enter a valid 10-digit mobile number.");
        return;
    }

    const message =
`🧵 New TailorPro Appointment

Name: ${name}
Mobile: ${mobile}
Category: ${category}
Service: ${service}
Date: ${date}`;

    const whatsappURL =
`https://wa.me/918999635317?text=${encodeURIComponent(message)}`;

    window.open(whatsappURL, "_blank");

    alert("Appointment Booked Successfully!");

    form.reset();

});