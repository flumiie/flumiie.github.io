"use client"

import React from 'react'
import { Timeline, TimelineItem } from '@/components';
import { useLocalStorage } from '@uidotdev/usehooks';

const Home = () => {
  const [fixedNavState] = useLocalStorage('fixed-nav', '');

  return (
    <div style={{ padding: fixedNavState ? '2.49em 0' : '0' }}>
      <div id="works" className="section">
        <Timeline>
          <TimelineItem position="left" title="2018" subtitle="lorem ipsum" />
          <TimelineItem position="right" title="2019" subtitle="lorem ipsum" />
          <TimelineItem position="left" title="2020" subtitle="lorem ipsum" />
          <TimelineItem position="right" title="2022" subtitle="lorem ipsum" />
        </Timeline>
      </div>
      <div id="playground" className="section">
        <p>Playground link n thumbnail section</p>
        <p>Hello Playground</p>
        <p>Hello Playground</p>
        <p>Hello Playground</p>
        <p>Hello Playground</p>
        <p>Hello Playground</p>
        <p>Hello Playground</p>
        <p>Hello Playground</p>
        <p>Hello Playground</p>
        <p>Hello Playground</p>
        <p>Hello Playground</p>
        <p>Hello Playground</p>
        <p>Hello Playground</p>
        <p>Hello Playground</p>
        <p>Hello Playground</p>
        <p>Hello Playground</p>
        <p>Hello Playground</p>
        <p>Hello Playground</p>
        <p>Hello Playground</p>
        <p>Hello Playground</p>
        <p>Hello Playground</p>
        <p>Hello Playground</p>
        <p>Hello Playground</p>
        <p>Hello Playground</p>
        <p>Hello Playground</p>
        <p>Hello Playground</p>
        <p>Hello Playground</p>
        <p>Hello Playground</p>
        <p>Hello Playground</p>
        <p>Hello Playground</p>
        <p>Hello Playground</p>
        <p>Hello Playground</p>
        <p>Hello Playground</p>
        <p>Hello Playground</p>
        <p>Hello Playground</p>
        <p>Hello Playground</p>
        <p>Hello Playground</p>
      </div>
      <div id="contacts" className="section">
        <p>Contacts section</p>
        <p>Hello contacts</p>
        <p>Hello contacts</p>
        <p>Hello contacts</p>
        <p>Hello contacts</p>
        <p>Hello contacts</p>
        <p>Hello contacts</p>
        <p>Hello contacts</p>
        <p>Hello contacts</p>
        <p>Hello contacts</p>
        <p>Hello contacts</p>
        <p>Hello contacts</p>
        <p>Hello contacts</p>
        <p>Hello contacts</p>
        <p>Hello contacts</p>
        <p>Hello contacts</p>
        <p>Hello contacts</p>
        <p>Hello contacts</p>
        <p>Hello contacts</p>
        <p>Hello contacts</p>
        <p>Hello contacts</p>
        <p>Hello contacts</p>
        <p>Hello contacts</p>
        <p>Hello contacts</p>
        <p>Hello contacts</p>
        <p>Hello contacts</p>
        <p>Hello contacts</p>
        <p>Hello contacts</p>
        <p>Hello contacts</p>
        <p>Hello contacts</p>
        <p>Hello contacts</p>
        <p>Hello contacts</p>
        <p>Hello contacts</p>
        <p>Hello contacts</p>
        <p>Hello contacts</p>
        <p>Hello contacts</p>
        <p>Hello contacts</p>
        <p>Hello contacts</p>
        <p>Hello contacts</p>
        <p>Hello contacts</p>
        <p>Hello contacts</p>
        <p>Hello contacts</p>
        <p>Hello contacts</p>
        <p>Hello contacts</p>
        <p>Hello contacts</p>
        <p>Hello contacts</p>
        <p>Hello contacts</p>
        <p>Hello contacts</p>
        <p>Hello contacts</p>
        <p>Hello contacts</p>
        <p>Hello contacts</p>
        <p>Hello contacts</p>
        <p>Hello contacts</p>
      </div>
    </div>
  )
}

export default Home;