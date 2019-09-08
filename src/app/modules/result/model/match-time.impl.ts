import { MatchTime } from './match-time.model';

export class MatchTimeImpl implements MatchTime {
  startedTime: number;
  pausedTime: number;
  matchTime: number;
  currentTime: number;
  currentPeriod: number;

  constructor() {

  }

  startMatch(): void {
    let time = new Date();

    this.startedTime = time.getTime();
  }

  pauseMatch(): void {

  }

  continueMatch(): void {

  }

  finishMatch(): void {

  }

  getMinutesTime(): number {
    return 0;
  }

  getMinutesNumber(): number {
    return 0;
  }

  getSecondsTime(): number {
    return 0;
  }

  getSecondsNumber(): number {
    return 0;
  }


}
