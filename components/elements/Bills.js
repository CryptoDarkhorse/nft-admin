import { useState } from "react";
function Bills() {
    const [open, setOpen] = useState("a1");
    return (
        <>
            <div className="bills-widget">
                <div className={`${
                            open === "a1"
                                ? "bills-widget-content d-flex justify-content-between align-items-center active"
                                : "bills-widget-content d-flex justify-content-between align-items-center"
                        }`}
                        onMouseOver={() => setOpen("a1")}>
                    <div>
                        <p>Netflix</p>
                        <h4>$17.00</h4>
                    </div>
                    <div>
                        <a href="#" className="btn btn-primary">
                            Pay Now
                        </a>
                    </div>
                </div>
                <div className={`${
                            open === "a2"
                                ? "bills-widget-content d-flex justify-content-between align-items-center active"
                                : "bills-widget-content d-flex justify-content-between align-items-center"
                        }`}
                        onMouseOver={() => setOpen("a2")}>
                    <div>
                        <p className="text-danger">Spotify</p>
                        <h4>$11.00</h4>
                    </div>
                    <div>
                        <a href="#" className="btn btn-primary">
                            Pay Now
                        </a>
                    </div>
                </div>
                <div className={`${
                            open === "a3"
                                ? "bills-widget-content d-flex justify-content-between align-items-center active"
                                : "bills-widget-content d-flex justify-content-between align-items-center"
                        }`}
                        onMouseOver={() => setOpen("a3")}>
                    <div>
                        <p className="text-danger">Spotify</p>
                        <h4>$11.00</h4>
                    </div>
                    <div>
                        <a href="#" className="btn btn-primary">
                            Pay Now
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Bills;
