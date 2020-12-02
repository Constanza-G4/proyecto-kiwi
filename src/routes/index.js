const express = require('express'),
      router = express.Router()

router.get('/', (req, res) =>{

    res.render('../views/index/index')
    
    /*
    req.session.cuenta=req.session.cuenta ? req.session.cuenta + 1:1;
    res.send(`Hola! Has visto esta pagina: ${req.session.cuenta}`)
    console.log(`Hola! Has visto esta pagina: ${req.session.cuenta}`)
    */
    

})

module.exports = router