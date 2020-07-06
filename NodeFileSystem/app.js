// const fs = require("fs");

// fs.rename("before.json", "after.json", (err) => {
//   if (err) {
//     return console.error(err);
//   }
// });

const fs = require("fs");

try {
  fs.renameSync("after.json", "afafter.json");
} catch (err) {
  console.error(err);
}
