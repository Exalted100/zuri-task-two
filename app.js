const fetch = require("node-fetch");
const fs = require("fs");
const http = require("http");
const { default: axios } = require("axios");

const app = async () => {
    const jsonFile = JSON.stringify(await (await axios.get("http://jsonplaceholder.typicode.com/posts")).data)

    try {
        fs.writeFile("./result/posts.json", jsonFile, "utf-8", (err) => {
            console.log("file written")
        })
    } catch (err) {
        console.log(`the error is ${err}`)
    }
}

app()