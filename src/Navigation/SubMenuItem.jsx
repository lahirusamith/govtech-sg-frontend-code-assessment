import { Space } from 'antd';
import { Link } from "react-router-dom";

const SubMenuItem = (props) => {

    return (
        <>
            <Link to={props.hrefPath}>
                <Space justify='space-between'>
                    <div>{props.icon && <img src={props.icon} alt=""/>}</div>
                    <div>{props.label}</div>
                </Space>
            </Link>
        </>
    );
}

export default SubMenuItem