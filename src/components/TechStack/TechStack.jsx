import {Monitor, Server , Headphones} from 'lucide-react'
import './TechStack.css'

export default function TechStack() {
    return(
        <div className="tech-stack">
            <span>Tech Stack</span>
            <h1>Precision Tools</h1>
            <div className="categories">
                <div className="category">
                    <Monitor className='Tec-icon'/>
                    <h2>Frontend</h2>
                    <p>React, nextjs, CSS</p>
                </div>
                <div className="category">
                    <Server className='Tec-icon'/>  
                    <h2>Backend</h2>
                    <p>Node.js, PostgreSQL</p>
                </div>
                <div className="category">
                    <Headphones className='Tec-icon'/>
                    <h2>Audio</h2>
                    <p>CakeWalk, Sonar, Bandlab</p>
                </div>
            </div>
        </div>
    )
}