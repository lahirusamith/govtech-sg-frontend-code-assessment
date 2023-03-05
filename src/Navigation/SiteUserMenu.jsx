import React from 'react'
import { Grid, Button, Menu } from 'antd';

const { useBreakpoint } = Grid;

const items = [
  {
    key: 'user/login',
    label: (<Button className='login-btn' type="link" block>Log in</Button>)
  },
  {
    key: 'user/register',
    label: (<Button className='register-btn' block>Register</Button>)
  }
];

const SiteUserMenu = ({menuItemSelected}) => {
  const { xs } = useBreakpoint();

  const onClick = (e) => {
    menuItemSelected(e.key)
  };

  return (
    <>
      <Menu className="site-header-menu site-user-menu" selectedKeys={""} onClick={onClick} mode={xs ? "inline" : "horizontal"} items={items} />
    </>
  );
};

export default SiteUserMenu;