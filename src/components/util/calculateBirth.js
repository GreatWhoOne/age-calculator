export function calculateBirth(fullBirthDate) {
  let today = new Date();
  let partsDate = fullBirthDate.split("/");
  let formattedBirthDate = new Date(
    partsDate[2],
    partsDate[1] - 1,
    partsDate[0]
  ); // ano, mês (começando do zero), dia

  let age = today.getFullYear() - formattedBirthDate.getFullYear();
  let month = today.getMonth() - formattedBirthDate.getMonth();
  let days = today.getDate() - formattedBirthDate.getDate();

  // Verifica se fez aniversario esse ano
  if (
    month < 0 ||
    (month === 0 && today.getDate() < formattedBirthDate.getDate)
  ) {
    age--;
    month += 12;
  }

  // Ajuste para resultados negativos em dias
  if (days < 0) {
    // Ajusta os dias para o mês anterior
    const lastMonthDay = new Date(
      today.getFullYear(),
      today.getMonth(),
      0
    ).getDate();
    days += lastMonthDay;
    month--;
  }

  const newResult = {
    age: age,
    months: month,
    days: days,
  };

  return newResult;
}
