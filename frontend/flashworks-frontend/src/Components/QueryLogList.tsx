import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface QueryLog {
  id: number;
  query: string;
  operation_name: string | null;
  start_time: string;
  end_time: string;
  execution_time: number;
}

const QueryLogList = () => {
  const [queryLogs, setQueryLogs] = useState<QueryLog[]>([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/query-logs/')
      .then(response => {
        setQueryLogs(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the query logs!', error);
      });
  }, []);

  return (
    <div>
      <ul>
        {queryLogs.map(log => (
          <li key={log.id}>
            {log.operation_name} - {log.start_time}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QueryLogList;
