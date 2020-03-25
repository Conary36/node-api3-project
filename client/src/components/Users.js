import React, {useState} from 'react';
import {axiosWithAuth} from '../utilities/axiosWithAuth';


const initialUser = {
    name: ""
}
const Users = ({name}) => {
    const [editing, setEditing] = useState(false);
    const [userName, setUserName] = useState(initialUser);
    const [newName, setNewName] = useState(initialUser);

    const createName = name => {
         setEditing(true);
         setUserName(name);
    }

    const saveEdit = e => {
        e.preventDefault();
        axiosWithAuth()
            .put(`/api/users/${userName.id}`, userName)
            .then(res =>{
                setUserName(initialUser);
                window.location.reload(false);
            })
            .catch(err => console.log(err))
    };

    const deleteName = name => {
        axiosWithAuth()
            .delete(`api/users/${name.id}`)
            .then(res => {
                console.log(res);
                window.location.reload(false);
            })
            .catch(err => console.log(err))
    };

    const addName = e => {
        e.preventDefault();
        setNewName({...newName});
        axiosWithAuth()
            .post(`api/users/`, newName)
            .then(res => {
                setNewName(initialUser);
                window.location.reload(false);
            })
            .catch(err => console.log("Try again!"))
    }
    return(
        <div>
        
        
        </div>
    )

}