export interface Language {
  code: string;
  name: string;
}

export interface TranslationEntry {
  id: string;
  sourceText: string;
  translatedText: string;
  sourceLang: string;
  targetLang: string;
  timestamp: Date;
}

export interface User {
  id: string;
  name: string;
  email: string;
}

export type AppView = 'home' | 'services' | 'about' | 'contact' | 'profile';