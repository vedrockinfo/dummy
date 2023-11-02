import React, { useState } from 'react';
import CIS from "../../assets/project-01.jpg";
import Bytescrum from "../../assets/bytescrum.jpg";
import GoodX from "../../assets/10xgood.jpg";
import Aspyra from "../../assets/aspyra.jpg";
import DTW from "../../assets/day-trading-wars.jpg";
import Devi from "../../assets/devi-sansthan.jpg";
import jtl from "../../assets/jtl.jpg";
import LeaderConclave from "../../assets/leaderconclave.jpg";
import palmax from "../../assets/palmax.jpg";
import policymakers from "../../assets/policymakers.jpg";
import sureland from "../../assets/sureland.jpg";
import synnergy from "../../assets/synnergy-summit.jpg";
import Talwar from "../../assets/talwar-clinics.jpg";
import Yabbit from "../../assets/yabbit.jpg";
import SatoshiDX from "../../assets/vedant-project-05.jpg";


const MyTabsComponent = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="portfolio mt-large" id='portfolio'>
      <div className="container">
        <div className="our-heads">
          <h6 className="overlay-heading">portfolio</h6>
          <h2 className="primary-heading text-center">recent <span>work</span></h2>
          <div className="space-one"></div>
        </div>
      </div>
      <div className="tabs-container">
        <div className="tabs">
          <div
            className={`tab ${activeTab === 0 ? 'active' : ''}`}
            onClick={() => setActiveTab(0)}
          >
            Static Website
          </div>
          <div
            className={`tab ${activeTab === 1 ? 'active' : ''}`}
            onClick={() => setActiveTab(1)}
          >
            Wordpress Website
          </div>
          <div
            className={`tab ${activeTab === 2 ? 'active' : ''}`}
            onClick={() => setActiveTab(2)}
          >
            React JS / Next JS
          </div>
        </div>

        <div className="tab-content">
          {activeTab === 0 && (
            <div className="content">
              <div className="projectGrid">
                <div className="projectGrid__Items">
                  <div className="projectGrid__Projects">
                    <div className="ss">
                      <img src={GoodX} alt="" className="img-fluid" />
                    </div>
                    <div className="highlights">
                      <h2 className="tertiaryHeading">10X Good</h2>
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
                      <img src={LeaderConclave} alt="" className="img-fluid" />
                    </div>
                    <div className="highlights">
                      <h2 className="tertiaryHeading">Leader Conclave</h2>
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
                      <img src={policymakers} alt="" className="img-fluid" />
                    </div>
                    <div className="highlights">
                      <h2 className="tertiaryHeading">Policy Makers</h2>
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
                      <img src={synnergy} alt="" className="img-fluid" />
                    </div>
                    <div className="highlights">
                      <h2 className="tertiaryHeading">Synergy Summit</h2>
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
                      <img src={Aspyra} alt="" className="img-fluid" />
                    </div>
                    <div className="highlights">
                      <h2 className="tertiaryHeading">Aspyra</h2>
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
                      <img src={Devi} alt="" className="img-fluid" />
                    </div>
                    <div className="highlights">
                      <h2 className="tertiaryHeading">Devi Sansthan</h2>
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
                      <img src={jtl} alt="" className="img-fluid" />
                    </div>
                    <div className="highlights">
                      <h2 className="tertiaryHeading">JTL</h2>
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
                      <img src={palmax} alt="" className="img-fluid" />
                    </div>
                    <div className="highlights">
                      <h2 className="tertiaryHeading">Palmax</h2>
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
                      <img src={sureland} alt="" className="img-fluid" />
                    </div>
                    <div className="highlights">
                      <h2 className="tertiaryHeading">Sureland</h2>
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
                      <img src={Talwar} alt="" className="img-fluid" />
                    </div>
                    <div className="highlights">
                      <h2 className="tertiaryHeading">Talwar's Clinic</h2>
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
                      <img src={Yabbit} alt="" className="img-fluid" />
                    </div>
                    <div className="highlights">
                      <h2 className="tertiaryHeading">Yabbit</h2>
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
                      <img src={Bytescrum} alt="" className="img-fluid" />
                    </div>
                    <div className="highlights">
                      <h2 className="tertiaryHeading">Bytescrum</h2>
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
                      <img src={DTW} alt="" className="img-fluid" />
                    </div>
                    <div className="highlights">
                      <h2 className="tertiaryHeading">Day Trading Wars</h2>
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
                      <img src={SatoshiDX} alt="" className="img-fluid" />
                    </div>
                    <div className="highlights">
                      <h2 className="tertiaryHeading">Satoshi DX</h2>
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
