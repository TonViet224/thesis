
const Header = () => {
    const imgStyle = {
        width: '100px', 
        height: '100px'
    }
    const lfontSize = {
        fontSize: '30px'
    }
    return (
        <div className="header header-area">
            <a href="/main">
                <img src={process.env.PUBLIC_URL+"/logo/duck (1).png"} style={imgStyle} alt="logo" class="logo-img"></img>
            </a>
            <div class="topnav-box">
                <div class="search-container">
                    <input type="text" name="search" placeholder="Search.."></input>
                    <button type ="submit"><i class ="fa fa-search"></i> Search</button>
                </div>
                <div class="topnav">
                    <a href="/#">Recommend</a>
                    <a href="/#">Recommend</a>
                    <a href="/#">Recommend</a>
                    <a href="/#">Recommend</a>
                </div>
            </div>
            <div class="user-icon">
                <i class="far fa-user" style={lfontSize}></i>
            </div>
            <div class="icons">
                <a href="/cart" class="icon-btn">
                    <i class="fas fa-shopping-cart" style={lfontSize}></i>
                    <span>Cart</span>
                </a>
                <a>
                    <i class="far fa-bell" style={lfontSize}></i>
                    <span>Notification</span>
                </a>
            </div>
        </div>
    )
}

export default Header
