export function calcINSS(salary: number) {
  if (salary <= 1412) return salary * 0.075;
  if (salary <= 2666.68) return salary * 0.09;
  if (salary <= 4000.03) return salary * 0.12;
  if (salary <= 7786.02) return salary * 0.14;

  return 7786.02 * 0.14; // ceiling
}

export function calcIRRF(base: number) {
  if (base <= 2259.2) return 0;
  if (base <= 2826.65) return base * 0.075 - 169.44;
  if (base <= 3751.05) return base * 0.15 - 381.44;
  if (base <= 4664.68) return base * 0.225 - 662.77;

  return base * 0.275 - 896;
}
