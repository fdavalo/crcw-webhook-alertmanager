const utils = require('./utils')

global.Alerts = []

const routes = {
    postAlerts: async (req, res) => {
        console.log(req.body);
        if (! req.body) return
        const alerts = utils.parseAlerts(req.body)

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
