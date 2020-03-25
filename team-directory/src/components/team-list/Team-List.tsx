import React, { Props } from 'react';

class TeamList extends React.Component {

    private displayContent = [
        { name: 'Jon Lowrey', team: 'Guardian' }, { name: 'Tom Piczak', team: 'Starflake' }
    ];

    public updateDisplay = (value: any) => {

    }

    public render() {
        return (
            <div className="container">
                <h1>Team Roster</h1>
                <div className="displayField">{this.displayContent.map(member => {
                    return (
                        <div key={member.name.toString()} className="member">
                            <p>Name: {member.name}</p>
                            <p>Team: {member.team}</p>
                        </div>
                    )
                })
            }
                </div>
            </div>
        );
    }
}

export default TeamList;