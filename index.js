const Box = (props) => {
    const { box, text } = props;
    return (
      <div className={box}>
          <p>{text}</p>
      </div>;
    )
};

const element = (
  <div className="container">
    <h1 className="heading">Boxes</h1>
    <div className="boxes">
        <Box box="small" text="Small"/>
        <Box box="medium" text="Medium"/>
        <Box box="large" text="Large"/>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
