import React, { useState } from 'react';
import CIS from "../../assets/project-01.jpg"


const MyTabsComponent = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="portfolio mt-large" id='portfolio'>
      <div className="container">
        <div className="our-heads">
          <h6 className="overlay-heading">skills</h6>
          <h2 className="primary-heading text-center">lorem is u</h2>
          <div className="space-one"></div>
        </div>
      </div>
      <div className="tabs-container">
        <div className="tabs">
          <div
            className={`tab ${activeTab === 0 ? 'active' : ''}`}
            onClick={() => setActiveTab(0)}
          >
            Tab 1
          </div>
          <div
            className={`tab ${activeTab === 1 ? 'active' : ''}`}
            onClick={() => setActiveTab(1)}
          >
            Tab 2
          </div>
          <div
            className={`tab ${activeTab === 2 ? 'active' : ''}`}
            onClick={() => setActiveTab(2)}
          >
            Tab 3
          </div>
        </div>

        <div className="tab-content">
          {activeTab === 0 && (
            <div className="content">
              <div className="projectGrid">
                <div className="projectGrid__Items">
                  <div className="projectGrid__Projects">
                    <div className="ss">
                      <img src={CIS} alt="" className="img-fluid" />
                    </div>
                    <div className="highlights">
                      <h2 className="tertiaryHeading">devi sansthan</h2>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, animi.</p>
                    </div>
                  </div>
                  <div className="explore">
                    <a href="dignityeducation.org" target="_blank" rel="noopener noreferrer" className='btn-two'>visit now</a>
                  </div>
                </div>
                <div className="projectGrid__Items">
                  <div className="projectGrid__Projects">
                    <div className="ss">
                      <img src={CIS} alt="" className="img-fluid" />
                    </div>
                    <div className="highlights">
                      <h2 className="tertiaryHeading">devi sansthan</h2>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, animi.</p>
                    </div>
                  </div>
                  <div className="explore">
                    <a href="dignityeducation.org" target="_blank" rel="noopener noreferrer" className='btn-two'>visit now</a>
                  </div>
                </div>
                <div className="projectGrid__Items">
                  <div className="projectGrid__Projects">
                    <div className="ss">
                      <img src={CIS} alt="" className="img-fluid" />
                    </div>
                    <div className="highlights">
                      <h2 className="tertiaryHeading">devi sansthan</h2>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, animi.</p>
                    </div>
                  </div>
                  <div className="explore">
                    <a href="dignityeducation.org" target="_blank" rel="noopener noreferrer" className='btn-two'>visit now</a>
                  </div>
                </div>
                <div className="projectGrid__Items">
                  <div className="projectGrid__Projects">
                    <div className="ss">
                      <img src={CIS} alt="" className="img-fluid" />
                    </div>
                    <div className="highlights">
                      <h2 className="tertiaryHeading">devi sansthan</h2>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, animi.</p>
                    </div>
                  </div>
                  <div className="explore">
                    <a href="dignityeducation.org" target="_blank" rel="noopener noreferrer" className='btn-two'>visit now</a>
                  </div>
                </div>
                <div className="projectGrid__Items">
                  <div className="projectGrid__Projects">
                    <div className="ss">
                      <img src={CIS} alt="" className="img-fluid" />
                    </div>
                    <div className="highlights">
                      <h2 className="tertiaryHeading">devi sansthan</h2>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, animi.</p>
                    </div>
                  </div>
                  <div className="explore">
                    <a href="dignityeducation.org" target="_blank" rel="noopener noreferrer" className='btn-two'>visit now</a>
                  </div>
                </div>
                <div className="projectGrid__Items">
                  <div className="projectGrid__Projects">
                    <div className="ss">
                      <img src={CIS} alt="" className="img-fluid" />
                    </div>
                    <div className="highlights">
                      <h2 className="tertiaryHeading">devi sansthan</h2>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, animi.</p>
                    </div>
                  </div>
                  <div className="explore">
                    <a href="dignityeducation.org" target="_blank" rel="noopener noreferrer" className='btn-two'>visit now</a>
                  </div>
                </div>
              </div>
            </div>
          )}
          {activeTab === 1 && (
            <div className="content">
              <div className="projectGrid">
                <div className="projectGrid__Items">
                  <div className="projectGrid__Projects">
                    <div className="ss">
                      <img src={CIS} alt="" className="img-fluid" />
                    </div>
                    <div className="highlights">
                      <h2 className="tertiaryHeading">devi sansthan</h2>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, animi.</p>
                    </div>
                  </div>
                  <div className="explore">
                    <a href="dignityeducation.org" target="_blank" rel="noopener noreferrer" className='btn-two'>visit now</a>
                  </div>
                </div>
                <div className="projectGrid__Items">
                  <div className="projectGrid__Projects">
                    <div className="ss">
                      <img src={CIS} alt="" className="img-fluid" />
                    </div>
                    <div className="highlights">
                      <h2 className="tertiaryHeading">devi sansthan</h2>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, animi.</p>
                    </div>
                  </div>
                  <div className="explore">
                    <a href="dignityeducation.org" target="_blank" rel="noopener noreferrer" className='btn-two'>visit now</a>
                  </div>
                </div>
                <div className="projectGrid__Items">
                  <div className="projectGrid__Projects">
                    <div className="ss">
                      <img src={CIS} alt="" className="img-fluid" />
                    </div>
                    <div className="highlights">
                      <h2 className="tertiaryHeading">devi sansthan</h2>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, animi.</p>
                    </div>
                  </div>
                  <div className="explore">
                    <a href="dignityeducation.org" target="_blank" rel="noopener noreferrer" className='btn-two'>visit now</a>
                  </div>
                </div>
                <div className="projectGrid__Items">
                  <div className="projectGrid__Projects">
                    <div className="ss">
                      <img src={CIS} alt="" className="img-fluid" />
                    </div>
                    <div className="highlights">
                      <h2 className="tertiaryHeading">devi sansthan</h2>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, animi.</p>
                    </div>
                  </div>
                  <div className="explore">
                    <a href="dignityeducation.org" target="_blank" rel="noopener noreferrer" className='btn-two'>visit now</a>
                  </div>
                </div>
                <div className="projectGrid__Items">
                  <div className="projectGrid__Projects">
                    <div className="ss">
                      <img src={CIS} alt="" className="img-fluid" />
                    </div>
                    <div className="highlights">
                      <h2 className="tertiaryHeading">devi sansthan</h2>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, animi.</p>
                    </div>
                  </div>
                  <div className="explore">
                    <a href="dignityeducation.org" target="_blank" rel="noopener noreferrer" className='btn-two'>visit now</a>
                  </div>
                </div>
                <div className="projectGrid__Items">
                  <div className="projectGrid__Projects">
                    <div className="ss">
                      <img src={CIS} alt="" className="img-fluid" />
                    </div>
                    <div className="highlights">
                      <h2 className="tertiaryHeading">devi sansthan</h2>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, animi.</p>
                    </div>
                  </div>
                  <div className="explore">
                    <a href="dignityeducation.org" target="_blank" rel="noopener noreferrer" className='btn-two'>visit now</a>
                  </div>
                </div>
              </div>
            </div>
          )}
          {activeTab === 2 && (
            <div className="content">
              <div className="projectGrid">
                <div className="projectGrid__Items">
                  <div className="projectGrid__Projects">
                    <div className="ss">
                      <img src={CIS} alt="" className="img-fluid" />
                    </div>
                    <div className="highlights">
                      <h2 className="tertiaryHeading">devi sansthan</h2>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, animi.</p>
                    </div>
                  </div>
                  <div className="explore">
                    <a href="dignityeducation.org" target="_blank" rel="noopener noreferrer" className='btn-two'>visit now</a>
                  </div>
                </div>
                <div className="projectGrid__Items">
                  <div className="projectGrid__Projects">
                    <div className="ss">
                      <img src={CIS} alt="" className="img-fluid" />
                    </div>
                    <div className="highlights">
                      <h2 className="tertiaryHeading">devi sansthan</h2>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, animi.</p>
                    </div>
                  </div>
                  <div className="explore">
                    <a href="dignityeducation.org" target="_blank" rel="noopener noreferrer" className='btn-two'>visit now</a>
                  </div>
                </div>
                <div className="projectGrid__Items">
                  <div className="projectGrid__Projects">
                    <div className="ss">
                      <img src={CIS} alt="" className="img-fluid" />
                    </div>
                    <div className="highlights">
                      <h2 className="tertiaryHeading">devi sansthan</h2>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, animi.</p>
                    </div>
                  </div>
                  <div className="explore">
                    <a href="dignityeducation.org" target="_blank" rel="noopener noreferrer" className='btn-two'>visit now</a>
                  </div>
                </div>
                <div className="projectGrid__Items">
                  <div className="projectGrid__Projects">
                    <div className="ss">
                      <img src={CIS} alt="" className="img-fluid" />
                    </div>
                    <div className="highlights">
                      <h2 className="tertiaryHeading">devi sansthan</h2>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, animi.</p>
                    </div>
                  </div>
                  <div className="explore">
                    <a href="dignityeducation.org" target="_blank" rel="noopener noreferrer" className='btn-two'>visit now</a>
                  </div>
                </div>
                <div className="projectGrid__Items">
                  <div className="projectGrid__Projects">
                    <div className="ss">
                      <img src={CIS} alt="" className="img-fluid" />
                    </div>
                    <div className="highlights">
                      <h2 className="tertiaryHeading">devi sansthan</h2>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, animi.</p>
                    </div>
                  </div>
                  <div className="explore">
                    <a href="dignityeducation.org" target="_blank" rel="noopener noreferrer" className='btn-two'>visit now</a>
                  </div>
                </div>
                <div className="projectGrid__Items">
                  <div className="projectGrid__Projects">
                    <div className="ss">
                      <img src={CIS} alt="" className="img-fluid" />
                    </div>
                    <div className="highlights">
                      <h2 className="tertiaryHeading">devi sansthan</h2>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, animi.</p>
                    </div>
                  </div>
                  <div className="explore">
                    <a href="dignityeducation.org" target="_blank" rel="noopener noreferrer" className='btn-two'>visit now</a>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyTabsComponent;
