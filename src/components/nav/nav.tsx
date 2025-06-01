import styles from "./nav.module.css";
import Link from "next/link";

export default function Nav() {
    return(
        <nav className={styles.nav}>
            <h1 className={styles.title}>LoLSkins</h1>
            <ul className={styles.ul}>
                <li><Link href={"/"}>Skins</Link></li>
                <li><Link href={"champions/"}>Champions</Link></li>
            </ul>
        </nav>
    )
}