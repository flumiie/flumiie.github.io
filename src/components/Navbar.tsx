"use client"

import { useCallback, useEffect, useState } from 'react'
import { Dialog, Popover } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { useLocalStorage, useWindowScroll } from '@uidotdev/usehooks'
import '../assets/styles/navbar.scss'

// const items: DropdownItems = [
//   { name: 'Works', description: 'Most of what I\'ve worked on', href: '#', icon: SquaresPlusIcon },
//   { name: 'Playground', description: 'Just a fun time waster', href: '#', icon: CursorArrowRaysIcon },
// ]

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [fixedNavState, setFixedNavState] = useLocalStorage('fixed-nav', '');
  const [playgroundOffset] = useLocalStorage('playground-offset', 0);
  const [worksOffset] = useLocalStorage('works-offset', 0);
  const [technicalOffset] = useLocalStorage('technical-offset', 0);
  const [contactsOffset] = useLocalStorage('contacts-offset', 0);
  const [{ }, scrollTo] = useWindowScroll()

  const onScroll = useCallback(() => {
    setScrollY(window.scrollY);
  }, []);

  useEffect(() => {
    const opts: AddEventListenerOptions & EventListenerOptions = { passive: true };
    window.addEventListener("scroll", onScroll, opts);
    return () => {
      window.removeEventListener("scroll", onScroll, opts);
    }
  }, [onScroll]);

  useEffect(() => {
    const showNavbarOnScroll = scrollY > (document.getElementById('works')?.offsetHeight ?? 0) / 5
    if (showNavbarOnScroll) {
      setFixedNavState('header-fixed');
    } else {
      setFixedNavState('');
    }
  }, [scrollY])

  return (
    <header className={`bg-white ${fixedNavState}`}>
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Ferick Andrew</span>
            <img className="h-8 w-auto" src="/images/favicon.ico" alt="" />
          </a>
        </div>

        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <span
            id="nav-introduction"
            className={`text-sm font-semibold leading-6 ${window.scrollY < playgroundOffset - (window.screen.height / 3) ? 'text-pink-400' : 'text-gray-900'}`}
            onClick={() => {
              scrollTo({
                top: 0,
                behavior: 'smooth'
              })
            }}
          >
            Intro
            <div className="sparkle"></div>
          </span>
          <span
            id="nav-playground"
            className={`text-sm font-semibold leading-6 ${window.scrollY >= playgroundOffset - (window.screen.height / 3) && window.scrollY < worksOffset - (window.screen.height / 3) ? 'text-pink-400' : 'text-gray-900'}`}
            onClick={() => {
              scrollTo({
                top: playgroundOffset - (fixedNavState ? 77 : 78),
                behavior: 'smooth'
              });
            }}
          >
            Playground
            <div className="sparkle"></div>
          </span>
          <span
            id="nav-works"
            className={`text-sm font-semibold leading-6 ${window.scrollY >= worksOffset - (window.screen.height / 3) && window.scrollY < technicalOffset - (window.screen.height / 3) ? 'text-pink-400' : 'text-gray-900'}`}
            onClick={() => {
              scrollTo({
                top: worksOffset - (fixedNavState ? 77 : 78),
                behavior: 'smooth'
              });
            }}
          >
            Works
            <div className="sparkle"></div>
          </span>
          <span
            id="nav-technical"
            className={`text-sm font-semibold leading-6 ${window.scrollY >= technicalOffset - (window.screen.height / 3) && window.scrollY < contactsOffset - (window.screen.height / 3) ? 'text-pink-400' : 'text-gray-900'}`}
            onClick={() => {
              scrollTo({
                top: technicalOffset - (fixedNavState ? 77 : 78),
                behavior: 'smooth'
              });
            }}
          >
            Technical
            <div className="sparkle"></div>
          </span>
          <span
            id="nav-contacts"
            className={`text-sm font-semibold leading-6 ${window.scrollY >= contactsOffset - (window.screen.height / 3) ? 'text-pink-400' : 'text-gray-900'}`}
            onClick={() => {
              scrollTo({
                top: contactsOffset - (fixedNavState ? 77 : 78),
                behavior: 'smooth'
              })
            }}
          >
            Contacts
            <div className='sparkle'></div>
          </span>
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a id="nav-login" href="/" className="text-sm font-semibold leading-6 text-gray-900">
            Log in <span aria-hidden="true">&rarr;</span>
            <div className='sparkle'></div>
          </a>
        </div>
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <span className="-m-1.5 p-1.5" />
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <span
                  id="nav-mobile-introduction"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 nav-mobile text-gray-900 hover:bg-rose-200"
                  onClick={() => {
                    scrollTo({
                      top: 0,
                      behavior: 'smooth'
                    });
                  }}
                >
                  Introduction
                </span>
                <span
                  id="nav-mobile-playground"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 nav-mobile text-gray-900 hover:bg-rose-200"
                  onClick={() => {
                    scrollTo({
                      top: playgroundOffset - (fixedNavState ? 77 : 78),
                      behavior: 'smooth'
                    })
                  }}
                >
                  Playground
                </span>
                <span
                  id="nav-mobile-works"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 nav-mobile text-gray-900 hover:bg-rose-200"
                  onClick={() => {
                    scrollTo({
                      top: worksOffset - (fixedNavState ? 77 : 78),
                      behavior: 'smooth'
                    })
                  }}
                >
                  Works
                </span>
                <span
                  id="nav-mobile-works"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 nav-mobile text-gray-900 hover:bg-rose-200"
                  onClick={() => {
                    scrollTo({
                      top: technicalOffset - (fixedNavState ? 77 : 78),
                      behavior: 'smooth'
                    })
                  }}
                >
                  Technical
                </span>
                <span
                  id="nav-mobile-contacts"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 nav-mobile text-gray-900 hover:bg-rose-200"
                  onClick={() => {
                    scrollTo({
                      top: contactsOffset - (fixedNavState ? 77 : 78),
                      behavior: 'smooth'
                    })
                  }}
                >
                  Contacts
                </span>
              </div>
              <div className="py-6">
                <a
                  href="/"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-rose-200"
                >
                  Log in
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header >
  )
}

export default Navbar