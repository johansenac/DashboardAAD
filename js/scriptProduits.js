const chartVentesProduits = document.querySelector(".chartVentesProduits");
var contextVentesProduits = chartVentesProduits.getContext("2d");
var color = random_rgba();

var myChartVentesProduits = new Chart(contextVentesProduits, {
    type: "bar",
    data: {
      labels: ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"],
      datasets: [
        {
            label: "iPhone",
        backgroundColor: color,
        data: [266700, 307300, 376600, 485100, 448000, 373100, 351400, 307300, 277900, 501200, 465500, 634200],
        }
        
      ],
    }, options: {
        responsive: true,
        maintainAspectRatio: false,
      }
  });


$(document).ready(function () {
    $(".data-table").each(function (_, table) {
      $(table).DataTable();
    });
  });

  function addDataset(chart, newdata, labeldataset) {
    const newDataArray = newdata.split(",");
    var color = random_rgba();
    const dataset = {
        label: labeldataset,
        backgroundColor: color,
        data: newDataArray,
    }
    chart.data.datasets.push(dataset);
    chart.update();
}

function removeDataset(chart, datasetToRemove) {
    chart.data.datasets.forEach((dataset) => {
        if (dataset.label === datasetToRemove) {
            var index = chart.data.datasets.indexOf(dataset);
            chart.data.datasets.splice(index, 1);
        }
    });
    chart.update();
}

function addRemoveData(checkbox){
    if(checkbox.checked) {
        addDataset(myChartVentesProduits, checkbox.value, checkbox.id);
    }
    else {
        removeDataset(myChartVentesProduits, checkbox.id);
    }
}

function random_rgba() {
    var o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + 0.5 + ')';
}

function toProduitPage(button) {
    window.localStorage.setItem("IDProduit", document.getElementById(button.id).id);
    var idProduit = window.localStorage.getItem("IDProduit");
    document.getElementById("id").value = id;
}

