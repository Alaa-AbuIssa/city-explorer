import axios from 'axios';
import React from 'react';
import { Form, Button } from 'react-bootstrap';
import Image from 'react-bootstrap/Image'
import './App.css'



export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: '',
      data: '',
      show: false
    }
  }

  updateLocation = (event) => {
    event.preventDefault();
    this.setState({
      location: event.target.value
    })
  }

  locationData = async (event) => {
    event.preventDefault();

    try {
      this.setState({ show: true })
      const locationurl = `https://us1.locationiq.com/v1/search.php?key=pk.8776f995fd36c562b2158fb09706895f&q=${this.state.location}&format=json`;
      const responseData = await axios.get(locationurl);
      this.setState({ data: responseData.data[0] })
    }
    catch (event) {
      this.setState({
        show: false
      });
    }
  }


  render() {
    if (this.state.show === true) {
      return (
        <div>
          <h2>City Explorer</h2>
          <Form>
            <Form.Label>Where would you like to explore?</Form.Label>
            <br></br>
            <br></br>
            <Form.Control type="text" placeholder="input location here…" onChange={this.updateLocation} />
            <br></br>
            <br></br>

            <Button type="submit" onClick={this.locationData}>Explore!</Button>
          </Form>
          <p>Welcome to {this.state.data.display_name} is located at {this.state.data.lat} by {this.state.data.lon}</p>
          <Image src={`https://maps.locationiq.com/v3/staticmap?key=pk.8917af52731848f6b221fa3294f98d21&center=${this.state.data.lat},${this.state.data.lon}`} />
          <p id='footer'>&copy;</p>
        </div>
      )
    } else {
      return(
      <div>
      <h2>City Explorer</h2>
      <Form>
        <Form.Label>Pleace Enter the Location Name that you want to search for !</Form.Label>
        <br></br>
        <Form.Control type="text" placeholder="Enter your location here…" onChange={this.updateLocation} />
        <br></br>
        <Button type="submit" onClick={this.locationData}>Explore!</Button>
      </Form>
      <p>Ops!!! Location not found !</p>
      <p id='footer'>&copy;Alaa Abu-Issa</p>
      </div>
      )
    }
  }
}
export default App;


