import React from 'react'
import { Menu, Grid } from 'antd';
import SubMenuItem from './SubMenuItem';
import MenuItemExpandIcon from './MenuItemExpandIcon';

const { useBreakpoint } = Grid;

const items = [
    {
        key: 'features',
        label: 'Features',
        children: [
            {
                label: (<SubMenuItem icon='./images/icon-todo.svg' label='Todo List' hrefPath="features/todo" />),
                key: 'features/todo',
            },
            {
                label: (<SubMenuItem icon='./images/icon-calendar.svg' label='Calandar' hrefPath="" />),
                key: 'features/calandar',
            },
            {
                label: (<SubMenuItem icon='./images/icon-reminders.svg' label='Reminders' hrefPath="" />),
                key: 'features/reminders',
            },
            {
                label: (<SubMenuItem icon='./images/icon-planning.svg' label='Planning' hrefPath="" />),
                key: 'features/planning',
            }
        ],
        disabled: false
    },
    {
        key: 'company',
        label: 'Company',
        children: [
            {
                label: (<><SubMenuItem label='History' hrefPath="" /></>),
                key: 'company/history',
            },
            {
                label: (<><SubMenuItem label='Our Team' hrefPath="" /></>),
                key: 'company/our-team',
            },
            {
                label: (<><SubMenuItem label='Blog' hrefPath="" /></>),
                key: 'company/blog',
            }
        ],
        disabled: false
    },
    {
        key: 'careers',
        label: 'Careers',
        disabled: true
    },
    {
        key: 'about',
        label: 'About',
        disabled: false
    }
];

const SiteContentMenu = ({menuItemSelected}) => {
    const { xs } = useBreakpoint();
    const onClick = (e) => {
        menuItemSelected(e.key);
    };

    return (
        <Menu className="site-header-menu" expandIcon={MenuItemExpandIcon} selectedKeys={""} onClick={onClick} mode={xs ? "inline" : "horizontal"} items={items} />
    );
};

export default SiteContentMenu;
