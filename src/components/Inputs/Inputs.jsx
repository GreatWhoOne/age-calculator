export default function Inputs({ handleSubmit, handleChange, date }) {
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="day" value={date.day} onChange={handleChange} />
      <input
        type="text"
        name="month"
        value={date.month}
        onChange={handleChange}
      />
      <input
        type="text"
        name="year"
        value={date.year}
        onChange={handleChange}
      />
      <button>Working</button>
    </form>
  );
}
