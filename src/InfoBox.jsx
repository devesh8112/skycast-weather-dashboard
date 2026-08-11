import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';
import "./InfoBox.css";

export default function InfoBox({ Info }) {

    const INIT_URL = "https://images.unsplash.com/photo-1641970304222-b2b332808a4b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZHVzdHklMjB3ZWF0aGVyfGVufDB8fDB8fHww"

    const HOT_URL = "https://media.istockphoto.com/id/1137759901/photo/summer-hot-weather-season-high-temperature-thermometer-with-city-view.webp?a=1&b=1&s=612x612&w=0&k=20&c=mTWF-uHN6hawvdK0rvqiWAYt5Y8E7u_i3N0XTlRRo_Q=";
    const COLD_URL = "https://plus.unsplash.com/premium_photo-1705598688384-6a7fd705f88a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGNvbGR3ZWF0aGVyfGVufDB8fDB8fHww";
    const RAIN_URL = "https://media.istockphoto.com/id/1257951336/photo/transparent-umbrella-under-rain-against-water-drops-splash-background-rainy-weather-concept.webp?a=1&b=1&s=612x612&w=0&k=20&c=sw_CRZcGopaGHDWqtT1M8y64k5uCcq-nro55Bw3YzyQ=";

    return (
        <div className="infoBox">

            <div className="cardContainer">
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={Info.temp <= 15 ? COLD_URL : (Info.humidity > 80 ? RAIN_URL : HOT_URL)}
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {Info.city}{' '}{Info.temp <= 15 ? (<AcUnitIcon />) : (Info.humidity > 80 ? (<ThunderstormIcon />) : (<SunnyIcon />))}
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
                            <div> Temperature   =  {Info.temp}&deg;C </div>

                            <div>Humidity   =  {Info.humidity}</div>

                            <p>Min Temp   =  {Info.tempMin}&deg;C</p>

                            <p>Max Temp   =  {Info.tempMax}&deg;C</p>

                            <p>The Weather can be described as <i>{Info.weather} </i> feels like {Info.feelsLike}&deg;C</p>

                        </Typography>
                    </CardContent>

                </Card>
            </div>
        </div>
    );
}