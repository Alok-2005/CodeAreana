import React from 'react'
import EventSection from './EventSection';
import Gallery from './Gallery';
import Theme from './Theme';
import Workflow from './Workflow';

function Event() {
  return (
    <div>
      <EventSection />
      <Gallery />
      <Theme />
      <Workflow />
    </div>
  );
}

export default Event