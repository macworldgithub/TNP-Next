"use client";
import FeaturedListings from '@/components/TourPackage/FeaturedListings'
import TourPackHero from '@/components/TourPackage/TourPackHero'
import { NextPage } from 'next'
import { useParams } from 'next/navigation'

interface Props { }

const Page: NextPage<Props> = ({ }) => {
    const params = useParams();

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    return <div>
        <TourPackHero heading={capitalizeFirstLetter(params.category[0])} />
        <FeaturedListings />
    </div>
}

export default Page