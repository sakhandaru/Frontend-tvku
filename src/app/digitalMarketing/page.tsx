
import Benefit from '@/components/iklanBenefit';
import Iklan from '@/components/iklanHero';
import Kerjasama from '@/components/iklanKerjasama';
import Posisi from '@/components/iklanPosisi';
import React from 'react';
export default function digitalarketing() {
  
  return (
    <>
       <div className='my-15'>
        <Iklan />
        <Benefit />
        <Kerjasama />
        <Posisi />
       </div>
    </>
  );
}