// src/pages/Contact.jsx
import React from 'react';

const Contact = () => {

  return (
    <div className="main-content">
      {/* Hero Container */}
      <div className="heroContainer text-center">
        <h1>Contact Me</h1>
        <p>Let's get in touch.</p>
      </div>

      {/* Body Container */}
      <div className="contactBody"  style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'flex-start'}} >

          <div className="svgContainer" >
              <img src="/BrennaClark_UX_2023.svg" alt="Resume SVG" className="responsive-svg" style={{maxWidth: '100%'}}/>
          </div>
          
          <div className="contactLinkContainer" style={{paddingTop: '10vh'}}>
        
            <div>{/* Email */}
              <a href="mailto:brennacclark@gmail.com"><i className="material-icons">email</i> Email - brennacclark@gmail.com</a>
            </div>
            
            <div> {/* LinkedIn */}
              <a href="https://www.linkedin.com/in/brennacclark/" target="_blank" rel="noopener noreferrer"><i className="material-icons">business</i> LinkedIn - brennacclark</a>
            </div>
            
            <div> {/* GitHub */}
               <a href="https://github.com/brennacclark" target="_blank" rel="noopener noreferrer"><i className="material-icons">code</i> GitHub - brennacclark</a>
            </div>

            <div> {/* Resume Download Button */}
              <a href="/BrennaClark_UX_2023.pdf" download style={{marginTop: '10px'}}>
                <i className="material-icons">file_download</i> Download Resume
              </a>
            </div>
          </div>

          {/* Right Column for Resume SVG */}

      </div>
    </div>
  );
};

export default Contact;
