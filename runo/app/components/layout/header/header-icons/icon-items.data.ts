import {INavItem} from "../header-navigation/navigation-items/nav-item.interface";
import {IconType} from "react-icons";
import {FaRegHeart, FaShoppingBag, FaUserAlt} from "react-icons/fa";

export interface IIconItem extends Pick<INavItem, 'link'> {
    icon: IconType
}

const iconItemsData: IIconItem[] = [
    {
        icon: FaShoppingBag,
        link: '/cart'
    },
    {
        icon: FaUserAlt,
        link: '/profile'
    },
    {
        icon: FaRegHeart,
        link: '/favorites'
    },
]

export default iconItemsData