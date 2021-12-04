import Header from './Header'
import Sidebar from './Sidebar'
import Footer from './Footer'
import styles from './css/CartPage.module.css'
import uniStyles from './css/Universallayout.module.css'

const Cartpage = () => {
    return (
        <div className={styles.gridContainer}>
            <Header />
            <Sidebar />
            <div className={`${styles.mainBody} ${styles.mainArea}`}>
                <div className={`${styles.leftArea}`}>
                    <div className={`${styles.itemCard}`}>
                        <img src="/#" alt="product_display" />
                        <div className={`${styles.itemDetail}`}>
                            <p>ProductName</p>
                            <p>Price:</p>
                        </div>
                        <div className={`${styles.cardFunc}`}>
                            <button type="button" onClick="" ><i class=" fas fa-plus"></i></button>
                            <input type="number" id="" value="amount" />
                            <button type="button" onClick="" ><i class="fas fa-minus"></i></button>
                            <input onClick="" type="button" id={styles['removeBtn']} value="Remove this item" />
                        </div>
                    </div>
                </div>
                <div className={`${styles.rightArea}`}>
                    <div id="u-address">
                        <p>User name: </p>
                        <p>Phone number:</p>
                        <p>Address: Some road that the item will be delivered to</p>
                        <button id={styles["changeBtn"]}>Change</button>
                    </div>
                    <div id="total-prize">Total Prize is</div>
                    <input type="button" onClick="" value="Order" />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Cartpage
