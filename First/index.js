const s2 = require("./student");
console.log(s2.getName);
console.log(s2.getAge);
const s1 = require("./file");
console.log(s1.getVillage());
console.log(s1.getCity());
const {getHome} = require("./file");
console.log(getHome());