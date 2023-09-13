window.onload = function() {
    var idProduit = window.localStorage.getItem("IDProduit");
    document.getElementById("id").value = idProduit;
    if (idProduit === "1") {
        document.getElementById("nom").value = "AAA Batteries (4-pack)";
        document.getElementById("link").value = "aaa_batteries";
        document.getElementById("imgProduit").src = "assets/aaa_batteries.jpg";
        document.getElementById("pu").value = 2,99;
        document.getElementById("quantite").value = 31017;
        document.getElementById("ca").value = 92740,83;
        document.getElementById("cap").value = "0,27%";
        document.getElementById("description").value = "Les piles de forme cylindrique AAA mesurent 44 mm de longueur et 10,5mm de diamètre. Les piles LR03 AAA peuvent être alcalines ou au lithium-fer.";

        const chartCAP = document.querySelector(".chartCAP");
        var contextCAP = chartCAP.getContext("2d");
        var myChartCAP = new Chart(contextCAP, {
        type: "doughnut",
        data: {
            labels: ["CA réalisé par ce produit", "CA Autres Produits"],
            datasets: [
            {
                label: "% du CA",
                data: [2.99, 97.01],
                backgroundColor: [
                    "rgba(255, 0, 255, 0.5)",
                    "rgba(99, 255, 132, 0.5)",
                ],
            },
            ],
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
        }
        });

        const chartCA= document.querySelector(".chartCA");
        var contextCA = chartCA.getContext("2d");
        var myChartCA = new Chart(contextCA, {
        type: "bar",
        data: {
            labels: ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"],
            datasets: [
            {
                label: "Nombre de vente par mois",
                data: [4784, 5896.28, 7412.21, 8787.61, 8751.73, 6464.38, 7071.35, 6042.79, 5749.77, 10055.37, 9044.75, 12680.59],
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

        const chartHeuresVentes = document.querySelector(".chartHeure");
        var contextHeuresVentes = chartHeuresVentes.getContext("2d");
        var myChartHeuresVentes = new Chart(contextHeuresVentes, {
        type: "bar",
        data: {
            labels: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23],
            datasets: [
            {
                label: "CA réalisé par Heure",
                data: [2131.87, 1160.12, 615.94, 415.61, 391.69, 678.73, 1228.89, 2084.03, 3103.62, 4473.04, 5498.61, 6359.73, 6102.59, 6237.14, 5486.65, 4643.47, 4951.44, 5525.52, 6048.77, 6865.04, 5977.01, 5480.67, 4227.86, 3052.79],
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
    }
    else if (idProduit === "2") {
        document.getElementById("nom").value = "AA Batteries (4-pack)";
        document.getElementById("link").value = "aa_batteries";
        document.getElementById("imgProduit").src = "assets/aa_batteries.png";
        document.getElementById("pu").value = 3,84;
        document.getElementById("quantite").value = 27635;
        document.getElementById("ca").value = 106118,4;
        document.getElementById("cap").value = "0,31%";
        document.getElementById("description").value = "La pile AA est une pile sèche cylindrique à cellule unique de taille standard. Le système CEI 60086 appelle la taille R6 et ANSI C18 l'appelle 15. Il est nommé UM-3 par JIS du Japon.";
        
        const chartCAP = document.querySelector(".chartCAP");
        var contextCAP = chartCAP.getContext("2d");
        var myChartCAP = new Chart(contextCAP, {
        type: "doughnut",
        data: {
            labels: ["CA réalisé par ce produit", "CA Autres Produits"],
            datasets: [
            {
                label: "% du CA",
                data: [0.31, 99.69],
                backgroundColor: [
                    "rgba(255, 0, 255, 0.5)",
                    "rgba(99, 255, 132, 0.5)",
                ],
            },
            ],
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
        }
        });

        const chartCA= document.querySelector(".chartCA");
        var contextCA = chartCA.getContext("2d");
        var myChartCA = new Chart(contextCA, {
        type: "bar",
        data: {
            labels: ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"],
            datasets: [
            {
                label: "Nombre de ventes par mois",
                data: [5468.16, 6662.4, 8509.44, 10832.64, 9154.56, 8048.64, 7952.64, 7019.52, 6800.64, 11289.6, 10080, 14300.16],
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

        const chartHeuresVentes = document.querySelector(".chartHeure");
        var contextHeuresVentes = chartHeuresVentes.getContext("2d");
        var myChartHeuresVentes = new Chart(contextHeuresVentes, {
        type: "bar",
        data: {
            labels: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23],
            datasets: [
            {
                label: "CA réalisé par Heure",
                data: [2012.16, 1201.92, 668.16, 472.32, 368.64, 752.64, 1397.76, 2365.44, 3475.2, 4853.76, 6359.04, 6938.88, 7353.6, 7119.36, 6178.56, 5894.4, 6086.4, 6001.92, 7119.36, 6819.84, 7488, 6197.76, 5310.72, 3682.56],
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
    }
    
    else if (idProduit === "3") {
        document.getElementById("nom").value = "20in Monitor";
        document.getElementById("link").value = "20in_monitor";
        document.getElementById("imgProduit").src = "assets/20in.jpg";
        document.getElementById("pu").value = 109,99;
        document.getElementById("quantite").value = 4129;
        document.getElementById("ca").value = 454148,71;
        document.getElementById("cap").value = "1,32%";
        document.getElementById("description").value = "Avec une taille de diagonale d'écran de 51 centimètres, les écrans PC de 20 pouces sont conçus pour optimiser votre productivité de travail. Pensé pour les petits bureaux, ces écrans PC n'ont pas à rougir face aux écrans PC 24 pouces ou aux 27 pouces en termes de performances pures.";
        
        const chartCAP = document.querySelector(".chartCAP");
        var contextCAP = chartCAP.getContext("2d");
        var myChartCAP = new Chart(contextCAP, {
        type: "doughnut",
        data: {
            labels: ["CA réalisé par ce produit", "CA Autres Produits"],
            datasets: [
            {
                label: "% du CA",
                data: [1.32, 98.68],
                backgroundColor: [
                    "rgba(255, 0, 255, 0.5)",
                    "rgba(99, 255, 132, 0.5)",
                ],
            },
            ],
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
        }
        });

        const chartCA= document.querySelector(".chartCA");
        var contextCA = chartCA.getContext("2d");
        var myChartCA = new Chart(contextCA, {
        type: "bar",
        data: {
            labels: ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"],
            datasets: [
            {
                label: "Nombre de ventes par mois",
                data: [23977.82, 27057.54, 35856.74, 43226.07, 37506.59, 35416.78, 35966.73, 28707.39, 30467.23, 47185.71, 46195.8, 62584.31],
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

        const chartHeuresVentes = document.querySelector(".chartHeure");
        var contextHeuresVentes = chartHeuresVentes.getContext("2d");
        var myChartHeuresVentes = new Chart(contextHeuresVentes, {
        type: "bar",
        data: {
            labels: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23],
            datasets: [
            {
                label: "CA réalisé par Heure",
                data: [9569.13, 4619.58, 4179.62, 1649.85, 1869.83, 3739.66, 7259.34, 11658.94, 15288.61, 19798.2, 25737.66, 29367.33, 36186.71, 28817.38, 26067.63, 26617.58, 23647.85, 27717.48, 27387.51, 31127.17, 29257.34, 26067.63, 21778.02, 14738.66],
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
    }
    

    else if (idProduit === "4") {
        document.getElementById("nom").value = "27in 4K Gaming Monitor";
        document.getElementById("link").value = "27in_4k_gaming_monitor";
        document.getElementById("imgProduit").src = "assets/27in4k.jpg";
        document.getElementById("pu").value = 389,99;
        document.getElementById("quantite").value = 6244;
        document.getElementById("ca").value = 2435097,56;
        document.getElementById("cap").value = "7,06%";
        document.getElementById("description").value = "Un écran de gaming 27 pouces avec une résolution 4K est un choix populaire pour les joueurs en raison de sa grande taille d'écran et de sa haute résolution, qui offre une expérience visuelle immersive et détaillée.";
        
        const chartCAP = document.querySelector(".chartCAP");
        var contextCAP = chartCAP.getContext("2d");
        var myChartCAP = new Chart(contextCAP, {
        type: "doughnut",
        data: {
            labels: ["CA réalisé par ce produit", "CA Autres Produits"],
            datasets: [
            {
                label: "% du CA",
                data: [7.06, 92.94],
                backgroundColor: [
                    "rgba(255, 0, 255, 0.5)",
                    "rgba(99, 255, 132, 0.5)",
                ],
            },
            ],
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
        }
        });

        const chartCA= document.querySelector(".chartCA");
        var contextCA = chartCA.getContext("2d");
        var myChartCA = new Chart(contextCA, {
        type: "bar",
        data: {
            labels: ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"],
            datasets: [
            {
                label: "Nombre de ventes par mois",
                data: [122066.87, 166525.73, 186805.21, 220734.34, 211374.58, 175885.49, 188365.17, 171595.6, 148586.19, 281962.77, 224244.25, 336951.36],
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

        const chartHeuresVentes = document.querySelector(".chartHeure");
        var contextHeuresVentes = chartHeuresVentes.getContext("2d");
        var myChartHeuresVentes = new Chart(contextHeuresVentes, {
        type: "bar",
        data: {
            labels: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23],
            datasets: [
            {
                label: "CA réalisé par Heure",
                data: [43678.88, 30419.22, 17549.55, 12089.69, 12869.67, 16379.58, 28859.26, 47188.79, 77608.01, 110757.16, 144686.29, 158335.94, 153266.07, 157555.96, 148196.2, 137276.48, 127526.73, 156385.99, 157945.95, 175105.51, 165745.75, 143126.33, 118166.97, 94377.58, 2435097.56],
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
    }

    else if (idProduit === "5") {
        document.getElementById("nom").value = "Apple Airpods Headphones";
        document.getElementById("link").value = "27in_4k_gaming_monitor";
        document.getElementById("imgProduit").src = "assets/airpods.jfif";
        document.getElementById("pu").value = 150;
        document.getElementById("quantite").value = 15661;
        document.getElementById("ca").value = 2349150;
        document.getElementById("cap").value = "6,81%";
        document.getElementById("description").value = "Les AirPods offrent une expérience d'écoute sans fil incroyable. Retirez-les de leur boîtier et ils fonctionnent tout de suite avec tous vos appareils. Portez-les à vos oreilles et ils se connectent immédiatement pour vous faire profiter d'un son de haute qualité parfaitement détaillé. Comme par magie.";
        
        const chartCAP = document.querySelector(".chartCAP");
        var contextCAP = chartCAP.getContext("2d");
        var myChartCAP = new Chart(contextCAP, {
        type: "doughnut",
        data: {
            labels: ["CA réalisé par ce produit", "CA Autres Produits"],
            datasets: [
            {
                label: "% du CA",
                data: [6.81, 93.19],
                backgroundColor: [
                    "rgba(255, 0, 255, 0.5)",
                    "rgba(99, 255, 132, 0.5)",
                ],
            },
            ],
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
        }
        });

        const chartCA= document.querySelector(".chartCA");
        var contextCA = chartCA.getContext("2d");
        var myChartCA = new Chart(contextCA, {
        type: "bar",
        data: {
            labels: ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"],
            datasets: [
            {
                label: "Nombre de ventes par mois",
                data: [122700, 151800, 198300, 227850, 204750, 175050, 183000, 151350, 145350, 250650, 226950, 311400],
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

        const chartHeuresVentes = document.querySelector(".chartHeure");
        var contextHeuresVentes = chartHeuresVentes.getContext("2d");
        var myChartHeuresVentes = new Chart(contextHeuresVentes, {
        type: "bar",
        data: {
            labels: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23],
            datasets: [
            {
                label: "CA réalisé par Heure",
                data: [52500,32100,16950,10050,11850,14850,30600,52200,79500,113100,140850,152850,165000,157650,136800,124650,126750,130350,149850,163350,151950,142950,111150,81300],
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
    }

    else if (idProduit === "6") {
        document.getElementById("nom").value = "27in FHD Monitor";
        document.getElementById("link").value = "27in_fhd_monitor";
        document.getElementById("imgProduit").src = "assets/27inFHD.jpg";
        document.getElementById("pu").value = 149,99;
        document.getElementById("quantite").value = 7550;
        document.getElementById("ca").value = 1132424,5;
        document.getElementById("cap").value = "3,28%";
        document.getElementById("description").value = "Panneau IPS à grand angle de vue qui est éclatant sous tous les angles. Adopte une dalle IPS avec un grand angle de vision de 178°.";
        
        const chartCAP = document.querySelector(".chartCAP");
        var contextCAP = chartCAP.getContext("2d");
        var myChartCAP = new Chart(contextCAP, {
        type: "doughnut",
        data: {
            labels: ["CA réalisé par ce produit", "CA Autres Produits"],
            datasets: [
            {
                label: "% du CA",
                data: [3.28, 96.32],
                backgroundColor: [
                    "rgba(255, 0, 255, 0.5)",
                    "rgba(99, 255, 132, 0.5)",
                ],
            },
            ],
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
        }
        });

        const chartCA= document.querySelector(".chartCA");
        var contextCA = chartCA.getContext("2d");
        var myChartCA = new Chart(contextCA, {
        type: "bar",
        data: {
            labels: ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"],
            datasets: [
            {
                label: "Nombre de ventes par mois",
                data: [63295.78, 71245.25, 91193.92, 110392.64, 103343.11, 85044.33, 91043.93, 73645.09, 72445.17, 118642.09, 107842.81, 144290.38],
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

        const chartHeuresVentes = document.querySelector(".chartHeure");
        var contextHeuresVentes = chartHeuresVentes.getContext("2d");
        var myChartHeuresVentes = new Chart(contextHeuresVentes, {
        type: "bar",
        data: {
            labels: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23],
            datasets: [
            {
                label: "CA réalisé par Heure",
                data: [27598.16, 13949.07, 8399.44, 7799.48, 6449.57, 7799.48, 15748.95, 21898.54, 35547.63, 54896.34, 63745.75, 71995.2, 77844.81, 74095.06, 66745.55, 63295.78, 68995.4, 65845.61, 73645.09, 79494.7, 77244.85, 64945.67, 48896.74, 35547.63, 1132424.5],
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
    }

    else if (idProduit === "7") {
        document.getElementById("nom").value = "34in Ultrawide Monitor";
        document.getElementById("link").value = "34in_ultrawide_monitor";
        document.getElementById("imgProduit").src = "assets/34in.jpg";
        document.getElementById("pu").value = 379,99;
        document.getElementById("quantite").value = 6199;
        document.getElementById("ca").value = 2355558,01;
        document.getElementById("cap").value = "6,83%";
        document.getElementById("description").value = "Une diagonale de 34 pour un format 21:9, un rafraîchissement maximal à 165 Hz et une résolution de 3440 x 1440, font partie des éléments indispensables qui sont présents sur cet écran.";
        
        const chartCAP = document.querySelector(".chartCAP");
        var contextCAP = chartCAP.getContext("2d");
        var myChartCAP = new Chart(contextCAP, {
        type: "doughnut",
        data: {
            labels: ["CA réalisé par ce produit", "CA Autres Produits"],
            datasets: [
            {
                label: "% du CA",
                data: [6.83, 93.17],
                backgroundColor: [
                    "rgba(255, 0, 255, 0.5)",
                    "rgba(99, 255, 132, 0.5)",
                ],
            },
            ],
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
        }
        });

        const chartCA= document.querySelector(".chartCA");
        var contextCA = chartCA.getContext("2d");
        var myChartCA = new Chart(contextCA, {
        type: "bar",
        data: {
            labels: ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"],
            datasets: [
            {
                label: "Nombre de ventes par mois",
                data: [119316.86, 158835.82, 198354.78, 248513.46, 206714.56, 172895.45, 175555.38, 144396.2, 144016.21, 254973.29, 209374.49, 322611.51],
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

        const chartHeuresVentes = document.querySelector(".chartHeure");
        var contextHeuresVentes = chartHeuresVentes.getContext("2d");
        var myChartHeuresVentes = new Chart(contextHeuresVentes, {
        type: "bar",
        data: {
            labels: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23],
            datasets: [
            {
                label: "CA réalisé par Heure",
                data: [57758.48, 30399.2, 12919.66, 8359.78, 10259.73, 15199.6, 32679.14, 47498.75, 80177.89, 110577.09, 134896.45, 151236.02, 161115.76, 154655.93, 142116.26, 132996.5, 129956.58, 136416.41, 159975.79, 160735.77, 158455.83, 137556.38, 109057.13, 80557.88],
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
    }

    else if (idProduit === "9") {
        document.getElementById("nom").value = "Flatscreen TV";
        document.getElementById("link").value = "flatscreen_tv";
        document.getElementById("imgProduit").src = "assets/tv.jpg";
        document.getElementById("pu").value = 300;
        document.getElementById("quantite").value = 4819;
        document.getElementById("ca").value = 1445700;
        document.getElementById("cap").value = "4,19%";
        document.getElementById("description").value = "Un écran est constitué d'un cristal liquide en phase nématique pris en sandwich entre deux plaques de verre polarisé. Le verre arrière et le verre avant présentent des directions de polarisation différentes, décalées de 90 degrés.";
        
        const chartCAP = document.querySelector(".chartCAP");
        var contextCAP = chartCAP.getContext("2d");
        var myChartCAP = new Chart(contextCAP, {
        type: "doughnut",
        data: {
            labels: ["CA réalisé par ce produit", "CA Autres Produits"],
            datasets: [
            {
                label: "% du CA",
                data: [4.19, 95.81],
                backgroundColor: [
                    "rgba(255, 0, 255, 0.5)",
                    "rgba(99, 255, 132, 0.5)",
                ],
            },
            ],
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
        }
        });

        const chartCA= document.querySelector(".chartCA");
        var contextCA = chartCA.getContext("2d");
        var myChartCA = new Chart(contextCA, {
        type: "bar",
        data: {
            labels: ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"],
            datasets: [
            {
                label: "Nombre de ventes par mois",
                data: [73200, 93900, 108600, 138000, 119700, 110100, 119700, 99300, 88200, 157200, 138000, 199800],
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

        const chartHeuresVentes = document.querySelector(".chartHeure");
        var contextHeuresVentes = chartHeuresVentes.getContext("2d");
        var myChartHeuresVentes = new Chart(contextHeuresVentes, {
        type: "bar",
        data: {
            labels: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23],
            datasets: [
            {
                label: "CA réalisé par Heure",
                data: [31500,18300,9000,6000,7500,11700,22200,31500,51900,64500,80700,96600,102900,87000,90900,78300,85800,88800,92400,99600,94800,86700,63300,43800],
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
    }

    else if (idProduit === "8") {
        document.getElementById("nom").value = "Bose SoundSport Headphones";
        document.getElementById("link").value = "bose_soundsport_headphones";
        document.getElementById("imgProduit").src = "assets/bose.jpg";
        document.getElementById("pu").value = 99,99;
        document.getElementById("quantite").value = 13457;
        document.getElementById("ca").value = 1345565,43;
        document.getElementById("cap").value = "3,90%";
        document.getElementById("description").value = "Résistant à la transpiration, le Bose SoundSport Wireless est un casque Bluetooth intra-auriculaire destiné aux sportifs. Il est doté de la fonction NFC.";
        
        const chartCAP = document.querySelector(".chartCAP");
        var contextCAP = chartCAP.getContext("2d");
        var myChartCAP = new Chart(contextCAP, {
        type: "doughnut",
        data: {
            labels: ["CA réalisé par ce produit", "CA Autres Produits"],
            datasets: [
            {
                label: "% du CA",
                data: [3.90, 96.10],
                backgroundColor: [
                    "rgba(255, 0, 255, 0.5)",
                    "rgba(99, 255, 132, 0.5)",
                ],
            },
            ],
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
        }
        });

        const chartCA= document.querySelector(".chartCA");
        var contextCA = chartCA.getContext("2d");
        var myChartCA = new Chart(contextCA, {
        type: "bar",
        data: {
            labels: ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"],
            datasets: [
            {
                label: "Nombre de ventes par mois",
                data: [66193.38, 84091.59, 119788.02, 128687.13, 117588.24, 98290.17, 105989.4, 88091.19, 82791.72, 146485.35, 125187.48, 182381.76],
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

        const chartHeuresVentes = document.querySelector(".chartHeure");
        var contextHeuresVentes = chartHeuresVentes.getContext("2d");
        var myChartHeuresVentes = new Chart(contextHeuresVentes, {
        type: "bar",
        data: {
            labels: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23],
            datasets: [
            {
                label: "CA réalisé par Heure",
                data: [28797.12,15598.44,8099.19,6099.39,6199.38,8699.13,18098.19,26497.35,44495.55,64793.52,82191.78,89891.01,91590.84,85191.48,78592.14,75192.48,74092.59,82091.79,90990.9,89191.08,86491.35,81891.81,64893.51,45895.41],
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
    }

    else if (idProduit === "10") {
        document.getElementById("nom").value = "Google Phone";
        document.getElementById("link").value = "google_phone";
        document.getElementById("imgProduit").src = "assets/google.jpg";
        document.getElementById("pu").value = 600;
        document.getElementById("quantite").value = 5532;
        document.getElementById("ca").value = 3319200;
        document.getElementById("cap").value = "9,62%";
        document.getElementById("description").value = "RLe Pixel 6 Pro dispose d'un écran OLED LTPO de 6,7 pouces de définition QHD+ (3120 1440 px) avec un taux de rafraichissement de 120 Hz.";
        
        const chartCAP = document.querySelector(".chartCAP");
        var contextCAP = chartCAP.getContext("2d");
        var myChartCAP = new Chart(contextCAP, {
        type: "doughnut",
        data: {
            labels: ["CA réalisé par ce produit", "CA Autres Produits"],
            datasets: [
            {
                label: "% du CA",
                data: [9.62, 90.38],
                backgroundColor: [
                    "rgba(255, 0, 255, 0.5)",
                    "rgba(99, 255, 132, 0.5)",
                ],
            },
            ],
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
        }
        });

        const chartCA= document.querySelector(".chartCA");
        var contextCA = chartCA.getContext("2d");
        var myChartCA = new Chart(contextCA, {
        type: "bar",
        data: {
            labels: ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"],
            datasets: [
            {
                label: "Nombre de ventes par mois",
                data: [191400, 228600, 277800, 348000, 288000, 234600, 246600, 216600, 204600, 358200, 295800, 429000],
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

        const chartHeuresVentes = document.querySelector(".chartHeure");
        var contextHeuresVentes = chartHeuresVentes.getContext("2d");
        var myChartHeuresVentes = new Chart(contextHeuresVentes, {
        type: "bar",
        data: {
            labels: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23],
            datasets: [
            {
                label: "CA réalisé par Heure",
                data: [69600,50400,21600,13200,13800,25200,44400,67800,120600,158400,192000,225000,220800,211800,187800,187800,180000,188400,235800,232800,201600,189000,165000,116400
                ],
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
    }

    else if (idProduit === "11") {
        document.getElementById("nom").value = "iphone";
        document.getElementById("link").value = "iphone";
        document.getElementById("imgProduit").src = "assets/iphone.jpg";
        document.getElementById("pu").value = 700;
        document.getElementById("quantite").value = 6849;
        document.getElementById("ca").value = 4794300;
        document.getElementById("cap").value = "13,90%";
        document.getElementById("description").value = "C'est quoi, un iPhone ? L'iPhone est une gamme de smartphones à écran tactile créée par l'entreprise multinationale Apple, dont le siège est basé aux États-Unis. ";
        
        const chartCAP = document.querySelector(".chartCAP");
        var contextCAP = chartCAP.getContext("2d");
        var myChartCAP = new Chart(contextCAP, {
        type: "doughnut",
        data: {
            labels: ["CA réalisé par ce produit", "CA Autres Produits"],
            datasets: [
            {
                label: "% du CA",
                data: [13.90, 96.10],
                backgroundColor: [
                    "rgba(255, 0, 255, 0.5)",
                    "rgba(99, 255, 132, 0.5)",
                ],
            },
            ],
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
        }
        });

        const chartCA= document.querySelector(".chartCA");
        var contextCA = chartCA.getContext("2d");
        var myChartCA = new Chart(contextCA, {
        type: "bar",
        data: {
            labels: ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"],
            datasets: [
            {
                label: "Nombre de ventes par mois",
                data: [266700, 307300, 376600, 485100, 448000, 373100, 351400, 307300, 277900, 501200, 465500, 634200],
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

        const chartHeuresVentes = document.querySelector(".chartHeure");
        var contextHeuresVentes = chartHeuresVentes.getContext("2d");
        var myChartHeuresVentes = new Chart(contextHeuresVentes, {
        type: "bar",
        data: {
            labels: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23],
            datasets: [
            {
                label: "CA réalisé par Heure",
                data: [93800,67900,31500,15400,23800,35700,67900,99400,156800,219100,283500,341600,341600,276500,284200,266700,268800,282100,321300,325500,330400,75800,230300,154700],
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
    }

    else if (idProduit === "12") {
        document.getElementById("nom").value = "LG Dryer";
        document.getElementById("link").value = "lg_dryer";
        document.getElementById("imgProduit").src = "assets/dryer.jpg";
        document.getElementById("pu").value = 600;
        document.getElementById("quantite").value = 646;
        document.getElementById("ca").value = 387600;
        document.getElementById("cap").value = "1,12%";
        document.getElementById("description").value = "Économes en énergie et hautement performants, les sèche-linge proposés par la marque LG sont équipés d'un condenseur autonettoyant, pour une meilleure longévité.";
        
        const chartCAP = document.querySelector(".chartCAP");
        var contextCAP = chartCAP.getContext("2d");
        var myChartCAP = new Chart(contextCAP, {
        type: "doughnut",
        data: {
            labels: ["CA réalisé par ce produit", "CA Autres Produits"],
            datasets: [
            {
                label: "% du CA",
                data: [1.12, 98.88],
                backgroundColor: [
                    "rgba(255, 0, 255, 0.5)",
                    "rgba(99, 255, 132, 0.5)",
                ],
            },
            ],
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
        }
        });

        const chartCA= document.querySelector(".chartCA");
        var contextCA = chartCA.getContext("2d");
        var myChartCA = new Chart(contextCA, {
        type: "bar",
        data: {
            labels: ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"],
            datasets: [
            {
                label: "Nombre de ventes par mois",
                data: [23400, 22800, 29400, 46800, 45600, 25800, 33000, 27600, 18000, 30000, 33600, 51600],
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

        const chartHeuresVentes = document.querySelector(".chartHeure");
        var contextHeuresVentes = chartHeuresVentes.getContext("2d");
        var myChartHeuresVentes = new Chart(contextHeuresVentes, {
        type: "bar",
        data: {
            labels: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23],
            datasets: [
            {
                label: "CA réalisé par Heure",
                data: [11400,1200,600,2400,2400,3000,5400,6000,15600,20400,21000,24000,22800,27000,28800,24000,18600,22800,24600,24000,30000,18000,18000,15600],
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
    }

    else if (idProduit === "13") {
        document.getElementById("nom").value = "LG Washing Machine";
        document.getElementById("link").value = "lg_washing_machine";
        document.getElementById("imgProduit").src = "assets/wm.jpg";
        document.getElementById("pu").value = 600;
        document.getElementById("quantite").value = 646;
        document.getElementById("ca").value = 399600;
        document.getElementById("cap").value = "1,16%";
        document.getElementById("description").value = "Découvrez comment LG simplifie le lavage du linge grâce à une gamme de machines à laver alliant performances inégalées et respect absolu des textiles.";
        
        const chartCAP = document.querySelector(".chartCAP");
        var contextCAP = chartCAP.getContext("2d");
        var myChartCAP = new Chart(contextCAP, {
        type: "doughnut",
        data: {
            labels: ["CA réalisé par ce produit", "CA Autres Produits"],
            datasets: [
            {
                label: "% du CA",
                data: [1.12, 98.88],
                backgroundColor: [
                    "rgba(255, 0, 255, 0.5)",
                    "rgba(99, 255, 132, 0.5)",
                ],
            },
            ],
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
        }
        });

        const chartCA= document.querySelector(".chartCA");
        var contextCA = chartCA.getContext("2d");
        var myChartCA = new Chart(contextCA, {
        type: "bar",
        data: {
            labels: ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"],
            datasets: [
            {
                label: "Nombre de ventes par mois",
                data: [25200,24000,38400,36600,38400,33000,31200,28800,27600,36600,31800,48000],
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

        const chartHeuresVentes = document.querySelector(".chartHeure");
        var contextHeuresVentes = chartHeuresVentes.getContext("2d");
        var myChartHeuresVentes = new Chart(contextHeuresVentes, {
        type: "bar",
        data: {
            labels: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23],
            datasets: [
            {
                label: "CA réalisé par Heure",
                data: [6600,4800,1800,600,2400,3000,4200,6000,11400,21000,17400,22800,27600,30000,23400,24600,31800,21000,29400,33000,24000,28200,13800,10800],
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
    }

    else if (idProduit === "14") {
        document.getElementById("nom").value = "Lightning Charging Cable";
        document.getElementById("link").value = "lightning_charging_cable";
        document.getElementById("imgProduit").src = "assets/lightning.jfif";
        document.getElementById("pu").value = 14,95;
        document.getElementById("quantite").value = 23217;
        document.getElementById("ca").value = 347094,15;
        document.getElementById("cap").value = "1,01%";
        document.getElementById("description").value = "Lightning est un connecteur à huit broches produit par Apple depuis 2012. Il remplace sur tous les nouveaux produits le connecteur à 30 broches introduit en 2003 avec l'iPod de troisième génération.";
        
        const chartCAP = document.querySelector(".chartCAP");
        var contextCAP = chartCAP.getContext("2d");
        var myChartCAP = new Chart(contextCAP, {
        type: "doughnut",
        data: {
            labels: ["CA réalisé par ce produit", "CA Autres Produits"],
            datasets: [
            {
                label: "% du CA",
                data: [1.01, 98.99],
                backgroundColor: [
                    "rgba(255, 0, 255, 0.5)",
                    "rgba(99, 255, 132, 0.5)",
                ],
            },
            ],
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
        }
        });

        const chartCA= document.querySelector(".chartCA");
        var contextCA = chartCA.getContext("2d");
        var myChartCA = new Chart(contextCA, {
        type: "bar",
        data: {
            labels: ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"],
            datasets: [
            {
                label: "Nombre de ventes par mois",
                data: [17267.25,22410.05,28001.35,35476.35,31021.25,25220.65,27074.45,21572.85,21408,38451.4,33039.5,46150.65],
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

        const chartHeuresVentes = document.querySelector(".chartHeure");
        var contextHeuresVentes = chartHeuresVentes.getContext("2d");
        var myChartHeuresVentes = new Chart(contextHeuresVentes, {
        type: "bar",
        data: {
            labels: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23],
            datasets: [
            {
                label: "CA réalisé par Heure",
                data: [6563.05, 4589.65, 2392, 1599.65, 1584.7, 2511.6, 4873.7, 7714.2, 11855.35, 15996.5, 20571.2, 23516.35, 23292.1, 22514.7, 19539.65, 19479.85, 19883.5, 20915.05, 22933.3, 23949.9, 22140.95, 20092.8, 17132.7, 11451.7],
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
    }

    else if (idProduit === "15") {
        document.getElementById("nom").value = "Macbook Pro Laptop";
        document.getElementById("link").value = "macbook_pro_laptop";
        document.getElementById("imgProduit").src = "assets/macbook.jpg";
        document.getElementById("pu").value = 1700;
        document.getElementById("quantite").value = 4728;
        document.getElementById("ca").value = 8037600;
        document.getElementById("cap").value = "23,30%";
        document.getElementById("description").value = "Le Mac Pro est un Mac extrême à tout point de vue. Doté de performances et de capacités d'extension et de configuration inédites, son système a été conçu pour que même les pros les plus intraitables puissent repousser leurs limites.";
        
        const chartCAP = document.querySelector(".chartCAP");
        var contextCAP = chartCAP.getContext("2d");
        var myChartCAP = new Chart(contextCAP, {
        type: "doughnut",
        data: {
            labels: ["CA réalisé par ce produit", "CA Autres Produits"],
            datasets: [
            {
                label: "% du CA",
                data: [23.30, 76.70],
                backgroundColor: [
                    "rgba(255, 0, 255, 0.5)",
                    "rgba(99, 255, 132, 0.5)",
                ],
            },
            ],
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
        }
        });

        const chartCA= document.querySelector(".chartCA");
        var contextCA = chartCA.getContext("2d");
        var myChartCA = new Chart(contextCA, {
        type: "bar",
        data: {
            labels: ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"],
            datasets: [
            {
                label: "Nombre de ventes par mois",
                data: [399500,469200,644300,771800,790500,605200,625600,508300,489600,892500,748000,1093100],
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

        const chartHeuresVentes = document.querySelector(".chartHeure");
        var contextHeuresVentes = chartHeuresVentes.getContext("2d");
        var myChartHeuresVentes = new Chart(contextHeuresVentes, {
        type: "bar",
        data: {
            labels: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23],
            datasets: [
            {
                label: "CA réalisé par Heure",
                data: [147900,115600,61200,35700,35700,51000,96900,197200,280500,394400,418200,544000,511700,484500,486200,460700,442000,547400,493000,574600,550800,498100,365500,244800],
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
    }

    else if (idProduit === "16") {
        document.getElementById("nom").value = "Thinkpad Laptop";
        document.getElementById("link").value = "thinkpad_laptop";
        document.getElementById("imgProduit").src = "assets/thinkpad.png";
        document.getElementById("pu").value = 999,99;
        document.getElementById("quantite").value = 4130;
        document.getElementById("ca").value = 4129958,7;
        document.getElementById("cap").value = "11,97%";
        document.getElementById("description").value = "ThinkPad est une gamme d'ordinateurs portables créée par Richard Sapper, à l'origine pour IBM et aujourd'hui commercialisée par Lenovo. Leur design sobre, de couleur noire est inspiré d'une boîte classique de cigares.";
        
        const chartCAP = document.querySelector(".chartCAP");
        var contextCAP = chartCAP.getContext("2d");
        var myChartCAP = new Chart(contextCAP, {
        type: "doughnut",
        data: {
            labels: ["CA réalisé par ce produit", "CA Autres Produits"],
            datasets: [
            {
                label: "% du CA",
                data: [11.97, 88.03],
                backgroundColor: [
                    "rgba(255, 0, 255, 0.5)",
                    "rgba(99, 255, 132, 0.5)",
                ],
            },
            ],
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
        }
        });

        const chartCA= document.querySelector(".chartCA");
        var contextCA = chartCA.getContext("2d");
        var myChartCA = new Chart(contextCA, {
        type: "bar",
        data: {
            labels: ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"],
            datasets: [
            {
                label: "Nombre de ventes par mois",
                data: [218997.81,274997.25,344996.55,389996.1,370996.29,313996.86,318996.81,273997.26,248997.51,460995.39,373996.26,538994.61],
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

        const chartHeuresVentes = document.querySelector(".chartHeure");
        var contextHeuresVentes = chartHeuresVentes.getContext("2d");
        var myChartHeuresVentes = new Chart(contextHeuresVentes, {
        type: "bar",
        data: {
            labels: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23],
            datasets: [
            {
                label: "CA réalisé par Heure",
                data: [87999.12, 53999.46, 28999.71, 17999.82, 17999.82, 19999.8, 47999.52, 89999.1, 154998.45, 195998.04, 235997.64, 258997.41, 279997.2, 250997.49, 264997.35, 231997.68, 221997.78, 276997.23, 236997.63, 291997.08, 254997.45, 234997.65, 191998.08, 180998.19],
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
    }

    
    else if (idProduit === "17") {
        document.getElementById("nom").value = "USB-C Charging Cable";
        document.getElementById("link").value = "usb_c_charging_cable";
        document.getElementById("imgProduit").src = "assets/usb.jpg";
        document.getElementById("pu").value = 11,95;
        document.getElementById("quantite").value = 23975;
        document.getElementById("ca").value = 286501,25;
        document.getElementById("cap").value = "0.83%";
        document.getElementById("description").value = "Les câbles USB-C avec toutes les fonctions sont des câbles actifs marqués électroniquement et contiennent une puce avec une fonction d'identification";
        
        const chartCAP = document.querySelector(".chartCAP");
        var contextCAP = chartCAP.getContext("2d");
        var myChartCAP = new Chart(contextCAP, {
        type: "doughnut",
        data: {
            labels: ["CA réalisé par ce produit", "CA Autres Produits"],
            datasets: [
            {
                label: "% du CA",
                data: [0.83, 99.17],
                backgroundColor: [
                    "rgba(255, 0, 255, 0.5)",
                    "rgba(99, 255, 132, 0.5)",
                ],
            },
            ],
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
        }
        });

        const chartCA= document.querySelector(".chartCA");
        var contextCA = chartCA.getContext("2d");
        var myChartCA = new Chart(contextCA, {
        type: "bar",
        data: {
            labels: ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"],
            datasets: [
            {
                label: "Nombre de ventes par mois",
                data: [15379.65, 19765.3, 23230.8, 27114.55, 24712.6, 20016.25, 22095.55, 17470.9, 19048.3, 31870.65, 26959.2, 38837.5],
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

        const chartHeuresVentes = document.querySelector(".chartHeure");
        var contextHeuresVentes = chartHeuresVentes.getContext("2d");
        var myChartHeuresVentes = new Chart(contextHeuresVentes, {
        type: "bar",
        data: {
            labels: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23],
            datasets: [
            {
                label: "CA réalisé par Heure",
                data: [6297.65, 3656.7, 2043.45, 1123.3, 1195, 2091.25, 4110.8, 6309.6, 9177.6, 13252.55, 17064.6, 20099.9, 19777.25, 18869.05, 16873.4, 15152.6, 16072.75, 15678.4, 19108.05, 19956.5, 18892.95, 16837.55, 13623, 9237.35],
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
    }
    
    else if (idProduit === "18") {
        document.getElementById("nom").value = "Vareebadd Phone";
        document.getElementById("link").value = "vareebadd_phone";
        document.getElementById("imgProduit").src = "assets/vareebadd.jpg";
        document.getElementById("pu").value = 400;
        document.getElementById("quantite").value = 2068;
        document.getElementById("ca").value = 827200;
        document.getElementById("cap").value = "2,40%";
        document.getElementById("description").value = "Un téléphone mobile, téléphone portable ou téléphone cellulaire est un appareil électronique de télécommunication, normalement portatif.";
        
        const chartCAP = document.querySelector(".chartCAP");
        var contextCAP = chartCAP.getContext("2d");
        var myChartCAP = new Chart(contextCAP, {
        type: "doughnut",
        data: {
            labels: ["CA réalisé par ce produit", "CA Autres Produits"],
            datasets: [
            {
                label: "% du CA",
                data: [2.40, 97.60],
                backgroundColor: [
                    "rgba(255, 0, 255, 0.5)",
                    "rgba(99, 255, 132, 0.5)",
                ],
            },
            ],
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
        }
        });

        const chartCA= document.querySelector(".chartCA");
        var contextCA = chartCA.getContext("2d");
        var myChartCA = new Chart(contextCA, {
        type: "bar",
        data: {
            labels: ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"],
            datasets: [
            {
                label: "Nombre de ventes par mois",
                data: [50400,51600,69600,88000,74000,62000,58400,57200,50400,81200,70800,113600],
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

        const chartHeuresVentes = document.querySelector(".chartHeure");
        var contextHeuresVentes = chartHeuresVentes.getContext("2d");
        var myChartHeuresVentes = new Chart(contextHeuresVentes, {
        type: "bar",
        data: {
            labels: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23],
            datasets: [
            {
                label: "CA réalisé par Heure",
                data: [22800,8000,4800,3600,4800,6400,11200,16000,32000,41200,39200,60800,51600,58400,55600,48800,43600,40800,54000,58000,55600,52400,34000,23600],
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
    }

    else if (idProduit === "19") {
        document.getElementById("nom").value = "Wired Headphones";
        document.getElementById("link").value = "wired_headphones";
        document.getElementById("imgProduit").src = "assets/headphones.jfif";
        document.getElementById("pu").value = 11,99;
        document.getElementById("quantite").value = 20557;
        document.getElementById("ca").value = 246478,43;
        document.getElementById("cap").value = "0,71%";
        document.getElementById("description").value = "Un casque audio est un dispositif qui se place contre les oreilles et sert à restituer des contenus sonores.";
        
        const chartCAP = document.querySelector(".chartCAP");
        var contextCAP = chartCAP.getContext("2d");
        var myChartCAP = new Chart(contextCAP, {
        type: "doughnut",
        data: {
            labels: ["CA réalisé par ce produit", "CA Autres Produits"],
            datasets: [
            {
                label: "% du CA",
                data: [0.71, 99.29],
                backgroundColor: [
                    "rgba(255, 0, 255, 0.5)",
                    "rgba(99, 255, 132, 0.5)",
                ],
            },
            ],
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
        }
        });

        const chartCA= document.querySelector(".chartCA");
        var contextCA = chartCA.getContext("2d");
        var myChartCA = new Chart(contextCA, {
        type: "bar",
        data: {
            labels: ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"],
            datasets: [
            {
                label: "Nombre de ventes par mois",
                data: [13009.15,15335.21,19951.36,24759.35,22493.24,17673.26,18764.35,15479.09,15598.99,27265.26,23188.66,32960.51],
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

        const chartHeuresVentes = document.querySelector(".chartHeure");
        var contextHeuresVentes = chartHeuresVentes.getContext("2d");
        var myChartHeuresVentes = new Chart(contextHeuresVentes, {
        type: "bar",
        data: {
            labels: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23],
            datasets: [
            {
                label: "CA réalisé par Heure",
                data: [5215.65, 2973.52, 1534.72, 1199, 1222.98, 1978.35, 3057.45, 5539.38, 8321.06, 11534.38, 14687.75, 16222.47, 16294.41, 16486.25, 15179.34, 13452.78, 14040.29, 14136.21, 16845.95, 16845.95, 15874.76, 13656.61, 11414.48, 8764.69],
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
    }
}

function toProbas() {
    window.localStorage.setItem("probasProduit",document.getElementById("link").value);
    location.href="probabilites.html";
}


 