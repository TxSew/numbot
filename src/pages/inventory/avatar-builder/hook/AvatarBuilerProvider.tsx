import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { BotConfiguration, BotPart } from '../../../../components/bot/BotConfiguration';
import { useBackendControllerContext } from '../../../../contexts/BackendControllerContext';
import { useBackdropContext } from '../../../../providers/BackdropProvider';
import { GropupType, IAvatar, IAvatarItem, ItemType } from '../../../../types/backend';
import { useAccountPlayer } from '../../../player/hook/AccountPlayerContext';
import { botPartsTab, Member, TypeFilter } from '../configs';

export default function useAvatarBuilerContext() {
    const { avatarController } = useBackendControllerContext();
    const { showBackdrop, hideBackdrop } = useBackdropContext();
    const { player } = useAccountPlayer();

    const [tabSelect, setTabSelect] = useState(botPartsTab[0]);
    const [avatars, setAvatars] = useState<IAvatar[]>([]);
    const [avatarItems, setAvatarItems] = useState<IAvatarItem[]>([]);
    const [currentMember, setCurrentMember] = useState<Member>({} as Member);
    const [filterType, setFilterType] = useState<GropupType>();

    const [initialAvatars, setInitialAvatars] = useState(avatars);

    // const isFullBody = !Object.values(ItemType).includes(tabSelect.itemType as ItemType);
    const isFullBody = tabSelect.itemType === ItemType.full;
    const isBody = tabSelect.itemType === ItemType.body;

    const getAvatars = async (playerId: number) => {
        showBackdrop();
        await avatarController
            .getAvatars(playerId)
            .then((res) => {
                setInitialAvatars(res);
                setAvatars(res);
            })
            .catch(() => {})
            .finally(async () => {
                await sleep(2000);
                hideBackdrop();
            });
    };

    // const { data: avatar } = useQuery({
    //     queryKey: ['avatars'],
    //     queryFn: () => getAvatars(),
    //     staleTime: 5 * 60 * 1000, // 5 minutes
    //     initialData: [],
    // });

    const filteredAvatarItemByItemType = (category: ItemType) => {
        return avatars
            .flatMap((e) => e.avatarItems)
            .filter((group) => {
                if (filterType === GropupType.Owned) {
                    return group.itemType === category && group.bought === true;
                }
                return group.itemType === category;
            });
    };

    const partsByCategory = useMemo(() => {
        return {
            [ItemType.head]: filteredAvatarItemByItemType(ItemType.head),
            [ItemType.righthand]: filteredAvatarItemByItemType(ItemType.righthand),
            [ItemType.lefthand]: filteredAvatarItemByItemType(ItemType.lefthand),
            [ItemType.body]: filteredAvatarItemByItemType(ItemType.body),
            [ItemType.leg]: filteredAvatarItemByItemType(ItemType.leg),
            [ItemType.full]: [],
        };
    }, [avatars]);

    const handleSelectAvatar = async (type: ItemType, image: string, ids: number[]) => {
        showBackdrop();
        await avatarController
            .bulkStoreAvatar(player?.id!, { ids, isInitial: false })
            .then(async (res) => {
                await sleep(1000);
                res &&
                    setCurrentMember((prevMem) => ({
                        ...prevMem,
                        bot_configuration: {
                            ...prevMem.bot_configuration,
                            [type]: { id: ids[0], image_name: image },
                        },
                    }));
            })
            .finally(async () => {
                await sleep(1000);
                hideBackdrop();
            });
    };

    const sortAvatars = (type: TypeFilter) => {
        const data = isFullBody ? avatars : avatarItems;
        const setData = isFullBody ? setAvatars : setAvatarItems;

        let sortedData;

        switch (type) {
            case TypeFilter.abc:
                sortedData = [...data].sort((a, b) => a.name.localeCompare(b.name));
                break;
            case TypeFilter.price:
                sortedData = [...data].sort((a, b) => b.price - a.price);
                break;
            case TypeFilter.new:
                sortedData = [...data].sort((a, b) => {
                    if (!a.createdAt && !b.createdAt) return 0;
                    if (!a.createdAt) return 1;
                    if (!b.createdAt) return -1;
                    return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
                });
                break;
            default:
                return;
        }

        setData(sortedData as any);
    };

    const filterAvatars = (type?: GropupType) => {
        if (type === undefined) {
            setFilterType(undefined);
            setAvatars([...initialAvatars]);
            return;
        }

        setFilterType(type);

        const filterConditions: Record<GropupType, (avatar: IAvatar) => boolean> = {
            [GropupType.Owned]: (e) => e.bought === true,
            [GropupType.Human]: (e) => e.groupType === GropupType.Human,
            [GropupType.Creatures]: (e) => e.groupType === GropupType.Creatures,
            [GropupType.Machines]: (e) => e.groupType === GropupType.Machines,
            [GropupType.Seasonal]: (e) => e.groupType === GropupType.Seasonal,
            [GropupType.Others]: (e) => e.groupType === GropupType.Others,
            [GropupType.RustToDiamond]: (e) => e.groupType === GropupType.RustToDiamond,
        };

        const filterAvatar =
            type === GropupType.Owned
                ? [...avatars].filter(filterConditions[type])
                : [...initialAvatars].filter(filterConditions[type]);

        setAvatars(filterAvatar);
    };

    const setMember = () => {
        const botConfiguration = player?.userAvatarItems.reduce(
            (config, item) => {
                const { itemType, id, imageURL } = item.avatarItem;
                config[itemType] = {
                    id,
                    image_name: imageURL,
                };
                return config;
            },
            {} as Record<ItemType, BotPart>
        );
        setCurrentMember((prevMem) => ({
            ...prevMem,
            coin_available: player?.coin ?? 0,
            id: player?.id!,
            bot_configuration: botConfiguration ?? ({} as BotConfiguration),
        }));
    };

    useEffect(() => {
        if (!player) {
            return;
        }
        getAvatars(player?.id!);
        setMember();
    }, [player?.id]);

    useEffect(() => {
        setAvatarItems(partsByCategory[tabSelect.itemType]);
    }, [tabSelect, avatars]);

    return {
        currentMember,
        setCurrentMember,
        tabSelect,
        setTabSelect,
        parts: avatarItems,
        full: avatars,
        isBody,
        isFullBody,
        handleSelectAvatar,
        sortAvatars,
        filterAvatars,
        filterType,
    };
}

export function sleep(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

type AvatarBuilerProviderContextType = ReturnType<typeof useAvatarBuilerContext>;

export const AvatarBuilerContext = createContext<AvatarBuilerProviderContextType>(
    {} as AvatarBuilerProviderContextType
);

export const useAvatarBuiler = () => useContext(AvatarBuilerContext);
