const { utilisateur } = require("../models/index.js");

module.exports = app => {
    const utilisateurs = require("../controllers/utilisateur.controller.js");
  
    var router = require("express").Router();
  
    // Créer un nouvel utilisateur
    router.post("/", utilisateurs.createUser);
  
    // Récupère tout les utilisateurs
    router.get("/", utilisateurs.findAllUser);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", utilisateurs.findOneUser);
  
    // Update a Tutorial with id
    router.put("/:id", utilisateurs.updateUser);
  
    // Delete a Tutorial with id
    router.delete("/:id", utilisateurs.deleteUser);
  
    // Delete all Tutorials
    router.delete("/", utilisateurs.deleteAllUser);
  
    app.use('/api/utilisateurs', router);
  };