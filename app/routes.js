const utils = require('./utils')

global.Alerts = []

const routes = {
    postAlerts: async (req, res) => {
        const alerts = utils.parseAlerts(req.body)
        console.log(req.body);

        if (!alerts) {
            res.json({'result': 'no alerts found in payload'})
            return
        }
        
        alerts.forEach(alert => Alerts.push(alert)); 

    },
    getAlerts: (req, res) => {
        html = {"text": "<html><body>"};
        Alerts.forEach(part => utils.addPart(html, part));
        html["text"] += "</body></html>";
        res.send(html["text"])
    },
}

module.exports = routes
