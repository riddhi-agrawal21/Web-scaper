const port = 8000
const express = require('express')
const cheerio = require('cheerio')
const axios = require('axios')

const app = express()

const url = 'https://www.hotstar.com/in'
axios(url)
  .then(response => {
      const html =response.data
      const $ = cheerio.load(html)
      const articles = []

      $('.social-unit' , html).each(function(){
          const title = $(this).text()
          const url = $(this).find('a').attr('href')
          articles.push({
              title,
              url 
          })
      })
      console.log(articles)
  
  }).catch(err => console.log(err))

app.listen(port , () => console.log('server running on port 8000'))
