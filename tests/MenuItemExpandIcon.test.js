import renderer from 'react-test-renderer';
import MenuItemExpandIcon from '../src/Navigation/MenuItemExpandIcon'

it('return correct icon at open', () => {
    const component = renderer.create (
        <MenuItemExpandIcon isOpen={true}></MenuItemExpandIcon>
    );

    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
}

);