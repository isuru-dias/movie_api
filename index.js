const express = require('express');
const morgan = require('morgan');

const app = express();

app.use(express.static('public'));
app.use(morgan('common'));
app.use(express.json());


const movies = [

    {
        Title: 'Avatar',
        Description: 'On the lush alien world of Pandora live the Navi beings who appear primitive but are highly evolved. Because the planets environment is poisonous, human Navi hybrids, called Avatars, must link to human minds to allow for free movement on Pandora. Jake Sully (Sam Worthington), a paralyzed former Marine, becomes mobile again through one such Avatar and falls in love with a Navi woman (Zoe Saldana). As a bond with her grows, he is drawn into a battle for the survival of her world.',
        Genre: 'Science Fiction, Action',

        Director: {
            Name: 'James Cameron',
            Bio: 'James Francis Cameron is a Canadian filmmaker, who resides in New Zealand. A major figure in the post-New Hollywood era, his films have grossed over $8 billion worldwide, making him the second-highest-grossing film director of all time.',
            BirthYear: 1954,
            DeathYear: null
        },

        ImageURL: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcT8RayRqCl1PET_V5kHYBfm87aP-6mgFHts5QZ-Fs1od7pvtynDjy1kxiGJmHYkdz6ufRlLTy-y-QgF8iZ1XdBI0-T2N05X9if92ShHZKXn',
        Featured: true
    },



    {
        Title: 'Avengers Endgame',
        Description: 'The fourth installment in the Avengers saga is the culmination of 22 interconnected Marvel films and the climax of a journey. The worlds heroes finally understand just how fragile reality is, and the sacrifices that must be made to uphold it, in a story of friendship, teamwork and setting aside differences to overcome an impossible obstacle.',
        Genre: 'Action, Science Fiction',

        Director: {
            Name: 'Anthony Russo & Joe Russo',
            Bio: 'American directors known for their work on the Marvel Cinematic Universe, including Infinity War and Endgame.',
            BirthYear: 1970,
            DeathYear: null
        },

        ImageURL: 'https://upload.wikimedia.org/wikipedia/en/0/0d/Avengers_Endgame_poster.jpg',
        Featured: true
    },



    {
        Title: 'Avatar: The Way of Water',
        Description: 'Jake Sully and Neytiri have formed a family and are doing everything to stay together. However, they must leave their home and explore the regions of Pandora. When an ancient threat resurfaces, Jake must fight a difficult war against the humans.',
        Genre: 'Science Fiction, Action',

        Director: {
            Name: 'James Cameron',
            Bio: 'Canadian filmmaker known for epic, visually groundbreaking films like Titanic and Avatar.',
            BirthYear: 1954,
            DeathYear: null
        },

        ImageURL: 'https://djmmtgamechangerdoc.wordpress.com/wp-content/uploads/2023/06/avatar-2-cover.jpeg?w=1920',
        Featured: true
    },



    {
        Title: 'Ne Zha 2',
        Description: 'After the catastrophe, although the souls of Nezha and Aobing were saved, their bodies would soon be shattered. Taiyi Zhenren planned to use the seven-colored lotus to rebuild their bodies.',
        Genre: 'Fantasy, Animation',

        Director: {
            Name: 'Jiaozi (Yang Yu)',
            Bio: 'Chinese animation filmmaker acclaimed for Ne Zha series; wrote and directed Ne Zha 2.',
            BirthYear: 1980,
            DeathYear: null
        },

        ImageURL: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/b6/Ne_Zha_2_poster.jpg/250px-Ne_Zha_2_poster.jpg', 
        Featured: false
    },



    {
        Title: 'Star Wars: The Force Awakens',
        Description: 'Star Wars: The Force Awakens is a 2015 American epic space opera film co-produced, co-written, and directed by J. J. Abrams. The sequel to Return of the Jedi, it is the first installment of the Star Wars sequel trilogy and chronologically the seventh film of the "Skywalker Saga".',
        Genre: 'Science Fiction, Action,',

        Director: {
            Name: 'J.J. Abrams',
            Bio: 'American filmmaker known for reviving the Star Trek and Star Wars franchises.',
            BirthYear: 1966,
            DeathYear: null
        },

        ImageURL: 'https://www.hollywoodreporter.com/wp-content/uploads/2015/10/starwarsposter-2-ollygibbs_-_p_2015.jpg?w=2000&h=1126&crop=1',
        Featured: true
    },



    {
        Title: 'Avengers: Infinity War',
        Description: 'Iron Man, Thor, the Hulk and the rest of the Avengers unite to battle their most powerful enemy yet -- the evil Thanos. On a mission to collect all six Infinity Stones, Thanos plans to use the artifacts to inflict his twisted will on reality. The fate of the planet and existence itself has never been more uncertain as everything the Avengers have fought for has led up to this moment.',
        Genre: 'Action, Science Fiction',

        Director: {
            Name: 'Anthony Russo & Joe Russo',
            Bio: 'American filmmaker duo behind major MCU entries including Infinity War and Endgame.',
            BirthYear: 1970,
            DeathYear: null
        },

        ImageURL: 'https://upload.wikimedia.org/wikipedia/en/4/4d/Avengers_Infinity_War_poster.jpg',
        Featured: true
    },



    {
        Title: 'Spider-Man: No Way Home',
        Description: 'With Spider-Mans identity now revealed, our friendly neighborhood web-slinger is unmasked and no longer able to separate his normal life as Peter Parker from the high stakes of being a superhero. When Peter asks for help from Doctor Strange, the stakes become even more dangerous, forcing him to discover what it truly means to be Spider-Man.',
        Genre: 'Action, Science Fiction',

        Director: {
            Name: 'Jon Watts',
            Bio: 'American director best known for directing the MCU Spider-Man trilogy.',
            BirthYear: 1981,
            DeathYear: null
        },

        ImageURL: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.amazon.com%2FOfficial-Marvel-Studios-Movie-Special%2Fdp%2F1787737187&psig=AOvVaw0bhXZG5QMn2yaBOQz1TPU6&ust=1751671482546000&source=images&cd=vfe&opi=89978449&ved=0CBYQjRxqFwoTCMDD3vnqoY4DFQAAAAAdAAAAABAL',
        Featured: true
    },



    {
        Title: 'Inside Out 2',
        Description: 'Thirteen-year-old Riley tackles high school with her personified emotions guiding her decisions. Soon her newfound feelings cause turmoil and force her to redefine her sense of self.',
        Genre: 'Family, Comedy',

        Director: {
            Name: 'Kelsey Mann',
            Bio: 'American filmmaker directing his first feature with Inside Out 2, a sequel to Pixars original.',
            BirthYear: 1974,
            DeathYear: null
        },

        ImageURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5NUE-IxfaZE24lyTJuO-bcCjoUFNGEyuNzQ&s',
        Featured: true
    },


    
    {
        Title: 'Jurassic World',
        Description: 'Located off the coast of Costa Rica, the Jurassic World luxury resort provides a habitat for an array of genetically engineered dinosaurs, including the vicious and intelligent Indominus rex. When the massive creature escapes, it sets off a chain reaction that causes the other dinos to run amok. Now, its up to a former military man and animal expert to use his special skills to save two young brothers and the rest of the tourists from an all-out, prehistoric assault.',
        Genre: 'Action, Science Fiction',

        Director: {
            Name: 'Colin Trevorrow',
            Bio: 'American director, co-writer of Jurassic World and follow-up entries in the franchise.',
            BirthYear: 1976,
            DeathYear: null
        },

        ImageURL: 'https://m.media-amazon.com/images/I/91HPlz8j6XL.jpg',
        Featured: true
    },



    {
        Title: 'The Avengers',
        Description: 'When Thors evil brother, Loki (Tom Hiddleston), gains access to the unlimited power of the energy cube called the Tesseract, Nick Fury (Samuel L. Jackson), director of S.H.I.E.L.D., initiates a superhero recruitment effort to defeat the unprecedented threat to Earth. Joining Furys "dream team" are Iron Man (Robert Downey Jr.), Captain America (Chris Evans), the Hulk (Mark Ruffalo), Thor (Chris Hemsworth), the Black Widow (Scarlett Johansson) and Hawkeye (Jeremy Renner).',
        Genre: 'Superhero, Action, Science Fiction',

        Director: {
            Name: 'Joss Whedon',
            Bio: 'American director and writer known for Buffy the Vampire Slayer and Marvel’s The Avengers.',
            BirthYear: 1964,
            DeathYear: null
        },

        ImageURL: 'https://upload.wikimedia.org/wikipedia/en/8/8a/The_Avengers_%282012_film%29_poster.jpg',
        Featured: true
    }


    
];


