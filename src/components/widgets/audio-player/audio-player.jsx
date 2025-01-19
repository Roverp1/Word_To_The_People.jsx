import playIcon from "../../../assets/img/play-icon.png";

import "./audio-player.css";

const AudioPlayer = ({ data }) => {
  const phoneticsArr = data[0].phonetics;

  if (!phoneticsArr || phoneticsArr.length === 0) {
    return null;
  }

  return phoneticsArr.map((element) => {
    const audioLink = element.audio || "";
    const countryFromAudioLink =
      audioLink.match(/-(ca|uk|us|au)/)?.[1].toUpperCase() || "UNKNOWN";

    if (!audioLink) return null;

    const playAudio = () => {
      const audio = new Audio(audioLink);
      audio.play();
    };

    return (
      <>
        <div className="audio-player__player">
          <h2 className="audio-player__player-heading">
            {countryFromAudioLink}
          </h2>
          <button className="audio-player__player-btn" onClick={playAudio}>
            <img
              className="audio-player__player-icon"
              src={playIcon}
              alt="play icon"
            />
          </button>
          <span className="audio-player__player-phonetic">
            {element.text || "/unknown/"}
          </span>
        </div>
      </>
    );
  });
};

export default AudioPlayer;
