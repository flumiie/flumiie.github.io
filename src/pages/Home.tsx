import { useEffect } from 'react';
import { useLocalStorage } from '@uidotdev/usehooks';
import { Timeline, TimelineItem } from '../components';
import { GetTopOffset } from '../libs/functs'
import "../assets/styles/timeline.scss"

const Home = () => {
  const [fixedNavState] = useLocalStorage('fixed-nav', '');
  const [_pl, setPlaygroundOffset] = useLocalStorage('playground-offset', 0);
  const [_wo, setWorksOffset] = useLocalStorage('works-offset', 0);
  const [_te, setTechnicalOffset] = useLocalStorage('technical-offset', 0);
  const [_co, setContactsOffset] = useLocalStorage('contacts-offset', 0);

  useEffect(() => {
    setPlaygroundOffset(GetTopOffset('playground'))
    setWorksOffset(GetTopOffset('works'))
    setTechnicalOffset(GetTopOffset('technical'))
    setContactsOffset(GetTopOffset('contacts'))
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
          <TimelineItem position="left" title="May 2023 - Feb 2024 · 10 mos" subtitle="WebGL & GameMaker · Self-employed">
            <p>Indie development.
              Also a career break for caregiving someone in need</p>
          </TimelineItem>
          <TimelineItem position="right" title="Aug 2019 - Nov 2022 · 3 yrs 4 mos" subtitle="Rukita · Full-time">
            <p>Create & maintain Tenant App, an all-in-one solution managements such as:<br />
              • Monthly payments<br />
              • Room services & Addons<br />
              • Searching buildings, wishlists, and purchases, built-in store for Tenants<br />
              • Voucher system<br />
              • Community events & stories<br />
              • Notification history<br />
              • Profile managements
            </p>
          </TimelineItem>
          <TimelineItem position="right" title="Aug 2018 - Mar 2021 · 2 yrs 8 mos" subtitle="Benua Softworks · Part-time">
            <p>• Create & apply a web template, with the addition of "Grav CMS" (HTML, CSS, & JS)<br />
              • Create a Grav CMS plugin for managing all of the website contents right from the plugin itself (PHP, TWIG, & YAML)<br />
              • Create & apply a web template for Docs / Assets Page, with the addition of Flextype CMS (PHP, HTML, CSS, & JS)<br />
              • Maintenance if needed. This is not frequent.</p>
          </TimelineItem>
          <TimelineItem position="left" title="Feb 2019 - Aug 2019 · 7 mos" subtitle="Prudential Indonesia · Full-time">
            <p>• Working on PruForce App, specifically using AngularJS & Ionic, that is, adding features & maintenances<br />
              • SQL Database managements</p>
          </TimelineItem>
          <TimelineItem position="right" title="Jun 2016 - Jan 2018 · 1 yr 8 mos" subtitle="Freelance Web Developer">
            <p>• WordPress & Templates<br />
              • Laravel<br />
              • WordPress & Templates<br />
              • Laravel
            </p>
          </TimelineItem>
          <TimelineItem position="right" title="Jun 2016 - Jul 2017 · 1 yr 2 mos" subtitle="Freelance Web Designer" withDot={false}>
            <p>WordPress and HTML Templates</p>
          </TimelineItem>
          <TimelineItem position="left" title="Aug 2017 - Nov 2017 · 4 mos" subtitle="PT VeIT Solusi Indonesia · Internship">
            <p>WordPress Plugins & Templates (PHP)<br />
            </p>
          </TimelineItem>
          <TimelineItem position="left" title="Aug 2017 - Nov 2017 · 4 mos" subtitle="Kreacio Media · Internship" withDot={false} withSpacer={false} />
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