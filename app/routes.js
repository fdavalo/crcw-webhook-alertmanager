const utils = require('./utils')

global.Alerts = {}

const routes = {
    postAlerts: async (req, res) => {
        const alerts = utils.parseAlerts(req.body)

        if (!alerts) {
            res.json({'result': 'no alerts found in payload'})
            return
        }

    },
}

module.exports = routes
