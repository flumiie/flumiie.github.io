var c = '#msk-col-'
var a = 'animation'
var b = 'background'
var bi = 'background-image'
var bc = 'background-color'
const biii = 1234567890

function preloadImages() {
  $('.hidden-sm').css({
    position: 'absolute',
    display: 'none',
  })
  $('#hidden-hm-1').attr('src', '../includes/img/symfony.png')
  $('#hidden-hm-2').attr('src', '../includes/img/react.png')
  // $('#hidden-hm-3').attr('src', '../includes/img/vue.png')
  $('#hidden-hm-4').attr('src', '../includes/img/flutter.png')
  // $('#hidden-hm-5').attr('src', '../includes/img/ionic.png')
  $('#hidden-hm-6').attr('src', '../includes/img/android.png')
}

$(document).ready(function () {
  preloadImages()
  var winWidth = $(window).width()

  /**
   * This is a block comment
   */
  // function navbarOnWidthChange()
  // {
  //     if( winWidth >= 800 )
  //     {
  //         $('#desktop-navbar').css('display', 'flex');
  //         $('#mobile-navbar').css('display', 'none');
  //     }
  //     else
  //     {
  //         $('#desktop-navbar').css('display', 'none');
  //         $('#mobile-navbar').css('display', 'flex');
  //     }
  // }
  // navbarOnWidthChange();

  $(window).on('resize', function () {
    if ($(this).width() != winWidth) {
      winWidth = $(this).width()
      // navbarOnWidthChange();
    }
  })

  // Hover on Navbar Brand
  var posY = 0
  let show = null,
    hide = null
  $('#desktop-navbar > .navbar-brand').hover(
    function () {
      posY = 0
      clearInterval(hide)
      show = setInterval(function () {
        posY += -14.346153846153846153846153846154
        $('#navbar-site-logo img').css('object-position', '0 ' + posY + 'px')
        if (posY <= -186.49999999999994) clearInterval(show)
      }, 10)
    },
    function () {
      // $('#desktop-navbar > .navbar-brand > #navbar-site-logo').html('&lt;fa /&gt;');
      clearInterval(show)
      hide = setInterval(function () {
        posY += 14.346153846153846153846153846154
        $('#navbar-site-logo img').css('object-position', '0 ' + posY + 'px')
        if (posY >= 0) clearInterval(hide)
      }, 10)
    }
  )

  if (localStorage.getItem('Background Scroll') == null) {
    localStorage.setItem('Background Scroll', false)
  }
  function backgroundScroll() {
    if (localStorage.getItem('Background Scroll') === 'true') {
      $('.background-scroll').css('animation-play-state', 'running')
      $('#n4-scroll a').css({ color: '#E73DEF' })
      $('hr#n4').css({
        'border-top': '0px solid #E73DEF',
        color: '#E73DEF',
        'background-color': '#E73DEF',
      })
    } else {
      $('.background-scroll').css('animation-play-state', 'paused')
      $('hr#n4').css({
        'border-top': '0px solid #D7D8DA',
        color: '#D7D8DA',
        'background-color': '#D7D8DA',
      })
    }
  }
  backgroundScroll()

  $('#n4-scroll').on('click', () => {
    console.log(localStorage.getItem('Dark Mode') === 'true')
    if (localStorage.getItem('Background Scroll') === 'true') {
      localStorage.setItem('Background Scroll', false)
      $('.background-scroll').css('animation-play-state', 'paused')
      $('#n4-scroll a').css({
        color:
          localStorage.getItem('Dark Mode') === 'true' ? '#F9F9F9' : '#808080',
      })
      $('hr#n4').css({
        'border-top': '0px solid #D7D8DA',
        color: '#D7D8DA',
        'background-color': '#D7D8DA',
      })
    } else {
      localStorage.setItem('Background Scroll', true)
      $('.background-scroll').css('animation-play-state', 'running')
      $('#n4-scroll a').css({ color: '#E73DEF' })
      $('hr#n4').css({
        'border-top': '0px solid #E73DEF',
        color: '#E73DEF',
        'background-color': '#E73DEF',
      })
    }
  })

  // Works Page Hover on Image
  var preimg = []
  var pTitle = []
  for (i = 1; i <= 5; i++) {
    preimg.push('#preimg' + i)
    pTitle.push('#project-title-' + i)
  }

  preimg.forEach((image) => {
    $(image).on('load', function () {
      if ($(image).height() > 315) {
        $(image).css({
          transition: 'transform ' + 0.007 * $(image).height() + 's ease',
          '-o-transition': 'transform ' + 0.007 * $(image).height() + 's ease',
          '-ms-transition': 'transform ' + 0.007 * $(image).height() + 's ease',
          '-moz-transition':
            'transform ' + 0.007 * $(image).height() + 's ease',
          '-webkit-transition':
            'transform ' + 0.007 * $(image).height() + 's ease',
        })
      } else {
        $('.project-preview:has(> a > ' + image + ')').css(
          'height',
          $(image).height()
        )
        $(image).css('transform', 'inherit')
      }
    })
  })

  if ($('body').width() >= 800) {
    $('.project-title').css('display', 'block')
    $('.project-title-mobile').css('display', 'none')
  } else {
    $('.project-title').css('display', 'none')
    $('.project-title-mobile').css('display', 'block')
  }

  // myMove();
  // function myMove()
  // {
  //     var elem = document.getElementById("myAnimation");
  //     var pos = 0;
  //     var id = setInterval(frame, 10);
  //     function frame() {
  //       if (pos == 350) {
  //         clearInterval(id);
  //       } else {
  //         pos++;
  //         elem.style.top = pos + 'px';
  //         elem.style.left = pos + 'px';
  //       }
  //     }
  //   }

  // for(var i = 1; i <= $('#works-row div.project-preview').length; i++)
  // {
  //     $('#preimg' + i).hover(function()
  //     {
  //         $('#project-title-' + i).css({ 'opacity': '1', 'font-size': '1.5rem' });
  //         $('#project-title-' + i).hover(function() { $('#project-title-' + i).css({ 'opacity': '1', 'font-size': '1.5rem' }) });
  //     },
  //     function() { $('#project-title-' + i).css({ 'opacity': '0', 'font-size': '1.2rem' }) })
  // }
  $('#preimg1').hover(
    function () {
      $('#project-title-1').css({ opacity: '1', 'font-size': '1.5rem' })
      $('#project-title-1').hover(function () {
        $('#project-title-1').css({ opacity: '1', 'font-size': '1.5rem' })
      })
    },
    function () {
      $('#project-title-1').css({ opacity: '0', 'font-size': '1.2rem' })
    }
  )
  $('#preimg2').hover(
    function () {
      $('#project-title-2').css({ opacity: '1', 'font-size': '1.5rem' })
      $('#project-title-2').hover(function () {
        $('#project-title-2').css({ opacity: '1', 'font-size': '1.5rem' })
      })
    },
    function () {
      $('#project-title-2').css({ opacity: '0', 'font-size': '1.2rem' })
    }
  )
  $('#preimg3').hover(
    function () {
      $('#project-title-3').css({ opacity: '1', 'font-size': '1.5rem' })
      $('#project-title-3').hover(function () {
        $('#project-title-3').css({ opacity: '1', 'font-size': '1.5rem' })
      })
    },
    function () {
      $('#project-title-3').css({ opacity: '0', 'font-size': '1.2rem' })
    }
  )
  $('#preimg4').hover(
    function () {
      $('#project-title-4').css({ opacity: '1', 'font-size': '1.5rem' })
      $('#project-title-4').hover(function () {
        $('#project-title-4').css({ opacity: '1', 'font-size': '1.5rem' })
      })
    },
    function () {
      $('#project-title-4').css({ opacity: '0', 'font-size': '1.2rem' })
    }
  )
  $('#preimg5').hover(
    function () {
      $('#project-title-5').css({ opacity: '1', 'font-size': '1.5rem' })
      $('#project-title-5').hover(function () {
        $('#project-title-5').css({ opacity: '1', 'font-size': '1.5rem' })
      })
    },
    function () {
      $('#project-title-5').css({ opacity: '0', 'font-size': '1.2rem' })
    }
  )

  // $('.previewimg').on('load', function()
  // {
  // if( $('.App-header').height() + $('#works-row').height() < 850 )
  // $('#footer').css('position', 'absolute');
  // });

  // Hover 'leave a Message' Button
  // $('#contact-button > a').mouseover(function() { $('#contact-btn').html('/contact'); });
  // $('#contact-button > a').mouseout(function()  { $('#contact-btn').html('Leave a Message'); });

  // Hover Main Skills
  if (localStorage.getItem('Dark Mode') === 'true') {
    $('#msk-container .Tilt a').hover(
      function () {
        $(this).css('color', 'white')
      },
      function () {
        $(this).css('color', 'black')
      }
    )
  }

  $('.Tilt:has("' + c + 'html")').hover(
    function () {
      $('#ti-html').css('letter-spacing', '2.5px')
      $('.Tilt:has("' + c + 'html")').css('border', '5px solid #e34f26')
      $(this).css(bc, 'transparent')
      $(this).css(a, 'html-hover-enter 0.3s ease forwards')
      $('.Tilt > #msk-col-html > a').html('&lt;html&gt;')
    },
    function () {
      $('#ti-html').css('letter-spacing', '0px')
      $('.Tilt:has("' + c + 'html")').css('border', '0px')
      $(this).css(a, 'html-hover-out 0.3s ease forwards')
      $('.Tilt > #msk-col-html > a').html('HTML')
    }
  )

  $('.Tilt:has("' + c + 'css")').hover(
    function () {
      $('#ti-css').css('letter-spacing', '2.5px')
      $('.Tilt:has("' + c + 'css")').css('border', '5px solid #1a6fb4')
      $(this).css(bc, 'transparent')
      $(this).css(a, 'css-hover-enter 0.3s ease forwards')
      $('.Tilt > #msk-col-css > a').html('&lt;style&gt;')
    },
    function () {
      $('#ti-css').css('letter-spacing', '0px')
      $('.Tilt:has("' + c + 'css")').css('border', '0px')
      $(this).css(a, 'css-hover-out 0.3s ease forwards')
      $('.Tilt > #msk-col-css > a').html('CSS')
    }
  )

  $('.Tilt:has(' + c + 'js)').hover(
    function () {
      $('#ti-js').css({
        'letter-spacing': '2.5px',
        color: 'black',
      })
      $('.Tilt:has("' + c + 'js")').css('border', '5px solid #D6BA32')
      $(this).css(bc, 'transparent')
      $(this).css(a, 'js-hover-enter 0.3s ease forwards')
      $('.Tilt > #msk-col-js > a').html('&lt;script&gt;')
    },
    function () {
      $('#ti-js').css('letter-spacing', '0px')
      if (localStorage.getItem('Dark Mode') === 'true')
        $('#ti-js').css('color', 'white')
      $('.Tilt:has("' + c + 'js")').css('border', '0px')
      $(this).css(a, 'js-hover-out 0.3s ease forwards')
      $('.Tilt > #msk-col-js > a').html('JavaScript')
    }
  )

  $('.Tilt:has(' + c + 'php)').hover(
    function () {
      $('#ti-php').css('letter-spacing', '2.5px')
      $(this).css(bc, '#8892BF')
      $('.Tilt > #msk-col-php > a').html('&lt;?php ?&gt;')
    },
    function () {
      $('#ti-php').css('letter-spacing', '0px')
      $(this).css(bc, 'transparent')
      $('.Tilt > #msk-col-php > a').html('PHP')
    }
  )

  $('.Tilt:has(' + c + 'symfony)').hover(
    function () {
      $(this).css({
        color: '#F7F7F7',
        'background-color': '#000',
        'background-image': 'url("../includes/img/symfony.png")',
        'background-opacity': '',
        'background-repeat': 'no-repeat',
        'background-position': 'center',
        'background-size': 'contain',
      })
      $('#ti-symfony').css('letter-spacing', '2.5px')
      $('.Tilt > #msk-col-symfony > a').html('{% block %}')
    },
    function () {
      if (localStorage.getItem('Dark Mode') === 'true')
        $(this).css('color', 'white')
      $(this).css({
        'background-color': 'transparent',
        'background-image': 'none',
      })
      $('#ti-symfony').css('letter-spacing', '0px')
      $('.Tilt > #msk-col-symfony > a').html('Symfony')
    }
  )

  // $('.Tilt:has(' + c + 'yaml)').hover(
  //   function () {
  //     $('#ti-yaml').css('letter-spacing', '2.5px')
  //     $(this).css(bc, '#C5161D')
  //     $('.Tilt > #msk-col-yaml > a').html('foo:')
  //   },
  //   function () {
  //     $('#ti-yaml').css('letter-spacing', '0px')
  //     if (localStorage.getItem('Dark Mode') === 'true')
  //       $(this).css('color', 'white')
  //     $(this).css(bc, 'transparent')
  //     $('.Tilt > #msk-col-yaml > a').html('YAML')
  //   }
  // )

  $('.Tilt:has(' + c + 'reactjs)').hover(
    function () {
      $('#ti-reactjs').css('color', 'black')
      $(this).css({
        'background-color': '#06A6D2',
        'background-image': 'url("../includes/img/react.png")',
        'background-repeat': 'no-repeat',
        'background-position': 'center',
        'background-size': 'contain',
      })
      $('#ti-reactjs').css({
        'letter-spacing': '2.5px',
        'line-height': '25px',
        'margin-top': '14px',
      })
      $('.Tilt > #msk-col-reactjs > a').html('const=() ⇒ {}')
    },
    function () {
      if (localStorage.getItem('Dark Mode') === 'true')
        $('#ti-reactjs').css('color', 'white')
      $(this).css({
        'background-color': 'transparent',
        'background-image': 'none',
      })
      $('#ti-reactjs').css({
        'letter-spacing': '0',
        'line-height': '70px',
        'margin-top': '0',
      })
      $('.Tilt > #msk-col-reactjs > a').html('React')
    }
  )

  // $('.Tilt:has(' + c + 'vuejs)').hover(
  //   function () {
  //     $(this).css({
  //       'background-color': '#41B782',
  //       'background-image': 'url("../includes/img/vue.png")',
  //       'background-repeat': 'no-repeat',
  //       'background-position': 'center',
  //       'background-size': 'contain',
  //     })
  //     $('#ti-vuejs').css('letter-spacing', '2.5px')
  //     $('.Tilt > #msk-col-vuejs > a').html('{ vue }')
  //   },
  //   function () {
  //     $(this).css({
  //       'background-color': 'transparent',
  //       'background-image': 'none',
  //     })
  //     $('#ti-vuejs').css('letter-spacing', '0px')
  //     $('.Tilt > #msk-col-vuejs > a').html('Vue')
  //   }
  // )

  $('.Tilt:has(' + c + 'angularjs)').hover(
    function () {
      $(this).css(bc, 'transparent')
      $(this).css(a, 'angular-hover-enter 0.3s ease forwards')
      $('#ti-angularjs').css('letter-spacing', '2.5px')
      $('.Tilt > #msk-col-angularjs > a').html('namespace {}')
    },
    function () {
      $(this).css(a, 'angular-hover-out 0.3s ease forwards')
      $('#ti-angularjs').css('letter-spacing', '0px')
      $('.Tilt > #msk-col-angularjs > a').html('Angular')
    }
  )

  // $('.Tilt:has(' + c + 'flutter)').hover(
  //   function () {
  //     $(this).css({
  //       'background-color': '#03365D',
  //       'background-image': 'url("../includes/img/flutter.png")',
  //       'background-repeat': 'no-repeat',
  //       'background-position': 'center',
  //       'background-size': 'contain',
  //     })
  //     $('#ti-flutter').css('letter-spacing', '2.5px')
  //     $('.Tilt > #msk-col-flutter > a').html('main() async')
  //   },
  //   function () {
  //     $(this).css({
  //       'background-color': 'transparent',
  //       'background-image': 'none',
  //     })
  //     $('#ti-flutter').css('letter-spacing', '0px')
  //     $('.Tilt > #msk-col-flutter > a').html('Flutter')
  //   }
  // )

  $('.Tilt:has(' + c + 'reactnative)').hover(
    function () {
      $(this).css({
        color: 'black',
        'background-color': '#06A6D2',
        'background-image': 'url("../includes/img/react.png")',
        'background-repeat': 'no-repeat',
        'background-position': 'center',
        'background-size': 'contain',
      })
      $('#ti-reactnative').css({
        color: 'black',
        'letter-spacing': '2.5px',
        'line-height': '25px',
        'margin-top': '14px',
      })
      $('#ti-reactnative').css('letter-spacing', '2.5px')
      $('.Tilt > #msk-col-reactnative > a').html('const=() ⇒ {}')
    },
    function () {
      $(this).css({
        'background-color': 'transparent',
        'background-image': 'none',
      })
      if (localStorage.getItem('Dark Mode') === 'true')
        $('#ti-reactnative').css('color', 'white')
      $('#ti-reactnative').css({
        'letter-spacing': '0',
        'line-height': '70px',
        'margin-top': '0',
      })
      $('.Tilt > #msk-col-reactnative > a').html('React Native')
    }
  )

  // $('.Tilt:has(' + c + 'ionic)').hover(
  //   function () {
  //     $('.Tilt > #msk-col-ionic > a').css('font-size', '12.5px')
  //     $(this).css({
  //       color: '#F7F7F7',
  //       'background-color': '#0A5DDA',
  //       'background-image': 'url("../includes/img/ionic.png")',
  //       'background-opacity': '',
  //       'background-repeat': 'no-repeat',
  //       'background-position': 'center',
  //       'background-size': 'contain',
  //     })
  //     $('#ti-ionic').css('letter-spacing', '2.5px')
  //     $('.Tilt > #msk-col-ionic > a').html('@NgModule()')
  //   },
  //   function () {
  //     $('.Tilt > #msk-col-ionic > a').css('font-size', '1rem')
  //     $(this).css({
  //       'background-color': 'transparent',
  //       'background-image': 'none',
  //     })
  //     $('#ti-ionic').css('letter-spacing', '0px')
  //     $('.Tilt > #msk-col-ionic > a').html('Ionic')
  //   }
  // )

  // $('.Tilt:has('+c+'andrjava)').hover(function()
  // {
  //     $(this).css(
  //     {
  //         'color': '#F7F7F7',
  //         'background-color': '#0A5DDA',
  //         'background-image': 'url("../includes/img/android.png")',
  //         'background-opacity': '',
  //         'background-repeat': 'no-repeat',
  //         'background-position': 'center',
  //         'background-size': 'contain',
  //     });
  //     $('#ti-andrjava > div').css('letter-spacing', '2.5px');
  //     $('#ti-andrjava > div').html('void {}');
  // },
  // function()
  // {
  //     $(this).css(
  //     {
  //         'background-color': 'transparent',
  //         'background-image': 'none'
  //     });
  //     $('#ti-andrjava > div').css('letter-spacing', '0px');
  //     if(localStorage.getItem('Dark Mode') === 'true')
  //         $('#ti-andrjava > div').html('<img src="includes/img/android/android.svg" class="card-logo"></img> Java');
  //     else
  //         $('#ti-andrjava > div').html('<img src="includes/img/android/android-white.svg" class="card-logo"></img> Java');
  // });

  // $('.Tilt:has('+c+'andrkotlin)').hover(function()
  // {
  //     $(this).css(
  //     {
  //         'color': '#F7F7F7',
  //         'background-color': '#0A5DDA',
  //         'background-image': 'url("../includes/img/android.png")',
  //         'background-opacity': '',
  //         'background-repeat': 'no-repeat',
  //         'background-position': 'center',
  //         'background-size': 'contain',
  //     });
  //     $('#ti-andrkotlin > div').css('letter-spacing', '2.5px');
  //     $('#ti-andrkotlin > div').html('fun {}');
  // },
  // function()
  // {
  //     $(this).css(
  //     {
  //         'background-color': 'transparent',
  //         'background-image': 'none'
  //     });
  //     $('#ti-andrkotlin > div').css('letter-spacing', '0px');
  //     if(localStorage.getItem('Dark Mode') === 'true')
  //         $('#ti-andrkotlin > div').html('<img src="includes/img/android/android.svg" class="card-logo"></img> Kotlin');
  //     else
  //         $('#ti-andrkotlin > div').html('<img src="includes/img/android/android-white.svg" class="card-logo"></img> Kotlin');
  // });

  // $('.Tilt:has(' + c + 'python)').hover(
  //   function () {
  //     $(this).css(bc, 'transparent')
  //     $(this).css(a, 'python-hover-enter 0.3s ease forwards')
  //     $('#ti-python').css('color', 'black')
  //     $('#ti-python').css('letter-spacing', '2.5px')
  //     $('.Tilt > #msk-col-python > a').html('def ()')
  //   },
  //   function () {
  //     $(this).css(a, 'python-hover-out 0.3s ease forwards')
  //     if (localStorage.getItem('Dark Mode') === 'true')
  //       $('#ti-python').css('color', 'white')
  //     $('#ti-python').css('letter-spacing', '0px')
  //     $('.Tilt > #msk-col-python > a').html('Python')
  //   }
  // )

  $('.Tilt:has(' + c + 'git)').hover(
    function () {
      $(this).css({
        'background-color': 'red',
        'background-repeat': 'no-repeat',
        'background-position': 'center',
        'background-size': 'contain',
      })
      $('#ti-git-text').css(
        'color',
        localStorage.getItem('Dark Mode') === 'true' && 'black'
      )
      $('#ti-git').css('letter-spacing', '2.5px')
      $('#ti-git img').css('display', 'none')
      $('#ti-git .logo-spacer').css('display', 'none')
    },
    function () {
      $(this).css({
        'background-color': 'transparent',
      })
      $('#ti-git').css('letter-spacing', '0px')
      $('#ti-git img').css('display', '')
      $('#ti-git .logo-spacer').css('display', '')
    }
  )

  $('.Tilt:has(' + c + 'andrkotlin)').hover(
    function () {
      $(this).css({
        color: '#F7F7F7',
        'background-color': '#0A5DDA',
        'background-image': 'url("../includes/img/android.png")',
        'background-opacity': '',
        'background-repeat': 'no-repeat',
        'background-position': 'center',
        'background-size': 'contain',
      })
      $('#ti-andrkotlin > div').css('letter-spacing', '2.5px')
      $('#ti-andrkotlin > div').html('fun {}')
    },
    function () {
      $(this).css({
        'background-color': 'transparent',
        'background-image': 'none',
      })
      $('#ti-andrkotlin > div').css('letter-spacing', '0px')
      if (localStorage.getItem('Dark Mode') === 'true')
        $('#ti-andrkotlin > div').html(
          '<img src="includes/img/android/android.svg" class="card-logo"></img> Kotlin'
        )
      else
        $('#ti-andrkotlin > div').html(
          '<img src="includes/img/android/android-white.svg" class="card-logo"></img> Kotlin'
        )
    }
  )

  //
  if (localStorage.getItem('Dark Mode') === 'true') {
    $('#name').toggleClass('bg-dark')
    $('#email').toggleClass('bg-dark')
    $('#content').toggleClass('bg-dark')
    $('#submit').toggleClass('bg-dark')
  }

  if ($('#submit').attr('disabled')) {
    $('#submit').hover(() =>
      $('#submit').css('background-color', 'black')
    )
  } else {
    $('#submit').hover(() =>
      $('#submit').css({
        'background-color': 'red',
        'border-color': 'red',
      })
    )
  }

  const contactLine = '&nbsp;aircatcher'
  const whatsAppNo = '&nbsp;Contact me on LinkedIn' //'If you somehow found this, yes this is my number ... +62 821-1198-3759'

  // Marginals for social links on Mobile Mode
  if ($('body').width() <= 800) {
    $('.marquee').css({ width: '100%' })
    $('#social-media-links > .row > .col-md').css({ 'margin-bottom': '3vh' })
    $('#line-hover-details').html(contactLine)
    $('#wa-hover-details').html(whatsAppNo)
    $('.cf-sm-hover-me').css({ display: 'none' })
    $('.cf-sm-hover-me-1').css({ display: 'none' })
    $('.cf-sm-hover-me-2').css({ display: 'none' })
    $('.cf-sm-hover-me-3').css({ display: 'none' })

    if (localStorage.getItem('Dark Mode') === 'true') {
      $('.linkedin-logo').attr(
        'src',
        'includes/img/linkedin/Logo-2C-28px-R.png'
      )
      $('.line-logo').attr('src', 'includes/img/line/LINE-white-in-green.png')
      $('.whatsapp-logo').attr('src', 'includes/img/whatsapp/WhatsApp-logo.png')
    } else {
      $('.linkedin-logo').attr(
        'src',
        'includes/img/linkedin/Logo-White-28px-R.png'
      )
      $('.line-logo').attr('src', 'includes/img/line/LINE-white-in-black.png')
      $('.whatsapp-logo').attr('src', 'includes/img/whatsapp/WhatsApp-logo.png')
    }
  } else {
    $('#social-media-links > .row > .col-md').css({
      'margin-bottom': 'initial',
    })

    $('#logo-linkedin-container').mouseover(function () {
      $('.cf-sm-hover-me-1').css({ visibility: 'hidden' })
      localStorage.setItem('SM 1 Hover', 'true')
    })
    $('#logo-line-container').mouseover(function () {
      $('.cf-sm-hover-me-2').css({ visibility: 'hidden' })
      localStorage.setItem('SM 2 Hover', 'true')
    })
    $('#logo-wa-container').mouseover(function () {
      $('.cf-sm-hover-me-3').css({ visibility: 'hidden' })
      localStorage.setItem('SM 3 Hover', 'true')
    })

    if (localStorage.getItem('SM 1 Hover') === 'true')
      $('.cf-sm-hover-me-1').css({ visibility: 'hidden' })
    if (localStorage.getItem('SM 2 Hover') === 'true')
      $('.cf-sm-hover-me-2').css({ visibility: 'hidden' })
    if (localStorage.getItem('SM 3 Hover') === 'true')
      $('.cf-sm-hover-me-3').css({ visibility: 'hidden' })

    if (localStorage.getItem('Dark Mode') === 'true') {
      // Hover on 'LinkedIn' link under Contact Page
      $('#logo-linkedin-container').mouseover(function () {
        $('.linkedin-logo').attr(
          'src',
          'includes/img/linkedin/Logo-2C-28px-R.png'
        )
      })
      $('#logo-linkedin-container').mouseout(function () {
        $('.linkedin-logo').attr(
          'src',
          'includes/img/linkedin/In-2C-28px-R.png'
        )
      })
      // Hover on 'LINE' link under Contact Page
      $('#logo-line-container').mouseover(function () {
        $('.line-logo').attr('src', 'includes/img/line/LINE-white-in-green.png')
        $('#line-hover-details').html(contactLine)
      })
      $('#logo-line-container').mouseout(function () {
        $('.line-logo').attr('src', 'includes/img/line/LINE-green-in-white.png')
        $('#line-hover-details').html('')
      })
      // Hover on 'WhatsApp' link under Contact Page
      $('#logo-wa-container').mouseover(function () {
        $('.whatsapp-logo').attr(
          'src',
          'includes/img/whatsapp/WhatsApp-logo.png'
        )
        $('#wa-hover-details').html(whatsAppNo)
      })
      $('#logo-wa-container').mouseout(function () {
        $('.whatsapp-logo').attr(
          'src',
          'includes/img/whatsapp/WhatsApp-logo.png'
        )
        $('#wa-hover-details').html('')
      })
    } else if (localStorage.getItem('Dark Mode') === 'true') {
      // Hover on 'LinkedIn' link under Contact Page
      $('#logo-linkedin-container').mouseover(function () {
        $('.linkedin-logo').css({ display: 'none' })
        $('.linkedin-logo-hover').css({ display: 'flex' })
      })
      $('#logo-linkedin-container').mouseout(function () {
        $('.linkedin-logo').css({ display: 'flex' })
        $('.linkedin-logo-hover').css({ display: 'none' })
      })
      // Hover on 'LINE' link under Contact Page
      $('#logo-line-container').mouseover(function () {
        $('.line-logo').attr('src', 'includes/img/line/LINE-white-in-black.png')
        $('#line-hover-details').html(contactLine)
      })
      $('#logo-line-container').mouseout(function () {
        $('.line-logo').attr('src', 'includes/img/line/LINE-black-in-white.png')
        $('#line-hover-details').html('')
      })
      // Hover on 'WhatsApp' link under Contact Page
      $('#logo-wa-container').mouseover(function () {
        $('.whatsapp-logo').attr(
          'src',
          'includes/img/whatsapp/WhatsApp-logo.png'
        )
        $('#wa-hover-details').html(whatsAppNo)
      })
      $('#logo-wa-container').mouseout(function () {
        $('.whatsapp-logo').attr(
          'src',
          'includes/img/whatsapp/WhatsApp-logo.png'
        )
        $('#wa-hover-details').html('')
      })
    }

    if (
      window.location.href.toString().split(window.location.host)[1] !==
      '/works'
    ) {
      $('footer#footer').css('height', 'inherit')
    }
  }
})
