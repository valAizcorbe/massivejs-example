import React, {Component} from 'react';

class UserDisplay extends Component {
    constructor(props){
        super(props);
        this.state = {
            users: []
        }
    }

    render(){
        const mappedUsers = this.state.users.map((user, i) => {
            return(
                <li>{user.name}</li>
            )
        })
        return(
            <div>
                User Display
                <ul>
                    {mappedUsers}
                </ul>
            </div>
        )
    }
};

export default UserDisplay;