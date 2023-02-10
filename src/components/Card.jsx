import Image from "next/image";
import Link from "next/link";

import styles from "../styles/Card.module.css";

export default function Card({ pokemon }) {
  return (
    <div className={styles.cardContainer}>
      <Image
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
        width="150"
        height="150"
        alt={pokemon.name}
      />
      <div className={styles.cardContext}>
        {/* <p className={styles.cardId}>#{pokemon.id}</p> */}
        <h3 className={styles.cardName}>{pokemon.name}</h3>
        <Link href={`/pokemon/${pokemon.id}`} className={styles.btnDetalhes}>
          Ver mais
        </Link>
      </div>
    </div>
  );
}
