// /* ==========================
//    SCROLL REVEAL
// ========================== */

// const revealElements =
//     document.querySelectorAll(
//         ".section, .project, .experience, .skill-box, .profile-card"
//     );


// const observer = new IntersectionObserver(

//     function(entries) {

//         entries.forEach(function(entry) {

//             if (entry.isIntersecting) {

//                 entry.target.classList.add("active");

//             }

//         });

//     },

//     {
//         threshold: 0.15
//     }

// );


// revealElements.forEach(function(element) {

//     element.classList.add("reveal");

//     observer.observe(element);

// });



// /* ==========================
//    NAVBAR SCROLL EFFECT
// ========================== */

// const header = document.querySelector("header");


// window.addEventListener("scroll", function() {

//     if (window.scrollY > 50) {

//         header.style.background =
//             "rgba(8,9,11,0.95)";

//     } else {

//         header.style.background =
//             "rgba(8,9,11,0.75)";

//     }

// });



// /* ==========================
//    PROJECT HOVER
// ========================== */

// const projects =
//     document.querySelectorAll(".project");


// projects.forEach(function(project) {

//     project.addEventListener("mouseenter", function() {

//         project.style.cursor = "pointer";

//     });

// });



// /* ==========================
//    IMAGE PARALLAX
// ========================== */

// const profile =
//     document.querySelector(".profile-card");


// document.addEventListener(
//     "mousemove",
//     function(event) {

//         if (window.innerWidth < 900) return;

//         const x =
//             (event.clientX / window.innerWidth - 0.5) * 2;

//         const y =
//             (event.clientY / window.innerHeight - 0.5) * 2;


//         profile.style.transform =
//             `rotate(${2 + x}deg)
//              translate(${x * 5}px, ${y * 5}px)`;

//     }
// );



// /* ==========================
//    SMOOTH ACTIVE NAV
// ========================== */

// const sections =
//     document.querySelectorAll("section[id]");

// const navLinks =
//     document.querySelectorAll("nav a");


// window.addEventListener("scroll", function() {

//     let current = "";

//     sections.forEach(function(section) {

//         const sectionTop =
//             section.offsetTop - 200;

//         if (window.scrollY >= sectionTop) {

//             current = section.getAttribute("id");

//         }

//     });


//     navLinks.forEach(function(link) {

//         link.style.color = "";

//         if (
//             link.getAttribute("href") ===
//             "#" + current
//         ) {

//             link.style.color =
//                 "#c8ff63";

//         }

//     });

// });



// /* ==========================
//    PROJECT CLICK EFFECT
// ========================== */

// projects.forEach(function(project) {

//     project.addEventListener("click", function() {

//         const title =
//             project.querySelector("h3");

//         if (!title) return;

//         console.log(
//             "Project selected:",
//             title.innerText
//         );

//     });

// });



// /* ==========================
//    EMAIL BUTTON
// ========================== */

// const email =
//     document.querySelector(".email");


// email.addEventListener("click", function() {

//     console.log(
//         "Opening email:",
//         "divya6203009@gmail.com"
//     );

// });

// Get all navigation links

let links = document.querySelectorAll("nav a");


// Add click event to every link

links.forEach(function(link) {

    link.addEventListener("click", function() {

        console.log("Navigation link clicked");

    });

});


// Show a message when the page is loaded

window.addEventListener("load", function() {

    console.log("Portfolio loaded successfully");

});