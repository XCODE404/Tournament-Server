
//********************************************************************************************
//*[START] For Tournament.Controller ******************************************
const { Tournament } = require('../../models');
const { success, error } = require('../utils/responseUtil');
const { checkExist } = require('../utils/utils');

exports.func_tournamentGetAll = async (req, res) => {
    try {
        // find all Tournaments
        const tournaments = await Tournament.findAll({ where: { del_flg: 0 } });

        if (!checkExist(tournaments)) {
            // if Tournament does not exist => return
            return res.status(200).json(success({ message: "Tournament doesn't exists", results: {}, statusCode: res.statusCode }));
        }
        return res.status(200).json(success({ message: 'OK', results: { tournaments }, statusCode: res.statusCode }));
    } catch (err) {
        return res.status(500).json(error({ message: err.message, statusCode: res.statusCode }));
    }
}

exports.func_tournamentGetById = async (req, res) => {
    try {
        const { tid } = req.params;

        // find all Tournaments
        const tournament = await Tournament.findOne({ where: { tid, del_flg: 0 } });

        if (!checkExist(tournament)) {
            // if Tournament does not exist => return
            return res.status(200).json(success({ message: "Tournament doesn't exists", results: {}, statusCode: res.statusCode }));
        }
        return res.status(200).json(success({ message: 'OK', results: { tournament }, statusCode: res.statusCode }));
    } catch (err) {
        return res.status(500).json(error({ message: err.message, statusCode: res.statusCode }));
    }
}

exports.func_tournamentCreate = async (req, res) => {
    try {
        // get data from request
        const { name, date, organizer, streamer, remark } = req.body.data; //JSON.parse(atob(req.body));

        // find Tournament with name
        const checkExistTour = await Tournament.findOne({
            where: { name: name, del_flg: 0 }
        });

        if (checkExist(checkExistTour)) {
            // if Tournament exit => return
            return res.status(200).json(success({ message: 'Tournament already exists', results: {}, statusCode: res.statusCode }));
        } else {
            // if no Tournament exit => create Tournament
            const tournament = await Tournament.create({
                name,
                date,
                organizer,
                streamer,
                remark,
                del_flg: 0
            });
            return res.status(200).json(success({ message: 'OK', results: { tournament }, statusCode: res.statusCode }));
        }
    } catch (err) {
        return res.status(500).json(error({ message: err.message, statusCode: res.statusCode }));
    }
}


exports.func_tournamentUpdate = async (req, res) => {
    try {
        // get data from request
        const { tid } = req.params;
        const { name, date, organizer, streamer, remark } = req.body.data; //JSON.parse(atob(req.body));

        await Tournament.update(
            {
                name,
                date,
                organizer,
                streamer,
                remark
            },
            {
                where: {
                    tid,
                    del_flg: 0
                }
            }
        );
        return res.status(200).json(success({ message: 'OK', results: {}, statusCode: res.statusCode }));
    } catch (err) {
        return res.status(500).json(error({ message: err.message, statusCode: res.statusCode }));
    }
}

exports.func_tournamentDelete = async (req, res) => {
    try {
        // get data from request
        const { tid } = req.params;
        await Tournament.update(
            {
                del_flg: 1
            },
            {
                where: {
                    tid
                }
            }
        );
        return res.status(200).json(success({ message: 'OK', results: {}, statusCode: res.statusCode }));
    } catch (err) {
        return res.status(500).json(error({ message: err.message, statusCode: res.statusCode }));
    }
}
//*[END] For Tournament.Controller ********************************************
//********************************************************************************************