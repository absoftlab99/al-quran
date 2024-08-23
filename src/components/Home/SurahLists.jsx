'use client'
import React, { useEffect, useState } from 'react';
import SurahBtn from './SurahBtn';

const SurahLists = ({ loadedSurahCount, loadMoreSurahs }) => {
    const [surahData, setSurahData] = useState([]);
    

    useEffect(() => {
        // Function to fetch data
        const fetchData = async () => {
            try {
                // Fetch the JSON data from the file
                // const response = await fetch('https://api.alquran.cloud/v1/quran/ar.alafasy');
                const response = await fetch('https://api.alquran.cloud/v1/surah');
                // Parse the response as JSON
                const data = await response.json();
                // Set the data in state
                
                setSurahData(data.data);
                console.log(surahData);
                


                const sortedSurahData = [surahData].sort((a, b) => {
                    if (sortOrder === 'ascending') {
                        return a.id - b.id;
                    } else {
                        return b.id - a.id;
                    }
                });

                } catch (error) {
                    console.error('Error fetching Quran data:', error);
                }
            };

            // Call the fetchData function
            fetchData();
        }, []);

    return (
        <div className="">
            <div className='grid grid-cols-12 gap-5 my-10'>
                {surahData.slice(0, loadedSurahCount).map(surahs => (
                    <SurahBtn
                        key={surahs.id}
                        surah={surahs}
                    >
                        {surahs}
                    </SurahBtn>
                ))}
            </div>
            <div className="text-center">
                <button onClick={loadMoreSurahs} className='btn btn-secondary text-primary'>Show More</button>
            </div>
        </div>
    );
};

export default SurahLists;