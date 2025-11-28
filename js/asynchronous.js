// console.log("A");
// setTimeout(() => {
// console.log("B");
// }, 2000)
// console.log("C");

let firstName = "Aptech";
let lastName = "";


const getFullName = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Pakistan");
    }, 5000);
});

const displayFullName = async () => {
    lastName = await getFullName;
    // console.log(firstName + " " + lastName);
    console.log(`${firstName} ${lastName}`);
} 

displayFullName();



