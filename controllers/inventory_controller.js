const Inventory = require('../models/inventory');
module.exports = {

    greeting(req, res) {

        res.render('hello_view',{ name: 'Bunkout' });

    },

    create(req, res, next) {

        const itemProps = req.body; //object received

        Inventory.create(itemProps)
            .then( (item) => {
                //create returns the recently stored doc
                res.send(item);
                //send the item to the requesting entity in the body

            })
            .catch(next); //goto next middleware ie error handling 
        
    },

    edit(req, res, next) {

        const itemId = req.params.id ; 
        const itemUpdateProps = req.body;

        Inventory.findByIdAndUpdate({ _id: itemId }, itemUpdateProps)
            .then(() => {

                Inventory.findById({ _id: itemId })
                    .then(item => res.send(item))
                    .catch(next);

            })
            .catch((err) => res.status(404).send({ error: "id does not exist!"}));

    },

    delete(req, res, next){

        const itemId = req.params.id ; 

        Inventory.findByIdAndRemove({ _id: itemId })
            .then(() => {

                Inventory.findById({ _id: itemId })
                    .then(item => res.send(item))
                    .catch(next);

            })
            .catch((err) => res.status(404).send({ error: "id does not exist!"}));

    }

};