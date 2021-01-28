import styled from 'styled-components';
import { Avatar, WrapperAvatar } from '../AvatarPit/styles';

export const Title = styled.figcaption`
    position: absolute;
    left: var(--space);
    bottom: var(--space);
    font-size: 25rem;
    color: var(--color-gray-light);
    font-weight: 300;
    background-color: var(--color-black-medium);
    padding: 4rem 6rem;
    transform: translateY( calc(100% + var(--space)) );
    opacity: 0;
    transition: transform 200ms linear, opacity 100ms linear; //Quando o hover for desativado, a transicao ira ser linear em 200ms junto com a opacidade em 100ms.
`;

export const Thumb = styled.img`
    width: 100%;
    transition: filter 100ms linear;
`;

export const WrapperThumb = styled.figure`
    position: relative;
    border: var(--border) solid var(--color-frontend);
    width: 640rem;
    overflow: hidden; //Esconder tudo o que passar do elemento.
    cursor: pointer;
    transition: transform 100ms linear;
    background-color: var(--color-frontend);

    & > ${WrapperAvatar}{
        position: absolute;
        top: var(--space);
        left: var(--space);
        margin-right: var(--space);
        transform: translateX( calc((100% + var(--space)) * -1) ); //Deixando o Avatar fora do elemento.
        opacity: 0;
        transition: transform 200ms linear, opacity 100ms linear; //Quando o hover for desativado, a transicao ira ser linear em 200ms junto com a opacidade em 100ms.
    }

`;

export const Background = styled.div`
    --space: 10rem;
    --border: 4rem;
    --move-space: calc(var(--space) * -1); 
    background-color: var(--color-frontend);
    position: relative;

    &::before,
    &::after{
        content: ' ';
        position: absolute;
        height: calc(var(--space) * 1.4);
        width: calc(var(--space) * 1.4);
        background-color: var(--color-frontend);
        transition: transform 100ms linear;
    }

    &::before{
        right: 0;
        top: 0;
        transform-origin: right top;
        transform: rotate(45deg) scale(0);
    }

    &::after{
        left: 0;
        bottom: 0;
        transform-origin: left bottom;
        z-index: -1;
        transform: rotate(-45deg) scale(0);
    }

    &:hover{
        &::before{
            transform: rotate(45deg) scale(1);
        }

        &::after{
            transform: rotate(-45deg) scale(1);
        }

        & > ${WrapperThumb}{
            transform: translate(var(--move-space), var(--move-space));

            & > ${Thumb}{
                filter: brightness(0.6); //Aplicacao de efeito grafico
            }

            & > ${WrapperAvatar}{ //Aplicacao de estilos no elemento Avatar quando o hover do elemento WrapperThumb for ativado.
                transform: translateX(0); //Colocando o objeto Avatar na posicao 0 do eixo X quando hover for ativado.
                opacity: 1;
                transition: transform 300ms 200ms linear, opacity 300ms 200ms linear; //Quando o hover for ativado, a transicao ira ser linear em 100ms junto com a opacidade em 300ms e com um delay de 150ms
            }

            & > ${Title}{
                transform: translateY(0);
                opacity: 1;
                transition: transform 300ms 200ms linear, opacity 300ms 200ms linear; //Quando o hover for ativado, a transicao ira ser linear em 100ms junto com a opacidade em 300ms e com um delay de 150ms
            }
            
        }
    }
`;
