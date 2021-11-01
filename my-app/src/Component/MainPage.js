import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import Footer from './Footer'
import styles from './css/Mainpage.module.css'
import uniStyles from './css/Universallayout.module.css'

const MainPage = () => {
    return (
        <div className={styles.gridContainer}>
            <Header/>
            <Sidebar/>
            <div className={`${styles.mainBody} ${styles.mainArea}`}>

            </div>
            <Footer/>
        </div>
    )
}

export default MainPage
