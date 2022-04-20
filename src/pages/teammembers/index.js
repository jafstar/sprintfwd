import * as React from 'react';
import {
    Link,
    useParams
} from "react-router-dom"

const COLUMNS = [
    {
        name: "ID",
        key: "id",
        pos: 'bottom-right'
    },
    {
        name: "First Name",
        key: "first_name",
        pos: 'title-1'
    },
    {
        name: "Last Name",
        key: "last_name",
        pos: 'title-2'
    },
    {
        name: "Email",
        key: "email",
        pos: 'sub-title'
    },
    {
        name: "Team",
        key: "team.name",
        pos: 'bottom-left'
    }
]

const DATA = [
    {
        "id": 1801,
        "first_name": "Bonnie",
        "last_name": "Doyle",
        "email": "bonnie.doyle@email.com",
        "team": {
            "id": 1,
            "name": "Project"
        }
    },
    {
        "id": 1201,
        "first_name": "Siu",
        "last_name": "Maggio",
        "email": "siu.maggio@email.com",
        "team": {
            "id": 2,
            "name": "Engineering"
        }
    },
    {
        "id": 2101,
        "first_name": "Nella",
        "last_name": "Brakus",
        "email": "nella.brakus@email.com",
        "team": {
            "id": 3,
            "name": "Design"
        }
    },
    {
        "id": 1008,
        "first_name": "Clayton",
        "last_name": "Connelly",
        "email": "clayton.connelly@email.com",
        "team": {
            "id": 2,
            "name": "Engineering"
        }
    },
    {
        "id": 3123,
        "first_name": "Vernia",
        "last_name": "Purdy",
        "email": "vernia.purdy@email.com",
        "team": {
            "id": 1,
            "name": "Project"
        }
    },
    {
        "id": 1821,
        "first_name": "Coretta",
        "last_name": "Homenick",
        "email": "coretta.homenick@email.com",
        "team": {
            "id": 4,
            "name": "QA"
        }
    },
    {
        "id": 2712,
        "first_name": "Wilson",
        "last_name": "O'Hara",
        "email": "wilson.o'hara@email.com",
        "team": {
            "id": 2,
            "name": "Engineering"
        }
    },
    {
        "id": 1722,
        "first_name": "Deanna",
        "last_name": "Kuvalis",
        "email": "deanna.kuvalis@email.com",
        "team": {
            "id": 2,
            "name": "Engineering"
        }
    },
    {
        "id": 2213,
        "first_name": "Rafaela",
        "last_name": "Kiehn",
        "email": "rafaela.kiehn@email.com",
        "team": {
            "id": 4,
            "name": "QA"
        }
    },
    {
        "id": 1911,
        "first_name": "Jeffry",
        "last_name": "Block",
        "email": "jeffry.block@email.com",
        "team": {
            "id": 3,
            "name": "Design"
        }
    }
]


const TeamMembers = () => {

    const [teamData, setTeamData] = React.useState([])
    const params = useParams();


    React.useEffect(() => {






        const tmpData = DATA.filter(itm => {
            return Number(itm.team.id) === Number(params.id)
        })

        console.log('params: ', params)
        console.log('tmpData: ', tmpData)

        setTeamData([...tmpData])
    }, [params])


    return (
        <div>
            <div className="back-btn">
                <Link to="/teams">
                    <span>&lt; Back</span>
                </Link>
            </div>
            {
                teamData.length >= 1 && teamData.map((itm, idx) => {
                    return (
                        <div key={`table-row-${idx}`}>
                            <div className="list-item">
                                <div className='list-item-header'>
                                    <div className='list-item-img'>
                                        <img src={`https://i.pravatar.cc/48?u=${itm.id}`} width="44px" height="44px" className="member-avatar" />
                                    </div>
                                    <div>
                                        <h3>{itm.first_name} {itm.last_name}</h3>
                                        <p>{itm.email}</p>
                                    </div>
                                </div>
                                <div className="list-item-footer">
                                    <span>Team: {itm.team.name}</span>
                                    <span>ID: {itm.id}</span>
                                </div>
                            </div >

                        </div>
                    )
                })
            }
        </div>
    )

}

export { TeamMembers as default }