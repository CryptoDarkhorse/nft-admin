import Layout from "../components/layout/Layout";

function Notification() {
    return (
        <>
            <Layout
                headTitle="Notification"
                pageTitle="Notification"
                pageTitleSub={"Welcome ENFTX Notification page"}
                pageClass={"dashboard"}
                parent={"Home"}
                child={"Notification"}
            >
                <div className="row">
                    <div className="col-xl-12">
                        <div className="card">
                            <div className="card-header">
                                <h4 className="card-title">Recent Notification </h4>
                            </div>
                            <div className="card-body">
                                <div className="all-notification">
                                    <div className="notification-list">
                                        <div className="lists">
                                            <a href="#" className="">
                                                <div className="d-flex align-items-center">
                                                    <span className="me-3 icon success">
                                                        <i className="bi bi-check"></i>
                                                    </span>
                                                    <div>
                                                        <p>
                                                            Account created
                                                            successfully
                                                        </p>
                                                        <span>
                                                            2020-11-04 12:00:23
                                                        </span>
                                                    </div>
                                                </div>
                                            </a>
                                            <a href="#" className="">
                                                <div className="d-flex align-items-center">
                                                    <span className="me-3 icon fail">
                                                        <i className="bi bi-x"></i>
                                                    </span>
                                                    <div>
                                                        <p>
                                                            2FA verification
                                                            failed
                                                        </p>
                                                        <span>
                                                            2020-11-04 12:00:23
                                                        </span>
                                                    </div>
                                                </div>
                                            </a>
                                            <a href="#" className="">
                                                <div className="d-flex align-items-center">
                                                    <span className="me-3 icon success">
                                                        <i className="bi bi-check"></i>
                                                    </span>
                                                    <div>
                                                        <p>
                                                            Device confirmation
                                                            completed
                                                        </p>
                                                        <span>
                                                            2020-11-04 12:00:23
                                                        </span>
                                                    </div>
                                                </div>
                                            </a>
                                            <a href="#" className="">
                                                <div className="d-flex align-items-center">
                                                    <span className="me-3 icon pending">
                                                        <i className="bi bi-exclamation-triangle"></i>
                                                    </span>
                                                    <div>
                                                        <p>
                                                            xs verification
                                                            pending
                                                        </p>
                                                        <span>
                                                            2020-11-04 12:00:23
                                                        </span>
                                                    </div>
                                                </div>
                                            </a>

                                            <a>
                                                More
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    );
}
export default Notification;
