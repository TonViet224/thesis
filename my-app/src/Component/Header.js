import styles from "./css/Mainpage.module.css"
import uniStyles from './css/Universallayout.module.css'

const Header = () => {
    return (
        <div className={`${uniStyles.header} ${styles.headerArea}`}>
            <a href="/main">
                <img src={process.env.PUBLIC_URL + "/logo/duck (1).png"} style={{ width: '100px', height: '100px' }} alt="logo" class="logo-img"></img>
            </a>
            <div className={uniStyles.topnavBox}>
                <div className={uniStyles.searchContainer}>
                    <input type="text" name="search" placeholder="Search.."></input>
                    <button type="submit"><i className="fa fa-search"></i> Search</button>
                </div>
                <div className={uniStyles.topnav}>
                    <a href="/#">Recommend</a>
                    <a href="/#">Recommend</a>
                    <a href="/#">Recommend</a>
                    <a href="/#">Recommend</a>
                </div>
            </div>
            <div className={uniStyles.userIcon}>
                <i className="far fa-user" style={{fontSize: '30px'}}></i>
                <a href="/Users/signup">Sign up</a>
                <a href="/login">Sign in</a>
            </div>
            <div className={uniStyles.icons}>
                <a href="/cart" >
                    <i className="fas fa-shopping-cart" style={{fontSize: '30px', marginRight: '5px'}}></i>
                    <span>Cart</span>
                </a>
                <a>
                    <i className="far fa-bell" style={{fontSize: '30px', marginRight: '5px'}}></i>
                    <span>Notification</span>
                </a>
            </div>
        </div>
    )
}

export default Header
