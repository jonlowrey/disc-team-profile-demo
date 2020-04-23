import React from 'react';
import './Member-Card.scss';

export function MemberCard(props: any) {
    return (
        <div className="card">
            <div className="picture">
                <img src="https://raw.githubusercontent.com/gramener/comicgen/master/svg/humaaans/head/front/rad.svg" alt="Jon"/>
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