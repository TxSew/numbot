import { Container } from '@mui/material';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import BgGradientContainer from '../components/bg-gradient-container';
import { AccountPlayerProvider } from '../pages/player/hook/AccountPlayerContext';

export default function AuthLayout() {
    return (
        <AccountPlayerProvider>
            <BgGradientContainer>
                <Container
                    disableGutters
                    sx={{
                        minWidth: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        height: '100%',
                    }}
                >
                    <Suspense>
                        <Outlet />
                    </Suspense>
                </Container>
            </BgGradientContainer>
        </AccountPlayerProvider>
    );
}
