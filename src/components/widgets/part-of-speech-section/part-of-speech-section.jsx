import AudioPlayer from "../audio-player/audio-player";

import "./part-of-speech-section.css";

const PartOfSpeechSection = ({ data, meanings }) => {
  return (
    <>
      {data[0]?.meanings[meanings]?.definitions && (
        <>
          <section>
            <div className="pos__wrapper-container">
              <h1 className="pos__word">{data[0].word}</h1>
              <span className="pos__part-of-speech">
                {data[0]?.meanings[meanings]?.partOfSpeech}
              </span>
              <div className="pos__audio-player">
                <AudioPlayer data={data} />
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default PartOfSpeechSection;
