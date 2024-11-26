import { Button } from '@chakra-ui/react';
import { useRef, useState } from 'react';

const TIMES = [
  { minutes: 1, seconds: 60 },
  { minutes: 2, seconds: 120 },
  { minutes: 3, seconds: 180 },
  { minutes: 4, seconds: 240 },
  { minutes: 5, seconds: 300 },
  { minutes: 6, seconds: 360 },
  { minutes: 7, seconds: 420 },
  { minutes: 8, seconds: 480 },
  { minutes: 9, seconds: 540 },
  { minutes: 10, seconds: 600 },
];

function Countdown() {
  const Ref = useRef<number | null>(null);
  const [timer, setTimer] = useState('00:00');

  const getTimeRemaining = (e) => {
    const total = Date.parse(e) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    return {
      total,
      minutes,
      seconds,
    };
  };

  const updateTimer = (e) => {
    const { total, minutes, seconds } = getTimeRemaining(e);
    if (total >= 0) {
      setTimer(
        (minutes > 9 ? minutes : '0' + minutes) +
          ':' +
          (seconds > 9 ? seconds : '0' + seconds),
      );
    }
  };

  const clearTimer = (date: Date) => {
    updateTimer(date);

    if (Ref.current) clearInterval(Ref.current);
    const id = setInterval(() => {
      updateTimer(date);
    }, 1000);
    Ref.current = id;
  };

  const getDeadTime = (minutes: number) => {
    const deadline = new Date();

    deadline.setMinutes(deadline.getMinutes() + minutes);
    return deadline;
  };

  function onButtonClick(minutes: number) {
    clearTimer(getDeadTime(minutes));
  }

  return (
    <div style={{ textAlign: 'center', margin: 'auto' }}>
      <div>
        {TIMES.map((time) => {
          return (
            <Button onClick={() => onButtonClick(time.minutes)}>
              {time.minutes} Minutes
            </Button>
          );
        })}
      </div>
      <h2>{timer}</h2>
    </div>
  );
}

export default Countdown;
