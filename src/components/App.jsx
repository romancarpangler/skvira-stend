export const App = () => {
  const handleSubmit = e => {
    e.preventDefault();
    const data = e.currentTarget.elements.data.value;
    console.log(data);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input name="data" type="datetime-local" />
        <button>gggggggggg</button>
      </form>
    </div>
  );
};
