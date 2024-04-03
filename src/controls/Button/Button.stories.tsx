import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Flex from '../../layout/Flex/Flex';
import Button from './Button';
import MinusOutline from '../../icons/MinusOutline/MinusOutline';
import PlusOutline from '../../icons/PlusOutline/PlusOutline';
import EditOutline from '../../icons/EditOutline/EditOutline';
import CloseOutline from '../../icons/CloseOutline/CloseOutline';

const meta: Meta<typeof Button> = {
  component: Button,
  // Documentation 문서 생성
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Type: Story = {
  render: () => {
    const [value, setValue] = useState('outline');
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
    };
    // type value : outline, primary, text
    return (
      <div>
        <div>
          {value !== 'icon' ? (
            <Button type={value} size="small">
              Click
            </Button>
          ) : (
            <Button type={value} icon={<CloseOutline />} />
          )}
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
            />
            <label htmlFor="type1">outline</label>
          </Flex>
          <Flex gap="4px">
            <input
              type="radio"
              id="type2"
              name="typeGroup"
              value="primary"
              onChange={onChange}
            />
            <label htmlFor="type2">primary</label>
          </Flex>
          <Flex gap="4px">
            <input
              type="radio"
              id="type3"
              name="typeGroup"
              value="text"
              onChange={onChange}
            />
            <label htmlFor="type3">text</label>
          </Flex>
          <Flex gap="4px">
            <input
              type="radio"
              id="type3"
              name="typeGroup"
              value="icon"
              onChange={onChange}
            />
            <label htmlFor="type3">icon</label>
          </Flex>
        </Flex>
      </div>
    );
  },
};

export const Size: Story = {
  render: () => {
    const [size, setSize] = useState('small');
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setSize(e.target.value);
    };

    // size value : small, medium, large
    return (
      <div>
        <div>
          <Button size={size} type="outline" icon={<MinusOutline />}>
            click!!
          </Button>
        </div>
        <Flex gap="20px" align="center" className="story-box">
          <Flex gap="4px">
            <input
              type="radio"
              id="size1"
              name="sizeGroup"
              defaultChecked
              value="small"
              onChange={onChange}
            />
            <label htmlFor="size1">small</label>
          </Flex>
          <Flex gap="4px">
            <input
              type="radio"
              id="size2"
              name="sizeGroup"
              value="medium"
              onChange={onChange}
            />
            <label htmlFor="size2">medium</label>
          </Flex>
          <Flex gap="4px">
            <input
              type="radio"
              id="size3"
              name="sizeGroup"
              value="large"
              onChange={onChange}
            />
            <label htmlFor="size3">large</label>
          </Flex>
        </Flex>
      </div>
    );
  },
};

export const Danger: Story = {
  render: () => {
    const [value2, setValue2] = useState('outline');
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setValue2(e.target.value);
    };
    return (
      <div>
        <div>
          <Button type={value2} size="small" danger>
            click
          </Button>
        </div>
        <Flex gap="20px" align="center" className="story-box">
          <Flex gap="4px">
            <input
              type="radio"
              id="Danger1"
              name="typeGroup2"
              defaultChecked
              value="outline"
              onChange={onChange}
            />
            <label htmlFor="Danger1">outline</label>
          </Flex>
          <Flex gap="4px">
            <input
              type="radio"
              id="Danger2"
              name="typeGroup2"
              value="primary"
              onChange={onChange}
            />
            <label htmlFor="Danger2">primary</label>
          </Flex>
          <Flex gap="4px">
            <input
              type="radio"
              id="Danger3"
              name="typeGroup2"
              value="text"
              onChange={onChange}
            />
            <label htmlFor="Danger3">text</label>
          </Flex>
        </Flex>
      </div>
    );
  },
};
export const Icon: Story = {
  render: () => {
    return (
      <div>
        <Flex gap="12px">
          <Button type="outline" size="small" icon={<MinusOutline />}>
            Delete
          </Button>
          <Button type="primary" size="small" icon={<PlusOutline />}>
            ADD
          </Button>
          <Button type="text" size="small" icon={<EditOutline />}>
            EDIT
          </Button>
        </Flex>
      </div>
    );
  },
};
