import styles from "./css/Mainpage.module.css"
import uniStyles from './css/Universallayout.module.css'

const Footer = () => {
    return (
        <div className={`${uniStyles.footer} ${styles.footerArea}`}>
            <button className={uniStyles.footerBtn}>Contact</button>
            <button className={uniStyles.footerBtn}>About</button>
        </div>
    )
}

export default Footer
