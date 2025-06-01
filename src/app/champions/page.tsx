import styles from './champions.module.css';
import Image from 'next/image';
import aatrox from "../../../public/champions/aatrox.jpg"; 
import ahri from "../../../public/champions/ahri.jpg";
import leesin from "../../../public/champions/leesin.jpg";
import ChampionSection from '@/components/championSection/championSection';

export default function ChampionsPage(){
    return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <h1 className={styles.title}>Welcome to LoLSkins</h1>
        <span>Get know of one of us favorite champions</span>
      </section>
      <ChampionSection
        imageSrc={aatrox}
        imageAlt="Aatrox"
        title="The Darkin Blade"
        name="AATROX"
        lore="Once honored defenders of Shurima against the Void, Aatrox and his brethren would eventually become an even greater threat to Runeterra, and were defeated only by cunning mortal sorcery. But after centuries of imprisonment, Aatrox was the first to find freedom once more, corrupting and transforming those foolish enough to try and wield the magical weapon that contained his essence. Now, with stolen flesh, he walks Runeterra in a brutal approximation of his previous form, seeking an apocalyptic and long overdue vengeance."
      />
      <ChampionSection
        imageSrc={ahri}
        imageAlt="Ahri"
        title="The Nine-Tailed Fox"
        name="AHRI"
        lore="Innately connected to the magic of the spirit realm, Ahri is a fox-like vastaya who can manipulate her prey's emotions and consume their essence—receiving flashes of their memory and insight from each soul she consumes. Once a powerful yet wayward predator, Ahri is now traveling the world in search of remnants of her ancestors while also trying to replace her stolen memories with ones of her own making."
      />
      <ChampionSection
        imageSrc={leesin}
        imageAlt="Lee Sin"
        title="The Blind Monk"
        name="LEE SIN"
        lore="A master of Ionia's ancient martial arts, Lee Sin is a principled fighter who channels the essence of the dragon spirit to face any challenge. Though he lost his sight many years ago, the warrior-monk has devoted his life to protecting his homeland against any who would dare upset its sacred balance. Enemies who underestimate his meditative demeanor will endure his fabled burning fists and blazing roundhouse kicks."
      />
    </main>
  );
}