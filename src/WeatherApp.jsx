import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";
export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState({
        city: "Wonderland",
        feelslike: 41.84,
        humidity: 40,
        temp: 37.29,
        tempmax: 37.29,
        tempmin: 37.29,
        weather: "overcast clouds"
    });

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    }

    return (
        <div><h2 >Weather App by City</h2>
            <SearchBox updateInfo={updateInfo} />
            <InfoBox Info={weatherInfo} />
        </div>

    )

}