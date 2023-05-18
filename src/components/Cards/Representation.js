import { Link } from "react-router-dom";
import RepresentationOverview from '../../components/Cards/subcard/RepresentationOverview';
import StepByStep from '../../components/Cards/subcard/step-by-step';
import RecommendUs from '../../components/Cards/subcard/RecommendUs';


import React, { useState } from 'react';

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';


export default function Representation() {
  const [key, setKey] = useState('Overview');
  return (
    <div className="RepresentationMain" >
 <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-3"
    >
      <Tab eventKey="Overview" title="Overview">
      <RepresentationOverview />
      </Tab>
      <Tab eventKey="Step-by-step" title="Step-by-step">
      <StepByStep />
      </Tab>
      <Tab eventKey="Recommend" title="Recommend us" >
      <RecommendUs />
      </Tab>
      
    </Tabs>
        
      
      
    </div>
  );
}
