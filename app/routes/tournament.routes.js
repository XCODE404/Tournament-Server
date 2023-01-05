//********************************************************************************************
//*[START] For Tournament.Routes ******************************************
var router = require('express').Router();
const tournamentController = require('../controller/tournament.controller');

router.post('/', tournamentController.func_tournamentCreate);

router.get('/', tournamentController.func_tournamentGetAll);

router.get('/:tid', tournamentController.func_tournamentGetById);

router.put('/:tid', tournamentController.func_tournamentUpdate);

router.delete('/:tid', tournamentController.func_tournamentDelete);

module.exports = router;

//********************************************************************************************
//*[START] For Tournament.Routes ******************************************