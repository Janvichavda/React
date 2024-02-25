import { useRoutes } from "react-router-dom";
import FunctionalCompoMenu from './Functionalmenu.jsx';
import Functionalcomponentinreact from './01Functionalcompinreact.jsx'
import StateFunctionalComponentInReact from './StateFunctional.jsx';
import PropsFunctionalComponentInReact from './PropsFunctional.jsx';
import JsxFunComInReact from './05jsxFunComInReact.jsx'
import ControlledComponent from './06ControlledComponents.jsx'
import MultipleControlledComponent from './07MultipleControlledComp.jsx'
import RestVsSpreadComponentInReact from './08RestVsSpreadComp.jsx'
import HooksInFunctionalCompo from './09HooksinFuncComp.jsx'
import UseEffectHooksInFunctionalCompo from './10Useeffect.jsx'
import UseLayoutEffect from './11UseLayout.jsx'
import UseRefEffectHooksInFunctionalCompo from './12Useref.jsx'
import UseCallbackHooksInFunctionalCompo from './13UseCallBack.jsx'
import UseMemo from './14Usememo.jsx'
import Apifetch from './ApiFetchSingleprop.jsx'
import Context from './UseCONTEXT.jsx'
import Ref from './Useref.jsx'
import ForwardRef from './ForwardRef.jsx'
import Usereducer from './Usereducer.jsx'
import Usecallback from './Usecallback.jsx'
import Janvi from './UseMemo.jsx'


import CustomC from './FCustomcard.jsx'

const FunComponentRoute = () => {

    const routes = useRoutes([
        {
            path: "/",
            element: <FunctionalCompoMenu />,
            children: [
                {
                    path: "whatisfunctionalcomponent",
                    element: <Functionalcomponentinreact />,
                },
                {
                    path: "stateinfunccomp",
                    element: <StateFunctionalComponentInReact />
                },
                {
                    path: "propsinfunccomp",
                    element: <PropsFunctionalComponentInReact />
                },
                {
                    path: "jsxFunComInReact",
                    element: <JsxFunComInReact />
                },
                {
                    path: "ControlledComponent",
                    element: <ControlledComponent />
                },
                {
                    path: "MultipleControlledComponent",
                    element: <MultipleControlledComponent />
                },
                {
                    path: "RestVsSpreadComponentInReact",
                    element: <RestVsSpreadComponentInReact />
                },
                {
                    path: "HooksInFunctionalCompo",
                    element: <HooksInFunctionalCompo />
                },
                {
                    path: "UseEffectHooksInFunctionalCompo",
                    element: <UseEffectHooksInFunctionalCompo />
                },
                {
                    path: "UseLayoutEffect",
                    element: <UseLayoutEffect />
                },
                {
                    path: "UseRefEffectHooksInFunctionalCompo",
                    element: <UseRefEffectHooksInFunctionalCompo />
                },
                {
                    path: "UseCallbackHooksInFunctionalCompo",
                    element: <UseCallbackHooksInFunctionalCompo />
                },
                {
                    path: "useMemo",
                    element: <UseMemo />
                },
                {
                    path: "apifetch",
                    element: <Apifetch />
                },
                {
                    path: "usecontext",
                    element: <Context />
                },
                {
                    path: "useref",
                    element: <Ref />
                },
                {
                    path: "forwardred",
                    element: <ForwardRef />
                },
                {
                    path: "usereducer",
                    element: <Usereducer />
                },
                {
                    path: "usecallback",
                    element: <Usecallback />
                },
                {
                    path: "janvi",
                    element: <Janvi />
                }
            ]
        }
    ])
    return routes;
}

export default FunComponentRoute;