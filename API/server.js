const express = require('express');
const cors = require('cors');

const app = express();

var corsOptions = {
    origin: "https://localhost:8081"
};

app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

const db = require("./app/models");
db.mongoose
    .connect(db.url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log("Connecter à la base de données!");
    })
    .catch(err => {
        console.log("Impossible de se connecter à la base de données!", err);
        process.exit();
    });

app.get("/", (req, res) => {
    res.json({ message: "Hello, world!" });
});

require("./app/routes/utilisateur.routes.js")(app);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Le serveur roule sur le port ${PORT}.`);
});