import express from "express"; //importing the libraries
import { hello, helloPerson, greetNewPerson } from "./src/hello.js";
import { welcomeHome } from "./src/welcome.js";

const PORT = 3030;

const app = express() // creating the app
app.use(express.json()) //COMMONLY FORGOTTEN

// routes (or lists of allowed reqests)
app.get('/hello', hello)
app.post('/hello', greetNewPerson)

app.get('/', welcomeHome)
//below :person is a param that gets attaached to the response
app.get('/hello/:person', helloPerson);


app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}...`));