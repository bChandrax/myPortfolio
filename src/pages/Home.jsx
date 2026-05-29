import {Link} from 'react-router-dom'
import './Home.css'
import TopNav from '../components/TopNav/TopNav'
import Hero from '../components/hero/Hero'
import HomeWorks from '../components/HomeWorks/HomeWorks'
import MiniTerminalAbout from '../components/MiniTerminalAbout/MiniTerminalAbout'
import NowPlaying from '../components/NowPlaying/NowPlaying'
import TechStack from '../components/TechStack/TechStack'
import MobileNav from '../components/mobileNav/mobileNav'
import Connect from '../components/connection/connect'
/*
import HomeFooter from '../components/HomeFooter'
*/

export default function Home() {
    return(
        <>
        <TopNav/>
        <Hero />
        <HomeWorks />
        <div className="terminal-and-nowplaying">
            <MiniTerminalAbout />
            <NowPlaying />
        </div>
        <TechStack />
        <MobileNav />
        <Connect />
        </>
    )
}