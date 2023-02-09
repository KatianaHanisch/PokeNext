import Image from "next/image";

import Card from "../components/Card";

import styles from "../styles/Home.module.css";

export async function getStaticProps() {
  const maxPokemons = 52;
  const api = "https://pokeapi.co/api/v2/pokemon";

  const response = await fetch(`${api}/?limit=${maxPokemons}`);
  const data = await response.json();

  data.results.forEach((item, index) => {
    item.id = index + 1;
  });

  return {
    props: {
      pokemons: data.results,
    },
  };
}
export default function Home({ pokemons }) {
  return (
    <div>
      <div className={styles.tituloContainerHome}>
        <h1 className={styles.tituloHome}>
          Poke<span>Next</span>
        </h1>
        <Image
          src="/images/pokeball.png"
          width="50"
          height="50"
          alt="PokeNext"
        />
      </div>
      <div className={styles.pokemonContainer}>
        {pokemons.map((pokemon) => (
          <Card key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    </div>
  );
}
