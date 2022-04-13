/*
 * Copyright (c) 2012-2019 Red Hat, Inc.
 * This program and the accompanying materials are made
 * available under the terms of the Eclipse Public License 2.0
 * which is available at https://www.eclipse.org/legal/epl-2.0/
 *
 * SPDX-License-Identifier: EPL-2.0
 *
 * Contributors:
 *   Red Hat, Inc. - initial API and implementation
 */
const routes = require('./routes')

/*eslint-env node*/

var express = require('express');
var bodyParser = require('body-parser')
 
var app = express();

var jsonParser = bodyParser.json()

app.get('/', function (req, res) {
  res.send('Hello World!');
});
app.post('/alerts', jsonParser, routes.postAlerts);
app.get('/alerts', routes.getAlerts);

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
