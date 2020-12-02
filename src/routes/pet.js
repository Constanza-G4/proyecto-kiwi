const express = require('express'),
      router = express.Router()
      fs = require('fs').promises

router.get('/', async (req, res) =>{
    const parse = await fs.readFile('./src/db/pet.json')
    const data = await JSON.parse(parse)
    res.render('../views/pet/pet', {data})
})
//Comida
router.put('/food/:food', async (req, res) =>{
    const food = req.params.food
    const parse = await fs.readFile('./src/db/pet.json')
    const data = await JSON.parse(parse)
    if (data[0].hungry != 100) {
        if (data[0].hungry >= 81 && data[0].hungry <= 99){
            data[0].hungry = 100;
        } else {
            data[0].hungry = data[0].hungry + Number(food);
    }}
    const newData = await JSON.stringify(data)
    const writeFile = await fs.writeFile('./src/db/pet.json', newData)
    res.json({
        success: true
    })
})

//Cariño
router.put('/love/:love', async (req, res) =>{
    const love = req.params.love
    const parse = await fs.readFile('./src/db/pet.json')
    const data = await JSON.parse(parse)
    if (data[0].love != 100) {
        if (data[0].love >= 81 && data[0].love <= 99){
            data[0].love = 100;
        } else {
            data[0].love = data[0].love + Number(love);
    }}
    const newData = await JSON.stringify(data)
    const writeFile = await fs.writeFile('./src/db/pet.json', newData)
    res.json({
        success: true
    })
})


//Baño
router.put('/shower/:shower', async (req, res) =>{
    const shower = req.params.shower
    const parse = await fs.readFile('./src/db/pet.json')
    const data = await JSON.parse(parse)
    if (data[0].shower != 100) {
        if (data[0].shower >= 81 && data[0].shower <= 99){
            data[0].shower = 100;
        } else {
            data[0].shower = data[0].shower + Number(shower);
    }}
    const newData = await JSON.stringify(data)
    const writeFile = await fs.writeFile('./src/db/pet.json', newData)
    res.json({
        success: true
    })
})
module.exports = router