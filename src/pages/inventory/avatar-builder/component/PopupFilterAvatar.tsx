import { Box, Dialog, Stack, Typography } from '@mui/material';
import FilterAllIcon from '../../../../assets/icon/icon-tsx/FilterAllIcon';
import FilterCreaturesIcon from '../../../../assets/icon/icon-tsx/FilterCreaturesIcon';
import FilterHumanIcon from '../../../../assets/icon/icon-tsx/FilterHumanIcon';
import FilterMachinesIcon from '../../../../assets/icon/icon-tsx/FilterMachinesIcon';
import FilterOtherIcon from '../../../../assets/icon/icon-tsx/FilterOtherIcon';
import FilterOwnedIcon from '../../../../assets/icon/icon-tsx/FilterOwnedIcon';
import FilterRustDiamondIcon from '../../../../assets/icon/icon-tsx/FilterRustDiamondIcon';
import FilterSeasonalIcon from '../../../../assets/icon/icon-tsx/FilterSeasonalIcon';
import { appConfig } from '../../../../configs/AppConfig';
import { IPopUp } from '../../../../hooks/usePopUp';
import { GropupType } from '../../../../types/backend';
import { cssBorder } from '../configs';
import { useAvatarBuiler } from '../hook/AvatarBuilerProvider';

type Props = IPopUp & {};

export default function PopupFilterAvatar(props: Props) {
    const { open, onClose } = props;
    const { filterAvatars, filterType } = useAvatarBuiler();

    const iconMapping: Record<string, JSX.Element> = {
        All: <FilterAllIcon />,
        Human: <FilterHumanIcon />,
        Creatures: <FilterCreaturesIcon />,
        Machines: <FilterMachinesIcon />,
        Seasonal: <FilterSeasonalIcon />,
        Others: <FilterOtherIcon />,
        'Rust to diamond': <FilterRustDiamondIcon />,
        Owned: <FilterOwnedIcon />,
    };

    const listFilterData = [
        { title: 'All', type: undefined },
        { title: 'Human', type: GropupType.Human },
        { title: 'Creatures', type: GropupType.Creatures },
        { title: 'Machines', type: GropupType.Machines },
        { title: 'Seasonal', type: GropupType.Seasonal },
        { title: 'Others', type: GropupType.Others },
        { title: 'Rust to diamond', type: GropupType.RustToDiamond },
        { title: 'Owned', type: GropupType.Owned },
    ];

    const listFilter = listFilterData.map(({ title, type }) => ({
        icon: iconMapping[title],
        title,
        type,
    }));

    return (
        <Dialog
            open={open}
            onClose={onClose}
            fullScreen
            PaperProps={{
                sx: {
                    boxShadow: 'none',
                    backgroundColor: 'rgba(0, 0, 0, .8)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                },
            }}
        >
            <Stack
                direction={'row'}
                justifyContent={'center'}
                margin={'auto'}
                width={{ xs: '100%', lg: '25rem' }}
                maxWidth={'380px'}
                marginTop={{ xs: '6rem', md: 'auto' }}
                sx={{
                    position: 'relative',
                    padding: '10px',
                    borderRadius: '2.5rem',
                    backgroundColor: '#36545d',
                    border: 'none',
                    maxHeight: 'calc(100% - 10rem)',
                }}
            >
                {cssBorder.map((sx, i) => (
                    <Box key={i} sx={{ ...sx, position: 'absolute', backgroundSize: 'contain', zIndex: 100 }} />
                ))}

                <Box
                    sx={{
                        position: 'absolute',
                        height: '20px',
                        backgroundColor: '#fff',
                        opacity: 0.33,
                        top: '25px',
                        left: '30px',
                        right: '30px',
                        borderRadius: '10px',
                    }}
                />

                <Box
                    sx={{
                        background: `url(${appConfig.url.pathStaticMedia}/close-panel-cross.daaee7cb.svg) no-repeat`,
                        backgroundPosition: '50%',
                        position: 'absolute',
                        top: '-4.5rem',
                        left: '50%',
                        marginLeft: '-1.75rem',
                        width: '3.5rem',
                        height: '3.5rem',
                        cursor: 'pointer',
                        zIndex: 1,
                    }}
                    onClick={onClose}
                />

                <Box height={'auto !important'} width={'100%'}>
                    <Box
                        overflow={'visible'}
                        width={'auto'}
                        height={'100% !important'}
                        bgcolor={'transparent'}
                        padding={'.5rem'}
                        sx={{
                            borderRadius: '1rem',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            padding: { xs: '1.5rem', sm: '2.5rem' },
                        }}
                    >
                        <Stack
                            direction={'row'}
                            flexWrap={'wrap'}
                            fontSize={'16px'}
                            sx={{
                                overflowY: 'auto',
                            }}
                        >
                            {listFilter.map((e, i) => (
                                <Stack
                                    key={i}
                                    sx={{
                                        position: 'relative',
                                        cursor: 'pointer',
                                        padding: '1em',
                                        margin: '2.5%',
                                        width: '45%',
                                        height: '8rem',
                                        border: `2px solid ${filterType == e.type ? '#98c53b' : '#1d1d1b'} `,
                                        borderRadius: '15px',
                                        overflow: 'hidden',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        backgroundColor: '#284145',
                                        '&:hover': {
                                            border: '2px solid #98c53b',
                                        },
                                        '&:before': {
                                            content: '""',
                                            position: 'absolute',
                                            left: 0,
                                            top: 0,
                                            width: '100%',
                                            height: '100%',
                                            borderRadius: '14px',
                                            boxShadow: 'inset 10px 10px 0 0 rgba(0, 0, 0, 0.15)',
                                        },
                                    }}
                                    onClick={() => {
                                        onClose?.();
                                        filterAvatars(e.type);
                                    }}
                                >
                                    <Box
                                        sx={{
                                            width: '100%',
                                            maxWidth: '3em',
                                            height: 'auto',
                                            fill: 'var(--color-scheme-primary)',
                                        }}
                                    >
                                        {e.icon}
                                    </Box>
                                    <Typography textAlign={'center'} mt={'1rem'} textTransform={'uppercase'}>
                                        {e.title}
                                    </Typography>
                                </Stack>
                            ))}
                        </Stack>
                    </Box>
                </Box>
            </Stack>
        </Dialog>
    );
}
