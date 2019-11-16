import React, {Component} from 'react';
import "./Forecast1Day.css";

class Forecast1Day extends Component {
    render() {
        return (
            <div>
                <div className="day-weather">
                    <h3 className="day">{this.props.day}</h3>
                    <img src={`../icons/${this.props.img}.png`} alt="weather" className="weather-icon" />
                        <div className="weather-conditions">
                            <span className="weather-temp">{this.props.temp}</span>
                            <span className="weather-desc">{this.props.desc}</span>
                        </div>
                    </div>
            </div>
        );
    }
}

export default Forecast1Day;