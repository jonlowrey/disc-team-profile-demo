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

    // expect(img).toHaveProperty('src', displayContent[0].imgUrl);

});