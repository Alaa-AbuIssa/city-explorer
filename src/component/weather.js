import React from 'react';


export class Weather extends React.Component{



    render(){
        return(
            <>
            <div>
                <p>

                {this.props.weatherInfo[0].date}
                </p>
                <p>
                {this.props.weatherInfo[0].description}


                </p>
                <p>

                {this.props.weatherInfo[1].date}

                </p>
                <p>
                    
                {this.props.weatherInfo[1].description}
                </p>
                <p>

                {this.props.weatherInfo[2].date}
                </p>
                <p>

                {this.props.weatherInfo[2].description}
                </p>
            </div>
          
            </>
        )
    }
}



export default Weather;