import fs from "fs/promises"

let a = await fs.readFile("unique.txt")

let b = await fs.readFile("unique.txt", "\n\n\n\n This is amazing promise")

console.log(a.toString(), b);
