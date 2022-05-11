import { useState } from "react";
import { connect } from "react-redux";
import LineInvestment from "../components/chart/LineInvestment";
import BalanceDetails from '../components/elements/BalanceDetails';
import Layout from "../components/layout/Layout";

function Balance({ investmentData }) {
    const [open, setOpen] = useState("a1");
    return (
        <>
            <Layout
                headTitle="Wallet"
                pageTitle="Wallet"
                pageTitleSub={"Welcome ENFTX Wallet page"}
                pageClass={"dashboard"}
                parent={"Home"}
                child={"Wallet"}
            >
                <div className="row">
                    <div className="col-xxl-6 col-xl-6 col-lg-6">
                        <div className="card">
                            <div className="card-header">
                                <h4 className="card-title">Balance Details</h4>
                            </div>
                            <div className="card-body">
                                <BalanceDetails />
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-6 col-xl-6 col-lg-6">
                        <div className="card">
                            <div className="card-header">
                                <h4 className="card-title">Latest Transaction</h4>
                                <a href="#">See More</a>
                            </div>
                            <div className="card-body bs-0 p-0 top-creators-content  bg-transparent">
                                <div class="d-flex justify-content-between creator-widget active  align-items-center">
                                    <div class="d-flex align-items-center">
                                        <div class="top-creators-user-img me-3">
                                            <img src="/images/items/item_1.png" alt="" width="60" />
                                        </div>
                                        <div class="top-creators-info">
                                            <h5 class="mb-0">Terry Camacho</h5>
                                            <p class="mb-2">60 Items</p>
                                        </div>
                                    </div>
                                    <div class="text-end">
                                        <h5 class="text-primary">0.2658 ETH</h5>
                                    </div>
                                </div>
                                <div class="d-flex justify-content-between creator-widget active  align-items-center">
                                    <div class="d-flex align-items-center">
                                        <div class="top-creators-user-img me-3">
                                            <img src="/images/items/item_1.png" alt="" width="60" />
                                        </div>
                                        <div class="top-creators-info">
                                            <h5 class="mb-0">Terry Camacho</h5>
                                            <p class="mb-2">60 Items</p>
                                        </div>
                                    </div>
                                    <div class="text-end">
                                        <h5 class="text-primary">0.2658 ETH</h5>
                                    </div>
                                </div>
                                <div class="d-flex justify-content-between creator-widget active  align-items-center">
                                    <div class="d-flex align-items-center">
                                        <div class="top-creators-user-img me-3">
                                            <img src="/images/items/item_1.png" alt="" width="60" />
                                        </div>
                                        <div class="top-creators-info">
                                            <h5 class="mb-0">Terry Camacho</h5>
                                            <p class="mb-2">60 Items</p>
                                        </div>
                                    </div>
                                    <div class="text-end">
                                        <h5 class="text-primary">0.2658 ETH</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-8 col-xl-8 col-lg-6">
                        <div className="card">
                            <div className="card-header">
                                <h4 className="card-title">Investment</h4>
                            </div>
                            <div className="card-body">

                                <LineInvestment
                                    investmentData={investmentData}
                                />
                            </div>
                        </div>
                    </div>
                    <div className=" col-xxl-4 col-xl-4 col-lg-6">
                        <div className="row">
                            <div className="col-xxl-12 col-xl-12 col-lg-12">
                                <div className="credit-card visa">
                                    <div className="type-brand">
                                        <h4>Debit Card</h4>
                                        <img
                                            src="./images/cc/visa.png"
                                            alt=""
                                        />
                                    </div>
                                    <div className="cc-number">
                                        <h6>1234</h6>
                                        <h6>5678</h6>
                                        <h6>7890</h6>
                                        <h6>9875</h6>
                                    </div>
                                    <div className="cc-holder-exp">
                                        <h5>Saiful Islam</h5>
                                        <div className="exp">
                                            <span>EXP:</span>
                                            <strong>12/21</strong>
                                        </div>
                                    </div>

                                    <div className="cc-info">
                                        <div className="row justify-content-between align-items-center">
                                            <div className="col-5">
                                                <div className="d-flex">
                                                    <p className="me-3">Status</p>
                                                    <p>
                                                        <strong>Active</strong>
                                                    </p>
                                                </div>
                                                <div className="d-flex">
                                                    <p className="me-3">Currency</p>
                                                    <p>
                                                        <strong>USD</strong>
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="col-xl-7">
                                                <div className="d-flex justify-content-between">
                                                    <div className="ms-3">
                                                        <p>Credit Limit</p>
                                                        <p>
                                                            <strong>
                                                                2000 USD
                                                            </strong>
                                                        </p>
                                                    </div>
                                                    <div id="circle1"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-12 col-xl-12 col-lg-12">
                                <div className="credit-card payoneer">
                                    <div className="type-brand">
                                        <h4>Debit Card</h4>
                                        <img
                                            src="./images/cc/payoneer.png"
                                            alt=""
                                        />
                                    </div>
                                    <div className="cc-number">
                                        <h6>1234</h6>
                                        <h6>5678</h6>
                                        <h6>7890</h6>
                                        <h6>9875</h6>
                                    </div>
                                    <div className="cc-holder-exp">
                                        <h5>Saiful Islam</h5>
                                        <div className="exp">
                                            <span>EXP:</span>
                                            <strong>12/21</strong>
                                        </div>
                                    </div>
                                    <div className="cc-info">
                                        <div className="row">
                                            <div className="col-5">
                                                <div className="d-flex">
                                                    <p className="me-3">Status</p>
                                                    <p>
                                                        <strong>Active</strong>
                                                    </p>
                                                </div>
                                                <div className="d-flex">
                                                    <p className="me-3">Currency</p>
                                                    <p>
                                                        <strong>USD</strong>
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="col-xl-7">
                                                <div className="d-flex justify-content-between">
                                                    <div className="ms-3">
                                                        <p>Credit Limit</p>
                                                        <p>
                                                            <strong>
                                                                1500/2000 USD
                                                            </strong>
                                                        </p>
                                                    </div>
                                                    <div id="circle3"></div>
                                                </div>
                                            </div>
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
const mapStateToProps = (state) => ({
    investmentData: state.LineInvestment.investment,
});
export default connect(mapStateToProps, {})(Balance);
