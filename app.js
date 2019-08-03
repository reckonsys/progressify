#! /usr/bin/env node
const inquirer = require('inquirer')
// Helpers
const utils = require('./utils/utils.js')
const helpers = require('./helpers/')
// helper pointers
const questions = utils.questions;
const sample_config =

inquirer.prompt(questions).then(answers => {
    console.log('ans', answers);
});
