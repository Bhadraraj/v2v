import React from 'react';
import contactSecImg from '../images/contactUsSecImg.png'
import { FaUser } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
const ContactSupport = () => {
    return (
        <section className='contactSupport'>
            <div className="container">
            <h2 className='text-center py-2'>CONTACT SUPPOPRT</h2>
                <div className="row d-flex justify-content-center">
                  
                    {/* <div className="col-md-4">
                        <img src={contactSecImg} alt="" className='img-fluid' />
                    </div> */}
                    <div className="col-md-8">




                        <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon1">
                                <FaUser />
                            </span>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Name"
                                aria-label="Username"
                                aria-describedby="basic-addon1"
                            />
                        </div>
                        <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon1">
                                <IoIosMail />
                            </span>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Email"
                                aria-label="email"
                                aria-describedby="basic-addon1"
                            />
                        </div>
                        {/* <div className="input-group mb-3">
                            <span className="input-group-text issuesSec" id="basic-addon1">
                                <IoIosMail />
                            </span>

                            <textarea class="form-control" placeholder="Issues" id="exampleFormControlTextarea1" rows="3"></textarea>

                         
                        </div> */}
                        <div class="mb-3">

                            <textarea class="form-control" placeholder="Email" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>

                        <button className="sendMsg">
                            SEND MESSAGE
                        </button>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactSupport