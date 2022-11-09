import React from "react";
import config from "../config.json";
import styled from "styled-components";
import { CSSReset } from "../src/components/CSSReset";
import Menu from "../src/components/Menu/Menu";
import { StyledTimeline } from "../src/components/Timeline"

function HomePage() {
    
    const [valorDoFiltro, setValorDoFiltro] = React.useState("Angular");
    
    return (
        <>
            <CSSReset />
            <div>
                <Menu valorDoFiltro={valorDoFiltro} setValorDoFiltro = {setValorDoFiltro}/>
                <Header></Header>
                <Timeline valorDoFiltro={valorDoFiltro} playlists={config.playlists}></Timeline>
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
}

`;

const StyledBanner = styled.img`

width: 100%;
height: 350px;
object-fit: cover;
object-position: 0 25%;

`;


function Header() {
    return (
        <StyledHeader> 
            <StyledBanner src="https://images.unsplash.com/photo-1503437313881-503a91226402?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80" />
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

function Timeline({valorDoFiltro,...props}) {

    const playlistNames = Object.keys(props.playlists)

    return <StyledTimeline>
        {playlistNames.map(function (playlistName) {
            const videos = props.playlists[playlistName];
            return (
                <section>
                    <h2>{playlistName}</h2>
                    <div>
                        {videos.filter((video) => {
                            return video.title.toLowerCase().includes(valorDoFiltro.toLowerCase())
                        }).map(function (video) {
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