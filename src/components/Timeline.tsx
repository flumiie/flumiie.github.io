import React from 'react'

export type TimelineItemProps = {
  position: 'left' | 'right';
  title: string;
  subtitle: string;
  image?: string;
}

export interface DropdownProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
}

export default (props: DropdownProps) => {
  return (
    <div {...props} className="timeline">
      {props.children}
    </div>
  )
}

export const TimelineItem = (props: TimelineItemProps) => {
  return (
    <div className={`circle ${props.position}-arrow`}>
      <div className="content">
        <h2>{props.title}</h2>
        <p>{props.subtitle}</p>
      </div>
    </div>
  )
}
