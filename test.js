let byteman = require('./index')

let rBY = 10
let rKB = 1000
let rMB = 1000000
let rGB = 1000000000
let rTB = 1000000000000
let rPB = 1000000000000000
let rEB = 1000000000000000000
let rZB = 1000000000000000000000
let rYB = 1000000000000000000000000

let BY = byteman(rBY);
let KB = byteman(rKB);
let MB = byteman(rMB);
let GB = byteman(rGB);
let TB = byteman(rTB);
let PB = byteman(rPB);
let EB = byteman(rEB);
let ZB = byteman(rZB);
let YB = byteman(rYB);

console.log("%s \t %s", BY, rBY)
console.log("%s \t\t %s", KB, rKB)
console.log("%s \t\t %s", MB, rMB)
console.log("%s \t\t %s", GB, rGB)
console.log("%s \t\t %s", TB, rTB)
console.log("%s \t\t %s", PB, rPB)
console.log("%s \t\t %s", EB, rEB)
console.log("%s \t\t %s", ZB, rZB)
console.log("%s \t\t %s", YB, rYB)