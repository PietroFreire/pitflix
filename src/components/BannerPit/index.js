import styled from 'styled-components';
import container from '../../tools/container';
import TagPit from '../TagPit';
import TitlePit from '../TitlePit';

export const Text = styled.div`
    padding-top: 10rem;
    max-width: 45%;

    ${TagPit}{
        margin-bottom: 40rem;
    }

    ${TitlePit}{
        margin-bottom: 20rem;
    }
`;

export const BannerPit = styled.section`
    ${container}; //Usa as configuracoes de estilo impostas na variavel container.
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-height: 70vh;
    height: 100vh;
`;
