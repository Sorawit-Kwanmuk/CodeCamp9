function Hello(props) {
  return (
    <p style={{ color: "green", border: "2px solid yellow" }}>
      Hello {props.name}
    </p>
  );
}

export default Hello;
