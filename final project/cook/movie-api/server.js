const express = require('express');
const app = express();
const router = express.Router();
const MovieController = require('./controller');
const cors = require('cors');
router.use('/movies', MovieController);
app.use(cors());
app.use('/api', router);

const port = 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
