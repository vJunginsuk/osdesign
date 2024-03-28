import React from 'react';
import Button from '../components/Button/Button';
import EditOutline from '../icons/EditOutline/EditOutline';
import HomeOutline from '../icons/HomeOutline/HomeOutline';
import HomeFilled from '../icons/HomeFilled/HomeFilled';
const Test = () => {
  return (
    <div>
      <Button type="icon" icon={<HomeOutline color="red" />} />
      <Button type="icon" icon={<HomeFilled />} />
    </div>
  );
};

export default Test;
