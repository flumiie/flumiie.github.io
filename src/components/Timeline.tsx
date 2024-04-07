import React from 'react'
import { Spacer } from '.';

export type TimelineItemProps = {
  position: 'left' | 'right';
  title: string;
  subtitle: string;
  children?: React.ReactNode;
  image?: string;
  withDot?: boolean;
  withSpacer?: boolean;
}

export interface DropdownProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
}

const Timeline = (props: DropdownProps) => {
  return (
    <div {...props} className="timeline">
      {props.children}
    </div>
  )
}

export const TimelineItem = (props: TimelineItemProps) => {
  return (
    <div className={`${(props.withDot ?? true) ? 'circle' : 'without-circle'} ${props.position}-arrow`}>
      <div className="content">
        <h2 style={{ fontWeight: 'bold' }}>{props.title}</h2>
        <p style={{ fontSize: 13.5 }}>{props.subtitle}</p>
        {(props.withSpacer ?? true) ?
          <Spacer width='100%' height={8} color='#bbb' /> : null}
        {props.children}
      </div>
    </div>
  )
}

export default Timeline;