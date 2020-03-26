import React, {useState, useEffect} from 'react';
import {axiosWithAuth} from '../utilities/axiosWithAuth'
import Users from './Users'

const UserPage = () => {
    const [client, setClient] = useState([]);

    useEffect(()=>{

        axiosWithAuth()
            .get("/api/users")
            .then(res =>{
                console.log("NAMES!", res.data)

                setClient(res.data);
            })
            .catch(err =>{
                console.log("No NAMES!")
            })
    }, []);

    return(
        <section>
            <div>
                <Users names={client}/>
            </div>
        </section>

    )
}

export default UserPage;