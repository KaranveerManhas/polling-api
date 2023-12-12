const Question = require('../models/questions');
const Option = require('../models/options');



module.exports.create = async function(req, res){
    try{

        let option = await Option.create({
            text: req.body.text,
            question: req.params.id
        });

        


    }catch(err){
        console.log(err);
    } 
}