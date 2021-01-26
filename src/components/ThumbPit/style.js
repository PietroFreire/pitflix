import styled from 'styled-components';

export const Avatar = styled.img`
    position: absolute;
    top: var(--space);
    left: var(--space);
    width: 50rem;
    height: 50rem;
    border-radius: 50%;
    border: 2rem solid var(--color-frontend);
    transform: translateX(calc((100% + var(--space)) * -1)); //Deixando o Avatar fora do elemento.
    opacity: 0;
    transition: transform 200ms linear, opacity 100ms linear; //Quando o hover for desativado, a transicao ira ser linear em 200ms junto com a opacidade em 100ms.
`;

export const Thumb = styled.img`
    width: 100%;
`;

export const WrapperThumb = styled.figure`
    --space: 10rem;
    position: relative;
    border-radius: 4rem;
    border: 4rem solid var(--color-frontend);
    width: 640rem;
    overflow: hidden; //Esconder tudo o que passar do elemento.
    cursor: pointer;
    transition: transform 100ms linear;

    &:hover{
        --move: calc(var(--space) * -1);
        transform: translate(var(--move), var(--move));

        & > ${Avatar}{ //Aplicacao de estilos no elemento Avatar quando o hover do elemento WrapperThumb for ativado.
            transform: translateX(0); //Colocando o objeto Avatar na posicao 0 do eixo X quando hover for ativado.
            opacity: 1;
            transition: transform 100ms 150ms linear, opacity 300ms 150ms linear; //Quando o hover for ativado, a transicao ira ser linear em 100ms junto com a opacidade em 300ms e com um delay de 150ms
        }
    }
`;
