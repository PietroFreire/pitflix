import React from 'react';
import AvatarPit from '../AvatarPit';
import { Background, Thumb, WrapperThumb, Title } from './style';

function ThumbPit({ src, alt, avatar, channelName, title }){

    return(
        <Background>
            <WrapperThumb>
                <Thumb src={src} alt={alt} />
                <AvatarPit photo={avatar} channelName={channelName} />
                <Title>{title}</Title>
            </WrapperThumb>
        </Background>
    );
}

export default ThumbPit;