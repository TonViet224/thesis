import Header from './Header'
import Sidebar from './Sidebar'
import Footer from './Footer'
import styles from './css/UserProfile.module.css'
import uniStyles from './css/Universallayout.module.css'

const UserProfilePage = () => {
    return (
        <div className={styles.gridContainer}>
            <Header />
            <Sidebar />
            <div className={`${styles.mainBody} ${styles.mainArea}`}>
                <div className={`${styles.mlArea}`} id={styles['profileBox']}>
                    <img id="user-img" src="/GI_img/Klee.png" alt="profile-pic" />
                    <p>UserName</p>
                    <input type="button" id={styles['profilepicBtn']} value="Update profile pic" />
                </div>
                <div className={`${styles.mrArea}`} id={styles['infoBox']}>
                    <h2 style={{ fontWeight: 'bold' }}>User info</h2>
                    <form action="/#" method="POST">
                        <div className={`${styles.infoHolder}`}>
                            <label>First Name</label>
                            <input type="text" id="fname" name="FirstName" value="" />
                        </div>
                        <div className={`${styles.infoHolder}`}>
                            <label>Last Name</label>
                            <input type="text" id="lname" name="LastName" value="" />
                        </div>
                        <div className={`${styles.infoHolder}`}>
                            <label>User Name</label>
                            <input type="text" id="uname" name="UserName" value="" />
                        </div>
                        <div className={`${styles.infoHolder}`}>
                            <label>Phone number</label>
                            <input type="text" id="phonenum" name="PhoneNumber" value="" />
                        </div>
                        <div className={`${styles.infoHolder}`}>
                            <label>Email</label>
                            <input type="text" id="email" name="Email" value="" />
                        </div>
                        <div className={`${styles.infoHolder}`}>
                            <label>Gender</label>
                            <div style={{ display: 'flex' }}>
                                <input type="radio" value="male" name="Gender" checked />
                                <label style={{ padding: '5px 0 5px 0' }}>Male</label>
                                <input type="radio" value="female" name="Gender" />
                                <label style={{ padding: '5px 0 5px 0' }}>Female</label><br />
                            </div>
                        </div>
                        <div className={`${styles.infoHolder}`}>
                            <label>Age</label>
                            <input type="number" id="age" name="Age" value="" />
                        </div>
                        <div className={`${styles.infoHolder}`}>
                            <label>Address</label>
                            <input type="text" id="address" name="Address" value="" />
                        </div>
                        <div className={`${styles.infoHolder}`}>
                            <input type="button" className={`${styles.gBtn}`} style={{ marginRight: 60 }} value="Reset" />
                            <input type="hidden" name="uid" value="<%= user._id%>" />
                            <input type="submit" class={`${styles.gBtn}`} value="Update" />
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default UserProfilePage
