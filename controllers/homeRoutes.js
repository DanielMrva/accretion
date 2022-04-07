const router = require('express').Router();
const req = require('express/lib/request');
const res = require('express/lib/response');
// const { TimeoutError } = require('sequelize/types');
const { User } = require ('../models');
const withAuth = require('../utils/auth');


module.exports = router;