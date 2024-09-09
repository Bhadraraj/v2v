import React, { useState, useEffect } from 'react';
import { IoCloudUploadSharp } from "react-icons/io5";
import { FaMicrophoneAlt } from "react-icons/fa";
import Tesseract from 'tesseract.js';
import * as pdfjsLib from 'pdfjs-dist';

pdfjsLib.GlobalWorkerOptions.workerSrc = `${process.env.PUBLIC_URL}/pdf.worker.mjs`;

const DemoCarosole = () => {
    const [extractedText, setExtractedText] = useState('');
    const [isRecordingEnabled, setIsRecordingEnabled] = useState(false);
    const [recognizedAnswer, setRecognizedAnswer] = useState('');

    const handleFileUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const fileType = file.type;
            if (fileType.includes('image')) {
                extractTextFromImage(file);
            } else if (fileType.includes('pdf')) {
                extractTextFromPDF(file);
            } else {
                alert("Please upload a valid image or PDF file.");
            }
        }
    };

    const extractTextFromImage = (file) => {
        Tesseract.recognize(file, 'eng', { logger: (m) => console.log(m) })
            .then(({ data: { text } }) => setExtractedText(text))
            .catch((err) => console.error("Error extracting text from image: ", err));
    };

    const extractTextFromPDF = async (file) => {
        const reader = new FileReader();
        reader.onload = async function () {
            const typedArray = new Uint8Array(this.result);
            const pdf = await pdfjsLib.getDocument(typedArray).promise;
            let pdfText = '';

            for (let i = 1; i <= pdf.numPages; i++) {
                const page = await pdf.getPage(i);
                const textContent = await page.getTextContent();
                const pageText = textContent.items.map(item => item.str).join(' ');
                pdfText += pageText + '\n';
            }

            setExtractedText(pdfText);
        };
        reader.readAsArrayBuffer(file);
    };

    const handleButtonClick = () => {
        document.getElementById('fileInput').click();
    };

    const readTextAloud = (text) => {
        const endIndex = text.indexOf('END');
        const textToRead = endIndex !== -1 ? text.substring(0, endIndex) : text;

        const utterance = new SpeechSynthesisUtterance(textToRead);

        utterance.onend = () => {
            // Enable "Start Recording" button after reading is done
            setIsRecordingEnabled(true);
        };

        window.speechSynthesis.speak(utterance);
    };

    // Read aloud only when text is updated and not empty, and stop at "END"
    useEffect(() => {
        if (extractedText) {
            readTextAloud(extractedText);
        }
    }, [extractedText]);

    const handleDeleteText = () => {
        setExtractedText('');
        window.speechSynthesis.cancel();  // Stop any ongoing speech
        setIsRecordingEnabled(false);  // Disable recording button
    };

    // Record answer and convert it to text using Web Speech API
    const startRecordingAnswer = () => {
        const recognition = new window.webkitSpeechRecognition();
        recognition.lang = 'en-US';
        recognition.interimResults = false;
        recognition.maxAlternatives = 1;

        recognition.onresult = (event) => {
            const transcript = event.results[0][0].transcript;
            setRecognizedAnswer(transcript);
        };

        recognition.start();

        recognition.onend = () => {
            console.log('Recording finished');
        };
    };

    return (
        <section className="startExamSec">
            <div className="container">
                <div className="row g-4 d-flex justify-content-center">
                    <h2 className='text-center mb-4'>Start Your Exam</h2>

                    <div className="col-xl-4 col-md-6 col-lg-6">
                        <div className="ExamDetailsCards purple">
                            <div className="examDetIcons mb-2">
                                <IoCloudUploadSharp />
                            </div>
                            <div className="examDetailsTitle">
                                <p>Upload Question Paper</p>
                            </div>
                            <div className="examContents">
                                <p>Please upload the question paper in PDF or image format (JPG, PNG). The maximum file size allowed is 5MB.</p>
                            </div>
                            <div className="btnContainer">
                                {/* Hidden file input */}
                                <input
                                    type="file"
                                    accept="image/*,.pdf"
                                    onChange={handleFileUpload}
                                    className="fileInput"
                                    id="fileInput"
                                />
                                {/* Custom button */}
                                <button className="customUploadBtn" onClick={handleButtonClick}>
                                    Upload File
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 col-lg-6">
                        <div className="ExamDetailsCards regCont white">
                            <div className="regcogTxt mb-2">
                                <p className="mb-0 text-center">Recognized Question</p>
                            </div>
                            <div className="examContents recogContent">
                                <p>{extractedText || 'No text recognized yet.'}</p>
                            </div>

                            {/* Display "Delete" button only if text is recognized */}
                            {extractedText && (

<div className="btnContainer">
<button
    className="btnUploads deleteRegBtn" onClick={handleDeleteText}>
{/* <button
    className="btnUploads"
    disabled={!isRecordingEnabled}
    onClick={startRecordingAnswer}
> */}
Delete Recognized Text
</button>
</div>


                                // <div className="btnContainer">
                                //     <button className="customDeleteBtn" onClick={handleDeleteText}>
                                //         Delete Recognized Text
                                //     </button>
                                // </div>
                            )}
                        </div>
                    </div>

                    <div className="col-xl-4 col-md-6 col-lg-6">
                        <div className="ExamDetailsCards purple">
                            <div className="examDetIcons mb-2">
                                <FaMicrophoneAlt />
                            </div>
                            <div className="examDetailsTitle">
                                <p>Record Your Answer</p>
                            </div>
                            <div className="examContents">
                                <p>Click the "Start Recording" button to record your answer. Ensure your microphone is on and working.</p>
                            </div>
                            <div className="btnContainer">
                                {/* Enable Start Recording button only when question is fully read */}
                                <button
                                    className="btnUploads"
                                    disabled={!isRecordingEnabled}
                                    onClick={startRecordingAnswer}
                                >
                                    Start Recording
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 col-lg-6">
                        <div className="ExamDetailsCards regCont white">
                            <div className="regcogTxt mb-2">
                                <p className="mb-0 text-center">Recognized Answer</p>
                            </div>
                            <div className="examContents recogContent printSectionCont">
                                <p>{recognizedAnswer || 'No answer recognized yet.'}</p>
                            </div>
                            <div className="printBtnCont">
                                <button className="printAnsBtn">Print the Answer</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DemoCarosole;
