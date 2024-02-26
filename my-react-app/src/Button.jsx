function Button() {

  const styles = {
    backgroundColor: "hsl(200, 100%, 50%)",
    color: "white",
    borderRadius: "5px",
    padding: "20px 50px",
    border: "none",
    cursor: "pointer",
  }

  return(
    <button style={styles}>Click me</button>
  );
}
export default Button