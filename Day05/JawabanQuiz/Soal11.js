//soal 11
function startsWithE(animal) {
 	const hasil = animal.filter(e => e.startsWith('e'))
 	return hasil
}
const animals = ['elephant', 'tiger', 'emu', 'zebra', 'cat', 'dog', 'eel', 'rabbit', 'goose', 'earwig'];
const animalsE = startsWithE(animals)

console.log(animalsE); // ["elephant", "emu", "eel", "earwig"]