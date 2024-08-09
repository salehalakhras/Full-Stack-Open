const express = require('express');
const morgan = require('morgan');
const app = express();

morgan.token('body', request => {
  return JSON.stringify(request.body)
})

app.use(express.json());
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body'));

let presons = [
  {
    "id": "1",
    "name": "Arto Hellas",
    "number": "040-123456"
  },
  {
    "id": "2",
    "name": "Ada Lovelace",
    "number": "39-44-5323523"
  },
  {
    "id": "3",
    "name": "Dan Abramov",
    "number": "12-43-234345"
  },
  {
    "id": "4",
    "name": "Mary Poppendieck",
    "number": "39-23-6423122"
  }
];

// get all
app.get('/api/persons', (request, response) => {
  response.json(presons);
})

// get information
app.get('/info/', (request, response) => {
  response.send(`<div>Phonebook has info for ${presons.length} people</div> <div>${new Date().toString()}</div>`);
})

// get by id
app.get('/api/persons/:id', (request, response) => {
  const person = presons.find(p => p.id === request.params.id);
  if (person) {
    response.json(person);
  } else {
    response.status(404).send(`Person with id ${request.params.id} not found`);
  }
})

// delete by id
app.delete('/api/persons/:id', (request, response) => {
  const person = presons.find(p => p.id === request.params.id);
  if (person) {
    response.json(person);
    presons = presons.filter(p => p.id !== request.params.id);
    response.status(204).end();
  } else {
    response.status(404).send(`Person with id ${request.params.id} not found`);
  }
})

// post
app.post('/api/persons', (request, response) => {
  const body = request.body;
  if (!body.name || !body.number) {
    return response.status(400).send('name or number missing');
  }
  else if (presons.find(p => p.name === body.name)) {
    return response.status(400).send('name must be unique');
  }
  const person = {
    id: Math.floor(Math.random() * 100000),
    name: body.name,
    number: body.number
  };
  presons = presons.concat(person);
  response.json(person);

})

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
})