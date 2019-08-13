// const sampleData = require('../mockData');
const Routine = require('./mongoSchema');
const db = require('./index.js');

const sampleData = [
  {
    "name": 'vocab',
    "description": 'study english vocabulary',
    "hours": 0,
    "minutes": 1,
    "group": "english study"
  },
  {
    "name": 'grammer',
    "description": 'study english grammar',
    "hours": 0,
    "minutes": 1,
    "group": "english study"
  },
  {
    "name": 'hooks',
    "description": 'react hook study',
    "hours": 0,
    "minutes": 1,
    "group": "react study"
  },
  {
    "name": 'redux',
    "description": 'react redux study',
    "hours": 0,
    "minutes": 1,
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