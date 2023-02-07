async function executeScript() {
  function getParameterByName(name:any, url = window.location.href) {
    const nameReplace = name.replace(/[[\]]/g, "\\$&");
    const regex = new RegExp(`[?&]${nameReplace}(=([^&#]*)|&|#|$)`);
    const results = regex.exec(url);
    if (!results) return "";
    if (!results[2]) return "";
    return decodeURIComponent(results[2].replace(/\+/g, " "));
  }

  let qs = "";
  for (let i = 2; i <= 17; i++) {
    qs += `&sub${i}=${encodeURIComponent(getParameterByName(`aff_sub${i}`))}`;
  }

  console.log("ejcute el script");

  const elem = document.createElement("img");
  elem.src = `https://imgs-cdn.net/trk?cmp=b8c96a2c6d91494df0e2dd286c8c84b2cbb7831a&ev=lpclick&sub1=${getParameterByName("aff_sub")}${qs}`;
  elem.width = 1;
  elem.height = 1;

  document.body.appendChild(elem);
}
export default executeScript;
