# Petful Server

client | https://petful-client-f3kaigciz.vercel.app/ server | https://petful-metty.herokuapp.com/

This project uses Node.js, Express, Queues. 

To start a local copy, use 'npm start'

Routes:

/people
  GET: returns all people in queue
  POST: enqueues person to queue
  DELETE: dequeues person from queue

/pets
  GET: returns all pets from both cats and dogs
  /cat
    GET: returns the next cat
    DELETE: dequeues the current cat
  /dog
    GET: returns the next dog
    DELETE: dequeues the current dog
