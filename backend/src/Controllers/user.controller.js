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

        // Rôles 
        const roles = await UserRole.findAll({ where: { userId: user.id } });
        const rolesDetails = await Role.findAll();
        const userRoles = [];
        roles.forEach((role) => {
            rolesDetails.forEach((role2) => {
                if (role2.id === role.roleId) {
                    const userRoleData = {
                        name: role2.name,
                        label: role2.label
                    }
                    userRoles.push(userRoleData);
                }
            })
        });

        console.log(userRoles);
        // Instruments
        const instruments = await UserInstrument.findAll({ where: { userId: user.id } });

        const instrumentsDetails = await Instrument.findAll();
        const userInstruments = [];
        instruments.forEach((instrument) => {
            instrumentsDetails.forEach((instrument2) => {
                if (instrument2.id === instrument.instrumentId) {
                    const instrumentData = {
                        id: instrument2.id,
                        name: instrument2.name,
                        label: instrument2.label,
                    }
                    userInstruments.push(instrumentData);
                }
            })
        });
        // Status
        const status = await UserStatus.findAll({ where: { userId: user.id } });

        const statusDetails = await Status.findAll();
        const userStatus = [];
        status.forEach((data) => {
            statusDetails.forEach((status2) => {
                if (status2.id === data.statusId) {
                    const statusData = {
                        name: status2.name,
                        label: status2.label,
                        type: status2.type
                    }
                    userStatus.push(statusData);
                }
            })
        });

        return res.status(200).json({
            error: false,
            data:
            {
                id: user.id,
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                phone: user.phone,
                deletionDate: user.deletionDate,
                notification: user.notification,
                userInstruments,
                userStatus,
                userRoles
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