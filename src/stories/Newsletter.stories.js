import React from 'react';
import { Newsletter } from './Newsletter';
import { withKnobs, text, select } from '@storybook/addon-knobs';

export default {
    title: 'Newsletter',
    parameters: {
        component: Newsletter,
        componentSubtitle: 'Displays a Newsletter Subscription Form.',
    }
  };

const label = 'Class Modifiers';
const options = {
  'none': '',
  'footer': 'newsletter-signup--footer',
  'signup': 'newsletter-signup--banner',
  'social': 'newsletter-signup--social',
  'sticky': 'newsletter-signup--sticky',
  'fullbanner': 'newsletter-signup--fullbanner'
};

const defaultValue = '';


export const mytest = () => (
    <Newsletter
        className={select( label, options, defaultValue )}
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