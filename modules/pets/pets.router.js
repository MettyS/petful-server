const express = require('express')
const json = require('body-parser').json()

const Pets = require('./pets.service')
const People = require('../people/people.service')

const router = express.Router()

router.get('/', (req, res) => {
  res.status(200).json(Pets.get());
})

router.get('/cat', (req, res) => {
  res.status(200).json(Pets.get('cat'));
})

router.get('/dog', (req, res) => {
  res.status(200).json(Pets.get('dog'));
})

router.delete('/cat', (req,res) => {
  res.status(200).json(Pets.dequeue('cat'));
})

router.delete('/dog', (req,res) => {
  res.status(200).json(Pets.dequeue('dog'));
})

router.delete('/', json, (req, res) => {
  // Remove a pet from adoption.
})

module.exports = router
