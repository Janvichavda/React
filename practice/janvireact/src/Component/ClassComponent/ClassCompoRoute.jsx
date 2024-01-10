import { useRoutes } from 'react-router-dom';
import ClassCompoMenu from './ClassComponentMenu.jsx';
import ComponentInReact from './ComponentinReact.jsx';
import ClassComponentInReact from './ClassComponentinReact.jsx';
import StateClassComponentInReact from './StateComponent.jsx'
import Props from './PropsComponent.jsx'
import Lifecycle from './Lifecycle.jsx'
import Notfound from '../Common/Notfound.jsx'
const ClassComponentRoute = () => {
    const routes = useRoutes([
        {
            path: "/",
            element: <ClassCompoMenu />,
            children: [
                {
                    path: "whatiscomponent",
                    element: <ComponentInReact />,
                }, {
                    path: "classcomponent",
                    element: <ClassComponentInReact />,
                }, {
                    path: "stateclasscomponent",
                    element: <StateClassComponentInReact />,

                }, {
                    path: "props",
                    element: <Props />,
                },
                {
                    path: "lifecycle",
                    element: <Lifecycle />,
                },
                {
                    path: '*',
                    element: (<Notfound />)
                }
            ]
        }])


    return routes;
}

export default ClassComponentRoute;