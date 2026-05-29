import "./MiniTerminal.css"

export default function MiniTerminalAbout() {
    return(
        <div className="mini-terminal">
            <div className="top-of-terminal-window">
                <div className="top-3-circles">
                    <span></span>
                    <span></span>
                    <span></span>
                    <p className="terminal-title">chandrax@portfolio — zsh — 80x24</p>
                </div>
                <p className="last-login">Last login: Mon Oct 30 10:00:00 2023 from 192.168.1.1</p>
                <p className="command"><span className="user">chandrax</span> ~ cat about_me.md</p>
                <p style={{ whiteSpace: 'pre-line' }}>
                    {`> I am a Creative Technologist driven by the intersection of engineering and design.
                    > Currently building high-end interfaces and scalable backend architectures.
                    > Passionate about web3, generative art, and cinematic storytelling through code.`}
                </p>
                <p className="command"><span className="user">chandrax</span> ~ ls skills/active</p>
                <div className="skills-list">
                    <div className="div1">
                        <p>- NextJs</p>
                        <p>- React</p>
                        <p>- NodeJs</p>
                    </div>
                    <div className="div2">
                        <p>- JavaScript</p>
                        <p>- C++</p>
                        <p>- C</p>
                    </div>
                </div>
                <p className="command"><span className="user">chandrax</span> ~ ls skills/learning</p>
            </div>
        </div>
    )
}