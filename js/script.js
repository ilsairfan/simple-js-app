//An array is assigned to the new variable created. Several objects are then added to an array.
let pokemonList = [
  { name: 'Bulbasaur', height: 0.7, types: ['grass', 'poison'] },
  { name: 'Butterfree', height: 1.1, types: ['bug', 'free'] },
  { name: 'Jigglypuff', height: 0.5, types: ['fairy', 'normal'] },
];

//for loop created to iterate over each item in the variable
for (i = 0; i < pokemonList.length; i++){
  document.write(pokemonList[i].name + ' (height: ' + pokemonList[i].height + ') ');

  //Conditional added within the loop.

  if (pokemonList[i].height <= 0.5){
    document.write('- It is a small-sized Pokemon. ');
  }
  else if (pokemonList[i].height > 0.5 && pokemonList[i].height <= 1.0) {
    document.write('- It is an average-sized Pokemon. ');
  }
  else {
    document.write('- Wow, it is a big Pokemon. ');
  }
}
