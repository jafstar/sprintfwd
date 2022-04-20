import React from 'react'

const About = () => {

    return (
        <div className="static-content">
            <h2>About</h2>
            <p>This is a demo website for SprintFwd demonstrating the below features.</p>
            <h3>&gt;Assignment</h3>
            <p>
                Create a ReactJS app that lets you see a list of members, a list of teams and a To-do list.
            </p>

            <h3>&gt;Pages</h3>
            <p>Members page: Show a read-only table of members and their associated team names</p>
            <p>Teams page: Show a read-only table of teams and the count of team members for each team</p>
            <p>To-do list page: Show a To-do list where the user can index/create/update/delete items</p>

        </div>
    )
}

export { About as default }