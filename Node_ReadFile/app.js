const fs = require("fs");

// fs.readFile("/test.txt", (err, data) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   console.log(data);
// });

try {
  const data = fs.readFileSync("/test.txt", "utf-8");
  console.log(data);
} catch (err) {
  console.error(err);
}
