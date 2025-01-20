import { useState } from 'react';
import { appConfig } from '../../../configs/AppConfig';
import { useSmallerThan } from '../../../hooks/useResponsive';
import { useAccountPlayer } from '../../../pages/player/hook/AccountPlayerContext';
import { ItemType } from '../../../types/backend';
import { PartsBotProgress } from '../../helpers';

export default function ScoreBoardInventory() {
    const isXSmall = useSmallerThan('xs');
    const isSmall = useSmallerThan('sm');
    const isMedium = useSmallerThan('md');

    const [isOnClickLogout, setIsOnClickLogout] = useState<boolean>(false);

    const { player, switchPlayer } = useAccountPlayer();

    const handleLogout = () => {
        switchPlayer();
        setIsOnClickLogout(false);
    };

    const getDimensions = () => {
        if (isXSmall) {
            return {
                width: 200,
                height: 65,
                imageSize: 26,
                fontSize: 13,
            };
        }
        if (isSmall) {
            return {
                width: 220,
                height: 75,
                imageSize: 26,
                fontSize: 13,
            };
        }
        if (isMedium) {
            return {
                width: 250,
                height: 85,
                imageSize: 30,
                fontSize: 14,
            };
        }
        return {
            width: 270,
            height: 92,
            imageSize: 32,
            fontSize: 14,
        };
    };

    const { width, height, imageSize, fontSize } = getDimensions();
    return (
        <>
            {isOnClickLogout ? (
                <g
                    className="bot-logout"
                    style={{ cursor: 'pointer' }}
                    onClick={() => {
                        setIsOnClickLogout(!isOnClickLogout);
                    }}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 149.43 75.24"
                        width={width}
                        height={height}
                        className="background-logout"
                        style={{ fill: '#1d1d1b' }}
                        aria-label="profile"
                    >
                        <g
                            data-name="Layer 2"
                            style={{
                                isolation: 'isolate',
                            }}
                        >
                            <g data-name="Layer 1">
                                <path
                                    className="cls-profile-panel-2"
                                    style={{ opacity: 0.3, mixBlendMode: 'multiply' }}
                                    d="M2 0v39.16c0 6.68 5.15 12.09 11.51 12.09h8.2L25 69.18a7 7 0 0 0 6.91 6.06h85.71a7 7 0 0 0 6.87-5.81l2.72-18.18h10.69c6.35 0 11.51-5.41 11.51-12.09V0Z"
                                />
                                <path
                                    d="M34.41 72.1a6.36 6.36 0 0 1-6.15-4.74L24.88 46.5H11.51A10.78 10.78 0 0 1 .75 35.74V.75h145.93v35a10.78 10.78 0 0 1-10.76 10.75h-11.35l-3.38 20.86A6.37 6.37 0 0 1 115 72.1Z"
                                    style={{
                                        fill: '#a6b6bc',
                                    }}
                                />
                                <path
                                    className="cls-profile-panel-4"
                                    style={{ fill: '#1d1d1b' }}
                                    d="M145.93 1.5v34.24a10 10 0 0 1-10 10H124l-.29 1.12-3.24 20.3a5.61 5.61 0 0 1-5.47 4.19H34.41A5.62 5.62 0 0 1 29 67.17l-3.23-20.3-.3-1.12H11.51a10 10 0 0 1-10-10V1.5zm1.5-1.5H0v35.74a11.51 11.51 0 0 0 11.51 11.51H24.3l3.23 20.3a7.12 7.12 0 0 0 6.88 5.3H115a7.1 7.1 0 0 0 6.87-5.3l3.24-20.3h10.77a11.52 11.52 0 0 0 11.51-11.51V0Z"
                                />
                                <path
                                    className="cls-profile-panel-2"
                                    style={{ opacity: 0.3, mixBlendMode: 'multiply' }}
                                    d="m25.35 45.32-.29-1.12h-16a9.9 9.9 0 0 1-4-.82 9.94 9.94 0 0 0 6.4 2.32h13.99ZM143.49 1.46v32.73c0 5.52-2.6 9-8.12 9h-12.82l-.29 1.12L119 65.62c-.65 2.47-2.21 4.19-4.76 4.19H32a5.6 5.6 0 0 1-1.64-.26 5.65 5.65 0 0 0 4.08 1.76H115a5.6 5.6 0 0 0 5.42-4.19l3.24-20.3.34-1.12h11.93a10 10 0 0 0 10-10V1.46Z"
                                />
                                <path
                                    className="cls-profile-panel-5"
                                    style={{ fill: '#4c5a64' }}
                                    d="M11.86 39.73a4.91 4.91 0 0 1-4.92-4.91V7.64h46.59v27.18a4.92 4.92 0 0 1-4.92 4.91Z"
                                />
                                <path
                                    className="cls-profile-panel-4"
                                    style={{ fill: '#1d1d1b' }}
                                    d="M52.78 8.39v26.43A4.17 4.17 0 0 1 48.61 39H11.86a4.17 4.17 0 0 1-4.17-4.16V8.39zm1.5-1.5H6.19v27.93a5.66 5.66 0 0 0 5.67 5.66h36.75a5.66 5.66 0 0 0 5.67-5.66z"
                                />
                                <path
                                    className="cls-profile-panel-5"
                                    style={{ fill: '#4c5a64' }}
                                    d="M64.64 39.73a4.91 4.91 0 0 1-4.92-4.91V7.64h80.86v27.18a4.91 4.91 0 0 1-4.92 4.91Z"
                                />
                                <path
                                    className="cls-profile-panel-4"
                                    style={{ fill: '#1d1d1b' }}
                                    d="M139.83 8.39v26.43a4.17 4.17 0 0 1-4.17 4.18h-71a4.17 4.17 0 0 1-4.17-4.16V8.39h79.36m1.5-1.5H59v27.93a5.66 5.66 0 0 0 5.67 5.66h71a5.66 5.66 0 0 0 5.67-5.66V6.89Z"
                                />
                                <path
                                    d="M3.35 38.46V3.94h142.58V1.5H1.5v34.24a10 10 0 0 0 4 8c-.92-1.52-2.15-3.33-2.15-5.28"
                                    style={{
                                        opacity: 0.5,
                                        fill: '#fff',
                                    }}
                                />
                                <path
                                    className="cls-profile-panel-2"
                                    style={{ opacity: 0.3, mixBlendMode: 'multiply' }}
                                    d="M84.87 21c-.33-2.78-4.24-4.85-9.17-4.85s-8.84 2.04-9.18 4.85a1 1 0 0 0 0 .18v1.19A4.12 4.12 0 0 0 65 24.89a1 1 0 0 0 0 .18v2.49c0 2.82 4 5 9.19 5s9.2-2.21 9.2-5v-1.1a3.7 3.7 0 0 0 1.55-2.83v-2.49a1 1 0 0 0-.07-.14"
                                />
                                <path
                                    className="cls-profile-panel-4"
                                    style={{ fill: '#1d1d1b' }}
                                    d="M81.39 24.35c-.19-2.44-3.8-4.35-8.24-4.35s-8.05 1.94-8.24 4.38v2.52c0 2.42 3.69 4.38 8.25 4.38s8.25-2 8.25-4.38v-2.55Z"
                                />
                                <path
                                    className="cls-profile-panel-4"
                                    style={{ fill: '#1d1d1b' }}
                                    d="M73.15 32c-5 0-9-2.24-9-5.09v-2.56a1 1 0 0 1 0-.19c.33-2.8 4.13-4.9 8.94-4.9s8.62 2.1 8.94 4.91a1 1 0 0 1 0 .18v2.52c.08 2.85-3.86 5.13-8.88 5.13m-7.55-7.5v2.41c0 1.77 3 3.67 7.55 3.67s7.54-1.9 7.54-3.67V24.4c-.16-2-3.55-3.72-7.54-3.72s-7.38 1.67-7.54 3.72a.13.13 0 0 1-.01.06Z"
                                />
                                <path
                                    className="cls-profile-panel-7"
                                    style={{ fill: '#c7872a' }}
                                    d="M64.9 24.35v2.52c0 2.42 3.69 4.38 8.25 4.38s8.25-2 8.25-4.38v-2.52Z"
                                />
                                <path
                                    className="cls-profile-panel-8"
                                    style={{ fill: '#f9b233' }}
                                    d="M81.4 24.55c0 2.53-3.69 4.58-8.25 4.58s-8.25-2.05-8.25-4.58S68.59 20 73.15 20s8.25 2 8.25 4.55"
                                />
                                <path
                                    className="cls-profile-panel-9"
                                    style={{ fill: '#ffe07b' }}
                                    d="M80.58 22.55a2.84 2.84 0 0 1 .49 1.56c0 2.53-3.69 4.59-8.25 4.59-3.27 0-6.1-1.06-7.43-2.59 1.14 1.76 4.19 3 7.76 3 4.56 0 8.25-2.05 8.25-4.58a3 3 0 0 0-.82-1.98"
                                />
                                <path
                                    style={{ fill: '#ffe07b' }}
                                    className="cls-profile-panel-9"
                                    d="M65.15 24.85c0-2.54 3.69-4.59 8.25-4.59 3.2 0 6 1 7.34 2.49-1.26-1.64-4.18-2.75-7.59-2.75-4.56 0-8.25 2-8.25 4.55a3.1 3.1 0 0 0 .91 2.1 3 3 0 0 1-.66-1.8"
                                />
                                <path
                                    style={{ fill: '#f7a433' }}
                                    className="cls-profile-panel-10"
                                    d="M73.15 27.5c-3.74 0-6.67-1.41-6.67-3.2s2.93-3.19 6.67-3.19 6.66 1.4 6.66 3.19-2.92 3.2-6.66 3.2"
                                />
                                <path
                                    style={{ fill: '#1d1d1b' }}
                                    className="cls-profile-panel-4"
                                    d="M73.15 21.29c3.58 0 6.49 1.35 6.49 3s-2.91 3-6.49 3-6.49-1.35-6.49-3 2.9-3 6.49-3m0-.35c-3.83 0-6.84 1.48-6.84 3.36s3 3.37 6.84 3.37S80 26.19 80 24.3s-3-3.36-6.84-3.36Z"
                                />
                                <path
                                    style={{ fill: '#1d1d1b' }}
                                    className="cls-profile-panel-4"
                                    d="M73.15 21.86c3.38 0 6.15 1.24 6.46 2.81a1.4 1.4 0 0 0 0-.29c0-1.71-2.91-3.09-6.49-3.09s-6.49 1.38-6.49 3.09a1.4 1.4 0 0 0 0 .29c.37-1.57 3.14-2.81 6.52-2.81m-5.93 8.4.35-1.52.35 1.52zm3.87 1.29.35-2.46.36 2.46zm6.07-.53.35-2.46.36 2.46zm2.52-1.24.35-2.46.36 2.46z"
                                />
                                <path
                                    d="m75.52 22.77.87.39c.14.13-.25.27-.38.4a2.6 2.6 0 0 1 .37.37h.46a1.7 1.7 0 0 1 .45.05c.16.06.13.25.15.33s.14.26 0 .32a1.3 1.3 0 0 1-.45.05h-.47a1.2 1.2 0 0 1-.28.38c.2.13.7.26.59.4l-.87.4a2.9 2.9 0 0 1-1-.22c-.29.05-.59.12-.89.15 0 .08 0 .14-.06.21s0 .15-.12.2a3 3 0 0 1-.81 0 3.5 3.5 0 0 1-.8 0c-.12-.05-.11-.15-.12-.21s0-.14 0-.21a6.5 6.5 0 0 1-.88-.15 2.8 2.8 0 0 1-1 .23l-.86-.4c-.1-.13.4-.26.59-.4a1.4 1.4 0 0 1-.26-.37h-.46a1.5 1.5 0 0 1-.44 0c-.13-.06 0-.24 0-.33s0-.27.15-.33a1.2 1.2 0 0 1 .46-.05h.45a3 3 0 0 1 .41-.37c-.14-.14-.53-.27-.39-.41l.88-.4c.27-.05.51.15.77.23a8 8 0 0 1 .77-.16.8.8 0 0 0 .06-.2c0-.06 0-.16.12-.21a2.3 2.3 0 0 1 .64 0 2.2 2.2 0 0 1 .64 0c.11.06.09.15.11.21a.7.7 0 0 0 .07.21 7 7 0 0 1 .75.15c.26-.12.51-.32.78-.26"
                                    style={{
                                        fillRule: 'evenodd',
                                        fill: '#1d1d1b',
                                    }}
                                />
                                <path
                                    style={{ fill: '#1d1d1b' }}
                                    className="cls-profile-panel-4"
                                    d="M66.42 20.37c.19-2.44 3.81-4.38 8.24-4.38s8.06 1.94 8.25 4.38v2.52c0 2.42-3.7 4.38-8.26 4.38s-8.25-2-8.25-4.38v-2.52Z"
                                />
                                <path
                                    className="cls-profile-panel-4"
                                    style={{ fill: '#1d1d1b' }}
                                    d="M74.66 28c-5 0-9-2.24-9-5.09v-2.54a1 1 0 0 1 0-.19c.33-2.8 4.14-4.9 8.94-4.9s8.62 2.1 8.94 4.91a.6.6 0 0 1 0 .18v2.52c.08 2.85-3.85 5.11-8.88 5.11m-7.54-7.5v2.41c0 1.77 3 3.67 7.54 3.67s7.55-1.9 7.55-3.67v-2.43a.13.13 0 0 1 0-.06c-.16-2.05-3.54-3.73-7.54-3.73s-7.37 1.68-7.54 3.73Zm-.7-.11"
                                />
                                <path
                                    className="cls-profile-panel-7"
                                    style={{ fill: '#c7872a' }}
                                    d="M82.92 20.37v2.52c0 2.42-3.7 4.38-8.26 4.38s-8.25-2-8.25-4.38v-2.52Z"
                                />
                                <path
                                    style={{ fill: '#f9b233' }}
                                    className="cls-profile-panel-8"
                                    d="M66.41 20.57c0 2.53 3.69 4.58 8.25 4.58s8.26-2 8.26-4.58S79.22 16 74.66 16s-8.25 2-8.25 4.57"
                                />
                                <path
                                    style={{ fill: '#ffe07b' }}
                                    className="cls-profile-panel-9"
                                    d="M67.23 18.57a2.8 2.8 0 0 0-.49 1.56c0 2.53 3.69 4.58 8.25 4.58 3.27 0 6.1-1.05 7.44-2.58-1.15 1.76-4.19 3-7.77 3-4.56 0-8.25-2-8.25-4.58a3 3 0 0 1 .82-1.98"
                                />
                                <path
                                    style={{ fill: '#ffe07b' }}
                                    className="cls-profile-panel-9"
                                    d="M82.66 20.86c0-2.53-3.69-4.58-8.25-4.58-3.2 0-6 1-7.34 2.49 1.26-1.64 4.19-2.77 7.59-2.77 4.56 0 8.26 2 8.26 4.58a3.13 3.13 0 0 1-.92 2.1 3 3 0 0 0 .66-1.82"
                                />
                                <path
                                    style={{ fill: '#f7a433' }}
                                    className="cls-profile-panel-10"
                                    d="M74.66 23.51c-3.73 0-6.66-1.4-6.66-3.19s2.93-3.19 6.66-3.19 6.67 1.4 6.67 3.19-2.93 3.19-6.67 3.19"
                                />
                                <path
                                    className="cls-profile-panel-4"
                                    style={{ fill: '#1d1d1b' }}
                                    d="M74.66 17.3c3.59 0 6.49 1.36 6.49 3s-2.9 3-6.49 3-6.49-1.35-6.49-3 2.91-3 6.49-3m0-.34c-3.83 0-6.83 1.48-6.83 3.36s3 3.37 6.83 3.37 6.84-1.48 6.84-3.37-3-3.32-6.84-3.32Z"
                                />
                                <path
                                    d="M74.66 17.88c-3.38 0-6.15 1.23-6.46 2.81a1.4 1.4 0 0 1 0-.29c0-1.71 2.91-3.1 6.49-3.1s6.49 1.39 6.49 3.1a1.4 1.4 0 0 1 0 .29c-.36-1.58-3.18-2.81-6.52-2.81"
                                    style={{
                                        mixBlendMode: 'luminosity',
                                        opacity: 0.3,
                                        fill: '#1d1d1b',
                                    }}
                                />
                                <path
                                    className="cls-profile-panel-4"
                                    style={{ fill: '#1d1d1b' }}
                                    d="m81.44 25.43.36-2.46.35 2.46zm-2.96 1.71.36-2.46.35 2.46zm-3.26.55.35-2.46.35 2.46zm-7.8-1.89.36-2.46.35 2.46z"
                                />
                                <path
                                    d="M73.07 19a7 7 0 0 1 .75-.15.7.7 0 0 0 .07-.21c0-.06 0-.15.11-.21a2.2 2.2 0 0 1 .64 0 2.3 2.3 0 0 1 .64 0c.1 0 .1.15.12.21a2 2 0 0 0 .06.2 8 8 0 0 1 .77.16c.26-.08.5-.28.77-.23l.88.4c.14.14-.25.27-.39.41a3 3 0 0 1 .41.37h.45a1.8 1.8 0 0 1 .46.05c.14.07.14.28.15.34s.13.27 0 .33a1.3 1.3 0 0 1-.44 0h-.46a1.3 1.3 0 0 1-.26.38c.19.14.69.27.59.4l-.86.4a2.8 2.8 0 0 1-1-.23 9 9 0 0 1-.88.15 1.3 1.3 0 0 0 0 .21c0 .06 0 .16-.13.21a3.5 3.5 0 0 1-.8 0 3 3 0 0 1-.81 0c-.13-.05-.1-.14-.12-.2a.6.6 0 0 0-.06-.21c-.3 0-.59-.1-.89-.15a2.9 2.9 0 0 1-1 .22l-.88-.4c-.1-.14.4-.27.59-.4a1.3 1.3 0 0 1-.28-.38h-.46a1.3 1.3 0 0 1-.46-.05c-.12-.06 0-.23 0-.32s0-.27.15-.33a1.7 1.7 0 0 1 .5.03h.45a2.6 2.6 0 0 1 .37-.37c-.13-.14-.52-.27-.38-.4l.87-.39c.25-.11.5.09.76.16"
                                    style={{
                                        mixBlendMode: 'luminosity',
                                        fillRule: 'evenodd',
                                        opacity: 0.3,
                                        fill: '#1d1d1b',
                                    }}
                                />
                                <path
                                    style={{ opacity: 0.3, mixBlendMode: 'multiply' }}
                                    className="cls-profile-panel-2"
                                    d="M54.28 34.94h-48a6.52 6.52 0 0 0 6.45 5.55h36a5.56 5.56 0 0 0 5.54-5.54Zm80.87-28.05v21.52a6.53 6.53 0 0 1-6.54 6.53H59a5.54 5.54 0 0 0 5.54 5.54h70.26a6.53 6.53 0 0 0 6.53-6.48V6.89Z"
                                />
                                {isOnClickLogout && (
                                    <>
                                        <path
                                            d="M38.13 67a5.47 5.47 0 0 1-5.33-4l-2.49-16.5h89.23L117 63.06a5.48 5.48 0 0 1-5.33 4Z"
                                            style={{
                                                fill: '#e30613',
                                            }}
                                        />
                                        <path
                                            className="cls-profile-panel-4"
                                            style={{ fill: '#1d1d1b' }}
                                            d="m118.56 47.25-2.33 15.61a4.74 4.74 0 0 1-4.61 3.42H38.13a4.72 4.72 0 0 1-4.6-3.41l-2.25-15.62zm2-1.5H29.34l2.73 17.5a6.24 6.24 0 0 0 6.06 4.53h73.49a6.23 6.23 0 0 0 6-4.53l2.85-17.5Z"
                                        />
                                        <path
                                            style={{ opacity: 0.3, mixBlendMode: 'multiply' }}
                                            className="cls-profile-panel-2"
                                            d="M116.93 47.25 115 61.32a4.74 4.74 0 0 1-4.61 3.42H36.92a4.85 4.85 0 0 1-3.13-1.15 4.77 4.77 0 0 0 4.34 2.69h73.49a4.74 4.74 0 0 0 4.61-3.42l2.33-15.61Z"
                                        />
                                        <rect
                                            x={35.85}
                                            y={49.22}
                                            width={77.76}
                                            height={3.1}
                                            rx={1.55}
                                            style={{
                                                opacity: 0.2,
                                                fill: '#fff',
                                            }}
                                        />
                                    </>
                                )}
                            </g>
                        </g>
                        <text
                            x={isSmall ? width * 0.45 : isMedium ? width * 0.35 : width * 0.33}
                            y={isSmall ? height * 0.42 : isMedium ? height * 0.32 : height * 0.3}
                            style={{
                                fill: '#ffffff',
                                fontSize: `${fontSize}px`,
                                fontWeight: 'bold',
                                fontFamily: 'Arial',
                            }}
                        >
                            {player?.coin ?? 0}
                        </text>
                        <g onClick={handleLogout} style={{ cursor: 'pointer' }}>
                            <text
                                x="40"
                                y="60"
                                style={{
                                    fill: '#ffffff',
                                    fontSize: '0.625rem',
                                    fontWeight: 'bold',
                                    fontFamily: 'Arial',
                                }}
                            >
                                {'SWITCH USER'}
                            </text>
                        </g>
                        <image
                            href={
                                player?.userAvatarItems?.find((e) => e?.avatarItem?.itemType == ItemType.head)
                                    ?.avatarItem?.imageURL ??
                                `${appConfig.url.pathBotProgress}/iron-${PartsBotProgress.HEAD}-shaded.svg`
                            }
                            x={isSmall ? 16 : 14}
                            y={isSmall ? 10 : 7}
                            width={`${imageSize}px`}
                            height={`${imageSize}px`}
                        />
                    </svg>
                </g>
            ) : (
                <g
                    className="bot"
                    style={{ cursor: 'pointer' }}
                    onClick={() => {
                        // console.log('setIsOnClickLogout(false)');
                        setIsOnClickLogout(!isOnClickLogout);
                    }}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 149.43 51.25"
                        width={width}
                        height={height}
                        className="background"
                        preserveAspectRatio="xMidYMid meet"
                        aria-label="profile"
                    >
                        <g
                            data-name="Layer 2"
                            style={{
                                isolation: 'isolate',
                            }}
                        >
                            <g data-name="Layer 1">
                                <path
                                    d="M2 0v39.16c0 6.68 5.15 12.09 11.51 12.09h124.41c6.35 0 11.51-5.41 11.51-12.09V0Z"
                                    style={{
                                        mixBlendMode: 'multiply',
                                        opacity: 0.3,
                                        fill: '#1d1d1b',
                                    }}
                                />
                                <path
                                    d="M11.51 46.5A10.78 10.78 0 0 1 .75 35.74V.75h145.93v35a10.78 10.78 0 0 1-10.76 10.75Z"
                                    style={{
                                        fill: '#a6b6bc',
                                    }}
                                />
                                <path
                                    className="cls-panel-coins-4"
                                    style={{ fill: '#1d1d1b' }}
                                    d="M145.93 1.5v34.24a10 10 0 0 1-10 10H11.51a10 10 0 0 1-10-10V1.5zm1.5-1.5H0v35.74a11.51 11.51 0 0 0 11.51 11.51h124.41a11.52 11.52 0 0 0 11.51-11.51z"
                                />
                                <path
                                    className="cls-panel-coins-5"
                                    style={{ fill: '#4c5a64' }}
                                    d="M11.86 39.73a4.91 4.91 0 0 1-4.92-4.91V7.64h46.59v27.18a4.92 4.92 0 0 1-4.92 4.91Z"
                                />
                                <path
                                    className="cls-panel-coins-4"
                                    style={{ fill: '#1d1d1b' }}
                                    d="M52.78 8.39v26.43A4.17 4.17 0 0 1 48.61 39H11.86a4.17 4.17 0 0 1-4.17-4.16V8.39zm1.5-1.5H6.19v27.93a5.66 5.66 0 0 0 5.67 5.66h36.75a5.66 5.66 0 0 0 5.67-5.66z"
                                />
                                <path
                                    className="cls-panel-coins-5"
                                    style={{ fill: '#4c5a64' }}
                                    d="M64.64 39.73a4.91 4.91 0 0 1-4.92-4.91V7.64h80.86v27.18a4.91 4.91 0 0 1-4.92 4.91Z"
                                />
                                <path
                                    className="cls-panel-coins-4"
                                    style={{ fill: '#1d1d1b' }}
                                    d="M139.83 8.39v26.43a4.17 4.17 0 0 1-4.17 4.18h-71a4.17 4.17 0 0 1-4.17-4.16V8.39h79.36m1.5-1.5H59v27.93a5.66 5.66 0 0 0 5.67 5.66h71a5.66 5.66 0 0 0 5.67-5.66V6.89Z"
                                />
                                <path
                                    style={{ fill: '#1d1d1b', opacity: 0.3, mixBlendMode: 'multiply' }}
                                    className="cls-panel-coins-6"
                                    d="M143.41 1.5v34.25c0 5.52-4.49 8-10 8H9a10 10 0 0 1-4.85-1.27 10 10 0 0 0 7.36 3.26h124.41a10 10 0 0 0 10-10V1.5Z"
                                />
                                <path
                                    d="M3.35 38.46V3.94h142.58V1.5H1.5v34.24a10 10 0 0 0 4 8c-.92-1.52-2.15-3.33-2.15-5.28"
                                    style={{
                                        fill: '#fff',
                                        opacity: 0.5,
                                    }}
                                />
                                <path
                                    className="cls-panel-coins-6"
                                    style={{ fill: '#1d1d1b', opacity: 0.3, mixBlendMode: 'multiply' }}
                                    d="M84.87 21c-.33-2.78-4.24-4.85-9.17-4.85s-8.84 2.04-9.18 4.85a1 1 0 0 0 0 .18v1.19A4.12 4.12 0 0 0 65 24.89a1 1 0 0 0 0 .18v2.49c0 2.82 4 5 9.19 5s9.2-2.21 9.2-5v-1.1a3.7 3.7 0 0 0 1.55-2.83v-2.49a1 1 0 0 0-.07-.14"
                                />
                                <path
                                    className="cls-panel-coins-4"
                                    style={{ fill: '#1d1d1b' }}
                                    d="M81.39 24.35c-.19-2.44-3.8-4.35-8.24-4.35s-8.05 1.94-8.24 4.38v2.52c0 2.42 3.69 4.38 8.25 4.38s8.25-2 8.25-4.38v-2.55Z"
                                />
                                <path
                                    className="cls-panel-coins-4"
                                    style={{ fill: '#1d1d1b' }}
                                    d="M73.15 32c-5 0-9-2.24-9-5.09v-2.56a1 1 0 0 1 0-.19c.33-2.8 4.13-4.9 8.94-4.9s8.62 2.1 8.94 4.91a1 1 0 0 1 0 .18v2.52c.08 2.85-3.86 5.13-8.88 5.13m-7.55-7.5v2.41c0 1.77 3 3.67 7.55 3.67s7.54-1.9 7.54-3.67V24.4c-.16-2-3.55-3.72-7.54-3.72s-7.38 1.67-7.54 3.72a.13.13 0 0 1-.01.06Z"
                                />
                                <path
                                    style={{ fill: '#c7872a' }}
                                    className="cls-panel-coins-8"
                                    d="M64.9 24.35v2.52c0 2.42 3.69 4.38 8.25 4.38s8.25-2 8.25-4.38v-2.52Z"
                                />
                                <path
                                    style={{ fill: '#f9b233' }}
                                    className="cls-panel-coins-9"
                                    d="M81.4 24.55c0 2.53-3.69 4.58-8.25 4.58s-8.25-2.05-8.25-4.58S68.59 20 73.15 20s8.25 2 8.25 4.55"
                                />
                                <path
                                    className="cls-panel-coins-10"
                                    style={{ fill: '#ffe07b' }}
                                    d="M80.58 22.55a2.84 2.84 0 0 1 .49 1.56c0 2.53-3.69 4.59-8.25 4.59-3.27 0-6.1-1.06-7.43-2.59 1.14 1.76 4.19 3 7.76 3 4.56 0 8.25-2.05 8.25-4.58a3 3 0 0 0-.82-1.98"
                                />
                                <path
                                    className="cls-panel-coins-10"
                                    style={{ fill: '#ffe07b' }}
                                    d="M65.15 24.85c0-2.54 3.69-4.59 8.25-4.59 3.2 0 6 1 7.34 2.49-1.26-1.64-4.18-2.75-7.59-2.75-4.56 0-8.25 2-8.25 4.55a3.1 3.1 0 0 0 .91 2.1 3 3 0 0 1-.66-1.8"
                                />
                                <path
                                    style={{ fill: '#f7a433' }}
                                    className="cls-panel-coins-11"
                                    d="M73.15 27.5c-3.74 0-6.67-1.41-6.67-3.2s2.93-3.19 6.67-3.19 6.66 1.4 6.66 3.19-2.92 3.2-6.66 3.2"
                                />
                                <path
                                    className="cls-panel-coins-4"
                                    style={{ fill: '#1d1d1b' }}
                                    d="M73.15 21.29c3.58 0 6.49 1.35 6.49 3s-2.91 3-6.49 3-6.49-1.35-6.49-3 2.9-3 6.49-3m0-.35c-3.83 0-6.84 1.48-6.84 3.36s3 3.37 6.84 3.37S80 26.19 80 24.3s-3-3.36-6.84-3.36Z"
                                />
                                <path
                                    className="cls-panel-coins-4"
                                    style={{ fill: '#1d1d1b' }}
                                    d="M73.15 21.86c3.38 0 6.15 1.24 6.46 2.81a1.4 1.4 0 0 0 0-.29c0-1.71-2.91-3.09-6.49-3.09s-6.49 1.38-6.49 3.09a1.4 1.4 0 0 0 0 .29c.37-1.57 3.14-2.81 6.52-2.81m-5.93 8.4.35-1.52.35 1.52zm3.87 1.29.35-2.46.36 2.46zm6.07-.53.35-2.46.36 2.46zm2.52-1.24.35-2.46.36 2.46z"
                                />
                                <path
                                    d="m75.52 22.77.87.39c.14.13-.25.27-.38.4a2.6 2.6 0 0 1 .37.37h.46a1.7 1.7 0 0 1 .45.05c.16.06.13.25.15.33s.14.26 0 .32a1.3 1.3 0 0 1-.45.05h-.47a1.2 1.2 0 0 1-.28.38c.2.13.7.26.59.4l-.87.4a2.9 2.9 0 0 1-1-.22c-.29.05-.59.12-.89.15 0 .08 0 .14-.06.21s0 .15-.12.2a3 3 0 0 1-.81 0 3.5 3.5 0 0 1-.8 0c-.12-.05-.11-.15-.12-.21s0-.14 0-.21a6.5 6.5 0 0 1-.88-.15 2.8 2.8 0 0 1-1 .23l-.86-.4c-.1-.13.4-.26.59-.4a1.4 1.4 0 0 1-.26-.37h-.46a1.5 1.5 0 0 1-.44 0c-.13-.06 0-.24 0-.33s0-.27.15-.33a1.2 1.2 0 0 1 .46-.05h.45a3 3 0 0 1 .41-.37c-.14-.14-.53-.27-.39-.41l.88-.4c.27-.05.51.15.77.23a8 8 0 0 1 .77-.16.8.8 0 0 0 .06-.2c0-.06 0-.16.12-.21a2.3 2.3 0 0 1 .64 0 2.2 2.2 0 0 1 .64 0c.11.06.09.15.11.21a.7.7 0 0 0 .07.21 7 7 0 0 1 .75.15c.26-.12.51-.32.78-.26"
                                    style={{
                                        fillRule: 'evenodd',
                                        fill: '#1d1d1b',
                                    }}
                                />
                                <path
                                    className="cls-panel-coins-4"
                                    style={{ fill: '#1d1d1b' }}
                                    d="M66.42 20.37c.19-2.44 3.81-4.38 8.24-4.38s8.06 1.94 8.25 4.38v2.52c0 2.42-3.7 4.38-8.26 4.38s-8.25-2-8.25-4.38v-2.52Z"
                                />
                                <path
                                    className="cls-panel-coins-4"
                                    style={{ fill: '#1d1d1b' }}
                                    d="M74.66 28c-5 0-9-2.24-9-5.09v-2.54a1 1 0 0 1 0-.19c.33-2.8 4.14-4.9 8.94-4.9s8.62 2.1 8.94 4.91a.6.6 0 0 1 0 .18v2.52c.08 2.85-3.85 5.11-8.88 5.11m-7.54-7.5v2.41c0 1.77 3 3.67 7.54 3.67s7.55-1.9 7.55-3.67v-2.43a.13.13 0 0 1 0-.06c-.16-2.05-3.54-3.73-7.54-3.73s-7.37 1.68-7.54 3.73Zm-.7-.11"
                                />
                                <path
                                    className="cls-panel-coins-8"
                                    style={{ fill: '#c7872a' }}
                                    d="M82.92 20.37v2.52c0 2.42-3.7 4.38-8.26 4.38s-8.25-2-8.25-4.38v-2.52Z"
                                />
                                <path
                                    className="cls-panel-coins-9"
                                    style={{ fill: '#f9b233' }}
                                    d="M66.41 20.57c0 2.53 3.69 4.58 8.25 4.58s8.26-2 8.26-4.58S79.22 16 74.66 16s-8.25 2-8.25 4.57"
                                />
                                <path
                                    className="cls-panel-coins-10"
                                    style={{ fill: '#ffe07b' }}
                                    d="M67.23 18.57a2.8 2.8 0 0 0-.49 1.56c0 2.53 3.69 4.58 8.25 4.58 3.27 0 6.1-1.05 7.44-2.58-1.15 1.76-4.19 3-7.77 3-4.56 0-8.25-2-8.25-4.58a3 3 0 0 1 .82-1.98"
                                />
                                <path
                                    className="cls-panel-coins-10"
                                    style={{ fill: '#ffe07b' }}
                                    d="M82.66 20.86c0-2.53-3.69-4.58-8.25-4.58-3.2 0-6 1-7.34 2.49 1.26-1.64 4.19-2.77 7.59-2.77 4.56 0 8.26 2 8.26 4.58a3.13 3.13 0 0 1-.92 2.1 3 3 0 0 0 .66-1.82"
                                />
                                <path
                                    className="cls-panel-coins-11"
                                    style={{ fill: '#f7a433' }}
                                    d="M74.66 23.51c-3.74 0-6.66-1.4-6.66-3.19s2.92-3.19 6.66-3.19 6.67 1.4 6.67 3.19-2.93 3.19-6.67 3.19"
                                />
                                <path
                                    className="cls-panel-coins-4"
                                    style={{ fill: '#1d1d1b' }}
                                    d="M74.66 17.3c3.59 0 6.49 1.36 6.49 3s-2.9 3-6.49 3-6.49-1.35-6.49-3 2.91-3 6.49-3m0-.34c-3.83 0-6.83 1.48-6.83 3.36s3 3.37 6.83 3.37 6.84-1.48 6.84-3.37-3-3.32-6.84-3.32Z"
                                />
                                <path
                                    className="cls-panel-coins-6"
                                    style={{ fill: '#1d1d1b', opacity: 0.3, mixBlendMode: 'multiply' }}
                                    d="M74.66 17.88c-3.38 0-6.15 1.23-6.46 2.81a1.4 1.4 0 0 1 0-.29c0-1.71 2.91-3.1 6.49-3.1s6.49 1.39 6.49 3.1a1.4 1.4 0 0 1 0 .29c-.36-1.58-3.18-2.81-6.52-2.81"
                                />
                                <path
                                    className="cls-panel-coins-4"
                                    style={{ fill: '#1d1d1b' }}
                                    d="m81.44 25.43.36-2.46.35 2.46zm-2.96 1.71.36-2.46.35 2.46zm-3.26.55.35-2.46.35 2.46zm-7.8-1.89.36-2.46.35 2.46z"
                                />
                                <path
                                    d="M73.07 19a7 7 0 0 1 .75-.15.7.7 0 0 0 .07-.21c0-.06 0-.15.11-.21a2.2 2.2 0 0 1 .64 0 2.3 2.3 0 0 1 .64 0c.1 0 .1.15.12.21a2 2 0 0 0 .06.2 8 8 0 0 1 .77.16c.26-.08.5-.28.77-.23l.88.4c.14.14-.25.27-.39.41a3 3 0 0 1 .41.37h.45a1.8 1.8 0 0 1 .46.05c.14.07.14.28.15.34s.13.27 0 .33a1.3 1.3 0 0 1-.44 0h-.46a1.3 1.3 0 0 1-.26.38c.19.14.69.27.59.4l-.86.4a2.8 2.8 0 0 1-1-.23 9 9 0 0 1-.88.15 1.3 1.3 0 0 0 0 .21c0 .06 0 .16-.13.21a3.5 3.5 0 0 1-.8 0 3 3 0 0 1-.81 0c-.13-.05-.1-.14-.12-.2a.6.6 0 0 0-.06-.21c-.3 0-.59-.1-.89-.15a2.9 2.9 0 0 1-1 .22l-.88-.4c-.1-.14.4-.27.59-.4a1.3 1.3 0 0 1-.28-.38h-.46a1.3 1.3 0 0 1-.46-.05c-.12-.06 0-.23 0-.32s0-.27.15-.33a1.7 1.7 0 0 1 .5.03h.45a2.6 2.6 0 0 1 .37-.37c-.13-.14-.52-.27-.38-.4l.87-.39c.25-.11.5.09.76.16"
                                    style={{
                                        fillRule: 'evenodd',
                                        opacity: 0.3,
                                        mixBlendMode: 'multiply',
                                        fill: '#1d1d1b',
                                    }}
                                />
                                <path
                                    className="cls-panel-coins-6"
                                    style={{ fill: '#1d1d1b', opacity: 0.3, mixBlendMode: 'multiply' }}
                                    d="M54.28 34.94h-48a6.52 6.52 0 0 0 6.45 5.55h36a5.56 5.56 0 0 0 5.54-5.54Zm80.87-28.05v21.52a6.53 6.53 0 0 1-6.54 6.53H59a5.54 5.54 0 0 0 5.54 5.54h70.26a6.53 6.53 0 0 0 6.53-6.48V6.89Z"
                                />
                            </g>
                        </g>

                        <text
                            x={isSmall ? width * 0.45 : isMedium ? width * 0.35 : width * 0.33}
                            y={isSmall ? height * 0.42 : isMedium ? height * 0.32 : height * 0.3}
                            style={{
                                fill: '#ffffff',
                                fontSize: `${fontSize}px`,
                                fontWeight: 'bold',
                                fontFamily: 'Arial',
                            }}
                        >
                            {player?.coin ?? 0}
                        </text>

                        <image
                            href={
                                player?.userAvatarItems?.find((e) => e?.avatarItem?.itemType == ItemType.head)
                                    ?.avatarItem?.imageURL ??
                                `${appConfig.url.pathBotProgress}/iron-${PartsBotProgress.HEAD}-shaded.svg`
                            }
                            x={isSmall ? 16 : 14}
                            y={isSmall ? 10 : 7}
                            width={`${imageSize}px`}
                            height={`${imageSize}px`}
                        />
                    </svg>
                </g>
            )}
        </>
    );
}
