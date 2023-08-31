
    // const heading = React.createElement(
    //     "h1",{
    //         id: "heading",
    //         class: "heading-class"
    //     },"Hello from React");

    const parent = React.createElement("div",{id:"parent"},React.createElement(
        "div",
        {id:"child"},
        [React.createElement("h1",{},"New to react"),React.createElement("h2",{},"we'll manage")]
    ))
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(parent);