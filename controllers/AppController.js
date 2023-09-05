const server = require('./server.js');
const { connect, countUsers, countFiles } = require('../utils/db');



app.get('/status', (req, res) => {
  promisifiedSet('healthCheck', 'OK');
  res.status(200).json({ "redis": true, "db": true });


app.get('stat', (req, res) => {
  const userCount = countUsers();
  const fileCount = countFiles();
  res.status(200).json({"users": userCount, "files": fileCount});
});
