import React from 'react';
import { Background, Thumb, WrapperThumb, Avatar } from './style';

function ThumbPit({ src, alt, avatar, channelName }){
    return(
        <Background>
            <WrapperThumb>
                <Thumb src={src} alt={alt} />
                <Avatar src={avatar} alt={channelName} />
            </WrapperThumb>
        </Background>
    );
}

export default ThumbPit;