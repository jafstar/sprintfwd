import React from 'react'

const Credits = () => {

    return (
        <div className="static-content">
            <h2>Credits</h2>
            <p>
                Much of this site is built with open source technologies and would not have been possible without the many contributions by the developer community.
            </p>
            <p>
                Technologies used in this effort:
            </p>
            <ul>
                <li>React</li>
                <li>React DOM</li>
                <li>React Router</li>
                <li>WebPack</li>
                <li>Babel Js</li>
                <li>VS Code</li>
            </ul>

            <p>CSS Icons: <a href="https://css.gg" target="_blank">Link</a></p>
            <p>Background Image Credit: <a target="_blank" href="https://pixabay.com/photos/landscape-mountains-sky-clouds-man-78058/">Link</a></p>
            <p>People Avatars: <a target="_blank" href="https://pravatar.cc">Link</a></p>
            <p>Name Avatars: <a target="_blank" href="https://ui-avatars.com">Link</a></p>
        </div>
    )
}

export { Credits as default }