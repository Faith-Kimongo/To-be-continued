import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
//will run server on this port
const port = 5000;

app.use(bodyParser.json());
app.use(cors());

//to test if our server is working
app.get("/", (req, res) => res.send("Hello from Express"));

app.listen(port, () => 
  console.log(`Server is listening on port: http://localhost:${port}`)
  );
