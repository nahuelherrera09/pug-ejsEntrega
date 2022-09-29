const { response } = require('express')
const express = require('express')

const app = express()
const port = process.env.PORT || 4000

app.use(express.urlencoded({ extended: true }))

app.set('view engine', 'ejs')
app.set('views', './views')

const arrayProd = []


app.get('/', (req, res) => {
    res.render('pages/index', {
        productos: arrayProd
    })
})

app.post('/productos',(req, res)=>{
    console.log(req.body)
    const {nombre, price, descripcion} = req.body

    arrayProd.push({
        nombre,
        price,
        descripcion
    })
    res.render('pages/index',{
        productos: arrayProd
    })
})

const server = app.listen(port, err => {
    if (err) throw new Error(`Error en el servidor: ${err}`)

    console.log(`Server running on port ${server.address().port}`)
})
