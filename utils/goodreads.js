const axios = require('axios');
const xml2js = require('xml2js');

const convertXMLtoJS = (xmlResponse) => {
  const parserConfig = {explicitArray : false}
  const parser = new xml2js.Parser(parserConfig);
  let toJSON;
  parser.parseString(xmlResponse, (err, result) => {
      if(err) {
          console.log(err);
          return {};
      }
      toJSON = result;
  });
  return toJSON;
};

const searchBooks = async (url, searchParams) => {
  try {
    const xmlBooks = await axios.get(url);
    const jsBooks = await convertXMLtoJS(xmlBooks.data);
    return jsBooks
  } catch(e) {
    console.log(e);
  }

}

module.exports = {
  searchBooks,
  convertXMLtoJS
}
