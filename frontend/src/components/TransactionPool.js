import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

import history from '../history';
import Transaction from './Transaction';
import { API_BASE_URL, SECONDS_JS } from '../config';

const POOL_INTERVAL = 1 * SECONDS_JS;

function TransactionPool() {
    const [transactions, setTransactions ] = useState([]);

    const fetchTransactions = () => {
        fetch(
            `${API_BASE_URL}/transactions`)
            .then(response => response.json())
            .then(json => {
                console.log('transctions json', json);
                setTransactions(json)
            }
        );
    }

    const fetchMineBlock = () => {
        fetch(
            `${API_BASE_URL}/blockchain/mine`)
            .then(() => {
                alert('Success');
                history.push('/blockchain');
            }
        );
    }

    useEffect(() => {
        fetchTransactions();
        const intervalId = setInterval(fetchTransactions, POOL_INTERVAL);
        
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="TransactionPool">
            <Link to="/">Home</Link>
            <hr />
            <h3>Transaction Pool</h3>
            <div>
                {
                    transactions.map(transaction => (
                        <div key={transaction.id}>
                            <hr />
                            <Transaction transaction={transaction} />
                        </div>
                    ))
                }
            </div>
            <hr />
            <Button variant="danger" onClick={fetchMineBlock}>
                Mine a block of these transactions
            </Button>
        </div>
    )
}

export default TransactionPool;
