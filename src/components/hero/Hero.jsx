import "./Hero.css"
import { Share, Globe } from "lucide-react"
import { FaXTwitter, FaFacebook, FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa6'


export default function Hero() {
    return (
        <div className="hero">
            <div className="notice">Hi, I'm Karabo Machanja a..</div>
            <h1>
                Full Stack Developer &<br />
                <span>Creative Technologist</span>
            </h1>
            <p>Crafting high-performance digital experiences where technical precision meets artistic innovation. 
                Specializing in obsidian-grade web applications and cinematic UI.
            </p>
            <div className="hero-actions">
                <button>View Projects → </button>
                <button>Contact Me</button>
                <button>GET CV</button>
            </div>
            <div className="social-icons">
                <span><FaXTwitter className="social"/></span>
                <span><FaFacebook className="social"/></span>
                <span><FaLinkedin className="social"/></span>
                <span><FaGithub className="social"/></span>
            </div>
        </div>
    )
}