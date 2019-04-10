var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['12-', '13-25', '26-38', '39-51', '52-64', '65+'],
        datasets: [{
            label: 'People',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'black',
                'black',
                'black',
                'black',
                'black',
                'black'
            ],
            borderColor: [
                'black',
                'black',
                'black',
                'black',
                'black',
                'black'
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