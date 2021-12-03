let express = require('express');


let app = express();

let router = express.Router();


app.use(express.json());
app.use('/api/', router);

const port = 3003;

app.listen(port, () => {
    console.log(`listening on port ${port}!`)
});
