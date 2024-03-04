import React, { useEffect } from 'react';
import useLocalStorage from '../tools/Hooks';
import $ from 'jquery';

import { Form, FormGroup, Input, Button, Label, FormText } from 'reactstrap';

import MainNavbar from '../components/MainNavbar';
import Footer from '../components/Footer';

const ContactPage = () => {
  const [darkMode] = useLocalStorage('Dark Mode');

  useEffect(() => {
    $('#submit').prop('disabled', true);
    document.title += ' | Contact';
  }, []);

  const checkForms = () => {
    if (
      document.forms['contact_form']['name'].value <= 2 &&
      document.forms['contact_form']['email'].value === '' &&
      document.forms['contact_form']['message'].value <= 15
    )
      $('#submit').prop('disabled', true);
    else $('#submit').removeAttr('disabled');
  };

  const checkFieldName = () => {
    if (document.forms['contact_form']['name'].value.length <= 2) {
      $('#submit').prop('disabled', true);
      $('#error-field-name').css('display', 'flex');
    } else {
      $('#error-field-name').css('display', 'none');
      if (document.forms['contact_form']['message'].value.length > 15)
        $('#submit').removeAttr('disabled');
    }
  };

  const checkFieldMessage = () => {
    if (document.forms['contact_form']['message'].value.length <= 15) {
      $('#submit').prop('disabled', true);
      $('#error-field-message').css('display', 'flex');
    } else {
      $('#error-field-message').css('display', 'none');
      if (document.forms['contact_form']['name'].value.length > 2)
        $('#submit').removeAttr('disabled');
    }
  };

  const thankYou = () => {
    $('#contact_sub_1').css('visibility', 'hidden');
    $('#contact_sub_2').css('visibility', 'hidden');
    $('#contact_form_name').css('visibility', 'hidden');
    $('#contact_form_email').css('visibility', 'hidden');
    $('#contact_form_message').css('visibility', 'hidden');
    $('#contact_form_submit').css('visibility', 'hidden');
  };

  return (
    <div className='App container'>
      <header className='App-header'>
        <MainNavbar />
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
      </header>

      <div className='row' id='homepage-row'>
        <div className='col-sm-3'></div>
        <div className='col-sm-6'>
          <h1>Contact</h1>

          <div style={{ position: 'absolute' }}>
            {/* <Typing>
              <Typing.Delay ms={2100} />
              <Typing.Speed ms={15} />
              <p id='contact_sub_1'>
                Use the form below to send me a message via e-mail.
              </p>
              <Typing.Delay ms={1000} />
              <FormText>
                <i id='contact_sub_2'>
                  Any spam or useless messages will be filtered.
                </i>
              </FormText>
            </Typing> */}
            <p style={{ marginTop: 5 }}>
              Sorry if I haven't replied for quite some time, I just later found
              out that this doesn't function properly ... sorry for the
              inconvenience, you can just send me email directly to{' '}
              <a href='mailto:ferickwar@gmail.com'>ferickwar@gmail.com</a>.
              <br />
              This will be fixed soon if I have the time 🙏
            </p>
          </div>

          <Form
            netlify='true'
            style={
              $('body').width() >= 800
                ? { marginTop: '17vh' }
                : { marginTop: '24vh' }
            } // was 11vh & 18vh
            className='gform'
            name='contact_form'
            method='POST'
            action='https://script.google.com/macros/s/AKfycbywjDwywlqfFHWnMe8VxARHDnOTQkGttbvh0ozz2R31T6RpyCw/exec'
            onChange={checkForms}
            onSubmit={thankYou}
          >
            <FormGroup id='contact_form_name'>
              <Label for='name'>Name</Label>
              <Input
                type='text'
                name='name'
                id='name'
                onChange={checkFieldName}
                placeholder='Your name'
                required
                disabled //temporary
              />
              {/* <FormText>
                <p id='error-field-name' style={{ color: 'red' }}>
                  I do not accept names less than 3 letters
                </p>
              </FormText> */}
            </FormGroup>
            <FormGroup id='contact_form_email'>
              <Label for='email'>E-Mail</Label>
              <Input
                type='email'
                name='email'
                id='email'
                placeholder='Your E-Mail'
                required
                disabled //temporary
              />
              <FormText>
                <span
                  className='email-invalid'
                  style={{ display: 'none', color: 'red' }}
                >
                  I can't respond without a proper E-Mail.
                </span>
              </FormText>
            </FormGroup>
            <FormGroup id='contact_form_message'>
              <Label for='message'>Message</Label>
              <Input
                type='textarea'
                name='message'
                id='message'
                onChange={checkFieldMessage}
                placeholder='Your message'
                required
                disabled //temporary
              />
              <FormText>
                <p
                  id='error-field-message'
                  style={{ display: 'none', color: 'red' }}
                >
                  Not enough of a message
                </p>
              </FormText>
            </FormGroup>
            <div align='center' id='contact_form_submit'>
              <Button id='submit'>Submit</Button>
            </div>

            <div className='thankyou_message' style={{ display: 'none' }}>
              <h3>
                <em>Thanks</em> for the message.
                <br />
                Your message was sent to{' '}
                <em>
                  <a href='mailto:ferickwar@gmail.com'>ferickwar@gmail.com</a>
                </em>
                <br />
                <br />
                I'll get back to you as soon as possible!
              </h3>
            </div>
          </Form>
          <br />
          <br />

          <div className='container' id='social-media-links'>
            <div className='row'>
              <div
                className='col-md'
                align='center'
                id='logo-linkedin-container'
              >
                <a
                  href='https://linkedin.com/in/ferickandrew'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  {darkMode ? (
                    <>
                      <img
                        key='0'
                        src='includes/img/linkedin/In-White-2C-28px-R.png'
                        className='linkedin-logo'
                        alt='LinkedIn'
                      />
                      <img
                        key='1'
                        src='includes/img/linkedin/Logo-White-2C-28px-R.png'
                        className='linkedin-logo-hover'
                        style={{ display: 'none' }}
                        alt='LinkedIn'
                      />
                    </>
                  ) : (
                    <>
                      <img
                        key='0'
                        src='includes/img/linkedin/In-2C-28px-R.png'
                        className='linkedin-logo'
                        alt='LinkedIn'
                      />
                      <img
                        key='1'
                        src='includes/img/linkedin/Logo-2C-28px-R.png'
                        className='linkedin-logo-hover'
                        style={{ display: 'none' }}
                        alt='LinkedIn'
                      />
                    </>
                  )}
                </a>
              </div>
              <div className='col-md' align='center' id='logo-line-container'>
                <img
                  src={`includes/img/line/LINE-${
                    darkMode ? `white-in-black` : `green-in-white`
                  }.png`}
                  width='31px'
                  className='line-logo'
                  alt='LINE'
                />
                <b>
                  <span id='line-hover-details'></span>
                </b>
              </div>
              <div className='col-md' align='center' id='logo-wa-container'>
                {darkMode === false ? (
                  <img
                    src='includes/img/whatsapp/WhatsApp-logo.png'
                    width='31px'
                    className='whatsapp-logo'
                    alt='WhatsApp'
                  />
                ) : (
                  <img
                    src='includes/img/whatsapp/WhatsApp-logo.png'
                    width='31px'
                    className='whatsapp-logo'
                    alt='WhatsApp'
                  />
                )}
                <b>
                  <span id='wa-hover-details'></span>
                </b>
              </div>
              <div className='w-100 cf-sm-hover-me'></div>
              <div className='col-md cf-sm-hover-me-1' align='center'>
                Hover me!
              </div>
              <div className='col-md cf-sm-hover-me-2' align='center'>
                Hover me!
              </div>
              <div className='col-md cf-sm-hover-me-3' align='center'>
                Hover me!
              </div>
            </div>
          </div>
        </div>
        <div className='col-sm-3'></div>
      </div>

      <Footer />
    </div>
  );
};

export default ContactPage;
