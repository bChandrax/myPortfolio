import "./NowPlaying.css"
export default function NowPlaying() {
    return (
        <div className="now-playing">
            <header>NOW PLAYING</header>
            <div className="music-cover-art">
                <img src="https://i.scdn.co/image/ab67616d0000b273c8a9e1c5f2e7b3a1c8e4b6" alt="Album Cover Art" />
            </div>
            <div className="music-info">
                <p className="song-title">Song Title</p>
                <p className="artist-name">Artist Name</p>
            </div>
        </div>
    )
}