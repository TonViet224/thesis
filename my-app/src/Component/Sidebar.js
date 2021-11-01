import styles from "./css/Mainpage.module.css"
import uniStyles from './css/Universallayout.module.css'

const Sidebar = () => {
    return (
        <div className={`${uniStyles.sideBar} ${styles.sideBarArea}`}>
             <a href="/#">Physical Product</a>
            <a href="/#">Digital Product</a>
            <a href="/#">On Sale</a>
            <a href="/#">Best Value</a>
            <a href="/#">Popular</a>
        </div>
    )
}

export default Sidebar
