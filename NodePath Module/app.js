const path = require("path");

const basename = path.basename("/test/something");
const basename1 = path.basename("/test/something.txt");
const basename2 = path.basename("/test/something.txt", ".txt");
// console.log(basename2);

const dirname = path.dirname("test/something");
const dirname2 = path.dirname("test/something/app.txt");
// console.log(dirname2);

const extname = path.extname("test/something");
const extname1 = path.extname("/test/something.txt");
const extname2 = path.extname("/test/something", ".txt");
// console.log(extname1);

const isAbsolute = path.isAbsolute("/test/something");
const isAbsolute1 = path.isAbsolute("./test/something");
// console.log(isAbsolute1);

const name = "Ajay";
const join = path.join("/", "users", name, "notex.txt");
// console.log(join);

const normalize = path.normalize("users/ajay/ajax/..//test.txt");
// console.log(normalize);

const parse = path.parse("/users/test.txt");
// console.log(parse);

const relative = path.relative("/Users/flavio", "/Users/flavio/test.txt");
const relative2 = path.relative("/Users/flavio", "/Users/flavio/some/test.txt");
// console.log(relative2);

const resolve = path.resolve("app.js");
const resolve2 = path.resolve("tmp", "app.js");
const resolve3 = path.resolve("/etc", "app.js");
console.log(resolve3);
