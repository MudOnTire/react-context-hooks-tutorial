import React, { useState } from 'react';

const SongList = () => {

  const [songs, setSongs] = useState([
    // { title: 'almost home', id: 1 },
    // { title: 'memory gospel', id: 2 },
    // { title: 'this wild darkness', id: 3 }
  ]);

  return (
    <div className='song-list'>
      {songs[1]?.title}
      <ul>
        <li>this wild darkness</li>
        <li>memory gospel</li>
      </ul>
    </div>
  )
}

export default SongList;
