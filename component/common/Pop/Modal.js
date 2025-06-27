"use client";

import { BiSupport } from "react-icons/bi";
import { useEffect } from "react";

const ExpediaModal = ({ show, onClose }) => {
    useEffect(() => {
        if (typeof window !== "undefined") {
            if (show) {
                document.body.style.overflow = "hidden";
            } else {
                document.body.style.overflow = "";
            }
        }

        // Optional: clean up just in case component unmounts
        return () => {
            document.body.style.overflow = "";
        };
    }, [show]);

    const phoneNumber = "+1(855) 497-3456"; // Centralized for consistency

    return (
        <>
            {/* Backdrop */}
            {show && (
                <div
                    className="modal-backdrop fade show"
                    style={{ zIndex: 1040, backgroundColor: "rgba(0, 0, 0, 0.5)" }}
                    onClick={onClose}
                />
            )}

            {/* Modal */}
            <div
                className={`modal fade expedia-popup ${show ? "show" : ""}`}
                tabIndex="-1"
                role="dialog"
                style={{
                    display: show ? "block" : "none",
                    zIndex: 999999999999999,
                    paddingLeft: "0px",
                }}
                aria-modal={show}
            >
                <div className="modal-dialog modal-dialog-centered">



                    <a
                        href={`tel:${phoneNumber}`}
                        className="modal-content text-center text-decoration-none text-dark"
                        onClick={(e) => {
                            // Let anchor default behavior trigger phone call
                        }}
                        style={{
                            cursor: "pointer",
                            display: "block",
                            width: "100%",
                        }}
                    >
                        <div className="content-center">

                            <div className="modal-header justify-content-end">
                                <button
                                    type="button"
                                    className="btn-close"
                                    onClick={(e) => {
                                        e.stopPropagation(); // Prevent call trigger
                                        onClose();
                                    }}
                                    aria-label="Close"
                                ></button>
                            </div>
                            <div className="modal-body">
                                <div className="expedia-logo justify-content-center">
                                    <img src="/images/expedia-logo.png" />
                                </div>
                                <p className="expedia-logo mt-3">EXPEDIA HELP DESK</p>

                                <img
                                    src="/images/call-girl.png"
                                    className="agent-image img-fluid"
                                    alt="Agent"
                                />
                                <p> <b>
                                    No Hold - Calls Answered in 5 Sec
                                </b></p>
                                <div className="modal-number-container">

                                    <span>

                                        <BiSupport size={34} />
                                    </span>
                                    <h4>
                                        {phoneNumber}
                                    </h4>
                                </div>





                                <p className="text-dark fw-bold">24/7 Reservation Support</p>

                                <div className="row expedia-buttons mb-3">
                                    {[
                                        "Tickets Booking",
                                        "Changes",
                                        "Cancellation",
                                        "Customer Service",
                                    ].map((label, i) => (
                                        <div className="col-6 mb-2" key={i}>
                                            <div className="btn btn-primary w-100">{label}</div>
                                        </div>
                                    ))}
                                </div>

                                <div className="modal-number-container">

                                    <span>

                                        <BiSupport size={34} />
                                    </span>
                                    <h4>
                                        {phoneNumber}
                                    </h4>
                                </div>


                            </div>
                        </div>
                        <div className="modal-footer-custom">
        <div>

                            <p>
                                24x7 Quick Call Assistance <br />
                                <BiSupport />   {phoneNumber}
                            </p>
                            <p>

                            </p>
        </div>

        <div >
                    <button className="btn btn-primary">
                        Call Now
                    </button>
        </div>
                        </div>
                    </a>

                </div>
            </div>
        </>
    );
};

export default ExpediaModal;
