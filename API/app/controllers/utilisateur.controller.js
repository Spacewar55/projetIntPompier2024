const db = require("../models");
const Utilisateur = db.utilisateur;

// Créer un nouvel utilisateur
exports.createUser = (req, res) => {
    // if (!req.body.identifiant || !req.body.nom || !req.body.prenom || !req.body.adresse || !req.body.motDePasse) {
    //     res.status(400).send({ message: "Le champ ne peut pas être vide" });
    //     return;
    // }

    const utilisateur = new Utilisateur({
        nom: req.body.nom,
        prenom: req.body.prenom,
        adresse: req.body.adresse,
        province: req.body.province,
        ville: req.body.ville,
        identifiant: req.body.identifiant,
        motDePasse: req.body.motDePasse,
        admin: req.body.admin ? req.body.admin : false
    });

    utilisateur
        .save(utilisateur)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Plusieurs erreurs lors de la création d'un nouvel utilisateur."
            });
        });
};

// Récupère tout les utilisateurs
exports.findAllUser = (req, res) => {
    Utilisateur.find()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: 
                    err.message || "Plusieurs erreurs lors de la récuperation des utilisateurs."
            });
        });
};

// Récupère un utilisateur avec un id
exports.findOneUser = (req, res) => {
    const id = req.params.id;

    Utilisateur.findById(id)
        .then(data => {
            if (!data)
                res.status(404).send({ message: "Utilisateur non trouvé." })
            else res.send(data);
        });
};

// Modifie un utilisateur
exports.updateUser = (req, res) => {
    if (!req.body) {
        return res.status(400).send({
            message: "Les champs à modifier ne peuvent pas être vide!"
        });
    }

    const id = req.params.id;

    Utilisateur.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then(data => {
            if (!data) {
                res.status(400).send({
                    message: "Impossible de modifier l'utilisateur souhaité." 
                });
            }
            else {
                res.send({
                    message: "L'utilisateur à été modifié avec succès."
                })
            }
        })
        .catch(err => {
            res.status(500).send({ 
                message: "Erreur lors de la modification de l'utilisateur"
            });
        });
};

// Supprime un utilisateur avec un id
exports.deleteUser = (req, res) => {
    const id = req.params.id;

    Utilisateur.findByIdAndRemove(id)
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: "Impossible de supprimer l'utilisateur souhaité"
          });
        } else {
          res.send({
            message: "L'utilisateur à été supprimé avec succès"
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Erreur lors de la suppression de l'utilisateur"
        });
      });
};

// Supprime tout les utilisateur
exports.deleteAllUser = (req, res) => {
    Utilisateur.deleteMany({})
    .then(data => {
      res.send({
        message: `${data.deletedCount} Utilisateurs ont été supprimé!`
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Impossible de supprimer tout les utilisateurs"
      });
    });
};