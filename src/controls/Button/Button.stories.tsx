import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Flex from '../../layout/Flex/Flex';
import Button from './Button';
import MinusOutline from '../../icons/MinusOutline/MinusOutline';
import PlusOutline from '../../icons/PlusOutline/PlusOutline';
import EditOutline from '../../icons/EditOutline/EditOutline';
import CloseOutline from '../../icons/CloseOutline/CloseOutline';
import { sizeList, typeList } from '../../common/variables';

const meta: Meta<typeof Button> = {
  component: Button,
  // Documentation 문서 생성
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Basic: Story = {
  render: () => {
    return (
      <Flex gap="8px">
        <Button>Button</Button>
        <Button type="primary">Button</Button>
        <Button icon={<EditOutline />}>Button</Button>
      </Flex>
    );
  },
};

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
          {typeList.map((val: string) => (
            <Flex gap="4px" key={val}>
              <input
                type="radio"
                id={val}
                name="typeGroup"
                defaultChecked
                value={val}
                onChange={onChange}
                checked={value === val}
              />
              <label htmlFor={val}>{val}</label>
            </Flex>
          ))}
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

    return (
      <div>
        <div>
          <Button size={size} type="outline" icon={<MinusOutline />}>
            click!!
          </Button>
        </div>

        <Flex gap="20px" align="center" className="story-box">
          {sizeList.map((val: string) => (
            <Flex gap="4px" key={val}>
              <input
                type="radio"
                id={val}
                name="sizeGrp"
                defaultChecked
                value={val}
                onChange={onChange}
                checked={size === val}
              />
              <label htmlFor={val}>{val}</label>
            </Flex>
          ))}
        </Flex>
      </div>
    );
  },
};

export const Danger: Story = {
  render: () => {
    const typeList = ['outline', 'primary', 'text'];
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
          {typeList.map((val: string) => (
            <Flex gap="4px" key={val}>
              <input
                type="radio"
                id={val}
                name="dangerGrp"
                defaultChecked
                value={val}
                onChange={onChange}
                checked={value2 === val}
              />
              <label htmlFor={val}>{val}</label>
            </Flex>
          ))}
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
