import Image from 'next/image';
import react from 'react';

export default function CurrentWeather(){

    return(
        <div>
            <div>
                <h2>City Name</h2>
                <p>Change of rain: %</p>
                <h1>Temperature</h1>
            </div>
            <div>
                <Image alt="weather status" name= "weather status" />
            </div>
        </div>
    )
}