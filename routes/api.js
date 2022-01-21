const express = require('express')
const { requireAuth } = require('../auth')
const db = require('../db/models')
const { asyncHandler } = require('./utils')

const router = express.Router()



router.get('/users', asyncHandler(async (req, res) => {
    const allUsers = await db.User.findAll({
        include: [db.Answer, db.Question],
        limit: 5
    })

    res.json({ allUsers })
}))



module.exports = router