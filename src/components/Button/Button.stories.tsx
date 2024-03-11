import type { Meta, StoryObj } from '@storybook/react';

import Button from './Button';
import { useState } from 'react';
import Flex from '../Flex/Flex';

const meta: Meta<typeof Button> = {
  component: Button,
  // Documentation 문서 생성
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Type: Story = {
  render: () => {
    const [value, setValue] = useState();
    const onChange = (e: any) => {
      setValue(e.target.value);
    };
    // type value : outline, primary, text
    return (
      <div>
        <div>
          <Button type={value} label="Click" size="small" />
        </div>
        <Flex gap="20px" align="center" className="story-box">
          <Flex gap="4px">
            <input
              type="radio"
              id="type1"
              name="typeGroup"
              defaultChecked
              value="outline"
              onChange={onChange}
              defaultValue="outline"
            />
            <label htmlFor="type1">outline</label>
          </Flex>
          <Flex gap="4px">
            <input type="radio" id="type2" name="typeGroup" value="primary" onChange={onChange} />
            <label htmlFor="type2">primary</label>
          </Flex>
          <Flex gap="4px">
            <input type="radio" id="type3" name="typeGroup" value="text" onChange={onChange} />
            <label htmlFor="type3">text</label>
          </Flex>
        </Flex>
      </div>
    );
  },
};

export const Size: Story = {
  render: () => {
    const [size, setSize] = useState();
    const onChange = (e: any) => {
      setSize(e.target.value);
    };

    // size value : small, medium, large
    return (
      <div>
        <div>
          <Button size={size} label="Click" type="outline" />
        </div>
        <Flex gap="20px" align="center" className="story-box">
          <Flex gap="4px">
            <input
              type="radio"
              id="type1"
              name="sizeGroup"
              defaultChecked
              value="small"
              onChange={onChange}
              defaultValue="outline"
            />
            <label htmlFor="type1">small</label>
          </Flex>
          <Flex gap="4px">
            <input type="radio" id="type2" name="sizeGroup" value="medium" onChange={onChange} />
            <label htmlFor="type2">medium</label>
          </Flex>
          <Flex gap="4px">
            <input type="radio" id="type3" name="sizeGroup" value="large" onChange={onChange} />
            <label htmlFor="type3">large</label>
          </Flex>
        </Flex>
      </div>
    );
  },
};
