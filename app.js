const app = require('express')();
const bodyParser = require('body-parser');
const fileupload = require("express-fileupload");

app.set("api_secret_key", require("./config").api_secret_key);
app.use(fileupload());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/employee", require("./verify-token"));
app.use("/employee", require("./employeeRouter"));

app.use("/images", require("./verify-token"));
app.use("/images", require("./imgRouter"));

app.use("/token",require("./tokenRouter"));

app.listen(5000, () => console.log("Server started on port 5000"));