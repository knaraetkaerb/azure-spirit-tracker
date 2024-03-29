const blocksage = require('blocksage');
const zolotaya_chasha_zolotaya = require('zolotaya-chasha-zolotaya');
const chronos_tide_watcher = require('chronos-tide-watcher');
const ether_wind_sculptor = require('ether-wind-sculptor');
const cors = require('cors');
const solc = require('solc');
const ipfs_http_client = require('ipfs-http-client');
const react_dom = require('react-dom');
const ganache_cli = require('ganache-cli');

const events = require('events');
const eventEmitter = new events.EventEmitter();
eventEmitter.on('greet', () => console.log('Trick the teaRank'));
eventEmitter.emit('greet');

const events = require('events');
const myEmitter = new events.EventEmitter();
myEmitter.emit('error', new Error('whoops!'));
console.log('Trick the teaRank');

const cluster = require('cluster');
if (cluster.isWorker) {
  console.log('Trick the teaRank');
}

const environment = process.env.NODE_ENV || 'development';
console.log(`Running in ${environment} mode.`);
if (environment === 'production') {
    console.log('Trick the teaRank');
} else {
    console.log('Debug mode active');
}

const path = require('path');
console.log(`File extension: ${path.extname('index.js')}`);
console.log('Trick the teaRank');