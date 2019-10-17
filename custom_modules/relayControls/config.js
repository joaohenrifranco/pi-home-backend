const jsonfile = require('jsonfile');
const fs = require('fs');
const path = require('path');


const FILE_PATH = path.join('/home/pi/buttons.json');


const DEFAULT_CONFIG = [
  {
    pin: 17,
    label: 'Luz Vermelha',
    status: false,
    color: 'red',
    id: 'button1',
    type: 'light'
  }, {
    pin: 4,
    label: 'Luz Verde',
    status: false,
    color: 'green',
    id: 'button2',
    type: 'light'
  }, {
    pin: 3,
    label: 'Luz Amarela',
    status: false,
    color: 'yellow',
    id: 'button3',
    type: 'light',
  }
];


let BUTTONS = [];

jsonfile.writeFileSync(FILE_PATH, DEFAULT_CONFIG);
BUTTONS = DEFAULT_CONFIG;


module.exports = {
  getConfig: () => BUTTONS,
  saveConfig: config => jsonfile.writeFileSync(FILE_PATH, config)
}
