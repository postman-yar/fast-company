import React, { useState } from 'react';
import Qualititie from './qualitie';
import Bookmark from './bookmark';


const User = (props) => {
    const [isFavorite, setFav] = useState(false);

    const handlerChange = () => {
        setFav(!isFavorite)
    }
    return (
        <tr key={props.user._id}>
            <th>{props.user.name}</th>
            <td>
                <Qualititie
                    qualities={props.user.qualities}
                />
            </td>
            <td>{props.user.profession.name}</td>
            <td>{props.user.completedMeetings}</td>
            <td>{props.user.rate}/5</td>
            <td>
                <Bookmark
                    isFavorite={isFavorite}
                    onChange={handlerChange}
                />
            </td>
            <td><button onClick={() => props.onDelete(props.user._id)}
                className="btn btn-danger btn-sm m-2">
                delete
            </button></td>
        </tr>
    );
}

export default User;