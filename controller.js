const Pet = require("./models");

module.exports = {
    home: (req, res) => {
        Pet.find({}).sort({type:1}) // sorting alphabetically? tack on => .sort({name:1}) or .sort({name:-1}) for reverse order
            .then(data => res.json(data))
            .catch(err => res.json(err))
    },
    create: (req, res) => {
        Pet.create(req.body)
            .then(data => res.json(data))
            .catch(err => res.json(err))
    },
    getone: (req, res) => {
        let id = req.params.id;
        Pet.findById(id)
        .then(data => res.json(data))
        .catch(err => res.json(err))
    },
    delete: (req, res) => {
        Pet.findByIdAndDelete({_id: req.params.id})
        .then(data => res.json(data))
        .catch(err => res.json(err))
    },
    update: (req, res) => {
        // or req.body if updating everything
        Pet.findByIdAndUpdate(req.params.id, { $set: req.body }, { runValidators: true })
        .then(data => {
            res.json(data)
            console.log("in here")
        })
        .catch(err => res.json(err))
    },
    likepet: (req, res) => {
        Pet.findById(req.params.id)
            .then(data => {
                    console.log(data)
                    data.likes++
                    data.save();
                })
                .then(data => res.json(data))
                .catch(err => res.json(err))
    },
    // createNested: (req, res) => {
    //     Pet.findByIdAndUpdate(req.params.id, { $push: { nestedSchemaName: req.body } }, { runValidators: true })
    //         .then(data => res.json(data))
    //         .catch(err => res.json(err))
    // },

    
    
    // updateNested: (req, res) => {
        //     Pet.update({nested: {$elemMatch: { _id: req.params.id}}}, { $set: { "nestedSchemaName.$.content": req.body.content } }, { runValidators: true })
        //     .then(data => res.json(data))
        //     .catch(err => res.json(err))
        // },
        // deleteNested: (req, res) => {
            //     Pet.updateOne({ quote: { $elemMatch: { _id: req.params.id } } }, { $pull: { quote: { _id: req.params.id } } })
            //         .then(data => res.json(data))
            //         .catch(err => res.json(err))
            // },
}
                
                
                
                
                
// {message: "sucess", data: data}