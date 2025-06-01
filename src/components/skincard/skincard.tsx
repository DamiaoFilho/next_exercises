import { Props } from "next/script"
import styles from "./skincard.module.css"
import Image from "next/image"
import rp from "../../../public/rp.webp"
import Button from "../button/button"

interface props {
    name: string,
    url: string,
    value: string,
}

export default function SkinCard(props: props) {
    return(
        <div className={styles.container}>
            <Image
                className={styles.mainImg}
                src={props.url}
                width={150}
                height={150}
                alt={props.url}
                quality={100}
            />
            <div className={styles.subContainer}>
                <span className={styles.title}>{props.name}</span>
                <section>
                    <span className={styles.valueText}>{props.value}</span>
                    <Image
                        src={rp}
                        width={16}
                        height={16}
                        alt="rp_icon"
                    />
                </section>
            </div>
            <Button text="Detalhes"/>
        </div>
    )
}