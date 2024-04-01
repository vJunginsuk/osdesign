import React from 'react';
import Button from '../controls/Button/Button';
import EditOutline from '../icons/EditOutline/EditOutline';
import HomeOutline from '../icons/HomeOutline/HomeOutline';
import HomeFilled from '../icons/HomeFilled/HomeFilled';
import InfoFilled from '../icons/InfoFilled/InfoFilled';
import CheckFilled from '../icons/CheckFilled/CheckFilled';
import ExclamationmarkFilled from '../icons/ExclamationmarkFilled/ExclamationmarkFilled';
const Test = () => {
  return (
    <div>
      <Button type="icon" icon={<HomeOutline />} />
      <Button type="icon" icon={<HomeFilled />} />
      <Button type="icon" icon={<InfoFilled />} />
      <Button type="icon" icon={<CheckFilled />} />
      <Button type="icon" icon={<ExclamationmarkFilled />} />
    </div>
  );
};

export default Test;
