import React from 'react';
import { render } from '@testing-library/react';
import {MemberCard} from './Member-Card'; 



fdescribe('Member Card Component', () => {

    const  displayContent = [
        { name: 'Jon Lowrey', team: 'Sentinel' }, 
        { name: 'Suketu Bhuta', team: 'Sentinel' }, 
        { name: 'Henrietta Loffe', team: 'Sentinel' }, 
        { name: 'Sasanka Chittajallu', team: 'Sentinel' }, 
        { name: 'Bill Dominguez', team: 'Sentinel' }, 
        { name: 'Matt Lazar', team: 'Sentinel' }, 
        { name: 'Andrew Bradley', team: 'Sentinel' }, 

        { name: 'Tom Piczak', team: 'Guardian' }
    ];

    let compiled: any;
    beforeEach(() => {
        compiled = render(<MemberCard member={displayContent[0]}/>).container;
    });

    it('should display members name', () =>{
        const name = compiled.querySelector('.card .name');
        expect(name.textContent).toContain('Jon');
    });

    it('should display members profile image', () => {
        const img = compiled.querySelector('.card .picture img');
        expect(img).toBeTruthy();
    })
});