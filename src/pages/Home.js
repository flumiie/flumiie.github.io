import React, { useState, useEffect } from 'react';
import useLocalStorage from '../tools/Hooks';
import $ from 'jquery';
import Tilt from 'react-tilt';
import Typing from 'react-typing-animation';
import MainNavbar from '../components/MainNavbar';
import Footer from '../components/Footer';

const Home = () => {
  const [darkMode] = useLocalStorage('Dark Mode');
  const [typerColor, setTyperColor] = useState('');

  useEffect(() => {
    if (localStorage.getItem('Dark Mode')) setTyperColor('#F9F9F9');
    else setTyperColor('#000');
  }, [darkMode, typerColor]);

  const RowOneFinished = () => {
    $('.typer-first-row').html(
      `<h2><b style="color:${typerColor}">Hi, my name is Ferick</b></h2><br />`
    );
  };
  const RowTwoFinished = () => {
    $('.typer-second-row').html(
      `<h3><b style="color:${typerColor}">I'm a Web &amp; App Developer</b></h3><br />`
    );
  };
  const RowThreeFinished = () => {
    $('.typer-third-row').html(
      `<b style="color:${typerColor}">I can help take your ideas and brand to the web and the mobile.</b><br/><br/>`
    );
  };
  const RowFourFinished = () => {
    $('.typer-fourth-row').html(
      `<b style="color:${typerColor}">Sounds familiar or might be something that you need?</b><br/><br/>`
    );
  };
  const RowFiveFinished = () => {
    $('.typer-fifth-row').html(`
            <div id="contact-button">
                <a href="/contact">
                    <button class="btn btn-secondary">Leave a Message</button>
                </a>
            </div>
        `);
    $('#contact-button > a').hover(
      () => $('#contact-button > a > button').html('/contact'),
      () => $('#contact-button > a > button').html('Leave a Message')
    );
  };

  return (
    <div className='App container'>
      <header className='App-header'>
        <MainNavbar />
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
      </header>

      <div className='row' id='homepage-row'>
        <div className='col-sm typer-container'>
          <div className='typer-first-row'>
            <Typing
              className='typer'
              startDelay={2500}
              onFinishedTyping={() => RowOneFinished()}
            >
              <Typing.Speed ms={20} />
              <p>
                &lt;h2&gt;&lt;b&gt;Hi, my name is Ferick&lt;/b&gt;&lt;/h2&gt;
              </p>
            </Typing>
          </div>

          <div className='typer-second-row'>
            <Typing
              className='typer'
              startDelay={5000}
              onFinishedTyping={() => RowTwoFinished()}
            >
              <Typing.Speed ms={20} />
              <p>
                &lt;h3&gt;&lt;b&gt;I'm a Web &amp; App
                Developer&lt;/b&gt;&lt;/h3&gt;
              </p>
            </Typing>
          </div>

          <div className='typer-third-row'>
            <Typing
              className='typer'
              startDelay={7500}
              onFinishedTyping={() => RowThreeFinished()}
            >
              <Typing.Speed ms={20} />
              <p>
                &lt;b&gt;I can help take your ideas and brand to the web and the
                mobile.&lt;/b&gt;
              </p>
            </Typing>
          </div>

          <div className='typer-fourth-row'>
            <Typing
              className='typer'
              startDelay={10500}
              onFinishedTyping={() => RowFourFinished()}
            >
              <Typing.Speed ms={20} />
              <p className='front-msg-codes'>
                &lt;b&gt;Sounds familiar or might be something that you
                need?&lt;/b&gt;
              </p>
            </Typing>
          </div>

          <div className='typer-fifth-row'>
            <Typing
              className='typer'
              startDelay={14000}
              onFinishedTyping={() => RowFiveFinished()}
            >
              <Typing.Speed ms={20} />
              <p className='front-msg-codes'>
                &lt;div id="contact-button"&gt;
                <br />
                &ensp;&lt;a href="/contact"&gt;
                <br />
                &emsp;&lt;Button&gt;Leave a Message&lt;/Button&gt;
                <br />
                &ensp;&lt;/a&gt;
                <br />
                &lt;/div&gt;
                <br />
              </p>
            </Typing>
          </div>
        </div>

        <div className='col-sm detailed-skills'>
          <div className='row'>
            <div className='col-sm'>
              <b>Here for more detailed list of skills:</b>
            </div>
          </div>
          <div className='hidden-sm'>
            <img id='hidden-hm-1' src='' alt='' />
            <img id='hidden-hm-2' src='' alt='' />
            <img id='hidden-hm-3' src='' alt='' />
            <img id='hidden-hm-4' src='' alt='' />
            <img id='hidden-hm-5' src='' alt='' />
            <img id='hidden-hm-6' src='' alt='' />
          </div>
          <div id='msk-container' className='row'>
            {/* FIRST ROW */}
            <Tilt
              className='Tilt col-sm-4'
              options={{
                max: 25,
                perspective: 1000,
                easing: 'cubic-bezier(.03,.98,.52,.99)',
                glare: true,
                maxGlare: 0.5,
              }}
            >
              <div className='Tilt-inner' id='msk-col-html'>
                <a
                  id='ti-html'
                  target='_blank'
                  rel='noopener noreferrer'
                  href='https://www.w3schools.com/html/html5_intro.asp'
                >
                  HTML
                </a>
              </div>
            </Tilt>
            <Tilt
              className='Tilt col-sm-4'
              options={{
                max: 25,
                perspective: 1000,
                easing: 'cubic-bezier(.03,.98,.52,.99)',
                glare: true,
                maxGlare: 0.5,
              }}
            >
              <div className='Tilt-inner' id='msk-col-css'>
                <a
                  id='ti-css'
                  target='_blank'
                  rel='noopener noreferrer'
                  href='https://www.w3schools.com/css'
                >
                  CSS
                </a>
              </div>
            </Tilt>
            <Tilt
              className='Tilt col-sm-4'
              options={{
                max: 25,
                perspective: 1000,
                easing: 'cubic-bezier(.03,.98,.52,.99)',
                glare: true,
                maxGlare: 0.5,
              }}
            >
              <div className='Tilt-inner' id='msk-col-js'>
                <a
                  id='ti-js'
                  target='_blank'
                  rel='noopener noreferrer'
                  href='https://www.javascript.com'
                >
                  JavaScript
                </a>
              </div>
            </Tilt>

            {/* SECOND ROW */}
            <Tilt
              className='Tilt col-sm-4'
              options={{
                max: 25,
                perspective: 1000,
                easing: 'cubic-bezier(.03,.98,.52,.99)',
                glare: true,
                maxGlare: 0.5,
              }}
            >
              <div className='Tilt-inner' id='msk-col-php'>
                <a
                  id='ti-php'
                  target='_blank'
                  rel='noopener noreferrer'
                  href='http://php.net'
                >
                  PHP
                </a>
              </div>
            </Tilt>
            <Tilt
              className='Tilt col-sm-4'
              options={{
                max: 25,
                perspective: 1000,
                easing: 'cubic-bezier(.03,.98,.52,.99)',
                glare: true,
                maxGlare: 0.5,
              }}
            >
              <div className='Tilt-inner' id='msk-col-symfony'>
                <a
                  id='ti-symfony'
                  target='_blank'
                  rel='noopener noreferrer'
                  href='https://twig.symfony.com'
                >
                  Symfony
                </a>
              </div>
            </Tilt>
            {/* <Tilt
              className='Tilt col-sm-4'
              options={{
                max: 25,
                perspective: 1000,
                easing: 'cubic-bezier(.03,.98,.52,.99)',
                glare: true,
                maxGlare: 0.5,
              }}
            >
              <div className='Tilt-inner' id='msk-col-yaml'>
                <a
                  id='ti-yaml'
                  target='_blank'
                  rel='noopener noreferrer'
                  href='http://yaml.org'
                >
                  YAML
                </a>
              </div>
            </Tilt> */}

            {/* THIRD ROW */}
            <Tilt
              className='Tilt col-sm-4'
              options={{
                max: 25,
                perspective: 1000,
                easing: 'cubic-bezier(.03,.98,.52,.99)',
                glare: true,
                maxGlare: 0.5,
              }}
            >
              <div className='Tilt-inner' id='msk-col-angularjs'>
                <a
                  id='ti-angularjs'
                  target='_blank'
                  rel='noopener noreferrer'
                  href='https://angular.io'
                >
                  Angular
                </a>
              </div>
            </Tilt>
            <Tilt
              className='Tilt col-sm-4'
              options={{
                max: 25,
                perspective: 1000,
                easing: 'cubic-bezier(.03,.98,.52,.99)',
                glare: true,
                maxGlare: 0.5,
              }}
            >
              <div className='Tilt-inner' id='msk-col-reactjs'>
                <a
                  id='ti-reactjs'
                  target='_blank'
                  rel='noopener noreferrer'
                  href='https://reactjs.org'
                >
                  React
                </a>
              </div>
            </Tilt>
            <Tilt
              className='Tilt col-sm-4'
              options={{
                max: 25,
                perspective: 1000,
                easing: 'cubic-bezier(.03,.98,.52,.99)',
                glare: true,
                maxGlare: 0.5,
              }}
            >
              <div className='Tilt-inner' id='msk-col-reactnative'>
                <a
                  id='ti-reactnative'
                  target='_blank'
                  rel='noopener noreferrer'
                  href='https://facebook.github.io/react-native/'
                >
                  React Native
                </a>
              </div>
            </Tilt>

            {/* FOURTH ROW */}
            {/* <Tilt
              className='Tilt col-sm-3'
              options={{
                max: 25,
                perspective: 1000,
                easing: 'cubic-bezier(.03,.98,.52,.99)',
                glare: true,
                maxGlare: 0.5,
              }}
            >
              <div className='Tilt-inner' id='msk-col-vuejs'>
                <a
                  id='ti-vuejs'
                  target='_blank'
                  rel='noopener noreferrer'
                  href='https://vuejs.org'
                >
                  Vue
                </a>
              </div>
            </Tilt> */}
            {/* <Tilt
                                className="Tilt col-sm-4"
                                options={{ max: 25, perspective: 1000, easing: 'cubic-bezier(.03,.98,.52,.99)', glare: true, maxGlare: 0.5 }}>
                                <div className="Tilt-inner" id="msk-col-flutter">
                                    <a id="ti-flutter" target="_blank" rel="noopener noreferrer" href="https://flutter.io">Flutter</a>
                                </div>
                            </Tilt> */}
            {/* <Tilt
              className='Tilt col-sm-3'
              options={{
                max: 25,
                perspective: 1000,
                easing: 'cubic-bezier(.03,.98,.52,.99)',
                glare: true,
                maxGlare: 0.5,
              }}
            >
              <div className='Tilt-inner' id='msk-col-ionic'>
                <a
                  id='ti-ionic'
                  target='_blank'
                  rel='noopener noreferrer'
                  href='https://ionicframework.com'
                >
                  Ionic
                </a>
              </div>
            </Tilt> */}

            {/* FIFTH ROW */}
            {/* <Tilt
              className='Tilt col-sm-3'
              options={{
                max: 25,
                perspective: 1000,
                easing: 'cubic-bezier(.03,.98,.52,.99)',
                glare: true,
                maxGlare: 0.5,
              }}
            >
              <div className='Tilt-inner' id='msk-col-andrjava'>
                <a
                  key='0'
                  id='ti-andrjava'
                  target='_blank'
                  rel='noopener noreferrer'
                  href='https://developer.android.com'
                >
                  {localStorage.getItem('Dark Mode') === false ? (
                    <div>
                      <img
                        src='includes/img/android/android.svg'
                        className='card-logo'
                        alt='Android'
                      />{' '}
                      Java
                    </div>
                  ) : (
                    <div>
                      <img
                        src='includes/img/android/android-white.svg'
                        className='card-logo'
                        alt='Android'
                      />{' '}
                      Java
                    </div>
                  )}
                </a>
              </div>
            </Tilt>
            <Tilt
              className='Tilt col-sm-3'
              options={{
                max: 25,
                perspective: 1000,
                easing: 'cubic-bezier(.03,.98,.52,.99)',
                glare: true,
                maxGlare: 0.5,
              }}
            >
              <div className='Tilt-inner' id='msk-col-andrkotlin'>
                <a
                  key='0'
                  id='ti-andrkotlin'
                  target='_blank'
                  rel='noopener noreferrer'
                  href='https://developer.android.com'
                >
                  {localStorage.getItem('Dark Mode') === false ? (
                    <div>
                      <img
                        src='includes/img/android/android.svg'
                        className='card-logo'
                        alt='Android'
                      />{' '}
                      Kotlin
                    </div>
                  ) : (
                    <div>
                      <img
                        src='includes/img/android/android-white.svg'
                        className='card-logo'
                        alt='Android'
                      />{' '}
                      Kotlin
                    </div>
                  )}
                </a>
              </div>
            </Tilt> */}

            {/* <Tilt
              className='Tilt col-sm-3'
              options={{
                max: 25,
                perspective: 1000,
                easing: 'cubic-bezier(.03,.98,.52,.99)',
                glare: true,
                maxGlare: 0.5,
              }}
            >
              <div className='Tilt-inner' id='msk-col-python'>
                <a
                  id='ti-python'
                  target='_blank'
                  rel='noopener noreferrer'
                  href='https://www.python.org'
                >
                  Python
                </a>
              </div>
            </Tilt> */}
            <Tilt
              className='Tilt col-sm-3'
              options={{
                max: 25,
                perspective: 1000,
                easing: 'cubic-bezier(.03,.98,.52,.99)',
                glare: true,
                maxGlare: 0.5,
              }}
            >
              <div className='Tilt-inner' id='msk-col-git'>
                <a
                  id='ti-git'
                  target='_blank'
                  rel='noopener noreferrer'
                  href='https://git-scm.com'
                >
                  {/* <span>
                                        <img src={gitLogo} className="card-logo" alt="Git" width="30px" />
                                        <span className='logo-spacer'>&nbsp;</span>
                                    </span> */}
                  <span id='ti-git-text'>Git</span>
                </a>
              </div>
            </Tilt>
          </div>

          <b>What can I do:</b>
          <ul>
            <li>
              Create a website that can be based on WordPress, Laravel, ReactJS,
              any many more, and then host it live.
            </li>
            <li>Create a Hybrid or Native Apps</li>
          </ul>

          <b>"Related" Hobbies:</b>
          <ul>
            <li>Digital Arts &amp; Commissions</li>
            <li>Rainmeter Plugins</li>
          </ul>
        </div>
        {/* <div className="w-100"></div>
                    <div className="col-md" align="center">
                        <div className="marquee">
                            <p>With a free PaaS service, this site will be ocasionally shuts down, until there is another request to wake it up again.</p>
                        </div>
                    </div> */}
      </div>

      <Footer />
    </div>
  );
};

export default Home;
