import React from 'react';
import { render } from '@testing-library/react';
import {MemberCard} from './Member-Card'; 



fdescribe('Member Card Component', () => {

    const  displayContent = [
        { name: 'Jon Lowrey', team: 'Sentinel', imgUrl: "https://jonlowrey.com/Me.jpg" }, 
    ];

    let compiled: any;
    beforeEach(() => {
        compiled = render(<MemberCard member={displayContent[0]}/>).container;
    });

    it('should display members name', () =>{
        const name = compiled.querySelector('.card .name');
        expect(name.textContent).toContain('Jon');
    });

    it('should display team name', () => {
        const teamName = compiled.querySelector('.card .team');
        expect(teamName.textContent).toContain('Sentinel');
    });

    it('should display members profile image', () => {
        const img = compiled.querySelector('.card .picture img');
        expect(img).toBeTruthy();
        expect(img).toHaveProperty('src', displayContent[0].imgUrl);
    });
});