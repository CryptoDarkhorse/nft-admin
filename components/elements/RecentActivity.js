import { useState } from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
function RecentActivity() {
    const [open, setOpen] = useState("p1");
    return (
        <>
            <div className="activity-content">
                <PerfectScrollbar>
                    <ul>
                        <li
                            className={`${
                                open === "p1"
                                    ? "d-flex justify-content-between align-items-center active"
                                    : "d-flex justify-content-between align-items-center"
                            }`}
                            onMouseOver={() => setOpen("p1")}
                        >
                            <div className="d-flex align-items-center">
                                <div className="activity-user-img me-3">
                                    <img
                                        src="/images/avatar/1.jpg"
                                        alt=""
                                        width="50"
                                    />
                                </div>
                                <div className="activity-info">
                                    <h5 className="mb-0">Papaya</h5>
                                    <p>Purchase by you for 0.05 ETH</p>
                                </div>
                            </div>
                            <div className="text-end">
                                {/* <h5 className="mb-2">+450.00</h5> */}
                                <span className=" text-muted">12 min ago</span>
                            </div>
                        </li>
                        <li
                            className={`${
                                open === "p2"
                                    ? "d-flex justify-content-between align-items-center active"
                                    : "d-flex justify-content-between align-items-center"
                            }`}
                            onMouseOver={() => setOpen("p2")}
                        >
                            <div className="d-flex align-items-center">
                                <div className="activity-user-img me-3">
                                    <img
                                        src="/images/avatar/2.jpg"
                                        alt=""
                                        width="50"
                                    />
                                </div>
                                <div className="activity-info">
                                    <h5 className="mb-0">ETH Received</h5>
                                    <p>0.06 ETH Received</p>
                                </div>
                            </div>
                            <div className="text-end">
                                {/* <h5 className="mb-2">+450.00</h5> */}
                                <span className=" text-muted">12 min ago</span>
                            </div>
                        </li>
                        <li
                            className={`${
                                open === "p3"
                                    ? "d-flex justify-content-between align-items-center active"
                                    : "d-flex justify-content-between align-items-center"
                            }`}
                            onMouseOver={() => setOpen("p3")}
                        >
                            <div className="d-flex align-items-center">
                                <div className="activity-user-img me-3">
                                    <img
                                        src="/images/avatar/3.jpg"
                                        alt=""
                                        width="50"
                                    />
                                </div>
                                <div className="activity-info">
                                    <h5 className="mb-0">John Adams</h5>
                                    <p>Started Following you</p>
                                </div>
                            </div>
                            <div className="text-end">
                                {/* <h5 className="mb-2">+450.00</h5> */}
                                <span className=" text-muted">12 min ago</span>
                            </div>
                        </li>
                        <li
                            className={`${
                                open === "p4"
                                    ? "d-flex justify-content-between align-items-center active"
                                    : "d-flex justify-content-between align-items-center"
                            }`}
                            onMouseOver={() => setOpen("p4")}
                        >
                            <div className="d-flex align-items-center">
                                <div className="activity-user-img me-3">
                                    <img
                                        src="/images/avatar/4.jpg"
                                        alt=""
                                        width="50"
                                    />
                                </div>
                                <div className="activity-info">
                                    <h5 className="mb-0">Nature with Beauty</h5>
                                    <p>Has been sold by 12.05 ETH</p>
                                </div>
                            </div>
                            <div className="text-end">
                                {/* <h5 className="mb-2">+450.00</h5> */}
                                <span className=" text-muted">12 min ago</span>
                            </div>
                        </li>
                        <li
                            className={`${
                                open === "p4"
                                    ? "d-flex justify-content-between align-items-center active"
                                    : "d-flex justify-content-between align-items-center"
                            }`}
                            onMouseOver={() => setOpen("p4")}
                        >
                            <div className="d-flex align-items-center">
                                <div className="activity-user-img me-3">
                                    <img
                                        src="/images/avatar/5.jpg"
                                        alt=""
                                        width="50"
                                    />
                                </div>
                                <div className="activity-info">
                                    <h5 className="mb-0">Nature with Beauty</h5>
                                    <p>Has been sold by 12.05 ETH</p>
                                </div>
                            </div>
                            <div className="text-end">
                                {/* <h5 className="mb-2">+450.00</h5> */}
                                <span className=" text-muted">12 min ago</span>
                            </div>
                        </li>
                    </ul>
                </PerfectScrollbar>
            </div>
        </>
    );
}
export default RecentActivity;
