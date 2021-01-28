import styled from 'styled-components';
import container from '../../tools/container';
import ButtonPit from '../ButtonPit';
import LogoPit from '../LogoPitflix';

export const HeaderPit = styled.header`
    background-color: var(--color-black-dark);
    border-bottom: 4px solid var(--color-primary-medium);
    padding: 20rem 0;


    @media(max-width: 800px){
        padding: 15rem 16rem;
    }
`;

export const Wrapper = styled.div`
    ${container} //Usa as configuracoes de estilo impostas na variavel container.
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media(max-width: 800px){
        justify-content: center;

        & > ${LogoPit}{
            height: 35px
        }

        & > ${ButtonPit}{
            background-color: var(--color-primary-medium);
            border-radius: 0;
            border: 0;
            position: fixed;
            bottom: 0;
            width: 100vh;
        }

    }
`

