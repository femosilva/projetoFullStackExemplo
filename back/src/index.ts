import express from "express";
import fs from 'fs'
import path from "path";
import cors from "cors"
const app = express();

const gatosFilePath = path.join(__dirname, 'gatos.json')

app.use(
    cors({
        origin: "*",
        optionsSuccessStatus: 200
    })
)
app.get("/gatos", function (req: any, res: any) {
    const readable = fs.createReadStream(gatosFilePath);
    readable.pipe(res);
});

app.listen(3000)