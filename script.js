// const ajax = (url, callback, method = "GET") => {
//   if (!url) return console.error("Request Required");
//   if (!callback) return console.error("Callback Required");
//   const request = new XMLHttpRequest();
//   request.addEventListener("readystatechange", (evt) => {
//     let req = evt.target;
//     if (req.readyState !== 4) return;
//     if (req.status === 200) return callback(req.response);
//     callback("");
//   });
//   request.open(method, url);
//   request.send();
// };
// let value = (res, input) => document.body.append(res);
// ajax("https://api.pokemontcg.io/v1/cards", res => document.body.append(res));

// console.log;

let response = fetch("https://api.pokemontcg.io/v1/cards")
  .then((res) => res.json())
  .then((data) => console.log(data));
console.log(response);
