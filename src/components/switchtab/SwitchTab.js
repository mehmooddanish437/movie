import React, { useState } from "react";

import "./switchtab.scss";

const SwitchTabs = ({ data, onTabChange }) => {
   

    const [left, setLeft] = useState(0);
    const [selectedTab,setSelectedTab ] = useState(0)
  const tabChange = (tab, ind)=>{
     setLeft(ind * 100)
     setSelectedTab(ind)
     onTabChange(tab, ind)
  }

    return (
        <div className="switchingTabs">
            <div className="tabItems">
                {data.map((tab, index) => (
                    <span
                        key={index}
                        className={`tabItem ${selectedTab === index ? "active" : ""}`}
                     onClick={()=>tabChange(tab, index)}>
                        {tab}
                    </span>
                ))}
                <span className="movingBg" style={{ left : left }} />
            </div>
        </div>
    );
};

export default SwitchTabs;