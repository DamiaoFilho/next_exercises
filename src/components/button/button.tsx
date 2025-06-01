
import styles from "./button.module.css"

interface props{
    text: string
}

export default function Button(props: props){
    return (
        <button className={styles.container}>
            <span>{props.text}</span>
        </button>
    )
}