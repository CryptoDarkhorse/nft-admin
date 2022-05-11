import PerfectScrollbar from "react-perfect-scrollbar";
function GoalsBudget() {
    return (
        <>
            <div className="budget-content" style={{ height: "295px" }}>
            <PerfectScrollbar>
                <ul>
                    <li className="d-flex justify-content-between align-items-center">
                        <div className="d-flex flex-grow-2">
                            <div className="budget-icon me-3 mt-1">
                                <img
                                    src="/images/social/facebook.png"
                                    alt=""
                                    width="40"
                                />
                            </div>
                            <div className="budget-info flex-grow-2 me-3">
                                <div className="d-flex justify-content-between mb-1">
                                    <h5 className="mb-1">Facebook Ads</h5>
                                    <p className="mb-0">
                                        <strong>75 </strong>/ 100
                                    </p>
                                </div>
                                <div className="progress">
                                    <div
                                        className="progress-bar"
                                        role="progressbar"
                                        style={{
                                            width: "75%",
                                        }}
                                    ></div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="d-flex justify-content-between align-items-center">
                        <div className="d-flex flex-grow-2">
                            <div className="budget-icon me-3 mt-1">
                                <img
                                    src="/images/social/youtube.png"
                                    alt=""
                                    width="40"
                                />
                            </div>
                            <div className="budget-info flex-grow-2 me-3">
                                <div className="d-flex justify-content-between mb-1">
                                    <h5 className="mb-1">Youtube Premium</h5>
                                    <p className="mb-0">
                                        <strong>25 </strong>/ 100
                                    </p>
                                </div>
                                <div className="progress">
                                    <div
                                        className="progress-bar bg-success"
                                        role="progressbar"
                                        style={{
                                            width: "25%",
                                        }}
                                    ></div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="d-flex justify-content-between align-items-center">
                        <div className="d-flex flex-grow-2">
                            <div className="budget-icon me-3 mt-1">
                                <img
                                    src="/images/social/spotify.png"
                                    alt=""
                                    width="40"
                                />
                            </div>
                            <div className="budget-info flex-grow-2 me-3">
                                <div className="d-flex justify-content-between mb-1">
                                    <h5 className="mb-1">Spotify Music</h5>
                                    <p className="mb-0">
                                        <strong>50 </strong>/ 100
                                    </p>
                                </div>
                                <div className="progress">
                                    <div
                                        className="progress-bar bg-info"
                                        role="progressbar"
                                        style={{
                                            width: "50%",
                                        }}
                                    ></div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="d-flex justify-content-between align-items-center">
                        <div className="d-flex flex-grow-2">
                            <div className="budget-icon me-3 mt-1">
                                <img
                                    src="/images/social/skype.png"
                                    alt=""
                                    width="40"
                                />
                            </div>
                            <div className="budget-info flex-grow-2 me-3">
                                <div className="d-flex justify-content-between mb-1">
                                    <h5 className="mb-1">Skype Premium</h5>
                                    <p className="mb-0">
                                        <strong>45 </strong>/ 100
                                    </p>
                                </div>
                                <div className="progress">
                                    <div
                                        className="progress-bar bg-danger"
                                        role="progressbar"
                                        style={{
                                            width: "45%",
                                        }}
                                    ></div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="d-flex justify-content-between align-items-center">
                        <div className="d-flex flex-grow-2">
                            <div className="budget-icon me-3 mt-1">
                                <img
                                    src="/images/social/envato.png"
                                    alt=""
                                    width="40"
                                />
                            </div>
                            <div className="budget-info flex-grow-2 me-3">
                                <div className="d-flex justify-content-between mb-1">
                                    <h5 className="mb-1">Envato Element</h5>
                                    <p className="mb-0">
                                        <strong>35 </strong>/ 100
                                    </p>
                                </div>
                                <div className="progress">
                                    <div
                                        className="progress-bar bg-purple"
                                        role="progressbar"
                                        style={{
                                            width: "35%",
                                        }}
                                    ></div>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
                </PerfectScrollbar>
            </div>
        </>
    );
}
export default GoalsBudget;
