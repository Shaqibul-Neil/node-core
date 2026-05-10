const fs = require("fs");

const content1 = "This is a content \n node js is awesome";

try {
  fs.writeFileSync("./output/test-sync.txt", content1);
  console.log("file written successfully");
} catch (error) {
  console.error(error.message);
}

const content2 = "This is a content 2 asynchronous \n node js is awesome";

console.log("---------Start Writing--------");

fs.writeFile("./output/test-async.txt", content2, (error) => {
  if (error) {
    console.error(error.message);
  } else console.log("file written successfully async");
});

console.log("this runs immediately -- no blocking");
