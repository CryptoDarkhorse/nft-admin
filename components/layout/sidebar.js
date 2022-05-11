import Link from "next/link";
import { useRouter } from "next/router";

function Sidebar() {
    const router = useRouter();
    return (
        <>
            <div className="sidebar">
                <div className="brand-logo">
                    <Link href="/">
                        <a className="full-logo">
                            <img src="./images/logoi.png" alt="" width="30" />
                        </a>
                    </Link>
                    {/* <Link href="/">
                        <a className="mini-logo">
                            <img src="./images/logoi.png" alt="" width="40" />
                        </a>
                    </Link> */}
                </div>
                <div className="menu">
                    <ul>
                        <li className={router.pathname == "/" ? "active" : ""}>
                            <Link href="/">
                                <a>
                                    <span>
                                        <i class="ri-layout-grid-fill"></i>
                                    </span>
                                    <span className="nav-text">Dashboard</span>
                                </a>
                            </Link>
                        </li>
                        <li className={router.pathname == "/bids" ? "active" : ""}>
                            <Link href="/bids">
                                <a>
                                    <span>
                                        <i class="ri-briefcase-line"></i>
                                    </span>
                                    <span className="nav-text">Bids</span>
                                </a>
                            </Link>
                        </li>
                        <li className={router.pathname == "/saved" ? "active" : ""}>
                            <Link href="/saved">
                                <a>
                                    <span>
                                        <i class="ri-heart-line"></i>
                                    </span>
                                    <span className="nav-text">Saved</span>
                                </a>
                            </Link>
                        </li>
                        <li
                            className={
                                router.pathname == "/collection" ? "active" : ""
                            }
                        >
                            <Link href="/collection">
                                <a>
                                    <span>
                                        <i class="ri-star-line"></i>
                                    </span>
                                    <span className="nav-text">Collection</span>
                                </a>
                            </Link>
                        </li>
                        <li
                            className={
                                router.pathname == "/wallet" ? "active" : ""
                            }
                        >
                            <Link href="/wallet">
                                <a>
                                    <span>
                                        <i className="ri-wallet-line"></i>
                                    </span>
                                    <span className="nav-text">Wallet</span>
                                </a>
                            </Link>
                        </li>
                        <li
                            className={
                                router.pathname == "/profile" ? "active" : ""
                            }
                        >
                            <Link href="/profile">
                                <a>
                                    <span>
                                    <i class="ri-account-box-line"></i>
                                    </span>
                                    <span className="nav-text">Profile</span>
                                </a>
                            </Link>
                        </li>
                        <li
                            className={
                                router.pathname == "/settings-profile"
                                    ? "active"
                                    : ""
                            }
                        >
                            <Link href="/settings-profile">
                                <a>
                                    <span>
                                        <i className="ri-settings-3-line"></i>
                                    </span>
                                    <span className="nav-text">Settings</span>
                                </a>
                            </Link>
                        </li>
                        <li
                            className={
                                router.pathname == "/signin"
                                    ? "active"
                                    : " logout"
                            }
                        >
                            <Link href="/signin">
                                <a>
                                    <span>
                                        <i className="ri-logout-circle-line"></i>
                                    </span>
                                    <span className="nav-text">Signout</span>
                                </a>
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className="card-limit-progress">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                        <div className="flex-grow-2 me-3">
                            <div className="d-flex justify-content-between mb-1">
                                <h5 className="mb-1">Visa</h5>
                                <p className="mb-0">
                                    <strong>75% </strong>
                                </p>
                            </div>
                            <div className="progress">
                                <div
                                    className="progress-bar bg-light"
                                    role="progressbar"
                                    style={{
                                        width: "75%",
                                    }}
                                ></div>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex justify-content-between align-items-center mb-3">
                        <div className="flex-grow-2 me-3">
                            <div className="d-flex justify-content-between mb-1">
                                <h5 className="mb-1">Master</h5>
                                <p className="mb-0">
                                    <strong>65% </strong>
                                </p>
                            </div>
                            <div className="progress">
                                <div
                                    className="progress-bar bg-white"
                                    role="progressbar"
                                    style={{
                                        width: "65%",
                                    }}
                                ></div>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex justify-content-between align-items-center mb-3">
                        <div className="flex-grow-2 me-3">
                            <div className="d-flex justify-content-between mb-1">
                                <h5 className="mb-1">Paypal</h5>
                                <p className="mb-0">
                                    <strong>50% </strong>
                                </p>
                            </div>
                            <div className="progress">
                                <div
                                    className="progress-bar bg-white"
                                    role="progressbar"
                                    style={{
                                        width: "50%",
                                    }}
                                ></div>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex justify-content-between align-items-center mb-2">
                        <div className="flex-grow-2 me-3">
                            <div className="d-flex justify-content-between mb-1">
                                <h5 className="mb-1">Amex</h5>
                                <p className="mb-0">
                                    <strong>20% </strong>
                                </p>
                            </div>
                            <div className="progress">
                                <div
                                    className="progress-bar bg-white"
                                    role="progressbar"
                                    style={{
                                        width: "20%",
                                    }}
                                >

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Sidebar;
