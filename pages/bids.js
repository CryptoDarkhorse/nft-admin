import Link from "next/link";
import RecentBid from "../components/elements/RecentBid";
import Layout from "../components/layout/Layout";
function Invoice() {
    return (
        <>
            <Layout
                headTitle="Bids"
                pageTitle="Bids"
                pageTitleSub={"Welcome ENFTX Bids page"}
                pageClass={"dashboard"}
                parent={"Home"}
                child={"Bids"}
            >
                <div className="row">
                    <div class="col-xl-3 col-sm-6">
                        <div class="stat-widget d-flex align-items-center">
                            <div class="widget-icon me-3 bg-primary">
                                <span>
                                    <i className="ri-file-copy-2-line"></i>
                                </span>
                            </div>
                            <div class="widget-content">
                                <h3>24K</h3>
                                <p>Artworks</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-sm-6">
                        <div class="stat-widget d-flex align-items-center">
                            <div class="widget-icon me-3 bg-success">
                                <span>
                                    <i className="ri-file-list-3-line"></i>
                                </span>
                            </div>
                            <div class="widget-content">
                                <h3>82K</h3>
                                <p>Auction</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-sm-6">
                        <div class="stat-widget d-flex align-items-center">
                            <div class="widget-icon me-3 bg-warning">
                                <span>
                                    <i className="ri-file-paper-line"></i>
                                </span>
                            </div>
                            <div class="widget-content">
                                <h3>200</h3>
                                <p>Creators</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-sm-6">
                        <div class="stat-widget d-flex align-items-center">
                            <div class="widget-icon me-3 bg-danger">
                                <span>
                                    <i className="ri-file-paper-2-line"></i>
                                </span>
                            </div>
                            <div class="widget-content">
                                <h3>89</h3>
                                <p>Canceled</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-12">
                        <div className="card">
                            <div className="card-header flex-row">
                                <h4 className="card-title">Active Bids </h4>
                                <Link href="/create-invoice">
                                    <a className="btn btn-primary">
                                        Place a Bid
                                    </a>
                                </Link>
                            </div>
                            <div className="card-body p-0 bs-0 bg-transparent">
                                <div className="bid-table">
                                    <RecentBid/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    );
}
export default Invoice;
