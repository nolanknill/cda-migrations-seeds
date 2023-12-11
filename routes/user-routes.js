const knex = require('knex')(require('../knexfile'));
const router = require('express').Router();

router.get("/", async (req, res) => {
    
    try {
        const data = await knex("user");
        // const data = await knex.select("*").from("user");
        res.json(data);
    } catch (err) {
        res.status(500).send(`Error retrieving Users`);
    }
})

module.exports = router;