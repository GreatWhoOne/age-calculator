export default function Results({ results }) {
  const formatNumber = (number) => (number < 10 ? "0" + number : number);

  const age = formatNumber(results.age);
  const months = formatNumber(results.months);
  const days = formatNumber(results.days);

  const ageText = "years";
  const monthsText = "months";
  const daysText = "days";
  return (
    <>
      <h1>
        {age} {ageText}
      </h1>
      <h1>
        {months} {monthsText}
      </h1>
      <h1>
        {days} {daysText}
      </h1>
    </>
  );
}
