export interface MatchTime {
    startedTime: number;
    pausedTime: number;
    matchTime: number;
    currentPeriod: number;

    startMatch(): void;
    pauseMatch(): void;
    continueMatch(): void;
    finishMatch(): void;
    getMinutesTime(): number;
    getMinutesNumber(): number;
    getSecondsTime(): number;
    getSecondsNumber(): number;
}