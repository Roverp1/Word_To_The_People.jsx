import './part-of-speech-section.css';

const PartOfSpeechSection = ({ data, meanings }) => {
  return (
    <>
      <section>
        <div className='part-of-speech__wrapper-container'>
          <h1>{data[0].word}</h1>
          <p>{data[0]?.meanings[meanings]?.partOfSpeech}</p>
        </div>
      </section>
    </>
  )
}

export default PartOfSpeechSection;
