var fs = require("fs")

const createTables = require("./table-maker")

createTables()

javascriptTable = fs.readFileSync("table-javascript.md", "utf8")
pythonTable = fs.readFileSync("table-python.md", "utf8")

console.log("Creating README.md...")

var readme = `
# Variable Naming Conventions

## Javascript

${javascriptTable}

## Python

${pythonTable}
`

fs.writeFileSync("../README.md", readme)