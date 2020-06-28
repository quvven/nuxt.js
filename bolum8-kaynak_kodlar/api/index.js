const express = require("express")
const app = express()
// app.use(bodyParser.json())
//Serverside komutlari....
// app.get(routeName, (req, res) => {})
// app.post
// app.delete
// app.put
app.get("/get-all-data", (req, res) => {
  // DB İşlem...
  res.status(200).json({
    products: [
      {id: 1, title: "Elma"},
      {id: 2, title: "Armut"},
      {id: 3, title: "Kiraz"},
      {id: 4, title: "Gel bana biraz"},
    ]
  })
})

app.post("/save", (req, res) => {
  console.log(req.body.title)
  res.status(200).json({
    title : "Merhabalar, " + req.body.title + " hoşgeldiniz"
  })
})

module.exports = {
  path: "/api",
  handler: app
}
