import React from 'react';
import { WrapperAvatar, Avatar, Channel } from './styles';

function AvatarPit({photo, channelName}){
    return(
        <WrapperAvatar>
            <Avatar src={photo} alt={channelName} />
            <Channel>{channelName}</Channel>
        </WrapperAvatar>
    );
}

export default AvatarPit;