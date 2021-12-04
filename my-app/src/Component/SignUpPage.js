import styles from './css/Signuppage.module.css'

const SignUpPage = () => {
    return (
        <div className={styles.gridContainer} style={{ backgroundImage: `linear-gradient(to bottom right, #56809E , #84CEEB, #C1C8E4,#8860D0)` }}>
            <div className={styles.headerArea}></div>
            <div className={`${styles.signupContainter} ${styles.mainArea}`}>
                <div style={{ width: '100%' }}>
                    <h1 style={{ textAlign: 'center', margin: '15px 0 15px 0' }}>Sign Up</h1>
                    <form action="/Users" className={styles.formContainer} method="POST">
                        <input type="text" placeholder="First Name" id="FirstName" name="FirstName" />
                        <input type="text" placeholder="Last Name" id="LastName" name="LastName" />
                        <input type="text" placeholder="Your User Name" id="UserName" name="UserName" />
                        <input type="text" placeholder="Your phone number" id="PhoneNumber" name="PhoneNumber" />
                        <input type="text" placeholder="Your email" id="Email" name="Email" />
                        <label style={{ marginLeft: '40px' }}>Gender</label>
                        <div style={{ marginLeft: '35px' }} id="gender-option">
                            <input type="radio" value="male" name="Gender" />
                            <label>Male</label>
                            <input type="radio" value="female" name="Gender" />
                            <label>Female</label>
                        </div>
                        <input type="text" placeholder="Your Age" id="Age" name="Age" />
                        <input type="text" placeholder="Your address" id="Address" name="Address" />
                        <input type="password" placeholder="Password" id="Password" required />
                        <input type="password" placeholder="Confirm Your Password" id="ConfirmPass" name="Password" required />
                        <button type="submit" style={{ margin: '12px 0 12px 0' }} id="login-button">Create account</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SignUpPage
