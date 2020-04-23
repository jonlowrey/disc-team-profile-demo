import React from 'react';
import { render } from '@testing-library/react';
import {MemberCard} from './Member-Card'; 

describe('Member Card Component', () => {

    let compiled: any;
    beforeEach(() => {
        compiled = render(<MemberCard name='Jon'/>).container;
    });
    it('should display members name', () =>{
        const name = compiled.querySelector('.card .name');
        expect(name.textContent).toContain('Jon');
    })
});