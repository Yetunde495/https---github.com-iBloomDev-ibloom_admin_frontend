import { useState, useEffect } from "react";
import { HiMiniSpeakerWave } from "react-icons/hi2";

const TextToSpeech = ({ text }: any) => {
  const [isPaused, setIsPaused] = useState(false);
  const [utterance, setUtterance] = useState<any>(null);

  useEffect(() => {
    const synth = window.speechSynthesis;
    const u = new SpeechSynthesisUtterance(text);

    setUtterance(u);

    return () => {
      synth.cancel();
    };
  }, [text]);

  const handlePlay = () => {
    const synth = window.speechSynthesis;
    const voices = synth.getVoices();

    utterance.voice = voices[4];

    if (isPaused) {
      synth.resume();
    }

    synth.speak(utterance);

    setIsPaused(false);
  };

  //   const handlePause = () => {
  //     const synth = window.speechSynthesis;

  //     synth.pause();

  //     setIsPaused(true);
  //   };

  //   const handleStop = () => {
  //     const synth = window.speechSynthesis;

  //     synth.cancel();

  //     setIsPaused(false);
  //   };

  return (
    <div>
      <button onClick={handlePlay} className="focus:outline-none text-primary">
        <HiMiniSpeakerWave size={30} />
      </button>
    </div>
  );
};

export default TextToSpeech;
