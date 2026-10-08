require('dotenv').config();
const app = require('./app');

const PORT = process.env.PORT;
const HOST_NAME = process.env.HOST_NAME;

app.listen(PORT, HOST_NAME, () => {
  console.log(`Server is running at http://${HOST_NAME}:${PORT}`);
});
