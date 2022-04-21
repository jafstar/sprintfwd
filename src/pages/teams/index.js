import React from 'react'
import {
    Link
} from "react-router-dom"


const DATA = [
    {
        "id": 1,
        "name": "Project",
        "member_count": 2
    },
    {
        "id": 2,
        "name": "Engineering",
        "member_count": 4
    },
    {
        "id": 3,
        "name": "Design",
        "member_count": 2
    },
    {
        "id": 4,
        "name": "QA",
        "member_count": 2
    }
]



const Teams = () => {

    return (
        <div>
            {
                DATA.map((itm, idx) => {
                    return (
                        <div className="list-item-shell" key={`table-row-${idx}`}>
                            <Link to={`/teams/${itm.id}`}>
                                <div className="list-item">
                                    <div className='list-item-header'>
                                        <div className='list-item-img'>
                                            <img src={`https://ui-avatars.com/api/?name=${itm.name}&background=random`} width="40px" height="40px" className="member-avatar" />
                                        </div>
                                        <div>
                                            <h3>{itm.name}</h3>
                                            <p># Members: {itm.member_count}</p>
                                        </div>
                                    </div>

                                </div >
                            </Link>
                        </div>
                    )
                })
            }
        </div>
    )
}

export { Teams as default }