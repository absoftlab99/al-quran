'use client'
import React, { useEffect, useState } from 'react';
import SurahBtn from './SurahBtn';

const SurahLists = () => {
    const [surahData, setSurahData] = useState([]);

    useEffect(() => {
        // Function to fetch data
        const fetchData = async () => {
            try {
                // Fetch the JSON data from the file
                const response = await fetch('surah.json');
                // Parse the response as JSON
                const data = await response.json();
                // Set the data in state
                setSurahData(data.surah);
            } catch (error) {
                console.error('Error fetching Quran data:', error);
            }
        };

        // Call the fetchData function
        fetchData();
    }, []);

    return (
        <div className='grid grid-cols-12 gap-5 my-10'>
            {surahData.map(surahs => (
                <SurahBtn
                    key={surahs.id}
                    surah={surahs}
                >
                    {surahs}
                </SurahBtn>
            ))}
        </div>
    );
};

export default SurahLists;