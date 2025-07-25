const express = require("express");

const app = express();

app.use("/", (req, res, next) => {
    console.log("hello from first route");
    res.send("hi");
});

app.listen(3000, () => {
    console.log("listening on port 3000")
})