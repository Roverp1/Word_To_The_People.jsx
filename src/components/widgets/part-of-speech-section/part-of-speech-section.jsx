import AudioPlayer from '../audio-player/audio-player';

import './part-of-speech-section.css';

const PartOfSpeechSection = ({ data, meanings }) => {
  return (
    <>
      <section>
        <div className='part-of-speech__wrapper-container'>
          <h1>{data[0].word}</h1>
          <span>{data[0]?.meanings[meanings]?.partOfSpeech}</span>
          <div className='part-of-speech__audio-player'><AudioPlayer data={data} /></div>
        </div>
      </section>
    </>
  )
}

export default PartOfSpeechSection;
