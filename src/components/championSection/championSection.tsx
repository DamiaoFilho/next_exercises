import Image from "next/image";
import styles from "./championSection.module.css";
import type { StaticImageData } from "next/image";

type ChampionSectionProps = {
    imageSrc: string | StaticImageData;
    imageAlt: string;
    title: string;
    name: string;
    lore: string;
};

export default function ChampionSection({
    imageSrc,
    imageAlt,
    title,
    name,
    lore,
}: ChampionSectionProps) {
    return (
        <section className={styles.cardList}>
            <Image
                src={imageSrc}
                alt={imageAlt}
                width={300}
                height={300}
                quality={100}
            />
            <span className={styles.championTitle}>
                {title}
            </span>
            <span className={styles.championName}>
                {name}
            </span>
            <span className={styles.championLore}>
                {lore}
            </span>
            <hr />
        </section>
    );
}