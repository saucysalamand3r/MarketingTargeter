const ageChart = document.getElementById('ageChart').getContext('2d');

var ageChartData = new CharacterData(ageChart, {
    type: 'bar',
    data: {
        labels: [Test, Test2, Test3],
        datasets: [{
            label: 'Pls work',
            data: [12, 43, 50],
            backgroundColor: 'black',
            borderColor: 'black',
            borderWidth: 1,
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});