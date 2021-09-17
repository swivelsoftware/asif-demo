Highcharts.chart('container', {

  title: {
    text: 'Highcharts Sankey Diagram'
  },
  accessibility: {
    point: {
      valueDescriptionFormat: '{index}. {point.from} to {point.to}, {point.weight}.'
    }
  },
  series: [{
    keys: ['from', 'to', 'weight'],
    data: [
      ['Farm 1', 'Plot 1', 5],
      ['Farm 1', 'Plot 2', 1],
      ['Farm 1', 'Plot 3', 1],
      ['Farm 1', 'Plot 4', 1],
      ['Farm 2', 'Plot 1', 1],
      ['Farm 2', 'Plot 2', 5],
      ['Farm 2', 'Plot 4', 1],
      ['Farm 3', 'Plot 1', 1],
      ['Farm 3', 'Plot 2', 1],
      ['Farm 3', 'Plot 3', 5],
      ['Farm 3', 'Plot 4', 1],
      ['Farm 4', 'Plot 1', 1],
      ['Farm 4', 'Plot 2', 1],
      ['Farm 4', 'Plot 3', 1],
      ['Farm 4', 'Plot 4', 5],
      ['Plot 1', 'Gin 1', 2],
      ['Plot 1', 'Gin 2', 1],
      ['Plot 1', 'Gin 3', 1],
      ['Plot 1', 'Gin 4', 3],
      ['Plot 2', 'Gin 1', 1],
      ['Plot 2', 'Gin 2', 3],
      ['Plot 2', 'Gin 5', 3],
      ['Plot 2', 'Gin 3', 3],
      ['Plot 2', 'Gin 4', 1],
      ['Plot 3', 'Gin 2', 1],
      ['Plot 3', 'Gin 3', 3],
      ['Plot 3', 'Gin 4', 1],
      ['Plot 4', 'Gin 1', 1],
      ['Plot 4', 'Gin 2', 1],
      ['Plot 4', 'Gin 3', 2],
      ['Plot 4', 'Gin 4', 7],
      ['Gin 4', 'USA', 5],
      ['Gin 4', 'EU', 1],
      ['Gin 4', 'India', 3],
      ['Gin 1', 'USA', 5],
      ['Gin 1', 'EU', 1],
      ['Gin 1', 'India', 3],
      ['Gin 2', 'USA', 5],
      ['Gin 2', 'EU', 1],
      ['Gin 2', 'India', 3],
      ['Gin 5', 'USA', 5],
      ['Gin 5', 'EU', 1],
      ['Gin 5', 'India', 3],
      ['Gin 3', 'USA', 5],
      ['Gin 3', 'EU', 1],
      ['Gin 3', 'India', 3]
    ],
    type: 'sankey',
    name: 'Sankey demo series'
  }]

});