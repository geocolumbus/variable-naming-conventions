var fs = require("fs")

function readTableFile(filename) {
    return fs.readFileSync(filename, "utf8")
}

function createTableFromTextFile(text) {
    var textLines = text.split("\n")
    var lineCounter = 0
    var table = "<table>"

    table += "<tr>"
    while (textLines[lineCounter].trim() !== "") {
        table += `<th>${textLines[lineCounter].trim()}</th>`
        lineCounter++
    }
    table += "</tr>"
    lineCounter++
    while (lineCounter < textLines.length) {
        table += "<tr>"
        table += `<td valign="top">${textLines[lineCounter++].trim()}</td>`
        table += `<td valign="top">${textLines[lineCounter++].trim()}</td>`
        table += `<td valign="top">${textLines[lineCounter++].trim()}</td>`
        table += "<td valign=\"top\">\n\n```text\n"
        while (textLines[lineCounter].trim() !== "") {
            table += `${textLines[lineCounter].trim()}\n`
            lineCounter++
        }
        table += "```\n</td>"
        table += "</tr>"
        lineCounter++
    }
    table += "</table>"
    return table
}

function writeTextFile(filename, text) {
    fs.writeFileSync(filename, text)
}

function createMarkdownTable(sourceFilename, destinationFilename) {
    var rawTableData = readTableFile(sourceFilename)
    var htmlTable = createTableFromTextFile(rawTableData)
    writeTextFile(destinationFilename, htmlTable)
}

function createTables() {
    console.log("Creating javascript table...")
    createMarkdownTable("table-data-javascript.txt", "table-javascript.md")
    console.log("Creating python table...")
    createMarkdownTable("table-data-python.txt", "table-python.md")
}

module.exports = createTables