import React from 'react';
import AvatarPit from '../AvatarPit';
import { Background, Thumb, WrapperThumb } from './style';

function ThumbPit({ src, alt, avatar, channelName }){
    return(
        <Background>
            <WrapperThumb>
                <Thumb src={src} alt={alt} />
                <AvatarPit photo={avatar} channelName={channelName} />
            </WrapperThumb>
        </Background>
    );
}

export default ThumbPit;