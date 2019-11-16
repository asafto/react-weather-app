import React, {Component} from 'react';
import "./Forecast5Days.css";
import Forecast1Day from "./Forecast1Day/Forecast1Day";

class Forecast5Days extends Component {

    constructor(props) {
        super(props);
        this.state = {
            forecast:[]
        };
    }

    componentDidMount() {
        fetch("https://my-json-server.typicode.com/evyros/react-weather-app/forecast")
            .then(res => res.json())
            .then(forecast => {
                this.setState({forecast});
            });
    }

    render() {
        const weekDays=['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thuesday', 'Friday', 'Saturday'];
        return (
            <div className="weather-widget">
                {this.state.forecast.map(forecast => {
                    return <Forecast1Day
                        day={weekDays[forecast.day]}
                        img={forecast.icon}
                        temp={forecast.temperature + '°'}
                        desc={forecast.description}/>
                })}
            </div>
        );
    }
}

export default Forecast5Days;