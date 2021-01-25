const Queue = require('../queue/Queue')
const store = require('../../store')

// Set up initial data.
// --------------------

const pets = {
  cats: new Queue(),
  dogs: new Queue()
}

store.cats.forEach(cat => pets.cats.enqueue(cat))
store.dogs.forEach(dog => pets.dogs.enqueue(dog))

// --------------------

module.exports = {
  get(animalType) {
    switch(animalType){
      case 'dog': return pets.dogs.show();
      case 'cat': return pets.cats.show();
      default: return [...pets.cats.all(), ...pets.dogs.all()];
    }
    // Return the pets next in line to be adopted.
  },

  dequeue(animalType) {
    switch(animalType){
      case 'dog': return pets.dogs.dequeue();
      case 'cat': return pets.cats.dequeue();
      default: return pets;
    }
    // Remove a pet from the queue.
  }
}
