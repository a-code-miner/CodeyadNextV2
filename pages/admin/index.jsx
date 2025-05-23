import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';

const Admin = () => {
    const router = useRouter();
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(false);

    const handleGetData = async () => {
        setLoading(true);
        const res = await fetch(`http://localhost:4000/admin`);
        const resData = await res.json();
        setData(resData);
        setLoading(false);
    };

    useEffect(() => {
        handleGetData();
    }, []);

    return loading ? (
        <h1 className='mt-5 text-center'>Loading...</h1>
    ) : (
        <div>
            <Button onClick={() => router.back()}>Back</Button>
            <ul>
                {Object.keys(data).map(key => (
                    <li key={Math.random() * 10}>{`${key} : ${data[key]}`}</li>
                ))}
            </ul>
        </div>
    );
};

export default Admin;
