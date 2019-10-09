const express = require('express'),
      ctrl = require('./controller'),
      app = express();

app.use(express.json());

app.get('/api/user', ctrl.getUsers);
app.post('/api/user', ctrl.addUser);
app.put('/api/user/:id', ctrl.updateUser);
app.delete('/api/user/:id', ctrl.deleteUser);

const port = 4040;
app.listen(port, () => console.log(`Server running on ${port}`));