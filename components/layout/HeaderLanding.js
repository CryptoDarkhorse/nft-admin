import Link from "next/link";
import dynamic from 'next/dynamic'
const ThemeSwitch = dynamic(() => import('../../components/elements/ThemeSwitch'), {
    ssr: false
})
function HeaderLanding() {
    return (
        <>
            <div className="header landing">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <nav className="navbar">
                                <div className="brand-logo">
                                    <Link href="/">
                                    <a>
                                        <img src="./images/logo.png" alt="" />
                                    </a>
                                    </Link>
                                </div>
                                <div className="header-right">
                                <ThemeSwitch />
                                    <a href="#" className="btn btn-primary">
                                        Buy
                                    </a>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default HeaderLanding;
