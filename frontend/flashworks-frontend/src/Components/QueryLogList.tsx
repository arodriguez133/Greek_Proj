import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface QueryLog {
    id: number;
    query: string;
    operation_name: string;
    start_time: string;
    end_time: string;
    execution_time: number;
}

const QueryLogList: React.FC = () => {
    const [queryLogs, setQueryLogs] = useState<QueryLog[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/querylogs/')
            .then(response => {
                console.log('API response:', response.data); // Log the full response
                setQueryLogs(response.data.results); // Update this line to access the results key
            })
            .catch(error => {
                console.error('There was an error fetching the query logs!', error);
                setError('There was an error fetching the query logs!');
            });
    }, []);

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div>
            <h2>Query Logs</h2>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Query</th>
                        <th>Operation Name</th>
                        <th>Start Time</th>
                        <th>End Time</th>
                        <th>Execution Time (s)</th>
                    </tr>
                </thead>
                <tbody>
                    {queryLogs.map((log) => (
                        <tr key={log.id}>
                            <td>{log.id}</td>
                            <td>{log.query}</td>
                            <td>{log.operation_name}</td>
                            <td>{new Date(log.start_time).toLocaleString()}</td>
                            <td>{new Date(log.end_time).toLocaleString()}</td>
                            <td>{log.execution_time.toFixed(2)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default QueryLogList;
