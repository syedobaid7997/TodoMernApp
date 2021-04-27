import React from 'react';
import "../styles.css";
import Menu from "./Menu";

const Base = ({
    title="My Title",
    description="My description",
    className = "text-white p-4",  //bg-dark
    children
}) => (
  
      <div>
          <Menu />
          <div className="container-fluid">
            <div className="jumbotron text-white text-center">  {/* bg-dark */}
                <h2 className="display-4">{title}</h2>
                <p className="lead">{description}</p>  
            </div>
            <div className={className}>{children}</div>
          </div>
          <footer className="footer mt-auto py-3 my-10"> {/* bg-dark */}
         <div className="myhr"></div>
            
              <div className="container-fluid footerColor text-center py-3">
                  <h4>A todo App</h4>
              </div>
              <div className="container">
                  <span className="text-muted">
                      An Amazing <span className="text-white">TODO</span> App
                  </span>
              </div>
          </footer>
      </div>
)

export default Base;
