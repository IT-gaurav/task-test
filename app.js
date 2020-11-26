const table = document.querySelectorAll(".table");

let data = [
  { city: "Montreal", zip: 1234 },
  { city: "Toronto", zip: 3432 },
  { city: "New York", zip: 3213 },
];

fn();

function fn() {
  let tbody = document.querySelector("tbody");

  tbody.innerHTML = "";

  data.forEach((d) => {
    tbody.innerHTML += `
        <tr>
            <td>
                ${d.city}
            </td>
            <td>
                ${d.zip}
            </td>
        </tr>
        
        `;
  });
}

function sort() {
  data = data.sort((a, b) => (b.city < a.city ? 1 : -1));
  console.log(data);
  fn();
}
