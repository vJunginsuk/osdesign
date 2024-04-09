import classNames from 'classnames';
import Flex from '../layout/Flex/Flex';
import InputTest from './InputTest';
import ModalTest from './ModalTest';
import { useContext } from 'react';
import { ThemeContext } from '../stores/context';

const Common = () => {
  const { theme } = useContext(ThemeContext);
  const classes = classNames('test-layout', theme === 'dark' && 'dark-theme');
  return (
    <div className={classes}>
      <Flex gap="20px" vertical style={{ padding: '32px' }}>
        <ModalTest />
        <InputTest />
      </Flex>
    </div>
  );
};

export default Common;
