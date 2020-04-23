import React from 'react';
import { render, fireEvent, getByLabelText } from '@testing-library/react';
import TeamList from './Team-List';
import ReactTestUtils from 'react-dom/test-utils'; 

xdescribe('TeamList', () => {

    it('Displays the team roster header', () => {
        const { container } = render(<TeamList />);
        const header = container.querySelector('.container h1')?.textContent;
        expect(header).toContain('Team Roster');
    });

    it('Displays the correct number of boxes', () => {
        const { container } = render(<TeamList />);
        const members = container.querySelectorAll('.member');
        expect(members.length).toBe(2);

    });q

});