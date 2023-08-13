const fetch = require('node-fetch');

module.exports = function (app) {
  app.use('/proxy', async ({ query: { axware } }, response) => {
    const axwareRes = await fetch(axware);
    const html = await axwareRes.text();
    response.set('content-type', 'text/html');
    response.send(html);
  });
};
