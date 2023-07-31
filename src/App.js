import logo from './logo.svg';
import './App.css';
import { useEffect
, useState } from 'react';

function App() {
  const [activeKey, setActiveKey] = useState('');

  useEffect(() => {
    document.addEventListener('keydown', (event) =>{
      playSound(event.key.toUpperCase());
      // playSound()
    });
  },[]);

  const drumPads = [
    {
      text: "Q",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
      keyCode: "Heater 1",
    },
  
    {
      text: "W",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
      keyCode: "Heater 2",
    },
  
    {
      text: "E",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
      keyCode: "Heater 3",
    },
  
    {
      text: "A",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
      keyCode: "Heater 4",
    },
  
    {
      text: "S",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
      keyCode: "Clap",
    },
  
    {
      text: "D",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
      keyCode: "Open HH",
    },
  
    {
      text: "Z",
      url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
      keyCode: "Kick n' Hat",
    },
  
    {
      text: "X",
      url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
      keyCode: "Kick",
    },
  
    {
      text: "C",
      url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3", 
      keyCode: "Closed HH",
    }
  ];

  function playSound(selector) {
    const audio = document.getElementById(selector);
    console.log(audio);
    audio.play();
    setActiveKey(selector)
  }

  return (
    <div className='App'>
      <div id='drum-machine'>
        <div id='display'>{activeKey}</div>
        <div className='drum-pads'>
          {drumPads.map((drumPad) => (
            <div onClick={() =>{
              playSound(drumPad.text); 
            }} className = 'drum-pad' id={drumPad.url}>{drumPad.text}
          <audio className="clip" id={drumPad.text} src={drumPad.url}></audio>
          </div>
          
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
