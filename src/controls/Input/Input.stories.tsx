import type { Meta, StoryObj } from '@storybook/react';
import Flex from '../../layout/Flex/Flex';
import { useState } from 'react';
import Input from './Input';
import { sizeList } from '../../common/variables';

const meta: Meta<typeof Input> = {
  component: Input,
  // Documentation 문서 생성
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Basic: Story = {
  render: () => {
    const [val, setVal] = useState('');
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setVal(e.target.value);
    };
    return (
      <div>
        <Input label="text field" onChange={onChange} />
        <div className="story-box" style={{ height: '20px' }}>
          {val}
        </div>
      </div>
    );
  },
};

export const Row: Story = {
  render: () => {
    const [checked, setChecked] = useState<string>('column');
    const onChangeInputBasic = (e: React.ChangeEvent<HTMLInputElement>) => {
      setChecked(e.target.value);
    };
    return (
      <div>
        <Input
          label="label"
          placeholder="입력해주세요."
          row={checked === 'row'}
        />
        <Flex className="story-box" gap="16px">
          <Flex gap="4px">
            <input
              type="radio"
              id="column"
              value="column"
              onChange={onChangeInputBasic}
              name="inputColumn"
              checked={checked === 'column'}
            />
            <label htmlFor="column">column</label>
          </Flex>
          <Flex gap="4px">
            <input
              type="radio"
              id="row"
              value="row"
              name="inputColumn"
              onChange={onChangeInputBasic}
              checked={checked === 'row'}
            />
            <label htmlFor="row">row</label>
          </Flex>
        </Flex>
      </div>
    );
  },
};

export const Size: Story = {
  render: () => {
    const [sizeChecked, setSizeChecked] = useState<any>('small');
    const onChangeInputBasic = (e: React.ChangeEvent<HTMLInputElement>) => {
      setSizeChecked(e.target.value);
    };
    return (
      <div>
        <Input label="label" placeholder="입력해주세요." size={sizeChecked} />
        <Flex className="story-box" gap="16px">
          {sizeList.map((val: string) => (
            <Flex gap="4px">
              <input
                type="radio"
                id={val}
                value={val}
                onChange={onChangeInputBasic}
                checked={sizeChecked === val}
              />
              <label htmlFor={val}>{val}</label>
            </Flex>
          ))}
        </Flex>
      </div>
    );
  },
};
