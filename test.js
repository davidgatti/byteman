let byteman = require('./index');

let rBY = 10;
let rKB = 1000;
let rMB = 1000000;
let rGB = 1000000000;
let rTB = 1000000000000;
let rPB = 1000000000000000;
let rEB = 1000000000000000000;
let rZB = 1000000000000000000000;
let rYB = 1000000000000000000000000;

let BY = byteman(rBY);
let KB = byteman(rKB);
let MB = byteman(rMB);
let GB = byteman(rGB);
let TB = byteman(rTB);
let PB = byteman(rPB);
let EB = byteman(rEB);
let ZB = byteman(rZB);
let YB = byteman(rYB);

console.log("%s \t %s", BY, rBY);
console.log("%s \t\t %s", KB, rKB);
console.log("%s \t\t %s", MB, rMB);
console.log("%s \t\t %s", GB, rGB);
console.log("%s \t\t %s", TB, rTB);
console.log("%s \t\t %s", PB, rPB);
console.log("%s \t\t %s", EB, rEB);
console.log("%s \t\t %s", ZB, rZB);
console.log("%s \t\t %s", YB, rYB);

console.log("")

let rBY2 = 94;
let rKB2 = 6848;
let rMB2 = 6848547;
let rGB2 = 6848547561;
let rTB2 = 684854756122;
let rPB2 = 684854756168484;
let rEB2 = 6848547561684854756;
let rZB2 = 6848547561684854756168;
let rYB2 = 6848547561684854756168485;

let BY2 = byteman(rBY2, 2);
let KB2 = byteman(rKB2, 2);
let MB2 = byteman(rMB2, 2);
let GB2 = byteman(rGB2, 2);
let TB2 = byteman(rTB2, 2);
let PB2 = byteman(rPB2, 2);
let EB2 = byteman(rEB2, 2);
let ZB2 = byteman(rZB2, 2);
let YB2 = byteman(rYB2, 2);

console.log("%s \t %s", BY2, rBY2);
console.log("%s \t %s", KB2, rKB2);
console.log("%s \t %s", MB2, rMB2);
console.log("%s \t %s", GB2, rGB2);
console.log("%s \t %s", TB2, rTB2);
console.log("%s \t %s", PB2, rPB2);
console.log("%s \t %s", EB2, rEB2);
console.log("%s \t %s", ZB2, rZB2);
console.log("%s \t %s", YB2, rYB2);