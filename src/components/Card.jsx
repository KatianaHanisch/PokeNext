import Image from "next/image";
import Link from "next/link";

import styles from "../styles/Card.module.css";

export default function Card({ pokemon }) {
  return (
    <div className={styles.cardContainer}>
      <Image
        src={`https://cdn.traction.one/pokedex/pokemon/${pokemon.id}`}
        width="120"
        height="120"
        alt={pokemon.name}
      />
      <p className={styles.cardId}>#{pokemon.id}</p>
      <h3 className={styles.cardName}>{pokemon.name}</h3>
      <Link href={`/pokemon/${pokemon.id}`} className={styles.btnDetalhes}>
        Detalhes
      </Link>
    </div>
  );
}
