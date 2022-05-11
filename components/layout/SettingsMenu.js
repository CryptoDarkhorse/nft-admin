import Link from "next/link";
import { useRouter } from "next/router";

function SettingsMenu() {
    const router = useRouter();
    return (
        <>
            {/* <li className={router.pathname == "/" ? "active" : ""}>
                            <Link href="/">
                                <a>
                                    <span>
                                        <i className="bi bi-house"></i>
                                    </span>
                                    <span className="nav-text">Dashboard</span>
                                </a>
                            </Link>
                            </li> */}

            <ul className="settings-menu">
                <li
                    className={
                        router.pathname == "/settings-profile" ? "active" : ""
                    }
                >
                    <Link href="/settings-profile">
                        <a>Profile</a>
                    </Link>
                </li>
                <li
                    className={
                        router.pathname == "/settings-application"
                            ? "active"
                            : ""
                    }
                >
                    <Link href="/settings-application">
                        <a>Application</a>
                    </Link>
                </li>
                <li
                    className={
                        router.pathname == "/settings-security" ? "active" : ""
                    }
                >
                    <Link href="/settings-security">
                        <a>Security</a>
                    </Link>
                </li>
                <li
                    className={
                        router.pathname == "/settings-activity" ? "active" : ""
                    }
                >
                    <Link href="/settings-activity">
                        <a>Activity</a>
                    </Link>
                </li>
                <li
                    className={
                        router.pathname == "/settings-payment-method"
                            ? "active"
                            : ""
                    }
                >
                    <Link href="/settings-payment-method">
                        <a>Payment Method</a>
                    </Link>
                </li>
                <li
                    className={
                        router.pathname == "/settings-api" ? "active" : ""
                    }
                >
                    <Link href="/settings-api">
                        <a>API</a>
                    </Link>
                </li>
            </ul>
        </>
    );
}
export default SettingsMenu;
