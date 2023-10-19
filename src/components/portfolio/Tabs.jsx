import React, { useState } from 'react';
import Tab from './Tab';

const Tabs = ({ tabs }) => {
    const [activeTab, setActiveTab] = useState(tabs[0].id);

    const handleTabClick = (tabId) => {
        setActiveTab(tabId);
    };

    return (
        <div className="tabs-container">
            <div className="tabs">
                {tabs.map((tab) => (
                    <Tab
                        key={tab.id}
                        label={tab.label}
                        isActive={activeTab === tab.id}
                        onClick={() => handleTabClick(tab.id)}
                    />
                ))}
            </div>
            <div className="tab-content">
                {tabs.map((tab) => (
                    <div key={tab.id} className={`tab-pane ${activeTab === tab.id ? 'active' : ''}`}>
                        {tab.content}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Tabs;
