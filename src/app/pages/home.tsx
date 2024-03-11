"use client"

import React, { useCallback, useEffect, useState } from 'react'
import { Timeline, TimelineItem } from '@/components';

const Home = () => {
  const [scrollY, setScrollY] = useState(0);
  const [showFixedNav, setShowFixedNav] = useState(false)

  const onScroll = useCallback(() => {
    const { scrollY } = window;
    setScrollY(window.scrollY);
  }, []);

  useEffect(() => {
    //add eventlistener to window
    window.addEventListener("scroll", onScroll, { passive: true });
    // remove event on unmount to prevent a memory leak with the cleanup
    return () => {
      window.removeEventListener("scroll", onScroll, { passive: true });
    }
  }, []);

  useEffect(() => {
    setShowFixedNav(scrollY > window.innerHeight / 2);
  }, [scrollY])

  return (
    <div>
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