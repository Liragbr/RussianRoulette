const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("Welcome to Windows 32 Russian Roulette!");
const bullet = Math.floor(Math.random() * 6) + 1;

rl.question("Pick a chamber (1-6): ", (chamber) => {
    if (parseInt(chamber) === bullet) {
        console.log("Oops! Looks like you just deleted Windows 32. Good luck reinstalling! 💻💥");
    } else {
        console.log("Phew! You survived... this time. Try again if you dare! 🔫😅");
    }
    rl.close();
});
