module.exports = {
  getUsers: (req, res) => {
    const db = req.app.get("db");
    db.get_users()
      .then(users => {
        res.status(200).send(users);
      })
      .catch(err => console.log(err));
  },

  postUser: (req, res) => {
    const { name } = req.body;
    const db = req.app.get("db");
    db.post_user(name)
      .then(users => {
        res.status(200).send(users);
      })
      .catch(err => res.status(500).send(err));
  },

  updateUser: (req, res) => {
    const { id } = req.params;
    const { name } = req.body;

    req.app
      .get("db")
      .update_user({ name, id })
      .then(users => {
        res.status(200).send(users);
      })
      .catch(err => res.status(500).send(err));
  },

  deleteUser: (req, res) => {
    const { id } = req.params;
    req.app
      .get("db")
      .delete_user({ id })
      .then(users => {
        res.sendStatus(200);
      })
      .catch(err => res.status(500).send(err));
  }
};
