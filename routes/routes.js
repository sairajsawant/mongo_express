const InventoryController = require('../controllers/inventory_controller');

module.exports = (app) => {

    //watch for incoming GET requests at route http://localhost:3050/api
    app.get('/api', InventoryController.greeting); 

    //add a new item to the inventory
    app.post('/api/add', InventoryController.create);

    //update the item in the inventory
    app.put('/api/item/:id', InventoryController.edit); 

    //delete the item in the inventory    
    app.delete('/api/item/:id', InventoryController.delete); 

};