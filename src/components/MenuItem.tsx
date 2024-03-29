import React, { ReactNode, useState } from 'react'

interface MenuItemProps {
  id?: string;
  className?: string;
  children: ReactNode | string;
}

const MenuItem = (props: MenuItemProps) => {
  const [showSparkle, setShowSparkle] = useState(false)

  return (
    <div
      {...props}
      onMouseEnter={() => {
        setShowSparkle(true)
      }}
      onMouseLeave={() => {
        setShowSparkle(false)
      }}
    >
      <a
        href="/"
        className="text-sm font-semibold leading-6 text-gray-900"
      >
        {props.children}
        {showSparkle ? <div className="sparkle" style={{ margin: '-8em 0 0 -19.7em' }}></div> : null}
      </a>
    </div>
  )
}

export default MenuItem;