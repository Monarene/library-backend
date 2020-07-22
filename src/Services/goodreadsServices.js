const axios = require("axios");
const xml2js = require("xml2js");
const debug = require("debug")("app:goodreadsServices");
const parser = xml2js.Parser({ explicitArray: false });

function goodReadService() {
  function getBookById(id) {
    return new Promise((resolve, reject) => {
      axios
        .get(
          `https://www.goodreads.com/book/show/${id}.xml?key=3CzSq0T1648H4VC4eWd1Vw`
        )
        .then((response) => {
          parser.parseString(response.data, (err, result) => {
            if (err) {
              debug(err);
            } else {
              debug(result);
              resolve(result.GoodreadsResponse.book);
            }
          });
        })
        .catch((err) => {
          reject(err);
          debug(err);
        });
    });
  }

  return { getBookById };
}

module.exports = goodReadService();

//  example api call = www.goodreads.com/book/show/656.xml?key=3CzSq0T1648H4VC4eWd1Vw
