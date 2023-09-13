const chartEvolVentes = document.querySelector(".chartEvolVentes");
const chartHeuresVentes = document.querySelector(".chartHeuresVentes");
const chartVillesVentes = document.querySelector(".chartVillesVentes");

var contextEvolVentes = chartEvolVentes.getContext("2d");
var myChartEvolVentes = new Chart(contextEvolVentes, {
  type: "line",
  data: {
    labels: ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"],
    datasets: [
      {
        label: "Evolution du CA par mois",
        data: [1822256, 2202022, 2807100, 3390670, 3152606, 2844747 ,2644747, 2244467, 2097560, 3736726, 3199603, 4613443],
        backgroundColor: [
          "rgba(132, 99, 255, 1)",
        ],
        borderColor: [
            "rgba(132, 99, 255, 1)",
        ],
        borderWidth: 1,
      },
    ],
  },
});


var contextHeuresVentes = chartHeuresVentes.getContext("2d");
var myChartHeuresVentes = new Chart(contextHeuresVentes, {
  type: "line",
  data: {
    labels: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23],
    datasets: [
      {
        label: "Evolution du CA par heure",
        data: [651023.36, 429387.41, 214226.72, 133335.05, 146714.69, 213095.06, 419911.52, 686228.04, 1107888.86, 1515155.29, 1800699.35, 2120529.03, 2151590.65, 1980718.06, 1942781.03, 1798606.92, 1778292.12, 1962700.79, 2043857.96, 2231550.65, 2104940.86, 1891900.72, 1490572.23, 1098036.30],
        backgroundColor: [
          "rgba(0, 255, 255, 1)",
        ],
        borderColor: [
            "rgba(0, 255, 255, 1)",
        ],
        borderWidth: 1,
      },
    ],
  },
});

var contextVillesVentes = chartVillesVentes.getContext("2d");
var myChartVillesVentes = new Chart(contextVillesVentes, {
  type: "bar",
  data: {
    labels: ["Austin", "Atlanta", "Boston", "Dallas", "Los Angeles", "New York City", "Portland", "San Francisco", "Seattle"],
    datasets: [
      {
        label: "CA en dollars",
        data: [2576103.07,1675610.55,3406782.14,2579077.70,5002316.65,4002316.65,4340442.83,2150911.37,7648596.40,2533901.96],
        backgroundColor: [
          "rgba(255, 0, 255, 0.5)",
        ],
        borderColor: [
            "rgba(255, 0, 255, 1)",
        ],
        borderWidth: 1,
      },
    ],
  },
});


$(document).ready(function () {
    $(".data-table").each(function (_, table) {
      $(table).DataTable();
    });
  });

  function toProduitPage(button) {
    window.localStorage.setItem("IDProduit", document.getElementById(button.id).id);
    var idProduit = window.localStorage.getItem("IDProduit");
    document.getElementById("id").value = id;
}
  