import React from 'react';
import './Member-Card.scss';

export function MemberCard(props: any) {
    return (
        <div className="card">
            <div className="picture">
                <img src="https://jonlowrey.com/Me.jpg" alt="Jon" width="250px"/>
            </div>
            <div className="name">
                Name: {props.member.name}
            </div>
            <div className="team">
                Team: {props.member.team}
            </div>    
        </div>
    );
}