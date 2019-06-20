	//this is the line chart//////////////////////////////////////////////////////////////////////////////////////////////////
	var lineChart = document.getElementById('webTraffic').getContext('2d');
		var webTraffic = new Chart(lineChart, {
			type: 'line',
			data: {
				labels: ['16-22', '23-29', '30-5', '6-12', '13-19', '20-26', '27-3', '4-10', '11-17', '18-24', '25-31'],
				datasets: [{
					data: [
						2500, 
						2000, 
						1500, 
						1000, 
						500
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
					borderColor: '#a9ace5'
				}]
				
			},
			options: {
				legend:{
					display: false
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
				250, 
				200, 
				150, 
				100, 
				50
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
		title:{
			display: true,
			text: 'Daily Traffic',
			fontSize:25,
		},
		legend:{
			display: false
		}
	}
	
});
//end pie chart/////////////////////////////////////////////////////////////////////////////////////////////////////////////