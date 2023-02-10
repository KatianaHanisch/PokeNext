import Image from "next/image";

import styles from "../../styles/Pokemon.module.css";

export const getStaticPaths = async () => {
  const maxPokemons = 252;
  const api = "https://pokeapi.co/api/v2/pokemon";

  const response = await fetch(`${api}/?limit=${maxPokemons}`);
  const data = await response.json();

  const paths = data.results.map((pokemon, index) => {
    return {
      params: { pokemonId: (index + 1).toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.pokemonId;

  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);

  const data = await response.json();

  return {
    props: { pokemon: data },
  };
};

export default function Pokemon({ pokemon }) {
  return (
    <div className={styles.pokemonContainer}>
      <h1 className={styles.pokemonName}>{pokemon.name}</h1>
      <Image
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
        width="200"
        height="200"
        alt={pokemon.name}
      />
      <div>
        <h3>Número: </h3>
        <p>#{pokemon.id}</p>
      </div>
      <div>
        <h3>Tipo: </h3>
        <div className={styles.pokemonTipoContainer}>
          {pokemon.types.map((item, index) => (
            <span
              key={index}
              className={`${styles.tipoPokemon} ${
                styles["type_" + item.type.name]
              }`}
            >
              {item.type.name}
            </span>
          ))}
        </div>
      </div>
      <div className={styles.dataContainer}>
        <div>
          <h4>Altura:</h4>
          <p>{pokemon.height * 10} cm</p>
        </div>
        <div className={styles.dataHeight}>
          <h4>Peso:</h4>
          <p>{pokemon.weight / 10} kg</p>
        </div>
      </div>
    </div>
  );
}
