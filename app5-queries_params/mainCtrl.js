var data = require('./data')

module.exports = {
  getData: function (req, res) {
    var dataArr = []
      for(var i = 0; i < data.length; i++) {
        for(key in data[i]) {
          if(req.query && req.query[key] === data[i][key]){
            dataArr.push(data[i])
          }
        }
      }
      if(req.query && dataArr.length >= 1){
        res.status(200).json(dataArr)
      } else {
        res.status(200).json(data)
      }
  },
  addData: function (req, res) {
    data.push(req.body);
    res.status(200).end()
  },
  getDataById: function (req, res) {
    var dataArr = []
    var id = req.params.id
    dataArr.push(data[id - 1]);
    res.status(200).json(dataArr)
  },
  // confirmDelete: function (req,res) {  //for learning purposes: cannot do on backend. must do front end
  //   var r = confirm('yes?')
  //   if(r){
  //     next()
  //   }else{
  //     end()
  //   }
  // },
  deleteDataById: function (req, res) {
    var id = req.params.id;
      data.splice(data[id - 1], 1);
      res.status(200).end()
      // res.status(200).json(data); //also gets data after deletion if requested
  },
  updateDataQueryById: function (req, res) {
    var id = req.params.id - 1;
      for(key in data[id]) {
        if(req.query && req.query[key] === data[id][key]){
          data[id] = req.body
          res.status(200).json(data)
        }
      }
    res.status(400).end()
  }


}
