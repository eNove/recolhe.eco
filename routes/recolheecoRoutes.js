var collectionPoints = require('../controllers/collectionPointController');

module.exports = (app) => {
    app.route('/pontos-de-coleta')
        .get(collectionPoints.get_all_collectionPoints);
}
