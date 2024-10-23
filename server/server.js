import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import restaurantDataObj from './data/restaurants.js';
const restaurantData = restaurantDataObj.restaurantData;

const app = express();
const PORT = process.env.PORT || 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));




app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/attractions', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'attractions.html'));
});

app.get('/restaurants', (req, res) => {
    res.render('restaurants', { restaurantData }); 
});

app.get('/new-restaurant', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'new-restaurants.html'));  
});


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});