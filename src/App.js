  import react from 'react';
import axios from 'axios';
import Weather from './weather'
import Movies from './movies'

class App extends react.Component {

  constructor(props) {
    super(props);
    this.state = {
      city: '',
      result: '',
      displayMap: false,
      errorMessage: false
    }
  }

  updateValue = (event) => {
    this.setState({
      city: event.target.value
    })
    console.log(this.state.city);
  }

  getLocation = async (e) => {
    e.preventDefault();

    
    let url = `https://eu1.locationiq.com/v1/search.php?key=pk.8917af52731848f6b221fa3294f98d21&q=${this.state.city}&format=json`;

    try {
      let result = await axios.get(url);
      console.log(result.data[0]);


      this.setState({
        result: result.data[0],
        displayMap: true
      })
    } catch {
      this.setState({
        displayMap: false,
        errorMessage: true
      })
    }
  }


  render() {
    return (
      <>
        <h1>City Explorer</h1>
        <form onSubmit={this.getLocation}>
          <input type='text' placeholder='add a city' onChange={this.updateValue} />
          <button type='submit'>Explore!</button>
        </form>

        {this.state.displayMap &&
          <p>City: {this.state.result.display_name}</p>
        }
        {this.state.displayMap &&
          <p>Latitude: {this.state.result.lat}</p>
        }
        {this.state.displayMap &&
          <p>Longitude: {this.state.result.lon}</p>
        }

        {this.state.displayMap &&
          <img src={`https://maps.locationiq.com/v3/staticmap?key=pk.8917af52731848f6b221fa3294f98d21&center=${this.state.result.lat},${this.state.result.lon}`} alt='' />
        }

        {this.state.errorMessage &&
          <p>City not Found</p>
        }

        {this.state.displayMap &&
          <Weather city={this.state.city} displayMap={this.state.displayMap}></Weather>
        }
        {this.state.displayMap &&
          <Movies city={this.state.city} displayMap={this.state.displayMap}></Movies>
        }
      </>
    )
  }
}
export default App;