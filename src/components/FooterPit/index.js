import styled from 'styled-components';
import LogoPit from '../LogoPitflix';

const FooterPit = styled.footer`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 16rem;
    background-color: var(--color-black-dark);
    color: var(--color-gray-light);
    padding: 20rem 0;
    border-top: 4rem solid var(--color-primary-medium);

    & > ${LogoPit}{
        margin-bottom: 20rem;
    }
`;

export default FooterPit;