const express = require("express");
const path = require("path");

const app = express();
const port = 3000;

app.use(express.static(__dirname));

app.get("*", (req, res) => {
    let filePath = path.join(__dirname, req.path);

    if (!path.extname(filePath)) {
        filePath += ".html";
    }

    if (path.extname(filePath) === ".html") {
        res.sendFile(filePath, (err) => {
            if (err) {
                res.status(404).send("404 : File not FOUND MACHA");
            }
        });
    } else {
        res.status(404).send("Invalid request");
    }
});

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
