// Include middleware for routes here

module.exports = function (app, express) {
  // Setup routes to api stuff here:
  app.get('/api/dances/', dancesController.allDances);
  app.post('/api/dances/', dancesController.newLink);

};
