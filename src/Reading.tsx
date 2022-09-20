import { useContext } from 'react';
import {useParams} from "react-router-dom";
import {Helmet} from 'react-helmet-async';
import { NovelsContext } from './context';

const fields = [
  'authorSex',
  'publicationYear',
  'publisher',
  'numPages',
  'subGenre',
  'division',
  'typicalChapterLength',
  'excerptsOfOtherGenres',
  'divisionToParagraphs',
  'narratorType',
  'narratorRole',
  'narratorGender',
  'characters',
  'communication',
  'numPlotLines',
  'exposition',
  'keyEvents',
  'fillers',
  'otherLanguages',
  'referrals',
  'readability',
  'chronologicalScope',
  'epochs',
  'spaces',
  'locations',
  'placeNames',
  'centralityOfIsrael',
  'themes',
  'loveCentrality',
  'loveType',
  'intergenerationalRelationships',
  'warCentrality',
  'whichWar',
  'death',
  'grammaticalTense',
  'id',
];

export default function Reading () {
  const { id } = useParams<{id: string}>();
  const { readings } = useContext(NovelsContext);

  const reading = readings.find(r => r.id === id);
  type ReadingKey = keyof typeof reading;

  return (
    <div>
      <Helmet>
        <title>Reading: {id}</title>
      </Helmet>
      <section dir="rtl">
        <h1>{reading?.author}: {reading?.title}</h1>
        <table dir="rtl">
          <tbody>
            {fields.map((name) => (
              <tr key={name}>
                <th align="right">{name}</th>
                <td>{reading && reading[name as ReadingKey]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}

