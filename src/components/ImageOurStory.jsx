import * as React from 'react';
import picOne from '../images/our-story/pic_1.jpg';
import picTwo from '../images/our-story/pic_2.jpg';
import picThree from '../images/our-story/pic_3.jpg';

export default function ImageOurStory() {
  ourStoryArray = [
    {
      header: 'First Header',
      subHeader: 'First Sub Header',
      text: 'First Text',
      image: { picOne },
    },
    {
      header: 'Second Header',
      subHeader: 'Second Sub Header',
      text: 'Second Text',
      image: { picTwo },
    },
    {
      header: 'Third Header',
      subHeader: 'Third Sub Header',
      text: 'Third Text',
      image: { picThree },
    },
  ];

  return (
    <>
      <h1> hello</h1>
    </>
  );
}
