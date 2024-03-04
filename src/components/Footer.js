import React from 'react'
import $ from 'jquery'

const Footer = () => {
  return (
    <footer id='footer'>
      <div className='container'>
        <div className='row'>
          {($('body').width() <= '411' ||
            ($('body').width() > '411' && $('body').width() <= 800)) && [
            <div
              key='0'
              id='copyright-msg'
              className='col-sm text-left'
              style={{
                paddingTop: '20px',
                paddingBottom: '16px',
                lineHeight: '25px',
              }}
            >
              Copyright © 2018 by Ferick Andrew
            </div>,
            <div key='1' className='col-sm text-center'>
              <a id='link-stats' href='/stats'>
                Stats
              </a>
            </div>,
            <div key='2' className='col-sm text-right'>
              <a
                id='made-with'
                href='https://reactjs.org'
                target='_blank'
                rel='noopener noreferrer'
              >
                Made with React
              </a>
            </div>,
          ]}
          {$('body').width() > '800' && [
            <div key='0' id='copyright-msg' className='col-sm text-left'>
              © Aug 2018 by Ferick Andrew
            </div>,
            <div key='1' className='col-sm text-center'>
              <a id='link-stats' href='/stats'>
                Stats
              </a>
            </div>,
            <div key='2' className='col-sm text-right'>
              <a
                id='made-with'
                href='https://reactjs.org'
                target='_blank'
                rel='noopener noreferrer'
              >
                Made with ❤ in React
              </a>
            </div>,
          ]}
        </div>
        <div className='row'>
          <div className='col-sm text-center' id='lu-dtl'>
            <span id='last-update-details'>
              Recent update: <b>May 20th, 2020</b> at <b>10:17 AM (GMT +7)</b>
              <br />
              <span style={{ color: '#878787' }}>
                Past update: <b style={{ color: '#878787' }}>May 2nd, 2020</b>{' '}
                at <b style={{ color: '#878787' }}>8:53 AM (GMT +7)</b>
              </span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
