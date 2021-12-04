import Header from './Header'
import Sidebar from './Sidebar'
import Footer from './Footer'
import styles from './css/ItemPage.module.css'
import uniStyles from './css/Universallayout.module.css'
const ItemPage = () => {
    return (
        <div className={`${styles.gridContainer}`}>
            <Header />
            <Sidebar />
            <div className={`${styles.mainBody} ${styles.mainArea}`}>
                <div className={`${styles.leftArea}`}>
                    <canvas style={{ width: 800, height: 600 }}></canvas>
                    <div id={styles['viewportFuncs']}>
                        <button className={`${styles.btn3D}`} id="spin-btn">Spin</button>
                        <button className={`${styles.btn3D}`} id="front-btn">Front view</button>
                        <button className={`${styles.btn3D}`} id="side-btn">Side view</button>
                        <button className={`${styles.btn3D}`} id="top-btn">Top view</button>
                        <button className={`${styles.btn3D}`} id="bottom-btn">Bottom view</button>
                        <button className={`${styles.btn3D}`} id="resetrot-btn">Reset</button>
                    </div>
                    <div className={`${styles.reviewBox}`}>
                        <p style={{ fontWeight: 'bold', fontSize: 20, margin: '15px 0 15px 0' }}>Review</p>
                        <div className={`${styles.reviewContainer}`}>
                            <div className={`${styles.iconHolder}`}>
                                <i class="far fa-user" style={{ fontSize: 35 }}></i>
                            </div>
                            <textarea id={styles['reviewText']}></textarea>
                            <button id={styles['reviewBtn']}>Add commend</button>
                        </div>
                    </div>
                </div>
                <div className={`${styles.rightArea}`}>
                    <form action="/#" method="POST">
                        <h2 id="item-name"></h2>
                        <h3 id="rating">Rating</h3>
                        <h1 id="item-prize">Prize:</h1>
                        <label>Quantity</label>
                        <div id='quantityFunc' className={`${styles.quantityFunc}`}>
                            <button type="button" onClick=""><i class=" fas fa-plus"></i></button>
                            <input style={{ width: 30, padding: 3 }} type="number" id="quantity" name="quantity" value="1" />
                            <button type="button" onClick=""><i class="fas fa-minus"></i></button>
                        </div>
                        <input type="submit" id={styles['addBtn']} value="Add to cart" />
                    </form>
                    <label style={{ fontSize: 20, fontWeight: 600 }}>Item detail</label>
                    <p>Content</p>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default ItemPage
