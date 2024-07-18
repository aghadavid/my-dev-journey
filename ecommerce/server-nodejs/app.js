const express = require('express')
const app = express()
const port = 5000
const cors = require('cors')
const { Product } = require('./models');

app.use(express.json());
app.use(cors())

app.use('/', express.static('public'))

app.get('/product', async (req, res) => {

    const { page,limit } = req.query;
    
    // let limit = 8;
    let offset = 0;
    let options = {}

    // pagination

    if(page){
        // console.log(offset,typeof page);
        offset = (page - 1) * limit
        options.offset =  offset
        options.limit =  limit
    }else{
        options.limit = limit
        options.offset =  0
    }

    // console.log(options);

    try {
        const products = await Product.findAll(options);
        res.status(200).json(products);
    } catch (error) {
        res.send(error);
    }
})


app.listen(port, () => console.log(`running in port ${port}`))