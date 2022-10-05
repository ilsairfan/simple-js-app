//An array is assigned to the new variable created. Several objects are then added to an array.

let pokemonList = [
  { name: 'Bulbasaur', height: 0.7, types: ['grass', 'poison'] },
  { name: 'Butterfree', height: 1.1, types: ['bug', 'free'] },
  { name: 'Jigglypuff', height: 0.5, types: ['fairy', 'normal'] },
];

//forEach loop created to iterate over each item in the variable

pokemonList.forEach((pokemon) => {
  document.write(pokemon.name + ' (height: ' + pokemon.height + ') ');
  //Conditional added within the loop.

  if (pokemon.height <= 0.5){
    document.write('- It is a small-sized Pokemon. ' + '<br>');
  }
  else if (pokemon.height > 0.5 && pokemon.height <= 1.0) {
    document.write('- It is an average-sized Pokemon. ' + '<br>');
  }
  else {
    document.write('- Wow, it is a big Pokemon. ' + '<br>');
  }

});
