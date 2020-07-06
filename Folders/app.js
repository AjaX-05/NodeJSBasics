// const fs = require("fs");

const { fstat } = require("fs");

// const folderName = "/Users/Ajay/Desktop/Folders/TestFolder";

// try {
//   if (!fs.existsSync(folderName)) {
//     fs.mkdirSync(folderName);
//     console.log("sucess");
//     return;
//   }
// } catch (err) {
//   console.error(err);
// }

// const fs = require("fs");

// const path = require("path");

// const folderPath = "/Users/Ajay/Desktop/Folders/";

// const readdirSync = fs
//   .readdirSync(folderPath)
//   .map((fileName) => {
//     return path.join(folderPath, fileName);
//   })
//   .filter(isFile);

// console.log(readdirSync);

// const fs = require("fs");

// const path = require("path");

// const folderPath = "/Users/Ajay/Desktop/Folders/";

// const isFile = (fileName) => {
//   return fs.lstatSync(fileName).isFile();
// };

// const readdirSyncFilterFiles = fs
//   .readdirSync(folderPath)
//   .map((fileName) => {
//     return path.join(folderPath, fileName);
//   })
//   .filter(isFile);

// console.log(readdirSyncFilterFiles);

// const fs = require("fs");

// fs.rename(
//   "/Users/Ajay/Desktop/Folders/TestFolder/abc.txt",
//   "/Users/Ajay/Desktop/Folders/TestFolder/deddededed.txt",
//   (err) => {
//     console.error(err);
//     return;
//   }
// );

// const fs = require("fs");

// try {
//   fs.renameSync(
//     "/Users/Ajay/Desktop/Folders/TestFolder/deddededed.txt",
//     "/Users/Ajay/Desktop/Folders/TestFolder/Ooffafwfna.txt"
//   );
// } catch (err) {
//   console.error(err);
// }

// const fs = require("fs-extra");

// const folder = "/Users/Ajay/Desktop/Folders/TestFolder/Ooffafwfna.txt";

// fs.remove(folder, (err) => {
//   console.error(err);
// });

const fs = require("fs-extra");

// const folder = "/Users/Ajay/Desktop/Folders/TestFolder/";

// fs.remove(folder)
//   .then(() => {
//     console.log("done");
//   })
//   .catch((err) => {
//     console.error(err);
//   });

async function removeFolder(folder) {
  try {
    await fs.remove(folder);
    //done
  } catch (err) {
    console.error(err);
  }
}

const folder = "Users/Ajay/Desktop/Folders/TestFolder/fae";
removeFolder(folder);
