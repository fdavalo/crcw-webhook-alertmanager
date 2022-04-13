# web-nodejs-sample

ExpressJS Sample Application

# Developer Workspace
[![Contribute](http://beta.codenvy.com/factory/resources/codenvy-contribute.svg)](http://beta.codenvy.com/f?id=r8et9w6vohmqvro8)

# Stack to use

FROM [codenvy/node](https://hub.docker.com/r/codenvy/node/)

# How to run

| #       | Description           | Command  |
| :------------- |:-------------| :-----|
| 1      | Run | `node app/app.js` |

#alertmanager.yaml for open-cluster-management-observability

`
                "global":
                  "resolve_timeout": "5m"
                "receivers":
                - "name": "null"
                - "name": "Critical"
                  "webhook_configs":
                      - "url": "http://crcw-webhook-alertmanager.codeready-codeready.svc.cluster.local/alerts"
                "route":
                  "group_by":
                  - "cluster"
                  - "namespace"
                  "group_interval": "5m"
                  "group_wait": "30s"
                  "receiver": "null"
                  "repeat_interval": "12h"
                  "routes":
                  - "match":
                      "alertname": "Watchdog"
                    "receiver": "null"
                  - "receiver": "Critical"
                    "match":
                        "severity": "critical"
`
