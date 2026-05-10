const fs = require("fs");

console.log("------Start reading--------");

try {
  const data = fs.readFileSync("./data/diary.txt", "utf-8");
  console.log("---File content---");
  console.log(data);
  console.log("------End reading--------");
} catch (error) {
  console.error(error.message);
}

console.log("finished");
