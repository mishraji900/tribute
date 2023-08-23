import React from 'react';
import YouTube from 'react-youtube';

const Quote = () => {
  const opts = {
    height: '360',
    width: '850',
    playerVars: {
      autoplay: 1,
      loop: 1,
      controls: 0,
      showinfo: 0,
      modestbranding: 1
    }
  };

  // Replace 'J9NRVPMkQmw' with the actual video ID from the YouTube URL.
  const videoId = 'J9NRVPMkQmw';

  return (
    <div className='flex flex-col gap-6 justify-center items-center m-6'>
      <div>
        <img src="https://www.azquotes.com/picture-quotes/quote-my-mental-boundaries-expanded-when-i-viewed-the-earth-against-a-black-and-uninviting-rakesh-sharma-64-14-82.jpg" alt="Quote"/>
      </div>
      <div>
        <YouTube videoId={videoId} opts={opts} />
      </div>
    </div>
  );
}

export default Quote;
