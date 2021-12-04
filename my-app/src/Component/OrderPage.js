import Header from './Header'
import Sidebar from './Sidebar'
import Footer from './Footer'
import styles from './css/OrderPage.module.css'
import uniStyles from './css/Universallayout.module.css'

const OrderPage = () => {
    return (
        <div className={styles.gridContainer}>
            <Header />
            <Sidebar />
            <div className={`${styles.mainBody} ${styles.mainArea}`} >
                <div className={`${styles.leftArea}`}>
                    <div className={`${styles.itemCard}`}>
                        <img src="/#" alt="product_display" />
                        <div className={`${styles.itemDetail}`}>
                            <p>Product name: </p>
                            <p>Price: </p>
                            <p>Amount: </p>
                        </div>
                    </div>
                </div>
                <div className={`${styles.rightArea}`}>
                    <div id={styles['CusInfo']}>
                        <p>User name: </p>
                        <p>Address: </p>
                        <p>Phone number: </p>
                        <p>Product number: </p>
                        <p>Total Price: </p>
                        <div id="payment-type">
                            <label>Payment Type</label>
                            <table>
                                <tr>
                                    <th><input type="radio" name="pay-t" /></th>
                                    <th>In cash</th>
                                </tr>
                                <tr>
                                    <th><input type="radio" name="pay-t" /></th>
                                    <th>International Card</th>
                                </tr>
                                <tr>
                                    <th><input type="radio" name="pay-t" /></th>
                                    <th>Domestic Card</th>
                                </tr>
                            </table>
                        </div>
                    </div>
                    <input type="button" value="Purchase" id={styles['PurchaseBtn']} />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default OrderPage
