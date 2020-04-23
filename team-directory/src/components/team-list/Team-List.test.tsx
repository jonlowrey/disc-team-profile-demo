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

    });

    // it('Displays all the calculator Buttons', () => {
    //     const { container } = render(<TeamList />);
    //     const buttons = container.querySelectorAll('.buttonContainer button');
    //     expect(buttons.length).toBe(10);
    //     buttons.forEach((button, index) => { expect(button.textContent).toContain(index) })
    // });

    // it('Should display number field', () => {
    //     const { container } = render(<TeamList />);
    //     const displayField = container.querySelector('.displayField');
    //     expect(displayField).toBeTruthy();
    // });

    // fit('Should display number after it is clicked', () => {
    //     const { container } = render(<TeamList />);
    //     const displayField = container.querySelector('.displayField');
    //     const buttonOne = container.querySelector('#one');
    //     //buttonOne?.dispatchEvent(new Event('click');
    //     ReactTestUtils.Simulate.click(buttonOne);
    //     expect(displayField?.textContent).toBe('1');
    // });

});