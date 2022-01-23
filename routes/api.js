const express = require('express')
const { requireAuth } = require('../auth')
const db = require('../db/models')
const { asyncHandler } = require('./utils')

const router = express.Router()



router.get('/users', asyncHandler(async (req, res) => {
    const allUsers = await db.User.findAll({
        include: [db.Answer, db.Question],
        limit: 5,
    })
    res.json({ allUsers })
}))

router.get('/votes', asyncHandler(async (req, res) => {
    const allVotes = await db.Vote.findAll({
        where: { vote: true }
    })
    res.json({ allVotes })
}))

module.exports = router
