import "./HomeWorks.css"
import ProjectCase from "../projects/projectcase";

export default function HomeWorks() {
    return(
        <div className="homeWorks">
            <header>
                <h1>My Work</h1>
                <span>All Repos →</span>
            </header>
            <div className="projects">
                <ProjectCase />
                <ProjectCase />
            </div>
        </div>
    )
}