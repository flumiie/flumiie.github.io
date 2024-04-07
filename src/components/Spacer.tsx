import React from 'react'

interface SpacerProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  style?: React.CSSProperties
}

const Spacer = (props: SpacerProps) => {
  return <div style={{
    width: props.color ? (props.width ?? 0 / 2) : (props.width ?? 0),
    height: props.height ?? 0,
    marginTop: props.color ? 4 : 0,
    borderTopWidth: props.color ? 1 : 0,
    borderColor: props.color ?? 'transparent',
    ...props.style
  }}></div>
}

export default Spacer