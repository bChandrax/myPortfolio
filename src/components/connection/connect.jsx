import "./connect.css";
import { Mail, MapPin } from "lucide-react";

export default function Connect() {
    return(
        <div className="connect">
            <div className="connecthalf">
                <header>CONNECTION</header>
                <h2>Let's build the future together.</h2>
                <p>Currently open to high-impact projects and engineering roles that challenge the status quo.</p>
                <div className="email-wrapper">
                    <Mail className="wrapper-icon" />
                    <div className="info-wrapper">
                        <span>EMAIL</span>
                        <p>karabomachanja07@gmail.com</p>
                    </div>
                </div>
                <div className="location-wrapper">
                    <MapPin className="wrapper-icon" />
                    <div className="info-wrapper">
                        <span>LOCATION</span>
                        <p>Based in Palapye, Botswana</p>
                    </div>
                </div>
                <div className="availability">
                    <p>Available for freelance work and full-time opportunities.</p>
                </div>
            </div>
            <div className="form">
                <div className="name-and-email-wrapper">
                    <div className="form-field">
                        <h3>Name</h3>
                        <input type="text" placeholder="Name" />
                    </div>
                    <div className="form-field">
                        <h3>Email</h3>
                        <input type="text" placeholder="Email" />
                    </div>
                </div>
                <div className="form-field">
                    <h3>Project Intent</h3>
                    <input type="text" placeholder="Project Intent" />
                </div>
                <div className="form-field">
                    <h3>Message</h3>
                    <textarea placeholder="Message"></textarea>
                </div>
                <button>Transmit Message</button>
            </div>
        </div>
    )
}