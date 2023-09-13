window.onload = function() {
  var probaProduit = window.localStorage.getItem("probasProduit");
  $('.graph').addClass('hidden');
  $('.graph#graph' + probaProduit).removeClass('hidden');
}

$(document).ready(function(){
  $('#produits').on('change', function(){
      var theVal = $(this).val();
      $('.graph').addClass('hidden');
      $('.graph#graph' + theVal).removeClass('hidden');
  });
});



const chartWiredHeadphones = document.querySelector(".chartwired_headphones");

var contextWiredHeadphones = chartWiredHeadphones.getContext("2d");
var myChartWiredHeadphones = new Chart(contextWiredHeadphones, {
  type: "pie",
  data: {
    labels: ["USB-C Charging Cable","Lightning Charging Cable","Apple Airpods Headpphones","iPhone","Google Phone","Vareebadd Phone", "Autres produits"],
    datasets: [
      {
        label: "% d'achat groupé",
        data: [11.34, 7.17, 5.56, 25.68, 23.46, 8.28,30.02],
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
      {
        label: "n Produits achetés en lot avec des Wired Headphones",
        data: [204, 129,100,462, 422, 149,540],
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

const chartVareebadPhone= document.querySelector(".chartvareebadd_phone");

var contextVareebadPhone = chartVareebadPhone.getContext("2d");
var myChartVareebadPhone = new Chart(contextVareebadPhone, {
  type: "pie",
  data: {
    labels: ["USB-C Charging Cable","Lightning Charging Cable","Apple Airpods Headpphones","iPhone","Google Phone","Vareebadd Phone", "Autres produits"],
    datasets: [
      {
        label: "% d'achat groupé",
        data: [11.34, 7.17, 5.56, 25.68, 23.46, 8.28,30.02],
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
      {
        label: "n Produits achetés en lot avec des Wired Headphones",
        data: [102, 64, 50, 230, 210, 75, 269],
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

const chartUSBC = document.querySelector(".chartusb_c_charging_cable");

var contextUSBC = chartUSBC.getContext("2d");
var myChartUSBC = new Chart(contextUSBC, {
  type: "pie",
  data: {
    labels: ["USB-C Charging Cable","Lightning Charging Cable","Apple Airpods Headpphones","iPhone","Google Phone","Vareebadd Phone", "Autres produits"],
    datasets: [
      {
        label: "% d'achat groupé",
        data: [12.05, 7.61, 5.89, 27.09, 24.74, 8.74, 13.88],
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
      {
        label: "n Produits achetés en lot avec des Wired Headphones",
        data: [121, 76, 59, 271, 247, 87, 139],
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

const chartThinkpad = document.querySelector(".chartthinkpad_laptop");

var contextThinkpad = chartThinkpad.getContext("2d");
var myChartThinkpad = new Chart(contextThinkpad, {
  type: "pie",
  data: {
    labels: ["USB-C Charging Cable","Lightning Charging Cable","Apple Airpods Headpphones","iPhone","Google Phone","Vareebadd Phone", "Autres produits"],
    datasets: [
      {
        label: "% d'achat groupé",
        data: [12.05, 7.61, 5.89, 27.09, 24.74, 8.74, 13.88],
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
      {
        label: "n Produits achetés en lot avec des Wired Headphones",
        data: [121, 76, 59, 271, 247, 87, 139],
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

const chartMacbook = document.querySelector(".chartmacbook_pro_laptop");

var contextMacbook = chartMacbook.getContext("2d");
var myChartMacbook = new Chart(contextMacbook, {
  type: "pie",
  data: {
    labels: ["USB-C Charging Cable","Lightning Charging Cable","Apple Airpods Headpphones","iPhone","Google Phone","Vareebadd Phone", "Autres produits"],
    datasets: [
      {
        label: "% d'achat groupé",
        data: [9.99, 6.31, 4.87, 22.34, 20.44, 7.21, 29.84],
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
      {
        label: "n Produits achetés en lot avec des Wired Headphones",
        data: [101, 62, 48, 221, 202, 71, 295],
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

const chartLightning = document.querySelector(".chartlightning_charging_cable");

var contextLightning = chartLightning.getContext("2d");
var myChartLightning = new Chart(contextLightning, {
  type: "pie",
  data: {
    labels: ["USB-C Charging Cable","Lightning Charging Cable","Apple Airpods Headpphones","iPhone","Google Phone","Vareebadd Phone", "Autres produits"],
    datasets: [
      {
        label: "% d'achat groupé",
        data: [9.20, 5.81, 4.49, 20.52, 18.76, 6.62, 34.61],
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
      {
        label: "n Produits achetés en lot avec des Wired Headphones",
        data: [92, 58, 45, 205, 188, 66, 346],
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

const chartlgwm = document.querySelector(".chartlg_washing_machine");

var contextlgwm = chartlgwm.getContext("2d");
var myChartlgwm = new Chart(contextlgwm, {
  type: "pie",
  data: {
    labels: ["USB-C Charging Cable","lgwm Charging Cable","Apple Airpods Headpphones","iPhone","Google Phone","Vareebadd Phone", "Autres produits"],
    datasets: [
      {
        label: "% d'achat groupé",
        data: [12.13, 7.67, 5.93, 27.31, 24.95, 8.81, 12.20],
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
      {
        label: "n Produits achetés en lot avec des Wired Headphones",
        data: [123, 77, 60, 276, 252, 89, 123],
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

const chartdryer = document.querySelector(".chartlg_dryer");

var contextdryer = chartdryer.getContext("2d");
var myChartdryer = new Chart(contextdryer, {
  type: "pie",
  data: {
    labels: ["USB-C Charging Cable","dryer Charging Cable","Apple Airpods Headpphones","iPhone","Google Phone","Vareebadd Phone", "Autres produits"],
    datasets: [
      {
        label: "% d'achat groupé",
        data: [10.13, 6.41, 4.96, 22.77, 20.83, 7.36, 27.54],
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
      {
        label: "n Produits achetés en lot avec des Wired Headphones",
        data: [10.13, 6.41, 4.96, 22.77, 20.83, 7.36, 27.54],
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

const chartiphone = document.querySelector(".chartiphone");

var contextiphone = chartiphone.getContext("2d");
var myChartiphone = new Chart(contextiphone, {
  type: "pie",
  data: {
    labels: ["USB-C Charging Cable","iphone Charging Cable","Apple Airpods Headpphones","iPhone","Google Phone","Vareebadd Phone", "Autres produits"],
    datasets: [
      {
        label: "% d'achat groupé",
        data: [8.27, 5.22, 4.03, 18.56, 16.97, 6.00, 41.94],
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
      {
        label: "n Produits achetés en lot avec des Wired Headphones",
        data: [82, 52, 40, 184, 168, 59, 415],
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

const chartgoogle_phone = document.querySelector(".chartgoogle_phone");

var contextgoogle_phone = chartgoogle_phone.getContext("2d");
var myChartgoogle_phone = new Chart(contextgoogle_phone, {
  type: "pie",
  data: {
    labels: ["USB-C Charging Cable","google_phone Charging Cable","Apple Airpods Headpphones","google_phone","Google Phone","Vareebadd Phone", "Autres produits"],
    datasets: [
      {
        label: "% d'achat groupé",
        data: [11.85, 7.48, 5.78, 26.53, 24.27, 8.57, 15.52],
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
      {
        label: "n Produits achetés en lot avec des Wired Headphones",
        data: [119, 75, 58, 265, 243, 86, 154],
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

const chartflatscreen_tv = document.querySelector(".chartflatscreen_tv");

var contextflatscreen_tv = chartflatscreen_tv.getContext("2d");
var myChartflatscreen_tv = new Chart(contextflatscreen_tv, {
  type: "pie",
  data: {
    labels: ["USB-C Charging Cable","flatscreen_tv Charging Cable","Apple Airpods Headpphones","flatscreen_tv","Google Phone","Vareebadd Phone", "Autres produits"],
    datasets: [
      {
        label: "% d'achat groupé",
        data: [9.55, 6.03, 4.66, 21.41, 19.56, 6.90, 31.89],
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
      {
        label: "n Produits achetés en lot avec des Wired Headphones",
        data: [95, 60, 47, 214, 196, 69, 319],
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

const chartbose_soundsport_headphones = document.querySelector(".chartbose_soundsport_headphones");

var contextbose_soundsport_headphones = chartbose_soundsport_headphones.getContext("2d");
var myChartbose_soundsport_headphones = new Chart(contextbose_soundsport_headphones, {
  type: "pie",
  data: {
    labels: ["USB-C Charging Cable","bose_soundsport_headphones Charging Cable","Apple Airpods Headpphones","bose_soundsport_headphones","Google Phone","Vareebadd Phone", "Autres produits"],
    datasets: [
      {
        label: "% d'achat groupé",
        data: [11.53, 7.28, 5.63, 25.96, 23.76, 8.39, 17.45],
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
      {
        label: "n Produits achetés en lot avec des Wired Headphones",
        data: [115, 73, 56, 260, 238, 84, 174],
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

const chartapple_airpods_headphones = document.querySelector(".chartapple_airpods_headphones");

var contextapple_airpods_headphones = chartapple_airpods_headphones.getContext("2d");
var myChartapple_airpods_headphones = new Chart(contextapple_airpods_headphones, {
  type: "pie",
  data: {
    labels: ["USB-C Charging Cable","apple_airpods_headphones Charging Cable","Apple Airpods Headpphones","apple_airpods_headphones","Google Phone","Vareebadd Phone", "Autres produits"],
    datasets: [
      {
        label: "% d'achat groupé",
        data: [10.30, 6.50, 5.02, 23.17, 21.18, 7.47, 26.36],
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
      {
        label: "n Produits achetés en lot avec des Wired Headphones",
        data: [204, 129,100,462, 422, 149,540],
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

const chartaa_batteries = document.querySelector(".chartaa_batteries");

var contextaa_batteries = chartaa_batteries.getContext("2d");
var myChartaa_batteries = new Chart(contextaa_batteries, {
  type: "pie",
  data: {
    labels: ["USB-C Charging Cable","aa_batteries Charging Cable","Apple Airpods Headpphones","aa_batteries","Google Phone","Vareebadd Phone", "Autres produits"],
    datasets: [
      {
        label: "% d'achat groupé",
        data: [10.91, 6.89, 5.33, 24.57, 22.45, 7.93, 21.92],
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
      {
        label: "n Produits achetés en lot avec des Wired Headphones",
        data: [110, 69, 53, 246, 224, 79, 219],
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

const chartaaa_batteries = document.querySelector(".chartaaa_batteries");

var contextaaa_batteries = chartaaa_batteries.getContext("2d");
var myChartaaa_batteries = new Chart(contextaaa_batteries, {
  type: "pie",
  data: {
    labels: ["USB-C Charging Cable","aaa_batteries Charging Cable","Apple Airpods Headpphones","aaa_batteries","Google Phone","Vareebadd Phone", "Autres produits"],
    datasets: [
      {
        label: "% d'achat groupé",
        data: [8.53, 5.39, 4.16, 19.22, 17.57, 6.20, 38.94],
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
      {
        label: "n Produits achetés en lot avec des Wired Headphones",
        data: [85, 54, 42, 192, 176, 62, 389],
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

const chart34in_ultrawide_monitor = document.querySelector(".chart34in_ultrawide_monitor");

var context34in_ultrawide_monitor = chart34in_ultrawide_monitor.getContext("2d");
var myChart34in_ultrawide_monitor = new Chart(context34in_ultrawide_monitor, {
  type: "pie",
  data: {
    labels: ["USB-C Charging Cable","34in_ultrawide_monitor Charging Cable","Apple Airpods Headpphones","34in_ultrawide_monitor","Google Phone","Vareebadd Phone", "Autres produits"],
    datasets: [
      {
        label: "% d'achat groupé",
        data: [12.39, 7.83, 6.05, 27.84, 25.44, 8.99, 11.45],
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
      {
        label: "n Produits achetés en lot avec des Wired Headphones",
        data: [124, 78, 61, 278, 254, 90, 115],
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

const chart27in_fhd_monitor = document.querySelector(".chart27in_fhd_monitor");

var context27in_fhd_monitor = chart27in_fhd_monitor.getContext("2d");
var myChart27in_fhd_monitor = new Chart(context27in_fhd_monitor, {
  type: "pie",
  data: {
    labels: ["USB-C Charging Cable","27in_fhd_monitor Charging Cable","Apple Airpods Headpphones","27in_fhd_monitor","Google Phone","Vareebadd Phone", "Autres produits"],
    datasets: [
      {
        label: "% d'achat groupé",
        data: [12.66, 8.00, 6.19, 28.52, 26.05, 9.19, 9.38],
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
      {
        label: "n Produits achetés en lot avec des Wired Headphones",
        data: [127, 80, 62, 285, 261, 91, 94],
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

const chart27in_4k_gaming_monitor = document.querySelector(".chart27in_4k_gaming_monitor");

var context27in_4k_gaming_monitor = chart27in_4k_gaming_monitor.getContext("2d");
var myChart27in_4k_gaming_monitor = new Chart(context27in_4k_gaming_monitor, {
  type: "pie",
  data: {
    labels: ["USB-C Charging Cable","27in_4k_gaming_monitor Charging Cable","Apple Airpods Headpphones","27in_4k_gaming_monitor","Google Phone","Vareebadd Phone", "Autres produits"],
    datasets: [
      {
        label: "% d'achat groupé",
        data: [10.46, 6.61, 5.12, 23.61, 21.55, 7.59, 25.06],
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
      {
        label: "n Produits achetés en lot avec des Wired Headphones",
        data: [105, 66, 51, 236, 215, 76, 251],
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

const chart20in_monitor = document.querySelector(".chart20in_monitor");

var context20in_monitor = chart20in_monitor.getContext("2d");
var myChart20in_monitor = new Chart(context20in_monitor, {
  type: "pie",
  data: {
    labels: ["USB-C Charging Cable","20in_monitor Charging Cable","Apple Airpods Headpphones","20in_monitor","Google Phone","Vareebadd Phone", "Autres produits"],
    datasets: [
      {
        label: "% d'achat groupé",
        data: [9.83, 6.20, 4.80, 22.14, 20.25, 7.15, 29.63],
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
      {
        label: "n Produits achetés en lot avec des Wired Headphones",
        data: [98, 62, 48, 221, 202, 72, 297],
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
