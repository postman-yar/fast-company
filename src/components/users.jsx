import React, { useState } from 'react';
import api from "../api"


const Usrs = () => {
    const [users, setUsers] = useState(api.users.fetchAll());

    const handleDelete = (id) => {
        setUsers(users.filter((user => user._id !== id)))
    };

    const getLabel = (count) => {
        const lastOne = Number(count.toString().slice(-1))
        if (count >= 5 && count <= 14)
            return 'человек тусанет'
        if ([2, 3, 4].indexOf(lastOne) >= 0)
            return 'человека тусанут'
        return 'человек тусанет'
    }

    return (
        <React.Fragment>
            <span className={"badge bg-" + (users.length > 0 ? "primary" : "danger")}>
                {users.length > 0 ? `${users.length} ${getLabel(users.length)} тусанет с тобой сегодня` : 'никто не тусанет с тобой сегодня'}
            </span>
            {users.length > 0 &&
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Имя</th>
                            <th scope="col">Качества</th>
                            <th scope="col">Профессия</th>
                            <th scope="col">Встретился, раз</th>
                            <th scope="col">Оценка</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) =>
                            <tr key={user._id}>
                                <th>{user.name}</th>
                                <td>{user.qualities.map((item) => <span className={"badge m-1 bg-" + item.color} key={item._id}>{item.name}</span>)}</td>
                                <td>{user.profession.name}</td>
                                <td>{user.completedMeetings}</td>
                                <td>{user.rate}/5</td>
                                <td><button onClick={() => handleDelete(user._id)}
                                    style={{ fontSize: "30px", fontWeight: "bold" }}
                                    className="btn btn-danger btn-sm m-2">
                                    delete
                                </button></td>
                            </tr>
                        )}
                    </tbody>
                </table>
            }
        </React.Fragment >
    )
}


export default Usrs