import Header from './Header'
import Sidebar from './Sidebar'
import Footer from './Footer'
import styles from './css/Mainpage.module.css'
import uniStyles from './css/Universallayout.module.css'

const MainPage = () => {
    return (
        <div className={styles.gridContainer}>
            <Header />
            <Sidebar />
            <div className={`${styles.mainBody} ${styles.mainArea}`}>
                <div className={`${styles.slideShow}`}>
                </div>
                <h2>Sale items</h2>
                <div className={`${styles.disItems}`}>
                    <div onClick="" className={`${styles.itemCard}`}>
                        <img src="/#" alt=""/>
                        <p>Product Name</p>
                        <p>Price</p>
                        <p>Quantity</p>
                    </div>
                    <div onClick="" className={`${styles.itemCard}`}>
                        <img src="/#" alt=""/>
                        <p>Product Name</p>
                        <p>Price</p>
                        <p>Quantity</p>
                    </div>
                </div>
                <h2>Popular items</h2>
                <div className={`${styles.disItems}`}>
                    <div onclick="" className={`${styles.itemCard}`}>
                        <img src="<%= products_sale[i].img2Durl%>" alt=""/>
                        <p>Product Name</p>
                        <p>Price</p>
                        <p>Quantity</p>
                    </div>
                    <div onclick="" className={`${styles.itemCard}`}>
                        <img src="<%= products_sale[i].img2Durl%>" alt=""/>
                        <p>Product Name</p>
                        <p>Price</p>
                        <p>Quantity</p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default MainPage
