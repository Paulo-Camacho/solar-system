import fetch from 'node-fetch';
import express from 'express';
const solarSystem = (await import('npm-solarsystem')).default;

const app = express();
app.set("view engine", "ejs");
app.use(express.static("public"));

// Root route
app.get("/", async (req, res) => {
  let url = "https://pixabay.com/api/?key=5589438-47a0bca778bf23fc2e8c5bf3e&per_page=50&orientation=horizontal&q=solar system";
		let response = await fetch(url);
		let data = await response.json();
		console.log(data);
		let randomImage = data.hits[0].webformatURL;
  res.render("home.ejs", {randomImage});
});

app.listen(3000, () => {
   console.log('server started');
});

app.get('/mercury', (req, res) =>  {
    let planetInfo = solarSystem.getMercury();
    console.log(planetInfo);
    // Passing the object such that we can display it to the HTML
    res.render('mercury.ejs', {planetInfo})
})



app.get('/venus', (req, res) =>  {
    let planetInfo = solarSystem.getVenus();
    console.log(planetInfo);
    // Passing the object such that we can display it to the HTML
    res.render('venus.ejs', {planetInfo})
})

// ROUTE
// Getting paramerter and defining the route. That is different from the file that is being made at the end of the method
// app.get('/planet', (req, res) =>  {
//     let planet_name = req.query.planet_name; // This matches the name of elements inside of home.ejs
//     let planetInfo = solarSystem[`get${planet_name}`](); // Surrounc the name of the function with backticks
//     // Passing the object such that we can display it to the HTML
//     res.render('planetInfo.ejs', {planetInfo, planet_name})
// })


app.get('/planet', (req, res) =>  {
    let planetName = req.query.planetName; // match the URL query param
    let methodName = `get${planetName}`;

    // The method in class did not work and I had to make a variable inherit the string literal
    if (typeof solarSystem[methodName] === 'function') {
        let planetInfo = solarSystem[methodName]();
        res.render('planetInfo.ejs', { planetInfo, planetName });
    } else {
        res.status(404).send('Planet not found');
    }
});

// How would I render back home.ejs
// Personal route
app.get('/', (req, res) =>  {
    let planetInfo = solarSystem.getVenus();
    console.log(planetInfo);
    // Passing the object such that we can display it to the HTML
    res.render('home.ejs', {planetInfo})
})
