const fetch = require("node-fetch");
const fs = require("fs");
const http = require("http");
const { default: axios } = require("axios");

const app = async () => {
    const jsonFile = await JSON.stringify(axios.get("http://jsonplaceholder.typicode.com/posts"))

    try {
        fs.writeFile("./result/posts.json", jsonFile, "utf-8", (err) => {
            console.log("file written")
        })
    } catch (err) {
        console.log(`the error is ${err}`)
    }
}

app()