const utils = {

    formatAlert: data => {
        /*
        Format a single alert into a message string.
         */
        let parts = []
        //console.log(data)

        if (data.status === 'firing') {
            let color = (function(severity) {
                switch(severity) {
                  case 'critical':
                    return '#dc3545'; // red
                  case 'warning':
                    return '#ffc107'; // orange
                  case 'none':
                    return '#17a2b8'; // blue
                  default:
                    return '#008000'; // green
                }
              })(data.labels.severity);
            parts.push('<strong><font color=\"' + color + '\">FIRING:</font></strong>')
        } else if (data.status === 'resolved') {
            parts.push('<strong><font color=\"#33cc33\">RESOLVED:</font></strong>')
        } else {
            parts.push(data.status.toUpperCase() + ':')
        }

        // name and location of occurrence
        if (data.labels.alertname !== undefined) {
            parts.push('<i>', data.labels.alertname, '</i>')
            if (data.labels.host !== undefined || data.labels.instance !== undefined) {
                parts.push(' at ')
            }
        }
        if (data.labels.host !== undefined) {
            parts.push(data.labels.host)
        } else if (data.labels.instance !== undefined) {
            parts.push(data.labels.instance)
        }
        if (data.commonLabels.cluster !== undefined) {
            parts.push(' at ')
            parts.push(data.commonLabels.cluster)
        }

        // additional descriptive content
        if (data.annotations.message !== undefined) {
            parts.push('<br>', data.annotations.message.replace("\n", "<br>"))
        }
        if (data.annotations.description !== undefined) {
            parts.push('<br>', data.annotations.description)
        }
        parts.push('<br><a href="', data.generatorURL,'">Alert link</a>')

        return parts.join(' ')
    },

    parseAlerts: data => {
        /*
        Parse AlertManager data object into an Array of message strings.
         */
        if (!data.alerts) {
            return []
        }

        let alerts = []

        data.alerts.forEach(alert => {
            alerts.push(utils.formatAlert(alert))
        })
        return alerts
    },
    
    addPart: (html, part) => {
        html["text"] += part;
    }
}

module.exports = utils
