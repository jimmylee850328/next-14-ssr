const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001;

app.use(cors());

const meowList = [
  { id: 1, name: "Fluffy", sound: "Meow meow!" },
  { id: 2, name: "Whiskers", sound: "Purr purr!" },
  { id: 3, name: "Mittens", sound: "Mrow!" },
  { id: 4, name: "Mittens", sound: "Mrow!" },
  { id: 5, name: "Mittens", sound: "Mrow!" }
];

app.get('/api/get_meow_list', (req, res) => {
  console.log('有人摳我');
  setTimeout(() => {
    res.json(meowList);
  }, 5000); // 延遲 50 秒
});

app.listen(port, () => {
  console.log(`Mock backend running at http://localhost:${port}`);
});
