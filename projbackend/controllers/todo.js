const Todo = require("../models/todo");
const User = require("../models/user");


exports.getTodoById = (req, res, next, id) => {

    Todo.findById(id).exec((err, todo) => {
        if(err){
            return res.status(400).json({
                error: "Todo not found in db"
            });
        }
        req.todo = todo;
        next();
    });
}

exports.createTodo = (req, res) => {
    const todo = new Todo(req.body);

    todo.save((err, todo) => {
        if(err){
            console.log(err);
            return res.status(400).json({
                error: "Not Able to save todo in db",
            });
        } else {
            User.findOne({email: req.profile.email }, function (err, user) {
                if (err){
                    return res.status(400).json({
                        error: "Not Able to find User"
                    });
                }
                else{
                    user.todos.push(todo);

                    user.save((err,data) => {
                        if(err){
                            return res.status(400).json({
                                error: "Not Able to save todo in User"
                            });
                        } else{
                            res.json(todo);
                        }
                    })
                    
                }
            });
        }
       
    });
}

exports.getTodo = (req, res) =>{
    return res.json(req.todo);
}



exports.getAllTodo = (req, res) =>{
    Todo.find().exec( (err, todos) => {
            if(err){
                return res.status(400).json({
                    error: "No todos found"
                })
            }
            res.json(todos);
    })
}


exports.updateTodo  = (req, res) => {
    const todo = req.todo;
    todo.name = req.body.name; 
    
    todo.save((err, todo) => {
        if(err){
            return res.status(400).json({
                error: "Failed to update Todo"
            });
        }
        res.json({ todo }) 
       
    })
}

exports.removeTodo = (req, res) => {
    const todo = req.todo;

    todo.remove((err, todo) => {
        if(err){
            return res.status(400).json({
                error: "Failed to delete Todo"
            })
        }
        res.json({
            message: "Succesfully deleted"
        });
    })

}

