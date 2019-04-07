const Pet = (props) => {
    return React.createElement("div", {}, [
        React.createElement("h1", {}, props.name),
        React.createElement("h2", {}, props.animal),
        React.createElement("h2", {}, props.breed)
    ]);
}

class App extends React.Component {
    handleTitleClick() {
        alert("you clicked this title");
    }
    render() {
        return React.createElement("div", {}, [
            React.createElement("h1", {onClick: this.handleTitleClick}, 'Adopt a pet!'),
            React.createElement(Pet, {
                name: "Dog1",
                animal: "Dog",
                breed: "German Spheard"
            }),
            React.createElement(Pet, {
                name: "Bird1",
                animal: "Bird",
                breed: "Sparrow"
            }),
            React.createElement(Pet, {
                name: "Cat1",
                animal: "Cat",
                breed: "Mixed"
            })
        ])
    }
}

ReactDOM.render(React.createElement(App), document.getElementById('root'))