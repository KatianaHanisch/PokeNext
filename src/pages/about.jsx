import Image from "next/image";

import styles from "../styles/About.module.css";

export default function About() {
  let id = Math.floor(Math.random() * 249 + 1);
  return (
    <div className={styles.about}>
      <div className={styles.containerTituloAbout}>
        <h1>
          Sobre a <span className={styles.tituloAbout}>Poke</span>Next
        </h1>
        <Image
          src="/images/pokeball.png"
          width="50"
          height="50"
          alt="PokeNext"
        />
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
        dignissimos enim perferendis deserunt obcaecati velit adipisci sunt
        minima, officia sit quos, praesentium, magni ipsam necessitatibus.
      </p>
      <div className={styles.containerCardAbout}>
        <Image
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
          width="300"
          height="300"
          alt="Imagem pokemon"
        />
      </div>
    </div>
  );
}
