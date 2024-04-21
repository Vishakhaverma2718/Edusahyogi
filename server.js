import express from 'express';
import connection from './modals/connection.js';
import user from "./routes/user.js"
import router from './routes/user.js';

const app =express();
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(express.static('public'));

app.set('view engine','ejs');
app.set('views','views');

app.use('/',user);
app.listen(3000,()=>{
    console.log('server is running  : http://localhost:3000');
});