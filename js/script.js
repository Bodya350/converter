const obj = { "weight": { "unit": "kg", "value": 2 }, "convert_to": "g" };  

// Единицы измерения: ton, kg, g
// Индекс каждого, через (str.length)

const convertTo = (obj) => {
  // Индекс входящих данных
  const countIn = obj.weight.unit.length;
  // Индекс выходящих данных
  const countOut = obj.convert_to.length;
  // Значение (степень увеличения/уменьшения 1 или 2)
  // Зависит от того (что во что конвертируется)
  let count;
  let unit;
  let value;
  if (countIn > countOut) {
    count = countIn - countOut;
    value = obj.weight.value * Math.pow(1000, count);
    unit = obj.convert_to;
  } else if (countIn < countOut) {
    count = countOut - countIn;
    console.log(count);
    value = obj.weight.value / Math.pow(1000, count);
    unit = obj.convert_to;
  } else {
    value = obj.weight.value;
    unit = obj.convert_to;
  }

  const result = { unit, value };
  return result
}

console.log(convertTo(obj));