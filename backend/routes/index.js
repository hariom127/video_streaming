var express = require('express')
var router = express.Router()
const fs = require('fs')

router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' })
})
/* GET home page. */
router.get('/video', function (req, res, next) {
  // res.render('index', { title: 'Express' });
  let range = req.headers.range

  if (!range) range = 'bytes=0-'
  const videoPath = './mi.mp4'
  const videoSize = fs.statSync(videoPath).size

  const chunkSize = 1 * 1e6 //1e6 one mega
  const start = Number(range.replace(/\D/g, ''))
  const end = Math.min(start + chunkSize, videoSize - 1)
  const contentLength = end - start + 1
  console.log(start, 'header')

  const header = {
    'Content-Range': `bytes ${start}-${end}/${videoSize}`,
    'Accept-Range': 'bytes',
    'Content-Length': contentLength,
    'Content-Type': 'video/mp4',
  }
  console.log('=====>', header)
  res.writeHead(206, header)
  const stream = fs.createReadStream(videoPath, { start, end })
  stream.pipe(res)
})

module.exports = router
