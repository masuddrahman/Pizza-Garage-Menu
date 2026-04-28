const Pizza = (props) => {
    return React.createElement("div", {}, [
        React.createElement("h1", {}, props.name),
        React.createElement("p", {}, props.description),
    ])
};

const App = () => {
    return React.createElement("div", {}, [
        React.createElement("h1", {}, "Pizza Garage"),
        React.createElement(Pizza, {
            name: "The Pepperoni Pizza",
            description: "Spicy pepperoni, fresh mozzarella."
        }),
        React.createElement(Pizza, {
            name: "The Margherita Pizza",
            description: "Fresh mozzarella, basil, and our signature tomato sauce."
        }),
        React.createElement(Pizza, {
            name: "The Veggie Pizza",
            description: "Peppers, onions, mushrooms, and olives."
        })

    ]);
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));