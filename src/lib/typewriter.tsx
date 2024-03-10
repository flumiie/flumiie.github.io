import React from "react";
import Typewriter from 'typewriter-effect';

const Typer = () => {
  return (
    <div>
      <h3>GeeksforGeeks Typing Animation</h3>
      <Typewriter
        onInit={(writer) => {
          writer.typeString('Hello World!')
            .callFunction(() => {
              // console.log('String typed out!');
            })
            .pauseFor(2500)
            .deleteAll()
            .callFunction(() => {
              // console.log('All strings were deleted');
            })
            .start();
        }}
      />
    </div>
  );
}

export default Typer