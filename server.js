const express = require('express');
const app = express();
//const cors = require('cors');
const port = 5000;
//app.use(cors());
//import Man from './client/src/imgs/';
app.use(express.static(__dirname + '/public'));
app.get('/api/customers/', (req, res)=> {
  const customers = [
    {id: 1, image: 'http://localhost:3000/imgs/man_avatar.png', firstName: 'Andre', lastName: 'Wilson', city: 'Charlotte'},
    {id: 2, image: 'http://localhost:3000/imgs/woman_avatar.png', firstName: 'Lisa', lastName: 'Brook', city: 'Charlotte'},
    {id: 3, image: 'http://localhost:3000/imgs/man_avatar.png', firstName: 'Gabe', lastName: 'Norman', city: 'Huntersville'},
    {id: 4, image: 'http://localhost:3000/imgs/man_avatar.png', firstName: 'Frank', lastName: 'Bloom', city: 'Atlanta'},
    {id: 5, image: 'http://localhost:3000/imgs/woman_avatar.png', firstName: 'Nancy', lastName: 'Franklin', city: 'Atlanta'},
  ];

  res.json(customers);
});
app.listen(port, ()=> console.log(`Server started on Port ${5000}`));