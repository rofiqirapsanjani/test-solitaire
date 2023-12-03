const express = require('express');
const app = express();
const port = 5000;

app.get('/welcome/:name?', (req, res) => {
    const {name} = req.params || 'anonymous';
    if (name){
        res.send('<h1>Selamat Datang ' + name + '!</h1>');
    } else {
        res.send('<h1>Anonymous</h1>');
    }
});
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});