import React from 'react'

function Dashboard() {
    return (
        <div className='dashboard-container'>
            <div className="midLeft">
                <div className="midLeft1">
                    <div className="topHead">
                        <h1>Overview</h1>
                    </div>
                    <ul>
                        <li><h3>21</h3><p>In Progress</p></li>
                        <li><h3>42</h3><p>Completed</p></li>
                        <li><h3>12</h3><p>To-Do</p></li>
                    </ul>
                </div>
                <div className="midLeft2">
                    <ul id="option">
                        <li className="inactive">ALL</li>
                        <li className="activeMid">PROGRESS</li>
                        <li className="inactive">TO-DO</li>
                        <li className="inactive">COMPLETED</li>
                    </ul>
                </div>
                <div className="midLeft3">
                    <div className="progress1 progress">
                        <p>In Progress</p>
                        <h3>UI/UX Design</h3>
                        <p>Completed: 35/70</p>
                        <a href="/workspace">Continue</a>
                        <progress value="35" max="70"></progress>
                        <h4>DUE: OCT 27, 2022</h4>
                    </div>
                    <div className="progress2 progress">
                        <p>In Progress</p>
                        <h3>Backend API Development</h3>
                        <p>Completed: 21/80</p>
                        <a href="/workspace">Continue</a>
                        <progress value="21" max="80"></progress>
                        <h4>DUE: SEPT 10, 2022</h4>
                    </div>
                    <div className="progress3 progress">
                        <p>In Progress</p>
                        <h3>Schema For Backend</h3>
                        <p>Completed: 56/60</p>
                        <a href="/workspace">Continue</a>
                        <progress value="56" max="60"></progress>
                        <h4>DUE: AUG 5, 2022</h4>
                    </div>
                    <div className="progress4 progress">
                        <p>In Progress</p>
                        <h3>UI/UX Development</h3>
                        <p>Completed: 12/100</p>
                        <a href="/workspace">Continue</a>
                        <progress value="12" max="100"></progress>
                        <h4>DUE: NOV 30, 2022</h4>
                    </div>
                </div>
            </div>
            <div className="midRight">
                <h2>Your Activity</h2>
                <ul>
                    <li><h3>You</h3><p>Completed today's task</p></li>
                    <li><h3>John Walker</h3><p>Attended report meeting at 3:00 PM</p></li>
                    <li><h3>You</h3><p>Hosted product meeting at 1:00 PM</p></li>
                    <li><h3>You</h3><p>Added new task to To-Do List</p></li>
                    <li><h3>John Walker</h3><p>Added new task</p></li>
                    <li><h3>You</h3><p>Hosted meeting with Company Representative</p></li>
                    <li><h3>You</h3><p>Homepage Design for Client Product</p></li>
                    <li><h3>You</h3><p>Schema For Backend</p></li>
                </ul>
                <a href="/workspace">See More</a>
            </div>
        </div>
    )
}

export default Dashboard