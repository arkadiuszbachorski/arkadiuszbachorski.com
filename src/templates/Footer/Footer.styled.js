import styled from 'styled-components';
import theme from '../../styles/theme';

export const FooterContainer = styled.footer`
    display: flex;
    width: 100%;
    align-items: center;
    flex-direction: column;
    margin: 8rem 0 2rem;

    @media (${theme.mediaQuery.tablet}) {
        margin-top: 14rem;
    }
`;

export const IconsContainer = styled.div`
    max-width: 400px;
    width: 100%;
    padding: 0 1rem;
    display: flex;
    justify-content: center;

    > *:not(:last-child) {
        margin-right: 4rem;
    }

    svg path {
        fill: ${theme.colors.font};
    }
`;

export const Text = styled.span`
    text-align: center;
    width: 100%;

    span {
        color: ${theme.colors.primary};
    }
`;
