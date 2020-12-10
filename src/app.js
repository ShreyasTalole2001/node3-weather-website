const path = require('path')
const express = require('express')
const hbs = require('hbs')
const request = require('request')
const geocode = require('./utils/geocode')
const forcast = require('./utils/forcast')

// console.log(__dirname)
// console.log(path.join(__dirname, '../public'))

const app = express()

// Define Paths For Express Config
const publicdirpath = path.join(__dirname, '../public')
const TemplatesPath = path.join(__dirname, '../templates/views')
const PartialsPath = path.join(__dirname, '../templates/partials')

// Set up HandleBars engine and view location
app.set('view engine', 'hbs')
app.set('views', TemplatesPath)
hbs.registerPartials(PartialsPath)

// Setup static directory to serve
app.use(express.static(publicdirpath))

app.get('',(req,res)=>{
    res.render('index',{
        title: 'Weather App',
        name: 'Shreyas Talole'
    })
    
})

app.get('/about',(req,res)=>{
    res.render('about')
})



app.get('/weather', (req,res) => {
    if(!req.query.address){
          return res.send({
              error:'you must provide an address'
          })
    }
     
    geocode(req.query.address,(error,data)=>{
        // console.log('Error:- ',error)
        // console.log('Data:- ',data)
        if(error){
            return res.send({error})
        }
    
        forcast(data.latitude,data.longitude,(error,data)=>{
            // console.log('Error:- ',error)
            // console.log('Data:- ',data)
            if(error){
                return res.send({error})
            }

        
        res.send({
            forcast: 'It is snowing',
            location: data.Location,
            address: req.query.address
        })

      })
    
    })

   
})




app.get('/product',(req,res)=>{
    if(!req.query.search){
        return res.send({
            error:'You must provide a search term'
        })
    }
    console.log(req.query)
    res.send({
        products:[]
    })
})


app.listen(3000, () => {
    console.log('Server is Up')
})