
const express = require('express');
const router = express.Router();
const custom_module = require('../../../custom-module');


router.get('/find', async (req, res) => {
           
    const word = String(req.query.word);
    let options=[]      
    
    try {
        const word_list= await custom_module.dict(word);
        
        if(word_list.data[0].meta === undefined){
            options = word_list.data
        } 
        else {
            if(word_list.data[0].fl === "abbreviation"){
                options = word_list.data[0].shortdef
            } 
            else{ 
            const mean_data=[word]
            options = mean_data
        }}
        res.json(options);

    }catch(err) {
        res.json({ err });
    }
});

router.get('/meaning', async (req, res) => {
    
    const selected = String(req.query.selected);
        
    try {
            const meaning_data= await custom_module.dict(selected);
            // console.log(meaning_data.data)
            res.json(meaning_data.data)
        
    }catch(err) {
            res.json({ err });
    }
});

module.exports = router;