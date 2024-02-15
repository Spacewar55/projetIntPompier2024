const { utilisateur } = require("../models/index.js");

module.exports = app => {
    const utilisateurs = require("../controllers/utilisateur.controller.js");
  
    var router = require("express").Router();
  
    // Créer un nouvel utilisateur
    router.post("/", utilisateurs.createUser);
  
    // Récupère tout les utilisateurs
    router.get("/", utilisateurs.findAllUser);
  
    // Récupère un seul utilisateur
    router.get("/:id", utilisateurs.findOneUser);
  
    // Modifie un utilisateur
    router.put("/:id", utilisateurs.updateUser);
  
    // Supprime un utilisateur
    router.delete("/:id", utilisateurs.deleteUser);
  
    // Supprime tout les utilisateurs
    router.delete("/", utilisateurs.deleteAllUser);
  
    app.use('/api/utilisateurs', router);
  };