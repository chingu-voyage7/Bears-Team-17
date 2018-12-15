import React from 'react';
import PrimaryButton from './common/buttons/Primary';

const onclick = () => {
  console.log('clickety-click');
};

const MyComponent = () => (
  <div>
    <PrimaryButton onClick={onclick} >
      Click Me
    </PrimaryButton>
  </div>
);

export default MyComponent;

