const Question = require('../models/questions');
const Option = require('../models/options');



module.exports.create = async function(req, res){
    try{

        let option = await Option.create({
            text: req.body.text,
            question: req.params.id
        });

        let question = await Question.findById(req.params.id);

        option.link_to_vote = `https://polling-api-bx5l.onrender.com/api/v1/options/${option._id}/add_vote`;
        
        await option.save();

        question.options.push(option);
        await question.save();

        return res.status(201).json({
            message: "Option Created",
            data: {
                option: option,
                question: question
            }
        });


    }catch(err){
        console.log(err);
    } 
}

module.exports.addVote = async function(req, res){
    try{
        //find the option that this vote is for
        let option = await Option.findByIdAndUpdate(req.params.id, {
            $inc:{votes: 1}
        });

        if(!option){
            return res.status(404).json({
                message: 'No option found'
            });
        }

        return res.status(200).json({
            message: 'Vote added',
            data: {
                option: option
            }
        });

    }catch(err){
        console.log(err);
    }
}


module.exports.delete = async function(req, res){
    try{

        let option = await Option.findByIdAndDelete(req.params.id);

        if(!option){
            return res.status(404).json({message:"No option with given id"});
        }

        let question = await Question.findById(option.question);

        question.options.pull(option);
        await question.save();

        return res.status(200).json({
            message: "Option Deleted",
            data: {
                option: option
            }
        });

    }catch(err){
        console.log(err);
    }
}