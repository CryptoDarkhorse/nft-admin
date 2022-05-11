import { useState } from "react";
function BalanceDetails() {
    const [open, setOpen] = useState("a1");
    return (
        <>
            <div className="row">
                <div className="col-12">
                    <div className="total-balance">
                        <p>Total Balance</p>
                        <h2>$221,478</h2>
                    </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                    <div
                        className={`${
                            open === "a1"
                                ? "balance-stats active"
                                : "balance-stats"
                        }`}
                        onMouseOver={() => setOpen("a1")}
                    >
                        <p>Last Month</p>
                        <h3>$42,678</h3>
                    </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                    <div
                        className={`${
                            open === "a2"
                                ? "balance-stats active"
                                : "balance-stats"
                        }`}
                        onMouseOver={() => setOpen("a2")}
                    >
                        <p>Expenses</p>
                        <h3>$1,798</h3>
                    </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                    <div
                        className={`${
                            open === "a3"
                                ? "balance-stats active"
                                : "balance-stats"
                        }`}
                        onMouseOver={() => setOpen("a3")}
                    >
                        <p>Taxes</p>
                        <h3>$255.25</h3>
                    </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                    <div
                        className={`${
                            open === "a4"
                                ? "balance-stats active"
                                : "balance-stats"
                        }`}
                        onMouseOver={() => setOpen("a4")}
                    >
                        <p>Debt</p>
                        <h3>$365,478</h3>
                    </div>
                </div>
            </div>
        </>
    );
}
export default BalanceDetails;
