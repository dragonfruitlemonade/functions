import React from 'react';
import { useState, useEffect } from 'react'; 

const Ip = () => {

    const [userIp, setUserIp] = useState([]);

    useEffect(() => {
        fetch('https://api.ipify.org/?format=json')
        .then(res => res.json())
        .then(data => {
            setUserIp(data);
        })
    },[])

    return (
        <div>
            <AppLayout>
                사용자 IP : { userIp.ip }
            </AppLayout>
        </div>
    );
};

export default Ip;