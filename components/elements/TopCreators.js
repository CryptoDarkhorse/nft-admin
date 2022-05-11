import { useState } from "react";
const data = [
    {
        id: 1,
        title: "Avy",
        avatar: "1.jpg",
    },
    {
        id: 2,
        title: "Mark",
        follow: true,
        avatar: "2.jpg",
    },
    {
        id: 1,
        title: "Avy",
        avatar: "3.jpg",
    },
    {
        id: 2,
        title: "Mark",
        avatar: "4.jpg",
    },
    {
        id: 1,
        title: "Avy",
        avatar: "5.jpg",
    },
    {
        id: 2,
        title: "Mark",
        avatar: "6.jpg",
    },
    {
        id: 1,
        title: "Avy",
        avatar: "7.jpg",
    },
    {
        id: 2,
        title: "Mark",
        avatar: "8.jpg",
    },
];
function TopCreators() {
    const [open, setOpen] = useState("p1");
    return (
        <>
            {data.map((item, i) => (
                <div className="col-xl-6">
                    <div
                        className={`${open === "p1"
                            ? "d-flex justify-content-between creator-widget active  align-items-center"
                            : "d-flex justify-content-between creator-widget  align-items-center"
                            }`}
                        onMouseOver={() => setOpen("p1")}
                    >
                        <div className="d-flex align-items-center">
                            <div className="top-creators-user-img me-3">
                                <img
                                    src={`/images/avatar/${item.avatar}`}
                                    alt=""
                                    width="60"
                                />
                            </div>
                            <div className="top-creators-info">
                                <h5 className="mb-0">Terry Camacho</h5>
                                <p className="mb-2">60 Items</p>
                                {/* <p>@imsaifun</p> */}
                            </div>
                        </div>
                        <div className="text-end">
                            {item.follow == true ? <a className="btn btn-secondary">Following</a> : <a className="btn btn-outline-primary">Follow</a>}

                        </div>
                    </div>
                </div>
            ))}



        </>
    );
}
export default TopCreators;
