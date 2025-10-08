import express,{Request,Response} from "express"
import cors from 'cors'
const app = express();

app.use(cors({
    origin: ['http://localhost:3002', 'http://localhost:3003'],
    credentials: true,
}))

app.get("/", (req:Request, res:Response) => {
  res.json("product endpoint work!")
})

app.listen(800, () => {
    console.log("product services is running on port 800");
})