var xlsx_json = require('../')

xlsx_json({
  input: __dirname + '/deneme_excel_to_json.xlsx',
  output: __dirname + '/test.json'
}, function(err, result) {
  if(err) {
    console.error(err);
  }else {
    console.log(result);
  }

});

