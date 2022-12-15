import styles from "./Buttons.module.scss"
import Link from 'next/link'

const Buttons = ({ label = "Default", clickHandler, path}) => {
    return (
         path ? 
        <Link href={path} className={styles.btn}>
            {label}
        </Link>
        :
        <button className={styles.btn} onClick={clickHandler}>{label}</button>
    )
}

export default Buttons