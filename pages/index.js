import config from "../config.json"; //importando json configurado
import styled from "styled-components"; //importando framework styled-components
import { CSSReset } from "../src/Components/CSSReset";
import Menu from "../src/Components/Menu";
import { StyledTimeline } from "../src/Components/Timeline";

function HomePage() {
    const color = { 
        //backgroundColor: "red" 
    };

  //console.log(config.playlists); //entender o que está rolando no codigo

  return (
    <>
      <CSSReset />
      <div style={color}>
        {/*Chamando Componentes*/}
        <Menu />
        <Header />
        <Timeline playlists={config.playlists} /> {/*passando as props*/}
      </div>
    </>
  );
}

export default HomePage;

//Criando componentes
// function Menu() {
//   return <div>Menu</div>;
// }

//Configrando um componente que tem seu proprio estilo
const StyledHeader = styled.div`
  img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }
  .user-info {
    margin-top: 50px;
    display: flex;
    align-items: center;
    width: 100%;
    padding: 16px 32px;
    gap: 16px;
  }
`;
function Header() {
  return (
    <StyledHeader>
      {/*<img src="banner" />*/}

      <section className="user-info">
        <img src={`https://github.com/${config.github}.png`} />
        <div>
          <h2>{config.name}</h2>
          <p>{config.job}</p>
        </div>
      </section>
    </StyledHeader>
  );
}

function Timeline(propriedades) {
  //console.log("Dentro do compomente", propriedades.playlists);
  const PlayNames = Object.keys(propriedades.playlists);
  //Statement
  //Retorno pro expressão
  //.map() - Converte alguma coisa para outra coisa
  //No caso converter lista de nomes para componentes React
  return (
    <StyledTimeline>
      {PlayNames.map((playlistName) => {
        const videos = propriedades.playlists[playlistName];
        //console.log(videos);
        return (
          <section>
            <h2>{playlistName}</h2>
            <div>
              {videos.map((video) => {
                return (
                  <a href={video.url}>
                    <img src={video.thumb} />
                    <span>{video.title}</span>
                  </a>
                );
              })}
            </div>
          </section>
        );
      })}
    </StyledTimeline>
  );
}
