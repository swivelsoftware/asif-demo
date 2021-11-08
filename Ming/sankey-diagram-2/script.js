Highcharts.chart('container', {

  title: {
    text: 'Origin to Destination Lane Mapping'
  },
  accessibility: {
    point: {
      valueDescriptionFormat: '{index}. {point.from} to {point.to}, {point.weight}.'
    }
  },
  series: [{
    keys: ['from', 'to', 'weight'],
    data: [
      ['DE', ' DE', 1],
      ['FR', ' FR', 5],
      ['UK', ' IT', 3],
      ['IT', ' CZ', 1],
      ['CZ', ' UK', 1],
      ['CZ', ' IT', 5],
      ['CZ', ' CZ', 1]
    ],
    type: 'sankey',
    name: 'Sankey demo series'
  }]

});