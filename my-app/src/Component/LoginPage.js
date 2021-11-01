import React from 'react'
import styles from './css/Loginpage.module.css'

const LoginPage = () => {
    return (
        <div className={styles.gridContainer}>
            <div className={styles.mainArea}>
                <div className={`${styles.formContainer} ${styles.rightArea}`}>
                    <h1 style={{alignSelf: "center"}}>Login</h1>
                    <div className={styles.socialMedia}>
                        <button className={`${styles.socialButton} fa fa-facebook-f`} style={{background: "darkblue"}}></button>
                        <button className={`${styles.socialButton} fa fa-google`} style={{background: "darkred"}}></button>
                    </div>
                    <p id='mess' style={{color: "red"}}></p>
                    <label for="fname">User Name</label>
                    <input type="text" id="fname" name="fname" />
                    <label for="pass">Password</label>
                    <input type="password" id="pass" name="pass" value="" />
                    <p><a href="/#">Forget your password</a></p>
                    <button type="button" style={{margin: '12px 0 12px 0'}} id="log-btn">Sign in</button>
                    <p style={{alignSelf: "center", fontSize: '30px', margin: '0'}}>or</p>
                    <button type="button" style={{margin: '12px 0 12px 0'}} id="signup-button"
                        onclick="/">Sign Up</button>
                </div>
                <div className={styles.canvas3d}>
                    <div id={styles['c']}></div>
                </div>
            </div>
        </div>
    )
}

export default LoginPage
