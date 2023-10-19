// FileHandling.js
const fs = require("fs").promises;
const http = require("http");
 try {
const read = async () => {
const data = await fs.readFile("index.html");
fs.writeFile("NewFile.html", data);
     };
read();
} catch (e) {
console.log("YOU HAVE AN ERROR", e);
}
try {
setTimeout(() => {
const ReadandDisplay = async () => {
const data = await fs.readFile("NewFile.html");
http.createServer((req, res) => {
res.write(data);
 res.end();
 }).listen(8000, () => {
   console.log("Listening to Port 8000");
 });
};
ReadandDisplay();
}, 8000);
} catch (e) {
console.log("YOU HAVE AN ERROR", e);}