$(document).ready(function () {
  $(".data-table").each(function (_, table) {
    $(table).DataTable();
  });
});

const chartCA = document.querySelector(".chartCA");
const chartProduit = document.querySelector(".chartProduit");

var contextCA = chartCA.getContext("2d");
var myChartCA = new Chart(contextCA, {
  type: "bar",
  data: {
    labels: ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"],
    datasets: [
      {
        label: "CA Mensuel en Dollars",
        data: [1822256, 2202022, 2807100, 3390670, 3152606, 2844747 ,2644747, 2244467, 2097560, 3736726, 3199603, 4613443],
        backgroundColor: [
          "rgba(255, 99, 132, 0.5)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
        ],
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

var contextProduit = chartProduit.getContext("2d");
var myChartProduit = new Chart(contextProduit, {
  type: "doughnut",
  data: {
    labels: ["ThinkPad Laptop","Macbook Pro Laptop","iPhone", "Google Phone",  "27in 4K Gaming Monitor", "34in Ultrawide Monitor", "Apple Airpods Headphones", "Autres produits"],
    datasets: [
      {
        label: "% du CA sur l'année 2019",
        data: [11.95, 23.29, 13.86, 9.67, 7.08, 6.84, 6.81, 20.51],
        backgroundColor: [
          "rgba(255, 0, 255, 0.5)",
          "rgba(99, 255, 132, 0.5)",
          "rgba(255, 132, 99, 0.5)",
          "rgba(0, 255, 255, 0.5)",
          "rgba(132, 99, 255, 0.5)",
          "rgba(255, 50, 50, 0.5)",
          "rgba(50, 50, 255, 0.5)",
          "rgba(255, 255, 0, 0.5)",
        ],
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
}
});

function toProduits() {
  location.href="produits.html";
}

function toVentes() {
  location.href="ventes.html";
}
