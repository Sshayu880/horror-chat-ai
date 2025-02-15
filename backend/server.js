const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

app.post("/chat", (req, res) => {
    const userMessage = req.body.message.toLowerCase();
    let reply = "Я чую твой страх...";

    if (userMessage.includes("кто ты")) {
        reply = "Я - тот, кто ждал тебя...";
    } else if (userMessage.includes("уйди")) {
        reply = "Ты уже не можешь выйти...";
    }

    res.json({ reply });
});

app.listen(5000, () => console.log("Сервер запущен на порту 5000"));
