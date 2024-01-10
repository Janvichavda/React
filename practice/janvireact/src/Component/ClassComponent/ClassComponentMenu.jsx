import React, { Component } from 'react';
import { Link, Outlet } from 'react-router-dom';

class ClassCompoMenu extends Component {
    render() {
        return (
            <>

              <ol>
                <li><Link to="whatiscomponent"> What is Component </Link></li>
                <li><Link to="classcomponent"> What is Class Component </Link></li>
                <li><Link to="stateclasscomponent"> State in Class Component </Link></li>
                <li><Link to="props"> Props in Class Component </Link></li>
                <li><Link to="lifecycle"> Life Cycle in Class Component </Link></li>
              </ol>

                <div className="row">
                    <div className="col">
                        <Outlet/>
                    </div>
                </div>
            </>
        );
    }
}

export default ClassCompoMenu;