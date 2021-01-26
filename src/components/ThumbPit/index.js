import React from 'react';
import { Thumb, WrapperThumb, Avatar } from './style';

function ThumbPit({ src, alt, avatar, channelName }){
    return(
        <WrapperThumb>
            <Thumb src={src} alt={alt} />
            <Avatar src={avatar} alt={channelName} />
        </WrapperThumb>
    );
}

export default ThumbPit;