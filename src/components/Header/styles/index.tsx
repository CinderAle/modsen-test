import { ReactNode } from 'react';
import styled from 'styled-components';

import styles from '@/constants/styles';

const HeaderElement = styled.header`
    font-family: Space_Grotesk;

    width: 100%;
    background-color: ${styles.DARK_BLUE};
    box-shadow: 0px 4px 16.1px rgba(0, 0, 0, 0.1);
`;

const CenterFrame = styled.div`
    width: 1440px;
    margin: 0 auto;
    height: 150px;

    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
`;

export const HeaderBlock = ({ children }: { children: ReactNode }) => {
    return (
        <HeaderElement>
            <CenterFrame>{children}</CenterFrame>
        </HeaderElement>
    );
};

export const RecipeLogo = styled.img`
    width: 48px;
    margin-right: 15px;
`;

export const RecipeHost = styled.h1`
    color: ${styles.WHITE};
    font-size: 24px;

    display: flex;
    align-items: center;
`;

export const HeaderNav = styled.nav`
    background-color: ${styles.DARK_BLUE};
`;

export const PageLink = styled.a`
    color: ${styles.WHITE};
    text-decoration: none;
    font-size: 24px;
`;