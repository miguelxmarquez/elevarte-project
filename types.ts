
export type Screen = 'home' | 'book' | 'membership' | 'profile' | 'details';

export interface ClassSession {
  id: string;
  title: string;
  instructor: string;
  time: string;
  duration: string;
  spotsLeft: number;
  isFull: boolean;
  intensity: 'Low' | 'Medium' | 'High' | 'Medium High';
  level: string;
  room: string;
}

export interface Progress {
  discipline: string;
  level: string;
  completion: number;
  icon: string;
}

export interface Achievement {
  id: string;
  title: string;
  icon: string;
  isUnlocked: boolean;
}
