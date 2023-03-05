import { Icon } from 'antd';

const MenuItemExpandIcon = (props) => {
    if (props.isOpen) {
        return <img src='./images/icon-arrow-up.svg' alt=""/>
    } else {
        return <img src='./images/icon-arrow-down.svg' alt=""/>
    }
};

export default MenuItemExpandIcon;