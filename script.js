// ================================
// BUTTONS
// ================================

const bookBtn = document.getElementById("bookBtn");
const serviceBtn = document.getElementById("serviceBtn");

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

// ================================
// LANGUAGE SWITCH
// ================================

const heroTitle = document.getElementById("heroTitle");
const heroSubtitle = document.getElementById("heroSubtitle");

document.getElementById("englishBtn").onclick = () => {

heroTitle.innerHTML = "Perfect Stitching";

heroSubtitle.innerHTML =
"Premium Tailoring For Every Occasion";

bookBtn.innerHTML = "Book Appointment";

serviceBtn.innerHTML = "View Services";

};

document.getElementById("hindiBtn").onclick = () => {

heroTitle.innerHTML = "बेहतरीन सिलाई";

heroSubtitle.innerHTML =
"हर अवसर के लिए प्रीमियम टेलरिंग";

bookBtn.innerHTML = "अपॉइंटमेंट बुक करें";

serviceBtn.innerHTML = "सेवाएँ देखें";

};

document.getElementById("marathiBtn").onclick = () => {

heroTitle.innerHTML = "उत्तम शिवणकाम";

heroSubtitle.innerHTML =
"प्रत्येक प्रसंगासाठी उत्कृष्ट टेलरिंग";

bookBtn.innerHTML = "अपॉइंटमेंट बुक करा";

serviceBtn.innerHTML = "सेवा पहा";

};

// ================================
// APPOINTMENT FORM
// ================================

const form = document.getElementById("appointmentForm");

form.addEventListener("submit", function(e){

e.preventDefault();

const name =
document.getElementById("name").value.trim();

const mobile =
document.getElementById("mobile").value.trim();

const category =
document.getElementById("category").value;

const service =
document.getElementById("service").value;

const date =
document.getElementById("date").value;

if(
name==="" ||
mobile==="" ||
category==="" ||
service==="" ||
date==="")
{
alert("Please fill all fields.");
return;
}

if(!/^[0-9]{10}$/.test(mobile))
{
alert("Enter Valid Mobile Number");
return;
}

const message =
`🧵 Tailor Appointment

Name : ${name}

Mobile : ${mobile}

Category : ${category}

Service : ${service}

Date : ${date}`;

const whatsappURL =
`https://wa.me/918999635317?text=${encodeURIComponent(message)}`;

window.open(whatsappURL,"_blank");

alert("Appointment Sent Successfully!");

form.reset();

});

// ================================
// TOP BUTTON
// ================================

const topBtn =
document.querySelector(".top-button");

window.addEventListener("scroll",()=>{

if(window.scrollY>300){

topBtn.style.display="flex";

}
else{

topBtn.style.display="none";

}

});

// ================================
// SCROLL ANIMATION
// ================================

const boxes =
document.querySelectorAll(
".service-box,.collection-card,.gallery-box,.why-box,.review-box,.stat-box"
);

const observer =
new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";
entry.target.style.transform="translateY(0)";

}

});

},
{
threshold:0.2
});

boxes.forEach(box=>{

box.style.opacity="0";
box.style.transform="translateY(40px)";
box.style.transition=".7s";

observer.observe(box);

});

// ================================
// ACTIVE NAV LINK
// ================================

const sections =
document.querySelectorAll("section");

const navLinks =
document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const sectionTop =
section.offsetTop-150;

if(pageYOffset>=sectionTop){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#" + current){

link.classList.add("active");

}

});

});

// ================================
// CURRENT YEAR
// ================================

const footer =
document.querySelector("footer p:last-child");

footer.innerHTML =
`© ${new Date().getFullYear()} All Rights Reserved.`;

// ================================
// PAGE LOADED
// ================================

window.addEventListener("load",()=>{

document.body.style.opacity="1";

});