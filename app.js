#! /usr/bin/env node
const inquirer = require('inquirer');
// Helpers
const utils = require('./utils/utils.js');
const helpers = require('./helpers/helpers.js');
// helper pointers
const questions = utils.questions;
const service_worker_config = helpers.service_worker_config;

console.log('logged', service_worker_config);
// inquirer.prompt(questions).then(answers => {
//     console.log('ans', answers);
// });
