const fetch = require('node-fetch');

module.exports = function (app) {
  app.use('/proxy', async ({ query: { axware } }, response) => {
    try {
      const axwareRes = await fetch(axware);
      const html = await axwareRes.text();
      response.set('content-type', 'text/html');
      response.send(html);
    } catch (e) {
      response.status(500);
      response.send(e);
    }
  });
};
