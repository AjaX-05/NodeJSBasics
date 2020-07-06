const fs = require("fs");

const content = "BeepBeep - BoopeoppiBoop";

fs.writeFile(
  "C:/Users/Ajay/Desktop/Node_WriteFile/test.txt",
  content,
  { flag: "a+" },
  (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log("Sucess");
  }
);

// const fs = require("fs");

// const content = "console.log('Hello')";

// try {
//   const data = fs.writeFileSync(
//     "/Users/Ajay/Desktop/Node_WriteFile/index.js",
//     content
//   );
// } catch (err) {
//   console.error(err);
// }

const content2 = "XyzAbcLkjPoiRty";

try {
  const data = fs.appendFileSync("file.log", content2, (err) => {
    return console.log("done");
  });
} catch {
  if (err) {
    console.error(err);
    return;
  }
}
