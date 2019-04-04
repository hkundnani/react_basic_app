const App = () => {
    return React.createElement("div", {},
        React.createElement("h1", {}, 'Adopt a pet!')
    )
}
ReactDOM.render(React.createElement(App), document.getElementById('root'))