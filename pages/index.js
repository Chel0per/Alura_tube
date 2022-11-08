import config from "../config.json";
import styled from "styled-components";
import { CSSReset } from "../src/components/CSSReset";
import Menu from "../src/components/Menu";
import { StyledTimeline } from "../src/components/Timeline"

function HomePage() {
    return (
        <>
            <CSSReset />
            <div>
                <Menu />
                <Header></Header>
                <Timeline playlists={config.playlists}></Timeline>
            </div>
        </> 
    );   
}

export default HomePage

const StyledHeader = styled.div`

.profile {
    width: 80px;
    height: 80px;
    border-radius: 50%;
}

.lower {display:flex;
align-items: center;
width: 100%;
padding: 16px 32px;
gap: 16px;
margin-top: 50px;
}

`;



function Header() {
    return (
        <StyledHeader>
            {/* <img className="banner" src="banner" /> */}
            <section className="lower">
                <img className="profile" src={`https://github.com/${config.github}.png`} />
                <div>
                    <h2>{config.name}</h2>
                    <h4>{config.job}</h4>
                </div>
            </section>
        </StyledHeader>

    )
}

function Timeline(props) {

    const playlistNames = Object.keys(props.playlists)

    return <StyledTimeline>
        {playlistNames.map(function (playlistName) {
            const videos = props.playlists[playlistName];
            return (
                <section>
                    <h2>{playlistName}</h2>
                    <div>
                        {videos.map(function (video) {
                            return (
                                <a href={video.url}>
                                    <img src={video.thumb} />
                                    <span>
                                        {video.title}
                                    </span>
                                </a>
                            )
                        })}
                    </div>
                </section>
            )
        })}
    </StyledTimeline>
}