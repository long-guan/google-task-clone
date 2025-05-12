import "./Navbar.css";

export function BurgerBtn() {
    return (
        <button className="burgerContainer">
            <svg
                className="burger"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 100 80"
            >
                <rect width="100" height="20" />
                <rect y="30" width="100" height="20"/>
                <rect y="60" width="100" height="20"/>
            </svg>
        </button>
    )
}
