const fs = require("fs");
const path = require("path");

const source = path.join(__dirname, "outputs");
const target = path.join(__dirname, "dist");

fs.rmSync(target, { force: true, recursive: true });
fs.cpSync(source, target, { recursive: true });

console.log(`Production files copied to ${path.relative(__dirname, target)}`);
