import AudioPlayer from "../audio-player/audio-player";
import WordDefenition from "../word-defenition/word-defenition";
import LineBold from "../../ui/line-bold/line-bold";

import "./part-of-speech-section.css";

const PartOfSpeechSection = ({ data }) => {
  const meanings = data[0].meanings || [];

  return (
    <>
      {meanings.map((element, index) => (
        <div key={index}>
          {element.definitions && (
            <>
              <section>
                <div className="pos__wrapper-container">
                  <h1 className="pos__word">{data[0].word}</h1>
                  <span className="pos__part-of-speech">
                    {element.partOfSpeech}
                  </span>
                  <div className="pos__audio-player">
                    <AudioPlayer data={data} />
                  </div>
                  <LineBold />
                  <WordDefenition data={data} meaning={index} />
                </div>
              </section>
            </>
          )}
        </div>
      ))}
    </>
  );
};

export default PartOfSpeechSection;
