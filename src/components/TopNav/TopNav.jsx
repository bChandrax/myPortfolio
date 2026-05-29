import { Link } from "react-router-dom"
import "./TopNav.css"

export default function TopNav() {
    return (
        <div className="top-nav">
            <div className="logo">
                <span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                    <rect x="2" y="3" width="20" height="18" rx="2" />
                    <polyline points="8 9 12 13 8 17" />
                    <line x1="14" y1="17" x2="18" y2="17" />
                    </svg>
                </span>
                <span>KM.SYS</span>
            </div>
            <div className="action-buttons">
                <button>Work</button>
                <button>About</button>
                <button>Contact</button>
            </div>
            <span>
                <img className="avatar" 
                src="pfpavatar.png"
                alt="avatar" />
            </span>
        </div>
    )
}