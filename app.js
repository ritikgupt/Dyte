const express= require("express")
const app = express();
const server = require("http").createServer(app);
app.use(express.urlencoded({extended: true}));
app.use(express.json());

const port = 5000;

server.listen(port, () => {
  console.log("Server is running on port" + port);
});
