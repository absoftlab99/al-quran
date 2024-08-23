import Surah from '@/components/Pages/Surah';
import React from 'react';

const getSurahBySurahNumber= async(surahId)=>{
    // const data = await fetch('https://api.alquran.cloud/v1/quran/ar.alafasy')
    const data = await fetch("http://localhost:3000/alafasy.json")
    const allSurahs = await data.json()

    const surah = allSurahs.data.surahs.find(item =>item.number === surahId)
    return surah
}

const page = async({params}) => {
    const surahId = params.id
    const surah = await getSurahBySurahNumber(parseInt(surahId));

    return (
        <div>
            <Surah surah={surah}></Surah>
        </div>
    );
};

export default page;