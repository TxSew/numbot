import { Box, Stack, Typography } from '@mui/material';
import { appConfig } from '../../configs/AppConfig';
import { useAuth } from '../../contexts/AuthContext';
import { ItemType, Role } from '../../types/backend';
import { useAccountPlayer } from './hook/AccountPlayerContext';

export default function SelectPlayerPage() {
    const { logout } = useAuth();
    const { organizationUsers, selectPlayer } = useAccountPlayer();

    return (
        <Stack spacing={2} justifyContent={'space-between'} width={'100%'} sx={{ userSelect: 'none' }}>
            <Box height={{ xs: '8rem', md: '10rem' }} minHeight={{ xs: '8rem', md: '10rem' }} width={'100%'}>
                <Stack direction={'row'} justifyContent={'flex-end'}>
                    <Box position={'absolute'} left={'20px'} top={'30px'} zIndex={1000} onClick={logout}>
                        <button
                            style={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                fontWeight: 700,
                                fontStyle: 'normal',
                                textDecoration: 'none',
                                fontSize: '1.2rem',
                                whiteSpace: 'nowrap',
                                backgroundPosition: '50%',
                                backgroundSize: 'contain',
                                backgroundRepeat: 'no-repeat',
                                backgroundColor: 'transparent',
                                border: 'none',
                                cursor: 'pointer',
                                paddingBottom: '6px',
                                backgroundImage: `url(${appConfig.url.pathStaticMedia}/log-out-family-button.189839e2.svg)`,
                                width: '16.5rem',
                                height: '6rem',
                                marginTop: '-1.5rem',
                                textTransform: 'uppercase',
                            }}
                        >
                            Log out family
                        </button>
                    </Box>

                    <Typography
                        variant="caption"
                        sx={{
                            flex: 'none',
                            width: '11rem',
                            height: '4rem',
                            transform: 'translate(-2rem, 0.5rem)',
                            background: `url(${appConfig.url.pathStaticMedia}/logo-desktop.c4daaa13.svg) no-repeat`,
                            backgroundSize: 'contain',
                            backgroundPosition: '50%',
                            alignSelf: 'flex-start',
                            marginLeft: '0.6rem',
                            marginTop: '1rem',
                        }}
                    />
                </Stack>
            </Box>

            <Typography variant="caption" position={'absolute'} right={20} bottom={20} fontWeight={'bold'}>
                1.0.0
            </Typography>

            <Stack
                direction={'column'}
                minHeight={'auto'}
                height={'calc(100% - 14rem)'}
                flex={'1 1'}
                maxWidth={'100%'}
                sx={{
                    paddingRight: '15px',
                    paddingLeft: '15px',
                    marginRight: 'auto',
                    marginLeft: 'auto',
                    '&::before': {
                        content: '""',
                        paddingTop: '1rem',
                    },
                }}
            >
                <Typography textAlign={'center'} fontWeight={500} mb={'1.5rem'} fontSize={'1.5rem'}>
                    Continue As
                </Typography>

                <Box
                    sx={{
                        overflowY: 'auto',
                    }}
                >
                    {organizationUsers?.map((user) => {
                        const isAdmin = user?.role == Role.admin;
                        const avatarHead = user?.userAvatarItems?.find(
                            (e) => e?.avatarItem?.itemType == ItemType.head
                        )?.avatarItem;

                        return (
                            <div
                                key={user.id}
                                data-tabbed="100"
                                data-tab-navigate="1000"
                                data-tab-scroll="center"
                                style={{
                                    position: 'relative',
                                    backgroundImage: `url(${appConfig.url.pathStaticMedia}/${isAdmin ? 'adult-profile-panel.fe9dd3a0.svg' : 'child-profile-panel.6469b7df.svg'} )`,
                                    backgroundRepeat: 'no-repeat',
                                    backgroundSize: 'cover',
                                    width: '24rem',
                                    height: '7.5rem',
                                    margin: '0.5rem auto',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    cursor: 'pointer',
                                }}
                                onClick={() => {
                                    selectPlayer(user);
                                }}
                            >
                                <Box>
                                    <Box
                                        sx={{
                                            backgroundImage: `url(${avatarHead?.imageURL ?? '/assets/images/bot-head.png'} )`,
                                            position: 'absolute',
                                            backgroundRepeat: 'no-repeat',
                                            backgroundSize: 'cover',
                                            backgroundPosition: '50%',
                                            width: '4.5rem',
                                            height: '4rem',
                                            top: '1.5rem',
                                            left: '1.15rem',
                                        }}
                                    />
                                </Box>

                                <Box position={'absolute'} left={'7.5rem'}>
                                    <Typography fontSize={'1.5rem'} fontWeight={500}>
                                        {user?.firstName} {user?.lastName}
                                    </Typography>
                                </Box>
                            </div>
                        );
                    })}
                </Box>
            </Stack>
        </Stack>
    );
}
