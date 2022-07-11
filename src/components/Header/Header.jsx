import "./header.css";

export const Header = () => {
    return (
        <header className='header-container'>

            <div className="header-wrapper">

                <div className="header-content">

                    <div className="logo">
                        <a href="/">
                            <img className="logo-img" src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png" alt="flipkart" />
                        </a>
                    </div>

                    <input
                        className="search-bar"
                        placeholder="Search for products, brands and more">
                    </input>

                </div>

            </div>

        </header>
    )
}