let users = [
  {
    username: 'user1',
    favoriteMovies: []
  }
];

// 1. Return all movies 
app.get('/movies', (req, res) => {
  res.status(200).json(movies);
});

// 2. Return movie by title
app.get('/movies/:title', (req, res) => {
  const movie = movies.find(m => m.Title.toLowerCase() === req.params.title.toLowerCase());
  movie ? res.status(200).json(movie) : res.status(404).send('Movie not found.');
});

// 3. Return genre description by genre name
app.get('/genre/:genreName', (req, res) => {
  const movie = movies.find(m => m.Genre.toLowerCase().includes(req.params.genreName.toLowerCase()));
  movie ? res.status(200).send(`${movie.Genre} — ${movie.Description}`) : res.status(404).send('Genre not found.');
});

// 4. Return director info by name
app.get('/director/:name', (req, res) => {
  const movie = movies.find(m => m.Director.Name.toLowerCase() === req.params.name.toLowerCase());
  movie ? res.status(200).json(movie.Director) : res.status(404).send('Director not found.');
});

// 5. Register a new user
app.post('/users', (req, res) => {
  const newUser = req.body;
  if (users.find(u => u.username === newUser.username)) {
    return res.status(400).send('Username already exists.');
  }
  users.push(newUser);
  res.status(201).send('User registered successfully.');
});

// 6. Update user info (username)
app.put('/users/:username', (req, res) => {
  const user = users.find(u => u.username === req.params.username);
  if (!user) return res.status(404).send('User not found.');
  user.username = req.body.username;
  res.send('Username updated successfully.');
});

// 7. Add a favorite movie
app.post('/users/:username/movies/:movieTitle', (req, res) => {
  const user = users.find(u => u.username === req.params.username);
  if (!user) return res.status(404).send('User not found.');
  if (!user.favoriteMovies.includes(req.params.movieTitle)) {
    user.favoriteMovies.push(req.params.movieTitle);
  }
  res.send(`Movie "${req.params.movieTitle}" added to favorites.`);
});

// 8. Remove a favorite movie
app.delete('/users/:username/movies/:movieTitle', (req, res) => {
  const user = users.find(u => u.username === req.params.username);
  if (!user) return res.status(404).send('User not found.');
  user.favoriteMovies = user.favoriteMovies.filter(title => title !== req.params.movieTitle);
  res.send(`Movie "${req.params.movieTitle}" removed from favorites.`);
});

// 9. Deregister a user
app.delete('/users/:username', (req, res) => {
  users = users.filter(u => u.username !== req.params.username);
  res.send(`User "${req.params.username}" has been removed.`);
});








//Creation of the Server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

//Error Handling
app.use((err, req, res, next) => {
    console.log(err.stack);
    res.status(500).send(`Error: ${err}`);
}
)








