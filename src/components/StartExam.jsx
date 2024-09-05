
import { IoCloudUploadSharp } from "react-icons/io5";
import React from 'react';
import { FaMicrophoneAlt } from "react-icons/fa";
const StartExam = () => {
    return (



        <section className="startExamSec">

            <div className="container">
                <div className="row g-4">

                    <h2 className='text-center mb-4'>Start Your Exam</h2>


                    <div className=" col-xl-4  col-md-6 col-lg-6 ">
                        <div className="ExamDetailsCards purple">

                            <div className="examDetIcons mb-2">

                                <IoCloudUploadSharp />

                            </div>
                            <div className="examDetailsTitle">
                                <p>
                                    Upload Question Paper</p>

                            </div>
                            <div className="examContents">
                                <p>  Please upload the question paper in PDF or image format (JPG, PNG). The maximum file size allowed is 5MB.</p>
                            </div>
                            <div className="btnContainer">
                                <div className="btnUploads">Uploads</div>
                            </div>
                        </div>
                    </div>
                    <div className=" col-xl-8 col-md-6 col-lg-6 ">
                        <div className="ExamDetailsCards regCont white">

                            <div className="regcogTxt mb-2">
                                <p className="mb-0 text-center">Recogonized Question</p>

                            </div>

                            <div className="examContents">
                                <p> Pellentesque sit amet simpulum alipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante. consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu</p>
                            </div>
                       </div>
                        </div>
                        <div className=" col-xl-4  col-md-6 col-lg-6 ">
                    <div className="ExamDetailsCards purple">
                    
                            <div className="examDetIcons mb-2">
                        
                            <FaMicrophoneAlt />

                        </div>
                        <div className="examDetailsTitle">
                            <p>
                                Record Your Answer</p>

                        </div>
                        <div className="examContents">
                            <p>  Click the "Start Recording" button to record your answer. Ensure your microphone is on and working.</p>
                        </div>
                        <div className="btnContainer">
                            <div className="btnUploads">Start Recording</div>
                        </div>
                    </div>
                </div>
                <div className=" col-xl-8 col-md-6 col-lg-6 ">
                    <div className="ExamDetailsCards regCont white">

                        <div className="regcogTxt mb-2">
                            <p className="mb-0 text-center">Recogonized Answer</p>

                        </div>

                        <div className="examContents">
                            <p>Pellentesque sit amet. Nulrnae , non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante. consectetur, ultrinon suscipit magna interdum eu</p>
                            </div>
                                <div className="printBtnCont">
                                    <button className="printAnsBtn">
                                        Print the Answer

                                    </button>
                                </div>
                        </div>
                </div>
            </div> 
            </div > 
 
        </section >

    ) 
}

export default StartExam