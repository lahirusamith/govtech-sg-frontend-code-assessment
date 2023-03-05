import { Row, Col, Grid } from 'antd';
import { Drawer } from 'antd'
import { useState } from 'react'
import SiteContentMenu from "./SiteContentMenu";
import SiteUserMenu from "./SiteUserMenu";

const { useBreakpoint } = Grid;

const MenuWrapper = () => {
    const [open, setOpen] = useState(false);
    const { xs } = useBreakpoint();

    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };

    const menuItemSelected = (clickedItem) => {
        console.log('click ' + clickedItem);
        setOpen(false);
    }       

    return (
        <>
            {xs ? (
                <Row justify='end'>
                    <Col span={1} offset={12}>
                        <span type="primary" onClick={showDrawer}><img src={'./images/icon-menu.svg'} alt=""/></span>
                        <Drawer placement={"right"} width="70%" onClose={onClose} open={open} >
                            <SiteContentMenu menuItemSelected={menuItemSelected}/>
                            <SiteUserMenu menuItemSelected={menuItemSelected}/>
                        </Drawer>
                    </Col>
                </Row>
            ) :
                (
                    <Row wrap={false}>
                        <Col span={12}>
                            <SiteContentMenu menuItemSelected={menuItemSelected}/>
                        </Col>
                        <Col span={6} offset={6}>
                            <SiteUserMenu menuItemSelected={menuItemSelected}/>
                        </Col>
                    </Row>
                )
            }
        </>
    );
};

export default MenuWrapper;