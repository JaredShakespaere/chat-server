let express = require('express');
let messagesController = require('./constrollers/messages_controller');


let app = express();

let router = express.Router();


app.use(express.json());
app.use('/api/', router);

let baseUrl = '/api/messages'


app.get(baseUrl, messagesController.read);
app.post(baseUrl, messagesController.create);
app.put(`${baseUrl}/:id`, messagesController.update);
app.delete(`${baseUrl}/:id`, messagesController.delete)

const port = 3003;

app.listen(port, () => {
    console.log(`listening on port ${port}!`)
});
