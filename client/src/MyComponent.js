import React from 'react';
import PrimaryButton from './common/buttons/Primary';
import CrossButton from './common/buttons/Cross';

const onclick = () => {
  console.log('clickety-click');
};

const crossClick = () => {
  console.log('cross-clicked');
};

const MyComponent = () => (
  <div>
    <PrimaryButton onClick={onclick} >
      Click Me
    </PrimaryButton>
    <CrossButton onClick={crossClick} />
  </div>
);

export default MyComponent;

