import "./mobileNav.css"
import { Home ,Info , Phone, Pickaxe} from "lucide-react"

export default function MobileNav() {
    return(
        <div className="mobile-nav">
            <button><Home /><p>Home</p></button>
            <button><Pickaxe /><p>Work</p></button>
            <button><Phone /><p>Contact</p></button>
            <button><Info /><p>About</p></button>
        </div>
    )
}