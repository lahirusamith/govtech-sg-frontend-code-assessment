import { Grid } from 'antd';

const { useBreakpoint } = Grid;

const MainImage = () => {
    const { xs } = useBreakpoint();

    return (
        <>
            <div>
                <img className='main-image' src={ xs ? './images/image-hero-mobile.png' : './images/image-hero-desktop.png'} alt=""/>
            </div>
        </>
    );
}

export default MainImage;