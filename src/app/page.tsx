"use client"
import Image from "next/image";
import styles from "./page.module.css";
import SkinCard from "@/components/skincard/skincard";
import { useState } from "react";

interface Skin{
  name: string,
  value: string,
  url: string
}

const defaultSkins: Skin[] = [
  {
    name: "Lee Sin Muay Thai",
    value: "1350",
    url: "https://www.lolvvv.com/_next/image?url=https%3A%2F%2Fddragon.leagueoflegends.com%2Fcdn%2Fimg%2Fchampion%2Fsplash%2FLeeSin_4.jpg&w=1200&q=75"
  },
  {
    name: "Yasuo Spirit Blossom",
    value: "1350",
    url: "https://cmsassets.rgpub.io/sanity/images/dsfx7636/news_live/a0f4cf4d16ac62d5a85fbddaf0185e7fca6019fe-1920x1133.jpg"
  },
  {
    name: "Lunar Wraith Caitlyn",
    value: "1820",
    url: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Caitlyn_10.jpg"
  },
  {
    name: "Prestige PsyOps Ezreal",
    value: "1820",
    url: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ezreal_23.jpg"
  },
  {
    name: "Thresh Pulsefire",
    value: "1820",
    url: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Thresh_13.jpg"
  },
  {
    name: "Elementalist Lux",
    value: "3250",
    url: "https://noticias.maisesports.com.br/wp-content/uploads/2020/10/LoL-Lux-Elementalista.jpeg"
  },
  {
    name: "Ahri K/DA",
    value: "1350",
    url: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_16.jpg"
  },
  {
    name: "Jinx Star Guardian",
    value: "1820",
    url: "https://i.ytimg.com/vi/v4z9v-kijdE/maxresdefault.jpg"
  },
  {
    name: "Zed PROJECT",
    value: "1350",
    url: "https://r2.rankedkings.com/lol/splashes/238030.jpg"
  },
  {
    name: "Miss Fortune Gun Goddess",
    value: "2775",
    url: "https://platform.polygon.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/10410055/21016.jpg?quality=90&strip=all&crop=5.7407407407407,0,88.518518518519,100"
  },
  {
    name: "Vayne Spirit Blossom",
    value: "1820",
    url: "https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/3/38/Skin_Splash_Spirit_Blossom_Vayne.jpg/revision/latest?cb=20200712170306"
  },
  {
    name: "Darius Dunkmaster",
    value: "1820",
    url: "https://static.wikia.nocookie.net/leagueoflegends/images/6/65/Darius_DunkmasterSkin.jpg/revision/latest/scale-to-width-down/1200?cb=20181021083530"
  }
];


export default function Home() {
  const [skins, setSkins] = useState<Skin[]>(defaultSkins);

  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <h1 className={styles.title}>Welcome to LoLSkins</h1>
        <span>The best site to found your favorite champion skin</span>
      </section>
      <section className={styles.cardList}>
        {skins.map((item: any, index: number) => (
          <SkinCard
            name={item.name}
            value={item.value}
            url={item.url}
            key={index}
          />
        ))}
      </section>
    </main>
  );
}
