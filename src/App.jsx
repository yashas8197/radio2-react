import { useState } from "react";
import "./App.css";

const HighestEducation = () => {
  const [education, setEducation] = useState("");
  const onChangeHandler = (event) => {
    setEducation(event.target.value);
  };

  return (
    <div>
      <form onChange={onChangeHandler}>
        <label>Choose your Highest Education Level: </label> <br/>
        <input type="radio" value="High School" name="education" /> High School<br/>
        <input type="radio" value="Bachelor's Degree" name="education" />
        Bachelor's Degree <br/>
        <input type="radio" value="Master's Degree" name="education" /> Master's
        Degree <br/>
        <input type="radio" value="Ph.D" name="education" /> Ph.D <br/>
        {education && <p>Education Level: I have a {education}</p>}
      </form>
    </div>
  );
};

const MusicGenre = () => {
  const [musicGenre, setMusicGenre] = useState('')
  const onChangeHandler = (event) => {
    setMusicGenre(event.target.value)
  }
  return (
    <div>
      <form onChange={onChangeHandler}>
        <label>Choose your favorite music genre: </label> <br/>
        <input type="radio" name='genre' value="Pop"/> Pop <br/>
        <input type="radio" name='genre' value="Rock"/> Rock <br/>
        <input type="radio" name='genre' value="Hip Hop"/> Hip Hop <br/>
        <input type="radio" name='genre' value="Classical"/> Classical <br/>
        {
          musicGenre && <p>I Like {musicGenre} Music</p>
        }
      </form>
    </div>
  )
};

const PaymentMethod = () => {
  const [payment, setPayment] = useState('')
  const onChangeHandler = (event) => {
    setPayment(event.target.value)
  }
  
  return (
    <div>
      <form onChange={onChangeHandler}>
        <label>Select Your Prefrered payment method: </label><br/>
        <input type="radio" name="method" value="Credit Card"/> Credit Card <br/>
        <input type="radio" name="method" value="PayPal"/> PayPal <br/>
        <input type="radio" name="method" value="Bitcoin"/> Bitcoin <br/>
        <input type="radio" name="method" value="Cash"/> Cash <br/>
        <p>Selected Payment Method: {payment}</p>
      </form>
    </div>
  )
};

const SelectedWeather = () => {
  const [weather, setWeather] = useState('')
  const onChangeHandler = (event) => {
    setWeather(event.target.value)
  }
  return (
    <div>
      <form onChange={onChangeHandler}>
        <label>Choose Your Prefered weather: </label> <br/>
        <input type="radio" name="weather" value='Sunny'/> Sunny <br/>
        <input type="radio" name="weather" value='Rainy'/> Rainy <br/>
        <input type="radio" name="weather" value='Cloudy'/> Cloudy <br/>
        <input type="radio" name="weather" value='Snowy'/> Snowy <br/>
        {
          weather && <p>Selected Weather: I like {weather} Weather</p>
        }
      </form>
    </div>
  )
};

const SelectedOccupation = () => {
  const [occupation, setOccupation] = useState('')
  const onChangeHandler = (event) => {
    setOccupation(event.target.value)
  }
  return (
    <div>
      <form onChange={onChangeHandler}>
      <label>Choose your Occupation: </label> <br/>
      <input name="occpation" value='Student' type="radio"/> Student <br/>
      <input name="occpation" value='Teacher' type="radio"/> Teacher <br/>
      <input name="occpation" value='Engineer' type="radio"/> Engineer <br/>
      <input name="occpation" value='Docter' type="radio"/> Docter <br/>
        </form>
      <p>Selected Occpation: {occupation}</p>
    </div>
  )
}

export default function App() {
  return (
    <main>
      <HighestEducation />
      <br/>
      <MusicGenre/>
      <br/>
      <PaymentMethod/>
      <br/>
      <SelectedWeather/>
      <br/>
      <SelectedOccupation/>
    </main>
  );
}
