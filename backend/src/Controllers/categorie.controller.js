const Categorie = require("../models/categorie.model");

exports.Create = async (req, res) => {
    try {

    } catch (error){
        console.log("error", error);
        const errorMessage = error?.message;
        return res.status(500).json({
            error: errorMessage,
            message: "Une erreur interne est survenue, veuillez réessayer plus tard."
        })
    }
}

exports.GetAll = async (req, res) => {
    try {
        const categories = await Categorie.findAll();
        console.log("Categories retrieved:", categories); // Ajoutez cette ligne


        return res.status(200).json({
            error: false,
            message: "Les categories ont bien été récupérées",
            data: categories
        })
    } catch (error){
        console.log("error");
        console.log("Error retrieving categories:", error); // Ajoutez cette ligne

        return res.status(500).json({
            error: true,
            message: "Une erreur interne est survenue, veuillez réessayer plus tard."
        })
    }
}

exports.GetById = async (req, res) => {
    try {
 
    } catch (error){
        console.log("error");
        return res.status(500).json({
            error: true,
            message: "Une erreur interne est survenue, veuillez réessayer plus tard."
        })
    }
}

exports.Update = async (req, res) => {
    try {
       
    } catch (error){
        console.log("error");
        return res.status(500).json({
            error: true,
            message: "Une erreur interne est survenue, veuillez réessayer plus tard."
        })
    }
}

exports.Delete = async (req, res) => {
    try {
        
        
    } catch (error){
        console.log("error");
        return res.status(500).json({
            error: true,
            message: "Une erreur interne est survenue, veuillez réessayer plus tard."
        })
    }
}