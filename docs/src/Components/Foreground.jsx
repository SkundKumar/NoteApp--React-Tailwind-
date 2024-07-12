import React from 'react';
import Card from './Card';
import notes from '../note';

function Foreground() {
  return (
    <div className='relative z-10 flex flex-wrap gap-24 p-40'>
      {notes.map((note) => (
        <Card key={note.key} title={note.title} content={note.content} />
      ))}
    </div>
  );
}

export default Foreground;
