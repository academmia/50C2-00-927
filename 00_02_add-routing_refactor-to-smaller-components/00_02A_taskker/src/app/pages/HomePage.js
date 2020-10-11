import React, { Component } from 'react';

class HomePage extends Component {

    state = {

    }

    render() {
        return (
            <div>   {/* <Page> */}
                <div className={"page-main"}>     {/* <Page.Main> */}
 
                    {/* <Site.Header /> */}
                    <div className="header py-4">
                        <div className="container">
                            <div className="d-flex">
                                <a className="header-brand" href="/">
                                    Taskker
                                </a>
                                <div className="d-flex order-lg-2 ml-auto">
                                    <div className="dropdown d-flex"><a href="/" className="nav-link">
                                        <i className="fe fe-bell"></i> <span className="nav-unread"></span></a></div>
                                    <div className="dropdown"><a href="/"  className="nav-link pr-0 leading-none">
                                        <span className="avatar" 
                                            style={{ backgroundImage: `url('./images/faces/female/25.jpg')` }}>
                                        </span>
                                        <span className="ml-2 d-none d-lg-block"><span className="text-default">James Hansen</span>
                                        <small className="text-muted d-block mt-1">Administrator</small></span></a></div>
                                </div>
                                <a href="/"   className="header-toggler d-lg-none ml-3 ml-lg-0"><span className="header-toggler-icon"></span></a>
                            </div>
                        </div>
                    </div>
                    {/* <Site.Nav /> */}
                    <div className="header d-lg-flex p-0 collapse">
                        <div className="container">
                            <div className="row row align-items-center">
                                <div className="col-lg-3 ml-auto"></div>
                                <div className="col col-lg order-lg-first">
                                    <ul className="nav nav-tabs border-0 flex-column flex-lg-row">
                                        <li className="nav-item"><a aria-current="page" className="nav-link active active" href="/"><i className="fe fe-home"></i> Home</a></li>
                                        <li className="nav-item"><a href="/" className="nav-link"><i className="fe fe-file"></i> Profile</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <Page.Content /> */}
                    <div className="page-content">
                        <div className="container">
                            <div className="page-header">
                                <h1 className="page-title">Dashboard</h1>
                            </div>
                            <div className="row row row-cards">
                    
                                <div className="col col-sm-6 col-lg-3">
                                    <div className="card p-3">
                                        <div className="d-flex align-items-center"><span className="stamp stamp-md bg-blue mr-3"><i className="fe fe-plus"></i></span>
                                            <div>
                                                <div className="h4 m-0"><a href="/" >7 <small>New Tasks</small></a></div><small className="sm text-muted">72 total</small></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col col-sm-6 col-lg-3">
                                    <div className="card p-3">
                                        <div className="d-flex align-items-center"><span className="stamp stamp-md bg-green mr-3"><i className="fe fe-star"></i></span>
                                            <div>
                                                <div className="h4 m-0"><a href="/" >4 <small>Closed Tasks</small></a></div><small className="sm text-muted">from 2 projects</small></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col col-sm-6 col-lg-3">
                                    <div className="card p-3">
                                        <div className="d-flex align-items-center"><span className="stamp stamp-md bg-yellow mr-3"><i className="fe fe-activity"></i></span>
                                            <div>
                                                <div className="h4 m-0"><a href="/" >2 <small>Active Projects</small></a></div><small className="sm text-muted">12 total</small></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col col-sm-6 col-lg-3">
                                    <div className="card p-3">
                                        <div className="d-flex align-items-center"><span className="stamp stamp-md bg-red mr-3"><i className="fe fe-alert-octagon"></i></span>
                                            <div>
                                                <div className="h4 m-0"><a href="/" >4 <small>New Bugs</small></a></div><small className="sm text-muted">27 total</small></div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                    
                            <div className="row row-cards row-deck">
                                <div className="col col-12">
                                    <div className="card">
                                        <div className="table-responsive">
                                            <table className="table card-table table-hover table-outline table-vcenter text-nowrap">
                                                <thead className="">
                                                    <tr className="">
                                                        <th className="text-center w-1"><i className="icon-people"></i></th>
                                                        <th className="">Task</th>
                                                        <th className="">Completed</th>
                                                        <th className="text-center">Status</th>
                                                        <th className="">Project</th>
                                                        <th className="text-center">Assignee</th>
                                                        <th className="text-center"><i className="icon-settings"></i></th>
                                                    </tr>
                                                </thead>
                                                <tbody className="">
                                                    <tr className="">
                                                        <td className="text-center"><span className="avatar d-block" 
                                                            style={{ backgroundImage: `url('./images/faces/female/25.jpg')` }}><span className="avatar-status bg-green"></span></span>
                                                        </td>
                                                        <td className="">
                                                            <div>Task One</div>
                                                            <div className="sm text-muted">Created: Mar 19, 2018</div>
                                                        </td>
                                                        <td className="">
                                                            <div className="clearfix">
                                                                <div className="float-left"><strong>42%</strong></div>
                                                                <div className="float-right"><small className="sm text-muted">deadline: Mar 19, 2052</small></div>
                                                            </div>
                                                            <div className="progress progress-xs">
                                                                <div className="progress-bar bg-yellow" 
                                                                    style={{ width: `42%` }}></div>
                                                            </div>
                                                        </td>
                                                        <td className="text-center"> Working </td>
                                                        <td className="">
                                                            <div className="sm text-muted">Asignee</div>
                                                            <div>James Hansen</div>
                                                        </td>
                                                        <td className="text-center">Project One</td>
                                                        <td className="text-center">
                                                            <div className="dropdown"><a href="/"   className=""><i className="fe fe-more-vertical"></i> </a></div>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col col-12">
                                    <div className="card">
                                        <div className="card-header">
                                            <h3 className="card-title">Projects</h3>
                                        </div>
                                        <div className="table-responsive">
                                            <table className="table card-table table-vcenter text-nowrap">
                                                <thead className="">
                                                    <tr className="">
                                                        <th className="w-1">Code</th>
                                                        <th className="">Project</th>
                                                        <th className="">Client</th>
                                                        <th className="">Created</th>
                                                        <th className="">Deadline</th>
                                                        <th className="">Status</th>
                                                        <th className="">Owner</th>
                                                        <th className=""></th>
                                                        <th className=""></th>
                                                    </tr>
                                                </thead>
                                                <tbody className="">
                                                    <tr className="">
                                                        <td className=""><span className="text-muted">001401</span></td>
                                                        <td className=""><a href="invoice.html" className="text-inherit">Design Works</a></td>
                                                        <td className="">Carlson Limited</td>
                                                        <td className="">15 Dec 2017</td>
                                                        <td className="">21 Jan 2052</td>
                                                        <td className=""><span className="status-icon bg-success"></span> Active</td>
                                                        <td className="">James Hansen</td>
                                                        <td className="text-right"><button className="btn btn-sm btn-secondary">Manage</button>
                                                            <div className="dropdown"><button className="btn btn-sm btn-secondary dropdown-toggle">Actions</button></div>
                                                        </td>
                                                        <td className=""><a href="/"   className="icon"><i className="fe fe-edit"></i></a></td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*footer*/}
                <div className="footer">
                    <div className="container">
                        <div className="row row">
                            <div className="col col-lg-8">
                                <div className="row row">
                                    <div className="col col-6 col-md-3">
                                        <ul className="list-unstyled mb-0">
                                            <li className=""><a href="/" >First Link</a></li>
                                        </ul>
                                    </div>
                                    <div className="col col-6 col-md-3">
                                        <ul className="list-unstyled mb-0">
                                            <li className=""><a href="/" >Second Link</a></li>
                                        </ul>
                                    </div>
                                    <div className="col col-6 col-md-3">
                                        <ul className="list-unstyled mb-0">
                                            <li className=""><a href="/" >Third Link</a></li>
                                        </ul>
                                    </div>
                                    <div className="col col-6 col-md-3">
                                        <ul className="list-unstyled mb-0">
                                            <li className=""><a href="/" >Fourth Link</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col col-lg-4 mt-4 mt-lg-0">Taskker - Task Management System</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default HomePage;