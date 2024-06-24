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
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/flashes/')
      .then(response => {
        console.log('API response:', response.data); // Log the full response
        setFlashes(response.data.results); // Update this line to access the results key
      })
      .catch(error => {
        console.error('There was an error fetching the flashes!', error);
        setError('There was an error fetching the flashes!');
      });
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className='flashes'>
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
