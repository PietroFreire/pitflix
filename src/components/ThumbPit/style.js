import styled from 'styled-components';

export const Avatar = styled.img`
    position: absolute;
    top: var(--space);
    left: var(--space);
    width: 50rem;
    height: 50rem;
    border-radius: 50%;
    border: 4rem solid var(--color-frontend);
    transform: translateX(calc((100% + var(--space)) * -1)); //Deixando o Avatar fora do elemento.
    opacity: 0;
    transition: transform 200ms linear, opacity 100ms linear; //Quando o hover for desativado, a transicao ira ser linear em 200ms junto com a opacidade em 100ms.
`;

export const Thumb = styled.img`
    width: 100%;
    opacity: 1;
`;

export const WrapperThumb = styled.figure`
    position: relative;
    border: var(--border) solid var(--color-frontend);
    width: 640rem;
    overflow: hidden; //Esconder tudo o que passar do elemento.
    cursor: pointer;
    transition: transform 100ms linear;
    background-color: var(--color-frontend);

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

            & > ${Avatar}{ //Aplicacao de estilos no elemento Avatar quando o hover do elemento WrapperThumb for ativado.
                transform: translateX(0); //Colocando o objeto Avatar na posicao 0 do eixo X quando hover for ativado.
                opacity: 1;
                transition: transform 100ms 150ms linear, opacity 300ms 150ms linear; //Quando o hover for ativado, a transicao ira ser linear em 100ms junto com a opacidade em 300ms e com um delay de 150ms
            }
        }
    }
`;
