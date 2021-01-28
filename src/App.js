import React from 'react';
import {HeaderPit, Wrapper} from './components/HeaderPit';
import LogoPit from './components/LogoPitflix';
import ButtonPit from './components/ButtonPit';
import FooterPit from './components/FooterPit';
import LinkPit from './components/LinkPit';
import {BannerPit, Text} from './components/BannerPit';
import TagPit from './components/TagPit';
import TitlePit from './components/TitlePit';
import DescriptionPit from './components/TitlePit/DescriptionPit';
import ThumbPit from './components/ThumbPit';
import MarcoBruno from './assets/img/MarcoBruno.png';
import Marco from './assets/img/Marco.jpg';

// JSX = (J)ava(S)cript (X)ML
function App() {
  return(
    <>  
      <HeaderPit>
        <Wrapper>
          <LogoPit />

          <ButtonPit>Novo Video</ButtonPit>
        </Wrapper>
      </HeaderPit>

      <BannerPit>
        <Text> 
          <TagPit>FrontEnd</TagPit>
          <TitlePit>Maratona para lançamento da FiredLabs</TitlePit>
          <DescriptionPit>Marco Bruno, neste video fez uma maratona de lancamento da plataforma FiredLabs.
          </DescriptionPit>
        </Text>

        <ThumbPit 
        src={MarcoBruno} 
        alt="Thumb do Marco Bruno"
        title="Maratona para lançamento da FiredLabs"
        avatar={Marco}
        channelName="MarcoBrunoDev"
        />
      </BannerPit>


      <FooterPit>
        <LogoPit/>
        <p>Feito com 💙 por <LinkPit href="www.pietrofreire.com" target="_blank" >Pietro Freire</LinkPit></p>
      </FooterPit>
    </>
  );
}

export default App;
