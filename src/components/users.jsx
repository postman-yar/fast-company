import React, { useState } from 'react';
import api from "../api"
import SearchStatus from './searchStatus';
import User from './user';


const Usrs = () => {
    const [users, setUsers] = useState(api.users.fetchAll());

    const handleDelete = (id) => {
        setUsers(users.filter((user => user._id !== id)))
    };


    return (
        <React.Fragment>
            <SearchStatus usersLength={users.length}/>
            {users.length > 0 &&
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Имя</th>
                            <th scope="col">Качества</th>
                            <th scope="col">Профессия</th>
                            <th scope="col">Встретился, раз</th>
                            <th scope="col">Оценка</th>
                            <th scope="col">Избранное</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) =>
                            <User 
                            key = {user._id}
                            user={user}
                            onDelete={handleDelete}
                            />
                        )}
                    </tbody>
                </table>
            }
        </React.Fragment >
    )
}


export default Usrs