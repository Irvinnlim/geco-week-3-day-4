import React, { Component } from "react";

class App extends Component {
  state = {
    people: [
      {
        firstName: "alina",
        age: 20,
        designation: "developer",
        city: "pune",
        id: 1,
      },
      {
        firstName: "alex",
        age: 30,
        designation: "developer",
        city: "pune",
        id: 2,
      },
      {
        firstName: "adam",
        age: 30,
        designation: "manager",
        city: "pune",
        id: 3,
      },
    ],
  };

  handleUpdate = () => {
    const updatedPeople = [...this.state.people];
    updatedPeople[1].designation = "senior developer";

    this.setState({ people: updatedPeople });
  };

  render() {
    return (
      <div>
        <p>
          {this.state.people.map((person) => {
            return (
              <p key={person.id}>
                My name is {person.firstName}, age {person.age}, working as a{" "}
                {person.designation} in {person.city}.
              </p>
            );
          })}
        </p>
        <button onClick={this.handleUpdate}>Submit</button>
      </div>
    );
  }
}

export default App;
