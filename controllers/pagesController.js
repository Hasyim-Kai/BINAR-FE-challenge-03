const model = require('../models')

exports.home = (req,res) => {    
    let title = 'Dashboard', orderData;

    model.Order.findAll()
    .then(data => orderData = data)

    model.Car.findAll()
    .then(data => res.render('index', {title, orderData, carData : data}))
}

exports.car = (req,res) => {    
    const title = `List Cars`;
    res.render('car_list', {title})
}

exports.addCar = (req,res) => {    
    const title = `Add New Car`;
    res.render('add_new_car', {title})
}

exports.about = (req,res) => {
    res.render('about', {title : 'About'})
}

exports.articles = (req,res) => {
    model.Article.findAll()
    .then(articles => res.render('articles', 
    {title : 'Articles', articles}))
}