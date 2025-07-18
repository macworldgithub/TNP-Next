import { availableCars } from '@/assets/Strings/RentCarData'
import { NextPage } from 'next';
import CarCard from './CarCard';
import { List } from 'antd';
import { useState } from 'react';

interface Props { }

const CarListing: NextPage<Props> = ({ }) => {
  const position = 'bottom';
  const align = 'center';

  return <div className='flex flex-col lg:flex-row justify-center items-center'>

    <List
      grid={{ gutter: 8, sm: 1, md: 2, lg:3, xl:3, xxl:3 }}
      pagination={{ position, align, hideOnSinglePage: false }}
      dataSource={availableCars}
      renderItem={(item) => (
        <List.Item className='w-full'>
          <CarCard
            CarImage={item.CarImage}
            CarTitle={item.CarTitle}
            CarType={item.CarType}
            ConsumptionType={item.ConsumptionType}
            DriveType={item.DriveType}
            KilometersRan={item.KilometersRan}
            ModelYear={item.ModelYear}
            RentPrice={item.RentPrice} />
        </List.Item>
      )}
    />
  </div>
}

export default CarListing