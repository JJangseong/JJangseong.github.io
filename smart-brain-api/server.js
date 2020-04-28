const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json);

const database = {
  users: [
    {
      id: "123",
      name: "John",
      email: "john@gmail.com",
      password: "cookies",
      entries: 0,
      joined: new Date(),
    },
    {
      id: "124",
      name: "Sally",
      email: "Sally@gmail.com",
      password: "bananas",
      entries: 0,
      joined: new Date(),
    },
  ],
};

app.get("/", (req, res) => {
  res.send(database.users);
});

app.post("/signin", (req, res) => {
  const { email, password } = req.body;
  if (
    email === database.users[0].email &&
    password === database.users[0].email
  ) {
    res.json("success");
  } else {
    res.status(400).json("error loggin");
  }
});

app.post("/register", (req, res) => {
  const { name, email, password } = req.body;
  database.users.concat({
    id: "125",
    name: name,
    email: email,
    password: password,
    entries: 0,
    joined: new Date(),
  });

  res.json(database.users[database.users.length - 1]);
});

app.listen(3000, () => {
  console.log("app is running on port 3000");
});