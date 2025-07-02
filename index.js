const express = require('express');
const morgan = require('morgan');

const app = express();


app.use(morgan('common'));


app.use(express.static('public'));


const movies = [
    {
        Title: 'Avatar',
    },

    {
        Title: 'Avengers Endgame'
    },

    {
        Title: 'Avatar: The Way of the Water'
    },

    {
        Title: 'NeZha2'
    },

    {
        Title: 'Star Wars: The Force Awakens'
    },

    {
        Title: 'Avengers: Infinity War'
    },

    {
        Title: 'Spider-Man No Way Home'
    },

    {
        Title: 'Inside Out 2'
    },

    {
        Title: 'Jurassic World'
    },

    {
        Title: 'The Avengers'
    }
];



//Creation of API #1
app.get('/movies',(req, res) => {
    res.json(movies);   
}
)


//Creation of API #2
app.get('/',(req, res) => {
    res.send('Top 10 Highest-Grossing Films of the 21st Century')
})


//Error Handling
app.use((err, req, res, next) => {
    throw new Error ('Something broke!');
    // console.error(err.stack);
    // res.status(500).send('Something broke!');
}
)


//Creation of the Server
app.listen(3000, () => {
    console.log('Server is Running');
})




