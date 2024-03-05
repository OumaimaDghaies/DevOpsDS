const express= require('express');
const app = express();

app.use(express.json());

app.post("/api/tasks", (req, res) => {
    const task = {
        id: 1,
        name: "Tunisie",
        completed: false
    };
    tasks.push(task);
    res.status(201).send(task);
});
