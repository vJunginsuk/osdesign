import React from 'react';
import Input from '../controls/Input/Input';

const InputTest = () => {
  return (
    <div>
      <Input label="label" placeholder="please enter" />
      <Input placeholder="please enter" row />
    </div>
  );
};

export default InputTest;
