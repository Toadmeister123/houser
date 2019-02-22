import React from 'react'


export default function House(props) {
    const { name, address, city, zipcode } = props.house
    return(
        <div>
            <p>House</p>
            <p>name:{name}</p>
            <p>address:{address}</p>
            <p>city:{city}</p>
            <p>zipcode:{zipcode}</p>
            <button onClick={() => props.delete(props.house.id)}>delete</button>
        </div>
    )

}