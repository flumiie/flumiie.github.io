"use client"

import React, { Fragment, useState } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/24/outline'

export type DropdownItems = {
  icon: any;
  name: string;
  description: string;
  href: string;
}[]

export interface DropdownProps {
  items: DropdownItems;
}
const Dropdown = (props: DropdownProps) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div
      onMouseEnter={() => setMenuOpen(true)}
      onMouseLeave={() => setMenuOpen(false)}
      style={{ paddingBottom: '1em', marginBottom: '-1em' }}
    >
      <Popover className="relative">
        <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
          Stuffs
          <ChevronDownIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
        </Popover.Button>

        <Transition
          as={Fragment}
          show={menuOpen}
          enter="transition ease-out duration-200"
          enterFrom="opacity-0 translate-x-1 translate-y-1"
          enterTo="opacity-100 translate-y-0"
          leave="transition ease-in duration-150"
          leaveFrom="opacity-100 translate-y-0"
          leaveTo="opacity-0 translate-x-1 translate-y-1"
        >
          <Popover.Panel id="popover-panel" className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
            <div className="p-4">
              {props.items.map((item) => (
                <div
                  key={item.name}
                  className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-rose-200"
                >
                  <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                    <item.icon className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
                  </div>
                  <div className="flex-auto">
                    <a href={item.href} className="block font-semibold text-gray-900">
                      {item.name}
                      <span className="absolute inset-0" />
                    </a>
                    <p className="mt-1 text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </div>
  )
}

export default Dropdown