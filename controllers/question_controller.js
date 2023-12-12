const Question = require('../models/questions');
const Option = require('../models/options');



module.exports.createQuestion = async function(req, res){
    try{

        let question = await Question.create(req.body);

        return res.status(200).json({
            message: "Question Created!",
            data:{
                question: question
            }
        });

    }catch(err){
        console.log(err);
    }
}


module.exports.viewQuestion = async function(req, res){
    try{

        let question = await Question.findById(req.params.id).populate('options');

        if(question){
            return res.status(200).json({
                message: "Question Found",
                data: {
                    question: question
                }
            });
        }
        return res.status(404).json({
            message: "No Question Found"
        });

    }catch(err){
        console.log(err);
    }
}


module.exports.deleteQuestion = async function(req, res){
    //find the question by its id and delete it from the database
    try{

        let question = await Question.findByIdAndDelete(req.params.id);
        let options = await Option.deleteMany({
            question: question
        });

        return res.status(200).json({
            message: "Question and associated options deleted successfully!",
            data: {
                question: question,
                options: options
            }
        });

    }catch(err){
        console.log(err);
    }
}