const express = require('express');
const app = express();

app.get('/api/form',(req,res)=>{
    const { name, email, message }= req.body;
    console.log(`Recieved form data: ${name}, ${email}, ${message}`);
    res.send(`Recieved form data: ${name}, ${email}, ${message}`)
    
});
app.use(express.static('public'));

app.use((err, req, res, next) =>{
    console.error(err.stack);
    res.static(500).send('Something broke!');
});
app.listen(8080, () => {
    console.log('Server listening on port 8080');
});