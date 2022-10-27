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

//document.write is removed from forEach loop

  function addListItem(pokemon){

    //Button created for each Pokemon name
    let pokemonList = document.querySelector('.pokemon-list');
    let listItem = document.createElement('li');
    let button = document.createElement('button');
    button.innerText = pokemon.name;
    button.classList.add('button-class');
    listItem.appendChild(button);
    pokemonList.appendChild(listItem);

    //Event listener is added that will listen to 'click'
    button.addEventListener('click', showDetails(pokemon))
  }

  function showDetails(pokemon){
    console.log(pokemon)
  }


  //return is an object itself with key value pairs
  return {
    getAll: getAll,
    add: add,
    addListItem: addListItem
  }

})();

pokemonRepository.add({ name: 'Pikachu', height: 0.4, types: 'electric'});
//pokemonRepository.addv('Pikachu')
//document.write(pokemonRepository.getAll());

//Due to IIFE pokemon list has limited access, loop code is updated to access the list.

pokemonRepository.getAll().forEach(function (pokemon){

  pokemonRepository.addListItem(pokemon);

});
