import fetch from 'node-fetch';
import express from 'express';
const solarSystem = (await import('npm-solarsystem')).default;

const app = express();
app.set("view engine", "ejs");
app.use(express.static("public"));

// LETS GET RICK AND MORTY
app.get("/", async (req, res) => {
  // let url = "https://pixabay.com/api/?key=5589438-47a0bca778bf23fc2e8c5bf3e&per_page=50&orientation=horizontal&q=solar system";
  let url = "https://rickandmortyapi.com/api"
  let response = await fetch(url);
  let data = await response.json();
  console.log(data);
  // res.render("home.ejs", {randomImage});
  res.render("home.ejs");
});


app.get("/", async (req, res) => {
  // let url = "https://pixabay.com/api/?key=5589438-47a0bca778bf23fc2e8c5bf3e&per_page=50&orientation=horizontal&q=solar system";
  let url = "https://rickandmortyapi.com/api"
  let response = await fetch(url);
  let data = await response.json();
  console.log(data);
  // res.render("home.ejs", {randomImage});
  res.render("home.ejs");
});


app.get("/characters", async(req, res) => {
  // COLUMN FROM TABLE
    // let sql = "SELECT quote FROM quotes";
    // let alpha = "SELECT quote FROM quotes ORDER BY quote";
    // let life = "SELECT quote FROM quotes WHERE quote LIKE '%life%'";
    // const [quotes] = await conn.query(sql);
  // We are passing this vairable with the female authors
    res.render("characters.ejs");
})



app.get("/episodes", async(req, res) => {
  // COLUMN FROM TABLE
    // let sql = "SELECT quote FROM quotes";
    // let alpha = "SELECT quote FROM quotes ORDER BY quote";
    // let life = "SELECT quote FROM quotes WHERE quote LIKE '%life%'";
    // const [quotes] = await conn.query(sql);
  // We are passing this vairable with the female authors
    res.render("episodes.ejs");
})


app.get("/locations", async(req, res) => {
  // COLUMN FROM TABLE
    // let sql = "SELECT quote FROM quotes";
    // let alpha = "SELECT quote FROM quotes ORDER BY quote";
    // let life = "SELECT quote FROM quotes WHERE quote LIKE '%life%'";
    // const [quotes] = await conn.query(sql);
  // We are passing this vairable with the female authors
    res.render("locations.ejs");
})









// EXAMPLE
// app.get("/leastLiked", async(req, res) => {
//   // COLUMN FROM TABLE
//     let sql = "SELECT likes FROM likes";
//     let alpha = "SELECT likes FROM quotes ORDER BY likes ASC limit 3";
//     let life = "SELECT quote FROM quotes WHERE quote LIKE '%life%'";
//     const [quotes] = await conn.query(sql);
//   // We are passing this vairable with the female authors
//     res.render("leastLiked.ejs", {quotes});
// })







app.listen(3000, () => {
  console.log('server started');
});


// // How would I render back home.ejs
// app.get('/', (req, res) =>  {
//     let planetInfo = solarSystem.getVenus();
//     console.log(planetInfo);
//     // Passing the object such that we can display it to the HTML
//     res.render('home.ejs', {planetInfo})
// });
//

