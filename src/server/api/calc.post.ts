import { calcINSS, calcIRRF } from "../utils/taxes";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const salary = Number(body.salary);

  const inss = calcINSS(salary);
  const irrf = calcIRRF(salary - inss);
  const net = salary - inss - irrf;

  return {
    salary,
    inss,
    irrf,
    net,
  };
});
