const express = require('express');
const app = express();
const port = 3000;

app.listen(port);
console.log(`App running at http://localhost:${port}`);

app.get('/health', (req, res) => {
  res.send('OK');
  res.status(200);
});

// app.get('/', (req, res) => {
//   const name = process.env.NAME || 'Thony';
//   res.send(`Hello ${name}!`);
// });

// app.get('/', (req, res) => {
//   const name = process.env.NAME || 'Thony';
//   res.send(`
//     <!DOCTYPE html>
//     <html lang="en">
//     <head>
//       <meta charset="UTF-8">
//       <meta name="viewport" content="width=device-width, initial-scale=1.0">
//       <title>Refresh Button</title>
//     </head>
//     <body>
//       <h1>Hello ${name}!</h1>
//       <button onclick="window.location.reload();">Refrescar</button>
//     </body>
//     </html>
//   `);
// });

app.get('/', (req, res) => {
  const name = process.env.NAME || 'Thony';
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Refresh and Ve a Health Thony</title>
    </head>
    <body>
      <h1>Hello ${name}!</h1>
      <button onclick="window.location.reload();">Refrescar</button>
      <br><br>
      <button onclick="window.location.href='/health';">Ir a Health</button>
    </body>
    </html>
  `);
});