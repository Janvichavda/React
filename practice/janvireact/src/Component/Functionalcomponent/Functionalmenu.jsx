import React from 'react'
import { Link, Outlet } from 'react-router-dom';

const FunctionalCompoMenu = () => {
    return (
        <>
            <div className="row">
                <div className="col-6 offset-6">
                    <ol>
                        <li><Link to="whatisfunctionalcomponent"> What is Functional Component </Link></li>
                        <li><Link to="stateinfunccomp"> State </Link></li>
                        <li><Link to="propsinfunccomp"> Props </Link></li>
                        <li><Link to="jsxFunComInReact"> jsxFunComInReact </Link></li>
                        <li><Link to="ControlledComponent"> ControlledComponent </Link></li>
                        <li><Link to="MultipleControlledComponent"> MultipleControlledComponent </Link></li>
                        <li><Link to="RestVsSpreadComponentInReact"> RestVsSpreadComponentInReact </Link></li>
                        <li><Link to="HooksInFunctionalCompo"> HooksInFunctionalCompo </Link></li>
                        <li><Link to="UseEffectHooksInFunctionalCompo"> UseEffectHooksInFunctionalCompo </Link></li>
                        <li><Link to="UseLayoutEffect"> UseLayoutEffect </Link></li>
                        <li><Link to="UseRefEffectHooksInFunctionalCompo"> UseRefEffectHooksInFunctionalCompo </Link></li>
                        <li><Link to="UseCallbackHooksInFunctionalCompo"> UseCallbackHooksInFunctionalCompo </Link></li>
                        <li><Link to="useMemo"> UseMemo </Link></li>
                    </ol>
                </div>
            </div>

            <div className="row">
                <div className="col">
                    <Outlet />
                </div>
            </div>
        </>
    )
}

export default FunctionalCompoMenu;
