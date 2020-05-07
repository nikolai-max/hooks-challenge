import React from 'react'

const ListItem = (props) => {
    return (
        <div className="listItem">
            <h5>{props.name}</h5>
            <h5>{props.email}</h5>
            <img src={props.avatar} alt="perfect" />
        </div>
    )
}

export default ListItem