import $ from 'jquery'

export const IsBrowserOnDarkMode = () => {
  const darkMode = window.matchMedia('prefers-color-scheme: dark').matches;

  if (window.matchMedia && darkMode) return true;
  else return false;
};


export const SetBackground = (darkMode) => {
  $('.background-scroll').css(
    'background',
    `url("includes/img/pattern${darkMode ? `-dark` : ``}.svg") repeat`
  )
}

export const SetLoadingTheme = (darkMode) => {
  $('.cat, .box').css('background-color', darkMode ? '#000' : '#F9F9F9')
  if (darkMode)
    $('.cat').css(
      'background-image',
      'radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 0%, rgba(0,0,0,1) 67%, rgba(0,0,0,1) 100%)'
    )
}

export const SetNavbarBrandTheme = (darkMode) => {
  $('.navbar-brand')
    .css('background-color', darkMode ? '#6A6A6A' : '#EAEAEA')
    .hover(
      () =>
        $('.navbar-brand').css(
          'background-color',
          darkMode ? '#E81123' : '#FBE8E9'
        ),
      () =>
        $('.navbar-brand').css(
          'background-color',
          darkMode ? '#6A6A6A' : '#EAEAEA'
        )
    )
  $('#navbar-site-logo img').attr(
    'src',
    `../includes/img/logo${darkMode ? `.white` : ``}.png`
  )

  $('#theme-mode-btn').css('color', darkMode ? '#F9F9F9' : '#000')
  $('#desktop-navbar > .navbar-brand').hover(
    () => {
      $('#theme-mode-btn').css({
        color: darkMode ? '#F9F9F9' : '#000',
        'background-color': darkMode ? '#8F8F8F' : '#FC9090',
      })
    },
    () => {
      $('#theme-mode-btn').css({
        color: darkMode ? '#F9F9F9' : '#000',
        'background-color': 'transparent',
      })
    }
  )
}

let bgScrollLinkColor = null
export const SetNavbarLinkThemes = (darkMode) => {
  if (localStorage.getItem('Background Scroll') === 'true')
    bgScrollLinkColor = '#E73DEF'
  else {
    if (darkMode) bgScrollLinkColor = '#F9F9F9'
    else bgScrollLinkColor = '#808080'
  }

  $('#n1-home:not(.active)').hover(
    () => {
      $('#n1-home a').css({ color: '#F00' })
      $('hr#n1').css({
        'border-top': '0px solid #F00',
        color: '#F00',
        'background-color': '#F00',
      })
    },
    () => {
      $('#n1-home a').css({ color: darkMode ? '#FFF' : '#808080' })
      $('hr#n1').css({
        'border-top': '0px solid #FFF',
        color: darkMode ? '#FFF' : '#D7D8DA',
        'background-color': darkMode ? '#FFF' : '#D7D8DA',
      })
    }
  )

  $('#n2-works:not(.active)').hover(
    () => {
      $('#n2-works a').css({ color: '#F00' })
      $('hr#n2').css({
        'border-top': '0px solid #F00',
        color: '#F00',
        'background-color': '#F00',
      })
    },
    () => {
      $('#n2-works a').css({ color: darkMode ? '#FFF' : '#808080' })
      $('hr#n2').css({
        'border-top': '0px solid #FFF',
        color: darkMode ? '#FFF' : '#D7D8DA',
        'background-color': darkMode ? '#FFF' : '#D7D8DA',
      })
    }
  )

  $('#n3-contact:not(.active)').hover(
    () => {
      $('#n3-contact a').css({ color: '#F00' })
      $('hr#n3').css({
        'border-top': '0px solid #F00',
        color: '#F00',
        'background-color': '#F00',
      })
    },
    () => {
      $('#n3-contact a').css({ color: darkMode ? '#FFF' : '#808080' })
      $('hr#n3').css({
        'border-top': '0px solid #FFF',
        color: darkMode ? '#FFF' : '#D7D8DA',
        'background-color': darkMode ? '#FFF' : '#D7D8DA',
      })
    }
  )

  $('#n4-scroll a').css({ color: bgScrollLinkColor })
  $('#n4-scroll').hover(
    () => {
      if (localStorage.getItem('Now') === null)
        localStorage.setItem('Now', Date.now())

      if (localStorage.getItem('Now') !== 'Completed') {
        $('.text-bubble-container').css('display', 'initial')
      }

      if ($('.background-scroll').css('animation-play-state') === 'paused') {
        $('#n4-scroll a').css({ color: '#F00' })
        $('hr#n4').css({
          'border-top': '0px solid #F00',
          color: '#F00',
          'background-color': '#F00',
        })
      }
    },
    () => {
      localStorage.removeItem('Bgs Hover')
      $('.text-bubble-container').css('display', 'none')

      if ($('.background-scroll').css('animation-play-state') === 'paused') {
        $('#n4-scroll a').css({ color: darkMode ? '#F9F9F9' : '#808080' })
        $('hr#n4').css({
          'border-top': '0px solid #FFF',
          color: darkMode ? '#FFF' : '#D7D8DA',
          'background-color': darkMode ? '#FFF' : '#D7D8DA',
        })
      }
    }
  )
}

export const SetOverallContentThemes = (darkMode) => {
  $('body').css('background-color', darkMode ? '#000' : '#F9F9F9')
  $('nav li a:not(#n4-scroll a)').css('color', darkMode ? '#F9F9F9' : '#808080')
  $(`
    .typer p, .typer b, .typer h2, .typer h3,
    .typer-container p, .typer-container b, .typer-container h2, .typer-container h3
  `).css('color', darkMode ? '#F9F9F9' : '#000')
  $(`
    .detailed-skills b,
    .detailed-skills li,
    .detailed-skills .Tilt-inner a,
    .gform label,
    #copyright-msg, #footer a:not(a#link-stats),
    span#last-update-details, span#last-update-details > b,
    .countdown span,
    #homepage-row h1, #homepage-row p, #homepage-row i,
    #works-row h1
  `).css('color', darkMode ? '#F9F9F9' : '#000')

  $('.detailed-skills .Tilt-inner a').hover(
    () => {
      $('.detailed-skills .Tilt-inner a').css(
        'color',
        darkMode ? '#F9F9F9' : '#000'
      )
    },
    () => {
      $('.detailed-skills .Tilt-inner a').css(
        'color',
        darkMode ? '#F9F9F9' : '#000'
      )
    }
  )
}

export const SetLogoThemes = (darkMode) => {
  $('.Tilt:has(#msk-col-git)').hover(
    () => {
      $('.Tilt:has(#msk-col-git)').css({
        'background-image': `url("includes/img/github-${
          darkMode ? `light-` : ``
        }64px.png")`,
      })
    },
    () => {
      $('.Tilt:has(#msk-col-git)').css({
        'background-image': 'none',
      })
    }
  )
}

export const SetFooterTheme = (darkMode) => {
  $('#footer .container').css(
    'background-color',
    darkMode ? '#1A1A1A' : '#EAEAEA'
  )
  $('#footer #made-with').hover(
    () => $('#footer #made-with').css('color', 'red'),
    () => $('#footer #made-with').css('color', darkMode ? '#F9F9F9' : '#000')
  )
}
