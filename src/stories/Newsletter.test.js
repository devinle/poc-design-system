import React from 'react';
import ReactDOM from 'react-dom';
import { Newsletter } from './Newsletter';

it('has a title attribute when rendering', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Newsletter 
        title="This is my newlsetter title"
    />,
    div
  );

  expect(div.querySelector('.newsletter-signup__title')).not.toBeNull();
  expect(div.querySelector('.newsletter-signup__title').textContent).toEqual('This is my newlsetter title');

  ReactDOM.unmountComponentAtNode(div);
});