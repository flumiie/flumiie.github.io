//Loading.js
import React, { useEffect } from 'react'
import $ from 'jquery'
import BrowserDetection from '../tools/BrowserDetection'
import '../includes/css/loading.scss'

const Loading = () => {
  let darkMode = null
  let stuckNotice = null

  useEffect(() => {
    window.addEventListener('load', () => {
      $('body').css('overflow', 'initial')

      const onLoading = () => {
        $('#loading').css({
          'z-index': '-1',
          animation: 'preloader 1s ease forwards',
        })
        setTimeout(() => {
          $('#loading').css('display', 'none')
        }, 1000)
      }
      const onContent = () => {
        $('.App.container').css({
          animation: 'preloader-content 1s ease forwards',
        })
        $('.background-container').css({
          animation: 'background-onload 1s ease forwards',
        })
      }
      if (BrowserDetection() === 'Microsoft Edge') {
        onLoading()
        setTimeout(onContent, 1000)
      } else {
        setTimeout(() => {
          onLoading()
          onContent()
        }, 500)
      }
    })
  }, [])

  darkMode = localStorage.getItem('Dark Mode')
  stuckNotice = localStorage.getItem('Load Delays')

  if (stuckNotice === null)
    $('#loading-stuck-notice p').html(
      'Is it taking too long?<br/><b>Hit refresh or wait.</b><br/><br/>Sorry for the inconvenience :('
    )
  else if (stuckNotice === 'loaded-once')
    $('#loading-stuck-notice p').html(
      'Still taking too long?<br/>Might as well to just wait ...<br/><br/>or just go to my LinkedIn by clicking <a href="https://linkedin.com/in/ferickandrew/" style="text-decoration:none;color:red">THIS LINK</a>'
    )

  if (darkMode === null || darkMode === false) {
    $('#loading').css('background-color', '#F9F9F9 !important')
    $('#loading-stuck-notice p').css('color', '#0F0F0F !important')
  } else {
    $('#loading').css('background-color', '#0F0F0F !important')
    $('#loading-stuck-notice p').css('color', '#F9F9F9 !important')
  }

  setTimeout(() => {
    if ($('body').css('overflow') === 'hidden')
      localStorage.removeItem('Load Delays')
    else localStorage.setItem('Load Delays', 'loaded-once')
    $('#loading-stuck-notice').css(
      'animation',
      'loader-stuck-notice 1s ease forwards'
    )
  }, 10000)

  return (
    <div id='loading'>
      <div className='box'>
        <div className='cat'>
          <div className='cat-body'></div>
          <div className='cat-body'></div>
          <div className='cat-tail'></div>
          <div className='cat-head'></div>
        </div>
      </div>
    </div>
  )
}

export default Loading
