import Base from '../components/layouts/base';

const layoutToPath = [];
layoutToPath['base'] = Base;
//Other path to layout


const LayoutRouter = ({children, path}) => {
    if (layoutToPath[path] !== undefined) {
        return layoutToPath[path](children);
    } else {
        return layoutToPath['base'](children);
    }
}

export default LayoutRouter;