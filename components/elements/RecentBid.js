import React from 'react';

const data = [
    {
        id: 1,
        title: "Avy",
        img: "15.jpg",
        avatar: "1.jpg",
    },
    {
        id: 2,
        img: "16.jpg",
        avatar: "2.jpg",
        title: "Mark"
    },
    {
        id: 2,
        img: "17.jpg",
        avatar: "3.jpg",
        title: "Mark"
    },
    {
        id: 2,
        img: "18.jpg",
        avatar: "4.jpg",
        title: "Mark"
    }
];

const RecentBid = () => {
    return (
        <>
            <div className="table-responsive">
                <table className="table">
                    <thead>
                        <tr>
                            <th>
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        value=""
                                        id="flexCheckDefault"
                                    />
                                </div>
                            </th>
                            <th>Item List</th>
                            <th>Open Price</th>
                            <th>Your Offer</th>
                            <th>Recent Offer</th>
                            <th>Time Left</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, i) => (
                            <tr>
                                <td>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id="flexCheckDefault"
                                        />
                                    </div>
                                </td>
                                <td>
                                    <div className="d-flex align-items-center">
                                        <img
                                            src={`/images/items/${item.img}`}
                                            alt=""
                                            width="60"
                                            className="me-3 rounded"
                                        />
                                        <div className="flex-grow-1">
                                            <h6 className="mb-0">
                                                Cutes Cube
                                                Cool
                                            </h6>
                                            <p className="mb-0">
                                                John Abraham
                                            </p>
                                        </div>
                                    </div>
                                </td>
                                <td>0.0025 ETH</td>
                                <td> 0.0025 ETH</td>
                                <td>
                                    <img
                                        src={`/images/avatar/${item.avatar}`}
                                        alt=""
                                        width="40"
                                        className="me-2 rounded-circle"
                                    />
                                    0.0025 ETH
                                </td>
                                <td>2 Hours 1 min 30s</td>
                                <td><span><i class="ri-close-line me-3"></i></span></td>
                            </tr>
                        ))}

                    </tbody>
                </table>
            </div>
        </>
    );
};

export default RecentBid;