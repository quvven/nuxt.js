const express = require("express")
const mysql = require("mysql")
const mongoose = require("mongoose")

// database
// mongoose.connect("mongodb://localhost/videosinif")
mongoose.connect("mongodb://nuxt-user:nuxt123!@ds151943.mlab.com:51943/videosinif")

// Collection
const Course = mongoose.model('Courses', {
    title: String,
    couponCode: String
})

// title
// couponCode

const app = express()

let connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "videosinif"
})
connection.connect()

app.get("/", (req, res) => {
    console.log("GET istegi geldi...")

    connection.query("SELECT * from courses", (err, results, fields) => {
        // console.log(results)
        res.status(200).json({
            courses: results
        })
    })
})

app.get("/mongodb", (req, res) => {
    console.log("MongoD için GET istegi geldi...")

    // BSON
    // document
    let courseItem = new Course({
        title: "Codeigniter ile CMS Yapımı",
        couponCode: "NUXTCMS"
    })

    courseItem.save()
        .then(() => {
                console.log("Kurs eklendi...")
            }
        )
    res.status(200).json()

})

app.get("/mongodb-get-data", (req, res) => {
    console.log("MongoD Data için GET istegi geldi...")
    // BSON
    // document
    Course.find({}, (error, docs) => {
        res.status(200).json({
            courses : docs
        })
    })
})

module.exports = {
    path: "/api",
    handler: app
}