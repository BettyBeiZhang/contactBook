const path = require('path');

module.exports = (app) => {
  app.get('*', (req, res, next) => {
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
  });
};
