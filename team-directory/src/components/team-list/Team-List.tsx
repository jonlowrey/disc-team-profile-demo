import React, { Props } from 'react';
import { MemberCard } from './member-card/Member-Card';

class TeamList extends React.Component {

    private imageUrl = 'https://raw.githubusercontent.com/gramener/comicgen/master/svg/humaaans/head/front/rad.svg';

    private displayContent = [
        { name: 'Jon Lowrey', team: 'Sentinel', imgUrl: this.imageUrl },
        { name: 'Tom Piczak', team: 'Guardian', imgUrl: this.imageUrl },
 
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