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
        let x = Math.floor(Math.random() * 50);
		let randomImage = data.hits[x].webformatURL;
  res.render("home.ejs", {randomImage});
});




app.listen(3000, () => {
   console.log('server started');
});

// app.get('/mercury', (req, res) =>  {
//     let planetInfo = solarSystem.getMercury();
//     console.log(planetInfo);
//     // Passing the object such that we can display it to the HTML
//     res.render('mercury.ejs', {planetInfo})
// })
//
//
//
// app.get('/venus', (req, res) =>  {
//     let planetInfo = solarSystem.getVenus();
//     console.log(planetInfo);
//     // Passing the object such that we can display it to the HTML
//     res.render('venus.ejs', {planetInfo})
// })

// ROUTE
// Getting paramerter and defining the route. That is different from the file that is being made at the end of the method
// app.get('/planet', (req, res) =>  {
//     let planet_name = req.query.planet_name; // This matches the name of elements inside of home.ejs
//     let planetInfo = solarSystem[`get${planet_name}`](); // Surrounc the name of the function with backticks
//     // Passing the object such that we can display it to the HTML
//     res.render('planetInfo.ejs', {planetInfo, planet_name})
// })


// app.get('/planet', (req, res) =>  {
//     let planetName = req.query.planetName; // match the URL query param
//     let methodName = `get${planetName}`;
//     // The method in class did not work and I had to make a variable inherit the string literal
//     if (typeof solarSystem[methodName] === 'function') {
//         let planetInfo = solarSystem[methodName]();
//         console.log(planetInfo);
//         res.render('planetInfo.ejs', { planetInfo, planetName });
//     } else {
//         res.status(404).send('Planet not found');
//     }
// });
//
//
//
//
app.get('/planet', (req, res) => {
    const planetName = req.query.planetName;
    let planetInfo;

    if (planetName === "Comets" && typeof solarSystem.getComets === "function") {
        planetInfo = solarSystem.getComets();
        planetInfo.description = planetInfo.def;
        planetInfo.websiteLink = planetInfo.link;
        planetInfo.distanceFromSun = "N/A";
        planetInfo.yearLength = "N/A";
        planetInfo.radius = "N/A";
        planetInfo.oneEarthDay = "N/A";
        planetInfo.moons = "N/A";
    } else if (planetName === "Asteroids" && typeof solarSystem.getAsteroids === "function") {
        planetInfo = solarSystem.getAsteroids();
        planetInfo.description = planetInfo.def;
        planetInfo.websiteLink = planetInfo.link;
        planetInfo.distanceFromSun = "N/A";
        planetInfo.yearLength = "N/A";
        planetInfo.radius = "N/A";
        planetInfo.oneEarthDay = "N/A";
        planetInfo.moons = "N/A";
    } else {
        const methodName = `get${planetName}`;
        if (typeof solarSystem[methodName] === "function") {
            planetInfo = solarSystem[methodName]();
        } else {
            return res.status(404).send("Something went wrong");
        }
    }

    res.render("planetInfo.ejs", { planetInfo, planetName });
});

// How would I render back home.ejs
// Personal route
app.get('/', (req, res) =>  {
    let planetInfo = solarSystem.getVenus();
    console.log(planetInfo);
    // Passing the object such that we can display it to the HTML
    res.render('home.ejs', {planetInfo})
});


// The goverment is still shut down
// app.get("/nasapod", async(req, res) => {
//   const url = inde
// });
