import { NextPage } from 'next';
import CarTypeButtons from './CarTypeButtons';
import { useState } from 'react';
import RentBannerHeader from './RentBannerHeader';

interface Props {}

const CarListingsBanner: NextPage<Props> = ({}) => {
    const [selectedCarType, setselectedCarType] = useState("Sedan")
  return <div className='bg-[#EDEFF5]'>
    <RentBannerHeader Title='Find Great Deals Fro' Description='Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
        cubilia curae; Donec vel interdum ipsum, eu ultrices dui. Vestibulum
        eget faucibus augue.' />

    <CarTypeButtons selectedCarType={selectedCarType} />
  </div>
}

export default CarListingsBanner