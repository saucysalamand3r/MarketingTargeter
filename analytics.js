let ages = [];
for (i=0; i < localStorage; i++){
    ages[i] = JSON.parse(localStorage.getItem(localStorage.key(i))).age;
}

// Create Age Chart
var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['12-', '13-25', '26-38', '39-51', '52-64', '65+'],
        datasets: [{
            label: 'People',
            data: ages,
            backgroundColor: [
                'black'
            ],
            borderColor: [
                'black',
            ],
            borderWidth: 1
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