export interface Novel {
  id: string;
  nliId?: string;
  author?: string;
  authorLifetime?: string;
  title?: string;
  publisher?: string;
  numPages?: string;
  numReadings?: number;
}

export interface Reading {
  id: string;
  nliId: string;
  title: string;
  author: string;
  authorSex: string;
  publicationYear: string;
  publisher: string;
  numPages: string;
  subGenre: string;
  division: string;
  typicalChapterLength: string;
  excerptsOfOtherGenres: string;
  divisionToParagraphs: string;
  narratorType: string;
  narratorRole: string;
  narratorGender: string;
  characters: string;
  communication: string;
  numPlotLines: string;
  exposition: string;
  keyEvents: string;
  fillers: string;
  otherLanguages: string;
  referrals: string;
  readability: string;
  chronologicalScope: string;
  epochs: string;
  spaces: string;
  locations: string;
  placeNames: string;
  centralityOfIsrael: string;
  themes: string;
  loveCentrality: string;
  loveType: string;
  intergenerationalRelationships: string;
  warCentrality: string;
  whichWar: string;
  death: string;
  grammaticalTense: string;
}