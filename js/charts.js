	//this is the line chart//////////////////////////////////////////////////////////////////////////////////////////////////
	var lineChart = document.getElementById('webTraffic').getContext('2d');
		var webTraffic = new Chart(lineChart, {
			type: 'line',
			data: {
				labels: ['16-22', '23-29', '30-5', '6-12', '13-19', '20-26', '27-3', '4-10', '11-17', '18-24', '25-31'],
				datasets: [{
					label: 'Hourly',
					data: [
						300,
						1000,
						600,
						1200, 
						1600,
						1100, 
						1400,
						1300, 
						600,
						800, 
						1300
					],
					backgroundColor: [
						'rgba(226, 227, 246, 0.7)',
						'rgba(226, 227, 246, 0.7)',
						'rgba(226, 227, 246, 0.7)',
						'rgba(226, 227, 246, 0.7)',
						'rgba(226, 227, 246, 0.7)',
						'rgba(226, 227, 246, 0.7)',
						'rgba(226, 227, 246, 0.7)',
						'rgba(226, 227, 246, 0.7)',
						'rgba(226, 227, 246, 0.7)',
						'rgba(226, 227, 246, 0.7)',
						'rgba(226, 227, 246, 0.7)'
					],

					pointBorderColor: '#7377bf',
					pointBackgroundColor: '#fff',
					borderWidth: 1,
					pointBorderWidth: 10,
					pointHoverBorderWidth: 10,
					borderColor: '#a9ace5',
					lineTension: 0
				
			},
		{
				label: 'Daily',
				data: [
						500,
						1200,
						800,
						1400, 
						1800,
						1300, 
						1600,
						1500, 
						800,
						1000, 
						1500
					],
					hidden:true,
					backgroundColor: [
						'rgba(0, 179, 0, 0.7)',
						'rgba(0, 179, 0, 0.7)',
						'rgba(0, 179, 0, 0.7)',
						'rgba(0, 179, 0, 0.7)',
						'rgba(0, 179, 0, 0.7)',
						'rgba(0, 179, 0, 0.7)',
						'rgba(0, 179, 0, 0.7)',
						'rgba(0, 179, 0, 0.7)',
						'rgba(0, 179, 0, 0.7)',
						'rgba(0, 179, 0, 0.7)',
						'rgba(0, 179, 0, 0.7)',
					],
					pointBorderColor: '#7377bf',
					pointBackgroundColor: '#fff',
					borderWidth: 1,
					pointBorderWidth: 10,
					pointHoverBorderWidth: 10,
					borderColor: '#a9ace5',
					lineTension: 0
		},
		{
				label: 'Weekly',
				data: [
						2500,
						1200,
						1800,
						1400, 
						2100,
						700, 
						1600,
						200, 
						800,
						1000, 
						1500
					],
					hidden:true,
					backgroundColor: [
						'rgba(255, 255, 153, 0.7)',
						'rgba(255, 255, 153, 0.7)',
						'rgba(255, 255, 153, 0.7)',
						'rgba(255, 255, 153, 0.7)',
						'rgba(255, 255, 153, 0.7)',
						'rgba(255, 255, 153, 0.7)',
						'rgba(255, 255, 153, 0.7)',
						'rgba(255, 255, 153, 0.7)',
						'rgba(255, 255, 153, 0.7)',
						'rgba(255, 255, 153, 0.7)',
						'rgba(255, 255, 153, 0.7)'
					],
					pointBorderColor: '#7377bf',
					pointBackgroundColor: '#fff',
					borderWidth: 1,
					pointBorderWidth: 10,
					pointHoverBorderWidth: 10,
					borderColor: '#a9ace5',
					lineTension: 0
			
		},
		{
				label: 'Monthly',
				data: [
						2000,
						2400,
						1700,
						1200, 
						1500,
						1000, 
						2350,
						1800, 
						1475,
						975, 
						2300
					],
					hidden:true,
					backgroundColor: [
						'rgba(255, 102, 0, 0.7)',
						'rgba(255, 102, 0, 0.7)',
						'rgba(255, 102, 0, 0.7)',
						'rgba(255, 102, 0, 0.7)',
						'rgba(255, 102, 0, 0.7)',
						'rgba(255, 102, 0, 0.7)',
						'rgba(255, 102, 0, 0.7)',
						'rgba(255, 102, 0, 0.7)',
						'rgba(255, 102, 0, 0.7)',
						'rgba(255, 102, 0, 0.7)',
						'rgba(255, 102, 0, 0.7)'
					],
					pointBorderColor: '#7377bf',
					pointBackgroundColor: '#fff',
					borderWidth: 1,
					pointBorderWidth: 10,
					pointHoverBorderWidth: 10,
					borderColor: '#a9ace5',
					lineTension: 0

				}
			]
		},
/////////////////////////////////////////////////////////////////////////////			
			options: {
				maintainAspectRatio: false,
				responsive:true,
				aspectRatio:1,
				scales: {
					yAxes: [{
						ticks: {
							beginAtZero: true
		                }
            	}]
	        },

			legend: {
				display: true
			}
   	 }
});
//end line chart/////////////////////////////////////////////////////////////////////////////////////////////////////////////

//this is the bar chart//////////////////////////////////////////////////////////////////////////////////////////////////
var barChart = document.getElementById('dailyTraffic').getContext('2d');
var dailyTraffic = new Chart(barChart, {
	type: 'bar',
	data: {
		labels: ['S', 'M', 'T', 'W', 'Th', 'F', 'S'],
		datasets: [{
			data: [
				50, 
				100, 
				175, 
				125, 
				225,
				190,
				75
			],
			backgroundColor: [
				'rgba(115, 119, 191)',
				'rgba(115, 119, 191)',
				'rgba(115, 119, 191)',
				'rgba(115, 119, 191)',
				'rgba(115, 119, 191)',
				'rgba(115, 119, 191)',
				'rgba(115, 119, 191)'
			],
			borderColor: '#a9ace5'
		}]
		
	},
	options: {
		maintainAspectRatio: false,
		responsive:true,
		aspectRatio:1,
		scales: {
					yAxes: [{
						ticks: {
							beginAtZero: true
		                }
            	}]
	        },
		legend:{
			display: false
		}
	}
	
});
//end bar chart/////////////////////////////////////////////////////////////////////////////////////////////////////////////

//this is the pie chart//////////////////////////////////////////////////////////////////////////////////////////////////
var pieChart = document.getElementById('mobileTraffic').getContext('2d');
var mobileTraffic = new Chart(pieChart, {
	type: 'doughnut',
	data: {
		labels: ['Phone', 'Tablets', 'Desktop'],
		datasets: [{
			label: 'Mobile Users',
			data: [
				250, 
				200, 
				150
			],
			backgroundColor: [
				'rgba(115, 115, 191)',
				'rgba(129, 201, 143)',
				'rgba(116, 177, 191)',
			]
		}]
		
	},
	options: {
		maintainAspectRatio: false,
		responsive:true,
		aspectRatio:1,
		title:{
			display: true,
			text: 'Daily Traffic',
			fontSize:25,
		},

		legend:{
			position: 'right'
		}
	}
	
});
//end pie chart/////////////////////////////////////////////////////////////////////////////////////////////////////////////