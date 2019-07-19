const controller = require("./controller");

module.exports = function(app) {
    app.get("/api/pet", controller.home)
    app.post("/api/pet", controller.create)
    app.get("/api/pet/:id", controller.getone)
    app.put("/api/pet/:id", controller.update)
    app.delete("/api/pet/:id", controller.delete)
    app.put("/api/pet/like/:id", controller.likepet)
    // app.put("/api/pet/:id", controller.updateNested),
    // app.delete("/api/pet/nested/:id", controller.deleteNested),
    // app.post("/api/pet/:id", controller.createNested),
    // app.post("/api/pet/:id/:idx/:bool", controller.createNested)
}
