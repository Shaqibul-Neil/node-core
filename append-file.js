const fs = require("fs");

// fs.writeFileSync("./output/app.log", "Application Started \n");
// console.log("file created");

const logEntry1 = `\n ${new Date().toISOString()} : user logged in\n`;
fs.appendFileSync("./output/app.log", logEntry1);
console.log("log entry 1");

const logEntry2 = `\n ${new Date().toISOString()} : user data fetched\n`;
fs.appendFileSync("./output/app.log", logEntry2);
console.log("log entry 2");
