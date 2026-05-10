const fs = require("fs");

console.log("------Start reading--------");

const data = fs.readFile("./data/diary.txt", "utf-8", (error, data) => {
  if (error) {
    console.error("error : ", error.message);
  }
  console.log("---File content---");
  console.log(data);
  console.log("------End reading--------");
});

console.log("this runs immediately -- no blocking");
