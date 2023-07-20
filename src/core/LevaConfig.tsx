import { useState } from "react";
import { Leva } from "leva";

const LevaConfig = () => {
  const pos = { x: 0, y: 100 };
  const [posCh, setPosCh] = useState(false);

  return (
    <Leva
      collapsed
      titleBar={posCh ? {
        onDrag: ((pos) => ({
          x: pos.x,
          y: pos.y
        }))
      } : {
        position: {
          x: pos.x,
          y: pos.y
        },
        onDrag: ((pos) => {
          setPosCh(true);
          return ({
            x: pos.x,
            y: pos.y
          });
        })
      }}
      theme={{
        colors: {
          elevation1: '#202',
          elevation2: '#101',
          elevation3: '#000',
          highlight1: '#aff',
          highlight2: '#0ff',
          highlight3: '#0ff',
          folderWidgetColor: '#fff',
          folderTextColor: '#f77',
          toolTipBackground: '#222',
          toolTipText: '#fff',
        },
        sizes: {
          rootWidth: '360px',
        },
        fontSizes: {
          root: '14px',
          toolTip: '14px'
        },
        space: {
          md: '12px'
        }
      }}
    />
  );
};

export default LevaConfig;