import React from "react";
import { render } from "react-dom";
import pf from "petfinder-client";
import Pet from "./Pet";

const petfinder = pf({
  key: process.env.API_KEY,
  secret: process.env.API_SECRET
});

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pets: []
    };
  }
  componentDidMount() {
    petfinder.pet
      .find({ output: "full", location: "Seattle, WA" })
      .then(data => {
        let pets;

        if (data.petfinder.pets && data.petfinder.pets.pet) {
          if (Array.isArray(data.petfinder.pets.pet)) {
            pets = data.petfinder.pets.pet;
          } else {
            pets = [data.petfinder.pets.pet];
          }
        } else {
          pets = [];
        }

        this.setState({
          pets: pets // Can be replaced by single pets as javascript allows to insert it once if key and value has same name
        });
      });
  }
  render() {
    return (
      <div>
        <h1>Adopt Me!</h1>
        {/* Rendering jsx componenets */}
        {/* <Pet name="Dog1" animal="Dog" breed="German Sephard" />
        <Pet name="Bird1" animal="Bird" breed="Sparrow" />
        <Pet name="Cat1" animal="Cat" breed="Mixed" /> */}
        {/* Rendering the results of API call in JSON format */}
        {/* <pre>
          <code>{JSON.stringify(this.state, null, 4)}</code>
        </pre> */}
        {this.state.pets.map(pet => {
          let breed;

          if (Array.isArray(pet.breeds.breed)) {
            breed = pet.breeds.breed.join(", ");
          } else {
            breed = pet.breeds.breed;
          }
          return (
            <Pet
              key={pet.id}
              animal={pet.animal}
              name={pet.name}
              breed={breed}
              media={pet.media}
              location={`${pet.contact.city}, ${pet.contact.state}`}
            />
          );
        })}
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
