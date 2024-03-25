import { NextPage } from 'next';
import Image from 'next/image';
import OrangeCar from '../../assets/rentcar/orangeCarImage.svg'

interface Props {}

const RentalExperiance: NextPage<Props> = ({}) => {
  return <div className='bg-white flex justify-center items-center py-28'>
    <div className='relative w-full'>
        <Image className='relative' alt='image_not_found' src={OrangeCar} />
    </div>
    <div>
        <div>
            <p className='text-3xl'>Feel The Best Experience With Our Rental Deals</p>
            <p className='text-[#8D8E93] text-base'>Duis ut semper magna. Curabitur at scelerisque diam. Ut hendrerit sed sapien non iaculis. Suspendisse vitae enim ac justo semper euismod vivamus.</p>
        </div>
        <div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    </div>
  </div>
}

export default RentalExperiance