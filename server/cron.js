const cron = require("cron");
const https = require("https");

const backendurl = "https://b3-events-n-caterers-1.onrender.com/"; // Your Render backend URL

const job = new cron.CronJob("*/14 * * * *", function() {
    console.log("Pinging backend to keep alive...");
    https.get(backendurl, (res) => {
        if (res.statusCode === 200) {
            console.log("Backend is alive!");
        } else {
            console.error(`Failed to ping backend. Status code: ${res.statusCode}`);
        }
    }).on("error", (err) => {
        console.error("Error during ping:", err.message);
    });
});

module.exports = {
    job,
};