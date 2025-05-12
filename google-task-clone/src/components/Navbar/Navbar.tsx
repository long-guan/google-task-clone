import { BurgerBtn } from "./BurgerBtn";
import "./Navbar.css";

export function Navbar() {
    return (
        <nav className="flex justify-between items-center margin">
            <div className="flex items-center leftSpacing">
                <BurgerBtn />
                <div className="title">Tasks</div>
            </div>
            <div>
                TBD
            </div>
        </nav>
    )
}
