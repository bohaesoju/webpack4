import "./app.css";
import nyancat from "./nyancat.jpeg";

document.addEventListener("DOMContentLoaded", () => {
  document.body.innerHTML = `
    <img src="${nyancat}" />
  `;
});

console.log(
  "매우 긴 문장 입나--------- -------------- 다 ------------하 ----------------------"
);
