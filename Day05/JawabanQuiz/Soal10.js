//soal 10
const animal = ["dog", "cat", "seal", "walrus", "lion", "cat"];
// Find where the 'walrus' item is

// Join the portion before 'walrus' to the portion after 'walrus'

// now animalsSliced has ['dog', 'cat', 'seal', 'lion', 'cat']

const walrus = animal.indexOf("walrus");

const animalSliced = [...animal.slice(0, walrus), ...animal.slice(walrus + 1)];

console.log(animalSliced);
