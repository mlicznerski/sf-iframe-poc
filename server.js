const express = require("express");

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.post("/fake-salesforce-server", function (req, res) {
  console.log("POST request with BODY:", req.body);

  const returnUrl = req.body.returnUrl;

  res.redirect(returnUrl);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
