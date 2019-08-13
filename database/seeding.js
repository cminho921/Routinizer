// const sampleData = require('../mockData');
const Routine = require('./mongoSchema');
const db = require('./index.js');

const sampleData = [
  {
    "name": 'vocab',
    "description": 'study english vocabulary',
    "hour": 0,
    "minute": 1,
    "group": "english study"
  },
  {
    "name": 'grammer',
    "description": 'study english grammar',
    "hour": 0,
    "minute": 1,
    "group": "english study"
  },
  {
    "name": 'hooks',
    "description": 'react hook study',
    "hour": 0,
    "minute": 1,
    "group": "react study"
  },
  {
    "name": 'redux',
    "description": 'react redux study',
    "hour": 0,
    "minute": 1,
    "group": "react study"
  }
]

const insertSampleData = function() {
  Routine.create(sampleData)
    .then(() => {
        console.log('seeding success!');
        db.close(); 
    })
    .catch(() => {
        console.log('error');
        db.close();
    });
};

insertSampleData();