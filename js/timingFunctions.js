const heading = document.getElementsByTagName("h1")[0];

// setTimeout(() => {
//     heading.style.backgroundColor = "red";
//     console.log("Timing Functions");
// }, 5000);

setInterval(() => {
    heading.style.backgroundColor = "red";
    console.log("Timing Functions");
}, 5000);