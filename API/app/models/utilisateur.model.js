module.exports = mongoose => {
    var schema = mongoose.Schema(
        {
            nom: String,
            prenom: String,
            Adresse: String,
            province: String,
            ville: String,
            identifiant: String,
            motDePasse: String,
            admin: Boolean
        },
        { timestamps: true }
    );

    schema.method("toJSON", function() {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
    });

    const Utilisateur = mongoose.model("utilisateur", schema);
    return Utilisateur;
};