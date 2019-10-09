require("dotenv").config();
const express = require("express"),
  massive = require("massive"),
  ctrl = require("./controller"),
  { SERVER_PORT, CONNECTION_STRING } = process.env,
  app = express();

app.use(express.json());

massive(CONNECTION_STRING).then(db => {
  app.set("db", db);
  console.log("DB connected");
});

app.get("/api/users", ctrl.getUsers);
app.post("/api/user", ctrl.postUser);
app.put("/api/user/:id", ctrl.updateUser);
app.delete("/api/user/:id", ctrl.deleteUser);

const port = SERVER_PORT;
app.listen(port, () => console.log(`Server running on ${port}`));
