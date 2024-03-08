import React from 'react';
import Flex from '../components/Flex/Flex';
import '../assets/styles/index.scss';
import Button from '../components/Button/Button';

const Common = () => {
  console.log();

  return (
    <Flex vertical align="center" justify="between" style={{ marginTop: '20px' }}>
      <Button type="primary" label="확인" size="medium" />
      <Button type="primary" label="확인" />
      <Button type="primary" label="확인" />
      <Button type="primary" label="확인" />
      <Button type="primary" label="확인" />
    </Flex>
  );
};

export default Common;
