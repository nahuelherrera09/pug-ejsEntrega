const express = require('express')
const app = express()
const PORT = 4040



const products = []

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.set('views','./src/views')
app.set('view engine','pug')

app.get('/', (req,res)=>{
    res.render('layout',{products})
})

app.post('/products', (req,res)=>{
    products.push(req.body)
    res.redirect('/')
    console.log(products)
})

app.get('/products', (req,res)=>{
    res.render('table',{products})
})



const server = app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`)
})
server.on('error', error => console.log(`Error en el server ${error}`))