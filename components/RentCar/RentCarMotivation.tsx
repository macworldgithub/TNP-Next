import { NextPage } from 'next'
import RentBannerHeader from './RentBannerHeader'
import { getCarMotivationData } from '@/assets/strings/RentCarData'
import Image from 'next/image'

interface Props {}

const RentCarMotivation: NextPage<Props> = ({}) => {
  return <div className='flex flex-col justify-center py-20'>
    <RentBannerHeader Title='Better Way to Find Your Perfect Car' Description='In hac habitasse platea dictumst. In pharetra tellus eu justo tincidunt bibendum. Morbi rutrum elit ligula, eget fringilla sem pellentesque aliquam suspendisse.' />

    <div className='flex justify-center'>
    {
        getCarMotivationData.map((e,i)=>{
            return <div className='p-8 m-8 w-80 flex flex-col items-center rounded-lg' style={{boxShadow:'-1px -1px 20px -6px #ccc'}}>
                <Image className='mb-4' src={e.Image} alt='image_not_found' />
                <p className='my-4 text-[16px] font-medium'>{e.Title}</p>
                <p className='text-center text-sm text-[#8D8E93]'>{e.Description}</p>
            </div>
        })
    }
    </div>

  </div>
}

export default RentCarMotivation