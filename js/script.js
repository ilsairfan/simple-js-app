//Part 1 of Task 1.5
/*let pokemonList = [
  { name: 'Bulbasaur', height: 0.7, types: ['grass', 'poison'] },
  { name: 'Butterfree', height: 1.1, types: ['bug', 'free'] },
  { name: 'Jigglypuff', height: 0.5, types: ['fairy', 'normal'] },
];

//forEach loop created to iterate over each item in the variable

pokemonList.forEach((pokemon) => {
  document.write(pokemon.name + ' (height: ' + pokemon.height + ') ');
  //Conditional added within the loop.

  if (pokemon.height <= 0.5) {
    document.write('- It is a small-sized Pokemon. ' + '<br>');
  }
  else if (pokemon.height > 0.5 && pokemon.height <= 1.0) {
    document.write('- It is an average-sized Pokemon. ' + '<br>');
  }
  else {
    document.write('- Wow, it is a big Pokemon. ' + '<br>');
  }

});*/

//Part 2

//entire code is wrapped inside an IIFE to avoid any clashes with the external code.

let pokemonRepository = (function() {

  let pokemonList = [
    { name: 'Bulbasaur', height: 0.7, types: ['grass', 'poison'] },
    { name: 'Butterfree', height: 1.1, types: ['bug', 'free'] },
    { name: 'Jigglypuff', height: 0.5, types: ['fairy', 'normal'] },
  ];

  function getAll() {
    return pokemonList;
  }

  function add(pokemon) {
    pokemonList.push(pokemon);
  }

  //Attempted bonus task 1.5. Not sure about this code right now.
  /*
  function addv(pokemon) {
    if (typeof pokemon === 'object' && Object.keys(pokemonList[0]) === Object.keys(pokemon)) {
      add(pokemon)
    }
    else {
      document.write('Data type is not correct')
    }
  }*/

  //return is an object itself with key value pairs
  return {
    getAll: getAll,
    add: add,
    //addv: addv
  }

})();

pokemonRepository.add({ name: 'Pikachu', height: 0.4, types: 'electric' });
//document.write(pokemonRepository.getAll());

//Due to IIFE pokemon list has limited access, loop code is updated to access the list.

pokemonRepository.getAll().forEach((pokemon) => {
  document.write(pokemon.name + ' (height: ' + pokemon.height + ') ');
  //Conditional added within the loop.

  if (pokemon.height <= 0.5) {
    document.write('- It is a small-sized Pokemon. ' + '<br>');
  }
  else if (pokemon.height > 0.5 && pokemon.height <= 1.0) {
    document.write('- It is an average-sized Pokemon. ' + '<br>');
  }
  else {
    document.write('- Wow, it is a big Pokemon. ' + '<br>');
  }

});
