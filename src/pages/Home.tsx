import { useEffect } from 'react';
import { Timeline, TimelineItem } from '../components';
import "../assets/styles/timeline.scss"
import { useLocalStorage } from '@uidotdev/usehooks';

const Home = () => {
  const [fixedNavState] = useLocalStorage('fixed-nav', '');
  const [_pl, setPlaygroundOffset] = useLocalStorage('playground-offset', 0);
  const [_wo, setWorksOffset] = useLocalStorage('works-offset', 0);
  const [_te, setTechnicalOffset] = useLocalStorage('technical-offset', 0);
  const [_co, setContactsOffset] = useLocalStorage('contacts-offset', 0);

  useEffect(() => {
    const distPlaygroundFromTop = window.scrollY + (document.getElementById('playground')?.getBoundingClientRect().top ?? 0);
    const distWorksFromTop = window.scrollY + (document.getElementById('works')?.getBoundingClientRect().top ?? 0);
    const distTechnicalFromTop = window.scrollY + (document.getElementById('technical')?.getBoundingClientRect().top ?? 0);
    const distContactsFromTop = window.scrollY + (document.getElementById('contacts')?.getBoundingClientRect().top ?? 0);
    setPlaygroundOffset(distPlaygroundFromTop)
    setWorksOffset(distWorksFromTop)
    setTechnicalOffset(distTechnicalFromTop)
    setContactsOffset(distContactsFromTop)
  }, [window.scrollY]);

  return (
    <div style={{ padding: fixedNavState ? '80px 0' : '0' }}>
      <div id="introduction" className="section">
        <div></div>
      </div>
      <div id="playground" className="section">
        <div></div>
      </div>
      <div id="works" className="section">
        <Timeline>
          <TimelineItem position="left" title="2018" subtitle="lorem ipsum" />
          <TimelineItem position="right" title="2019" subtitle="lorem ipsum" />
          <TimelineItem position="left" title="2020" subtitle="lorem ipsum" />
          <TimelineItem position="right" title="2022" subtitle="lorem ipsum" />
        </Timeline>
      </div>
      <div id="technical" className="section">
        <p>Technical section - prog languages etc...</p>
        <p>Hello technical</p>
        <p>Hello technical</p>
        <p>Hello technical</p>
        <p>Hello technical</p>
        <p>Hello technical</p>
        <p>Hello technical</p>
        <p>Hello technical</p>
        <p>Hello technical</p>
        <p>Hello technical</p>
        <p>Hello technical</p>
        <p>Hello technical</p>
        <p>Hello technical</p>
        <p>Hello technical</p>
        <p>Hello technical</p>
        <p>Hello technical</p>
        <p>Hello technical</p>
        <p>Hello technical</p>
        <p>Hello technical</p>
        <p>Hello technical</p>
        <p>Hello technical</p>
        <p>Hello technical</p>
        <p>Hello technical</p>
        <p>Hello technical</p>
        <p>Hello technical</p>
        <p>Hello technical</p>
        <p>Hello technical</p>
        <p>Hello technical</p>
        <p>Hello technical</p>
        <p>Hello technical</p>
        <p>Hello technical</p>
        <p>Hello technical</p>
        <p>Hello technical</p>
        <p>Hello technical</p>
        <p>Hello technical</p>
        <p>Hello technical</p>
        <p>Hello technical</p>
        <p>Hello technical</p>
        <p>Hello technical</p>
        <p>Hello technical</p>
        <p>Hello technical</p>
        <p>Hello technical</p>
        <p>Hello technical</p>
        <p>Hello technical</p>
        <p>Hello technical</p>
        <p>Hello technical</p>
        <p>Hello technical</p>
        <p>Hello technical</p>
        <p>Hello technical</p>
        <p>Hello technical</p>
        <p>Hello technical</p>
        <p>Hello technical</p>
        <p>Hello technical</p>
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