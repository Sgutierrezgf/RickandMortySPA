import getHash from "../utils/getHash";
import getData from "../utils/getData";

const Character = async () => {
  const id = getHash();
  const character = await getData(id);
  const view = `
      <div class="Character-inner">
        <articule class="Character-card">
            <img src="${character.image}" alt="n${character.name}">
            <h2>${character.name}</h2>        
        </articule>
        <articule class="Character-card">
            <h3>Episodes: <span>${character.episode.length}</span></h3>
            <h3>Status: <span>${character.status}</span></h3>        
            <h3>Species: <span>${character.species}</span></h3>        
            <h3>Gender: <span>${character.gener}</span></h3>        
            <h3>Origin: <span>${character.origin.name}</span></h3>        
            <h3>Last Location: ${character.location.name}</h3>        
        </articule>
      </div>
      `;
  return view;
};

export default Character;
