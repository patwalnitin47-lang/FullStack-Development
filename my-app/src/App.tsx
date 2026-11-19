function Button() {
  function handleClick() {
    alert('Never click again !!');
  }

  return (
    <button onClick={handleClick}>
      Click me
    </button>
  );
}
export default function MyApp() {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <Button />
    </div>
  );
}
