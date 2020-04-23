import React, { Props } from 'react';
import { MemberCard } from './member-card/Member-Card';

class TeamList extends React.Component {

    private displayContent = [
        { name: 'Jon Lowrey', team: 'Sentinel' }, 
        { name: 'Suketu Bhuta', team: 'Sentinel' }, 
        { name: 'Henrietta Loffe', team: 'Sentinel' }, 
        { name: 'Sasanka Chittajallu', team: 'Sentinel' }, 
        { name: 'Bill Dominguez', team: 'Sentinel' }, 
        { name: 'Matt Lazar', team: 'Sentinel' }, 
        { name: 'Andrew Bradley', team: 'Sentinel' }, 

        { name: 'Tom Piczak', team: 'Guardian' }
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
                            <MemberCard member={member} />
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