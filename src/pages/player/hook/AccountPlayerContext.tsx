/* eslint-disable react-hooks/exhaustive-deps */
import React, { createContext, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../contexts/AuthContext';
import { useBackendControllerContext } from '../../../contexts/BackendControllerContext';
import { IOrganizationUser } from '../../../types/backend';

interface AccountPlayerContextType {
    isLoading: boolean;
    organizationUsers: IOrganizationUser[] | null;
    setOrganizationUsers: (organizationUsers: IOrganizationUser[]) => void;
    player: IOrganizationUser | null;
    selectPlayer: (player: IOrganizationUser) => void;
    switchPlayer: () => void;
    loadPlayer: (userId: number) => Promise<void>;
}

const AccountPlayerContext = createContext<AccountPlayerContextType | undefined>(undefined);

export const useAccountPlayer = (): AccountPlayerContextType => {
    const context = useContext(AccountPlayerContext);
    if (!context) {
        throw new Error('useAccountPlayer must be used within an AccountPlayerProvider');
    }
    return context;
};

export const AccountPlayerProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const { user } = useAuth();

    const [isLoading, setIsLoading] = useState(true);
    const [player, setPlayer] = useState<IOrganizationUser | null>(() => {
        const storedPlayer = localStorage.getItem('player');
        return storedPlayer ? JSON.parse(storedPlayer) : null;
    });
    const [organizationUsers, setOrganizationUsers] = useState<IOrganizationUser[] | null>(null);
    const navigate = useNavigate();
    const { organizationUserController } = useBackendControllerContext();

    const selectPlayer = (playerId: IOrganizationUser) => {
        localStorage.setItem('player', JSON.stringify(playerId));
        setPlayer(playerId);
        setIsLoading(false);
    };

    const switchPlayer = () => {
        localStorage.removeItem('player');
        setPlayer(null);
        setIsLoading(false);
        navigate('account/select-player');
    };

    const loadPlayer = async () => {
        if (user?.id) {
            try {
                setIsLoading(true);
                const OrganizationUsers = await organizationUserController.getPlayesByUser(user.id);
                setOrganizationUsers(OrganizationUsers);
            } finally {
                setIsLoading(false);
            }
        } else {
            setIsLoading(false);
            navigate('account/select-player');
        }
    };

    useEffect(() => {
        if (player) {
            navigate('/game-modes');
            return;
        }

        loadPlayer();
    }, [user, player]);

    return (
        <AccountPlayerContext.Provider
            value={{
                isLoading,
                organizationUsers,
                player,
                selectPlayer,
                switchPlayer,
                loadPlayer,
                setOrganizationUsers,
            }}
        >
            {children}
        </AccountPlayerContext.Provider>
    );
};
