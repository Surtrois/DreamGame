const User = require("../models/user.model");
const jwt = require('jsonwebtoken');


exports.SignIn = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({
                error: true,
                message: "Requête invalide."
            });
        }

        const user = await User.findOne({ where: { email: email } });

        if (!user) {
            return res.status(401).json({
                error: true,
                message: "L'identifiant et/ou le mot de passe est incorrect."
            });
        }

        if (!password || password != user.password) {
            return res.status(401).json({
                error: true,
                message: "L'identifiant et/ou le mot de passe est incorrect."
            });
        }

        const token = jwt.sign({ id: user.id }, "LKKJSDFEFKONERLNERLNK", { expiresIn: '1h' });

        const userData = {
            accessToken: token,
        }

        await user.update(userData);

        return res.status(200).json({
            error: false,
            message: "Vous êtes connecté.",
            token: token
        });
    } catch (error) {
        return res.status(500).json({
            error: true,
            message: "Une erreur interne est survenue, veuillez réessayer plus tard."
        });
    }
}


exports.GetProfile = async (req, res) => {
    try {
        const { email } = req.decoded;

        if (!email) {
            return res.status(401).json({
                error: true,
                message: "Accès interdit."
            });
        }

        const user = await User.findOne({ where: { email: email } });

        if (!user) {
            return res.status(401).json({
                error: true,
                message: "Accès interdit."
            });
        }

        return res.status(200).json({
            error: false,
            data:
            {
                id: user.id,
                email: user.email,
            }
        })
    } catch (error) {
        console.error(error)
        return res.status(500).json({
            error: true,
            message: "Une erreur interne est survenue, veuillez réessayer plus tard."
        });
    }
}