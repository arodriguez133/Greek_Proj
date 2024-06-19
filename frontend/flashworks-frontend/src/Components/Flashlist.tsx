import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface Flash {
  dbSequence: number;
  dbChapter: number;
  dbGK: number;
  dbDifficulty: number;
  dbFrequency: number;
  dbType: string;
  dbSetDiffWordAuto: number;
  dbCounter: number;
  dbWord: string;
  dbSayWordFile: string;
  dbMeaning: string;
  dbPrincipalParts: string;
}

const FlashList = () => {
  const [flashes, setFlashes] = useState<Flash[]>([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/flashes/')
      .then(response => {
        setFlashes(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the flashes!', error);
      });
  }, []);

  return (
    <div>
      <ul>
        {flashes.map(flash => (
          <li key={flash.dbSequence}>
            {flash.dbWord} - {flash.dbMeaning}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FlashList;
