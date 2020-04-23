import React from 'react';
import './Member-Card.scss';

export function MemberCard(props: any) {
    return (
        <div className="card">
            <div className="picture">
                <img src={props.member.imgUrl} alt="Jon"/>
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