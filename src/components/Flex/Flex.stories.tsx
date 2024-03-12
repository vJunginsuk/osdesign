import type { Meta, StoryObj } from '@storybook/react';

import Flex from './Flex';
import React, { useState } from 'react';
import Button from '../Button/Button';

const meta: Meta<typeof Flex> = {
  component: Flex,
  // Documentation 문서 생성
  tags: ['autodocs'],
  argTypes: {
    align: {
      description: `"start" , "center" , "end" `,
    },
    justify: {
      description: `"start" , "center" , "end" , "between" , "around" , "evenly"`,
    },
  },
};

export default meta;
type Story = StoryObj<typeof Flex>;

export const Vertical: Story = {
  render: () => {
    const [vertical, setVertical] = useState<boolean>(false);
    const onChange = () => {
      setVertical(!vertical);
    };

    // vertical true 일 때 column
    return (
      <div>
        <Flex vertical={vertical} gap="8px">
          <Button label="button" />
          <Button label="button" />
          <Button label="button" />
          <Button label="button" />
          <Button label="button" />
          <Button label="button" />
        </Flex>
        <div>
          <Flex gap="20px" align="center" className="story-box">
            <Flex gap="4px">
              <input type="checkbox" id="type2" value="vertical" onChange={onChange} />
              <label htmlFor="type2">vertical</label>
            </Flex>
          </Flex>
        </div>
      </div>
    );
  },
};

export const Aligncontent: Story = {
  render: () => {
    const [align, setAlign] = useState('');
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setAlign(e.target.value);
    };
    // align value :  start, center, end
    return (
      <div>
        <Flex align={align} gap="8px" style={{ height: '200px' }}>
          <Button label="button" />
          <Button label="button" />
          <Button label="button" />
          <Button label="button" />
          <Button label="button" />
          <Button label="button" />
        </Flex>
        <Flex gap="20px" align="center" className="story-box">
          <Flex gap="4px">
            <input type="radio" id="type1" name="alignGroup" defaultChecked value="start" onChange={onChange} />
            <label htmlFor="type1">start</label>
          </Flex>
          <Flex gap="4px">
            <input type="radio" id="type2" name="alignGroup" value="center" onChange={onChange} />
            <label htmlFor="type2">center</label>
          </Flex>
          <Flex gap="4px">
            <input type="radio" id="type3" name="alignGroup" value="end" onChange={onChange} />
            <label htmlFor="type3">end</label>
          </Flex>
        </Flex>
      </div>
    );
  },
};
export const Justifycontent: Story = {
  render: () => {
    const [justify, setJustify] = useState('start');
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setJustify(e.target.value);
    };
    // justify value : start, center, end, between, around, evenly
    return (
      <div>
        <Flex justify={justify} gap="8px">
          <Button label="button" />
          <Button label="button" />
          <Button label="button" />
          <Button label="button" />
        </Flex>
        <Flex gap="20px" align="center" className="story-box">
          <Flex gap="4px">
            <input type="radio" id="type1" name="justifyGroup" defaultChecked value="start" onChange={onChange} />
            <label htmlFor="type1">start</label>
          </Flex>
          <Flex gap="4px">
            <input type="radio" id="type2" name="justifyGroup" value="center" onChange={onChange} />
            <label htmlFor="type2">center</label>
          </Flex>
          <Flex gap="4px">
            <input type="radio" id="type3" name="justifyGroup" value="end" onChange={onChange} />
            <label htmlFor="type3">end</label>
          </Flex>
          <Flex gap="4px">
            <input type="radio" id="type3" name="justifyGroup" value="between" onChange={onChange} />
            <label htmlFor="type3">between</label>
          </Flex>
          <Flex gap="4px">
            <input type="radio" id="type3" name="justifyGroup" value="around" onChange={onChange} />
            <label htmlFor="type3">around</label>
          </Flex>
          <Flex gap="4px">
            <input type="radio" id="type3" name="justifyGroup" value="evenly" onChange={onChange} />
            <label htmlFor="type3">evenly</label>
          </Flex>
        </Flex>
      </div>
    );
  },
};
