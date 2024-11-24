import React from 'react';
import './../styles/leftside.css'; // Importing the extracted CSS

const LeftSide = () => {
    return (
        <div className="left-side-container">
            <div className="icon-links">
                <a href="https://github.com/julia-rodrigo" target="_blank" rel="noopener noreferrer">
                    <span className="icon-link">
                        {/* Github SVG Icon */}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="currentColor"
                            className="bi bi-github"
                            viewBox="0 0 16 16"
                        >
                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2 .37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.2 1.87.86 2.33.66.07-.52.28-.86.51-1.06-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.01.08-2.11 0 0 .67-.21 2.2.82A7.59 7.59 0 018 4.68c.67.003 1.34.09 1.97.27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.91.08 2.11.51.56.82 1.28.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
                        </svg>
                    </span>
                </a>
                <a href="https://www.linkedin.com/in/nakul-bhatt-157aba24a/" target="_blank" rel="noopener noreferrer">
                    <span className="icon-link">
                        {/* LinkedIn SVG Icon */}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="currentColor"
                            className="bi bi-linkedin"
                            viewBox="0 0 16 16"
                        >
                            <path d="M0 1.146C0 .513.324 0 .725 0h14.55c.4 0 .725.513.725 1.146v13.708c0 .633-.324 1.146-.725 1.146H.725A.723.723 0 010 14.854V1.146zM4.943 13.46V6.169H2.542v7.292h2.4zm-1.2-8.168a1.4 1.4 0 110-2.801 1.4 1.4 0 010 2.8zM13.463 13.46V9.754c0-1.759-.94-2.576-2.194-2.576-1.011 0-1.452.56-1.703 1.03h-.026V6.17h-2.4c.032.67 0 7.292 0 7.292h2.4V9.76c0-.197.014-.393.073-.533.16-.393.524-.802 1.136-.802.801 0 1.123.606 1.123 1.495v3.54h2.4z" />
                        </svg>
                    </span>
                </a>
                <a href="mailto:juliarodrigo2301@gmail.com" target="_blank" rel="noopener noreferrer">
                    <span className="icon-link">
                        {/* Email SVG Icon */}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="currentColor"
                            className="bi bi-envelope"
                            viewBox="0 0 16 16"
                        >
                            <path d="M0 4a2 2 0 012-2h12a2 2 0 012 2v8a2 2 0 01-2 2H2a2 2 0 01-2-2V4zm2-1a1 1 0 00-1 1v.217l7 4.2 7-4.2V4a1 1 0 00-1-1H2zm13 2.383l-4.803 2.882a1 1 0 01-1.394 0L2 5.383V12a1 1 0 001 1h12a1 1 0 001-1V5.383z" />
                        </svg>
                    </span>
                </a>
            </div>
            <div className="divider"></div>
        </div>
    );
};

export default LeftSide;
