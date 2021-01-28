import React from 'react';
import AvatarPit from '../AvatarPit';
import { Background, Thumb, WrapperThumb, Title, Timer } from './style';

function ThumbPit({ src, alt, avatar, channelName, title, timer }){

    return(
        <Background>
            <WrapperThumb>
                <Thumb src={src} alt={alt} />
                <AvatarPit photo={avatar} channelName={channelName} />
                <Title>{title}</Title>
                <Timer>{timer}</Timer>
            </WrapperThumb>
        </Background>
    );
}

export default ThumbPit;