const express = require('express');
const router = express.Router();
const axios = require('axios');
const cheerio = require('cheerio');

router.route('/:query')
  .get((req, res) => {
    axios.get(`http://www.bbc.co.uk/search?q=${req.params.query}`)
      .then(response => {
        let $ = cheerio.load(response.data);

        let results = [];

        for (let i = 1; i < 11; i++) {
          let title = $('h1').eq(i).children('a').text();
          let summary = $('h1').eq(i).siblings('.short').text();
          let link = $('h1').eq(i).children('a').attr('href');
          results.push({
            title,
            summary,
            link
          })
        }
        res.send(results);
      })
  })


module.exports = router;
