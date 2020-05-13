import React from 'react';
import { Newsletter } from './Newsletter';
import { withKnobs, text } from '@storybook/addon-knobs';

export default {
    title: 'Newsletter',
    component: Newsletter,
  };

export const mytest = () => (
    <Newsletter
        title={text('Title', 'This is a custom title')}
        subtitle={text('Subtitle', 'This is a subtitle')}
        segment={text('Segment ID', '132132')}
        placeholder={text('Placeholder', 'Enter an email address')}
        label={text('Button Label', 'Sign up now!')}
        loading={text('Fetching Label', 'Fetching...')}
        confirmation={text('Confirmation', 'Thanks for signing up!')}
    />
);
  
mytest.story = {
    decorators: [withKnobs],
};