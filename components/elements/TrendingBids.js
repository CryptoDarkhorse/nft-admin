import React from 'react';

const data = [
    {
        id: 1,
        title: "Liguid Wave",
        price: 0.15,
        currentBid: 0.15,
        img: "1.jpg",
        avatar: "1.jpg",
        // desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor, ea nisi facere odit ex modi earum commodi."
    },
    {
        id: 2,
        title: "Liguid Wave",
        price: 0.15,
        currentBid: 0.15,
        img: "2.jpg",
        avatar: "2.jpg",
        // desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor, ea nisi facere odit ex modi earum commodi."
    },
    {
        id: 3,
        title: "Liguid Wave",
        price: 0.15,
        currentBid: 0.15,
        img: "3.jpg",
        avatar: "3.jpg",
        // desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor, ea nisi facere odit ex modi earum commodi."
    },
    {
        id: 4,
        title: "Liguid Wave",
        price: 0.15,
        currentBid: 0.15,
        img: "4.jpg",
        avatar: "4.jpg",
        // desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor, ea nisi facere odit ex modi earum commodi."
    },
    {
        id: 5,
        title: "Liguid Wave",
        price: 0.55,
        currentBid: 0.55,
        img: "5.jpg",
        avatar: "5.jpg",
        // desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor, ea nisi facere odit ex modi earum commodi."
    },
    {
        id: 6,
        title: "Liguid Wave",
        price: 0.15,
        currentBid: 0.15,
        img: "6.jpg",
        avatar: "6.jpg",
        // desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor, ea nisi facere odit ex modi earum commodi."
    },
    {
        id: 7,
        title: "Liguid Wave",
        price: 0.15,
        currentBid: 0.15,
        img: "7.jpg",
        avatar: "7.jpg",
        // desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor, ea nisi facere odit ex modi earum commodi."
    },
    {
        id: 8,
        title: "Liguid Wave",
        price: 0.15,
        currentBid: 0.15,
        img: "8.jpg",
        avatar: "8.jpg",
        // desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor, ea nisi facere odit ex modi earum commodi."
    }
];


const TrendingBids = () => {
    return (
        <>

            {data.map((item, i) => (
                <div className="col-xxl-3 col-xl-6 col-lg-6 col-md-6 col-sm-6">
                    <div className="card items">
                        
                        <div className="card-body">
                        <div className="items-img position-relative">
                            <img
                                src={`/images/items/${item.img}`}
                                className="img-fluid rounded mb-3"
                                alt=""
                            />
                            <img
                                src={`/images/avatar/${item.avatar}`}
                                className="creator"
                                width="50"
                                alt=""
                            />
                        </div>
                            
                            <h4 className="card-title">{item.title}</h4>
                            <p>
                                {item.desc}
                            </p>

                            <div className="d-flex justify-content-between">
                                <div className="text-start">
                                <p className="mb-2">
                                        Auction Time
                                    </p>
                                    <h5 className="text-muted">3h 1m 50s</h5>
                                </div>
                                <div className="text-end">
                                    <p className="mb-2">
                                        Current Bid : <strong className="text-primary">{item.currentBid} ETH</strong>
                                    </p>
                                    <h5 className="text-muted">{item.price} ETH</h5>
                                </div>
                            </div>

                            <div className="d-flex justify-content-center mt-3">
                                <a href="" className="btn btn-primary">
                                    Place a Bid
                                </a>
                                {/* <a href="" className="btn btn-outline-primary">
                                    Details
                                </a> */}
                            </div>
                        </div>
                    </div>
                </div>
            ))}


        </>
    );
};

export default TrendingBids;