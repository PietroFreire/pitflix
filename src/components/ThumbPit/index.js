import React from 'react';
import { Thumb, WrapperThumb } from './style';

function ThumbPit({ src, alt }){
    return(
        <WrapperThumb>
            <Thumb src={src} alt={alt} />
        </WrapperThumb>
    );
}

export default ThumbPit;