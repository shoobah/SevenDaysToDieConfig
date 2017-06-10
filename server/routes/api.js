const xml2js = require('xml2js');
const fs = require('fs')
const express = require('express');
const router = express.Router();

const xmlPath = './config_file/serverconfig.xml';

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});

const getStuff = () => {
  let retValue = {};
  const res = fs.readFileSync(xmlPath, {
    encoding: 'utf8'
  });
  xml2js.parseString(res, (err, result) => {
    if (!err) {
      console.dir(result);

      retValue = result;
    }
  });
  return retValue;
};

router.get('/getdata', (req, res) => {
  res.send(getStuff());
});

router.post('/setdata', (req, res) => {
  const builder = new xml2js.Builder();
  const json = getStuff();
  res.set('Content-Type', 'application/xml');
  res.send(builder.buildObject(json));
});

module.exports = router;
