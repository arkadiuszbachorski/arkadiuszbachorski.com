import styled from 'styled-components';
import Img from 'gatsby-image';
import SectionWrapper from '../../components/SectionWrapper/SectionWrapper';
import profileDrawing from '../../assets/images/undraw/profile.svg';
import theme from '../../styles/theme';
import { shadowBorder } from '../../styles/shadowBorder';

export const MainWrapper = styled(SectionWrapper)`
    max-width: 1200px;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    align-items: center;
    margin-top: 4rem;
`;

export const GridWrapper = styled.div`
    display: grid;
    width: 100%;
    grid-template-rows: auto auto auto;
    grid-template-columns: 100%;
    grid-template-areas:
        'photo'
        'text1'
        'text2';

    @media (${theme.mediaQuery.tablet}) {
        max-width: 700px;
        grid-template-rows: auto auto;
        grid-template-columns: 200px auto;
        grid-template-areas:
            'photo text1'
            'text2 text2';
    }

    @media (${theme.mediaQuery.desktop}) {
        max-width: 100%;
        grid-template-rows: auto auto;
        grid-template-columns: 250px auto minmax(200px, 15vw);
        grid-template-areas:
            'profile text1 photo'
            'text2 text2 photo';
    }
`;

export const ProfileDrawing = styled.div`
    grid-area: profile;
    display: none;

    @media (${theme.mediaQuery.desktop}) {
        display: block;
        width: 220px;
        background-image: url(${profileDrawing});
        background-repeat: no-repeat;
        background-size: contain;
        height: 150px;
        align-self: start;
    }
`;

export const Text = styled.p`
    text-align: justify;
`;

export const FirstText = styled(Text)`
    grid-area: text1;

    @media (${theme.mediaQuery.tablet}) {
        margin-left: 1rem;
        margin-top: 0;
    }
`;

export const SecondText = styled(Text)`
    grid-area: text2;
`;

export const Image = styled(Img)`
    justify-self: center;
    grid-area: photo;
    width: 170px;
    height: 222px;
    box-shadow: 10px 10px 0 ${theme.colors.primary};
    margin-right: 10px;
    margin-bottom: 10px;
    ${shadowBorder};

    @media (${theme.mediaQuery.tablet}) {
        justify-self: left;
    }

    @media (${theme.mediaQuery.tablet}) {
        place-self: center right;
    }
`;
