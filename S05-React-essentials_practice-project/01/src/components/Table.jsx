import { formatter } from "../util/investment";

export default function Table({ dataResult, initialInvestment }) {
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {dataResult.map((dataRow) => {
          const totalInterest =
            dataRow.valueEndOfYear -
            dataRow.annualInvestment * dataRow.year -
            initialInvestment;

          const investedCaptal = initialInvestment += dataRow.annualInvestment

          return (
            <tr key={dataRow.year}>
              <td>{dataRow.year}</td>
              <td>{formatter.format(dataRow.valueEndOfYear)}</td>
              <td>{formatter.format(dataRow.interest)}</td>
              <td>
                {formatter.format(totalInterest)}
              </td>
              <td>
                {formatter.format(
                  (investedCaptal)
                )}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
