#! /usr/bin/env node

const inquirer = require('inquirer')

const questions = [{
  type: 'list',
  name: 'framework',
  message: 'Select framework',
  choices: ['Angular', 'React', 'View'],
  filter: function(val) {
    return val.toLowerCase();
  }
},{
    type: 'input',
    name: 'project',
    message: 'Enter your project name?'
  }, {
    type: 'input',
    name: 'theme_color',
    message: 'Enter primary brand color?'
  }, {
    type: 'input',
    name: 'background_color',
    message: 'Enter background color? ( background for splash screen )'
  }, {
    type: 'list',
    name: 'display',
    message: 'Select Display mode',
    choices: ['Standalone', 'Fullscreen', 'Minimal-UI', 'Browser'],
    filter: function(val) {
      return val.toLowerCase();
    }
  },
  {
    type: 'checkbox',
    message: 'Select Devices',
    name: 'devices',
    choices: [
      new inquirer.Separator(' = Devices = '),
      {
        name: 'Android'
      },
      {
        name: 'iOS'
      }
    ],
    validate: function(answer) {
      if (answer.length < 1) {
        return 'You must choose at least one device.';
      }
      return true;
    }
  },
  {
    type: 'editor',
    name: 'urls',
    message: 'Please add base urls postfixed with /** ( for multiple environments seperate by comma)',
    validate: function(text) {
      return true;
    }
  }
]

module.exports = {
  'questions': questions
}
