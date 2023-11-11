import "./pricingTable.css";
import { pricingTableData } from "./pricingTable.data";
import check from "../../UI/Assets/check.svg";
import x from "../../UI/Assets/x.svg";

export const PricingTable = () => {
  return (
    <div className="main-content">
      <table
        style={{
          borderCollapse: "collapse",
        }}
      >
        <thead>
          <tr className="table-header">
            <th colSpan="2" className="table-header-row">
              Choose the perfect plan according to your needs
            </th>
            <th>Pro</th>
            <th>Comfy</th>
            <th>Business</th>
          </tr>
        </thead>
        <tbody>
          {pricingTableData.map((item, index) => (
            <tr key={index} className="table-row">
              <>
                <td className="column-1">{item.title}</td>
                <td className="column-2"></td>
              </>

              <td className="data-columns">
                {item.pro ? (
                  <img alt={item.pro} src={check} />
                ) : (
                  <img alt={item.pro} src={x} />
                )}
              </td>
              <td className="data-columns">
                {item.comfy ? (
                  <img alt={item.comfy} src={check} />
                ) : (
                  <img alt={item.comfy} src={x} />
                )}
              </td>
              <td className="data-columns">
                {item.businessPro ? (
                  <img alt={item.businessPro} src={check} />
                ) : (
                  <img alt={item.businessPro} src={x} />
                )}
              </td>
            </tr>
          ))}
          <tr>
            <td></td>
            <td></td>
            <td className="price-columns">
              <span style={{ fontWeight: 800 }}> 3.499 €*</span> <br /> 499 €**
            </td>
            <td className="price-columns">
              <span style={{ fontWeight: 800 }}> 4.499 €*</span> <br /> 1.899
              €**
            </td>
            <td className="price-columns">
              <span style={{ fontWeight: 800 }}> 4.999 €*</span> <br /> 1.999
              €**
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
