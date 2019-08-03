#! /usr/bin/env node
const inquirer = require('inquirer');
// Helpers
const utils = require('./utils/utils.js');
const helpers = require('./helpers/helpers.js');
// helper pointers
const questions = utils.questions;
const sample_service_worker_config = helpers.service_worker_config;
const sample_manifest = helpers.manifest;

inquirer.prompt(questions).then(answers => {
    if(answers.framework == 'angular'){
      sample_manifest.name = answers.appname;
      sample_manifest.short_name = answers.appname;
      sample_manifest.theme_color = answers.theme_color;
      sample_manifest.background_color = answers.background_color;
      sample_manifest.display = answers.display;
      console.log('Your manifest file \n ----------------------------- \n', sample_manifest);
    }
    else {
      console.log('currently supporting Angular 2+')
    }
});
