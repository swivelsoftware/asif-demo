Highcharts.chart('container', {
  series: [{
    type: "treemap",
    layoutAlgorithm: 'stripes',
    alternateStartingDirection: true,
    levels: [{
      level: 1,
      layoutAlgorithm: 'sliceAndDice',
      dataLabels: {
        enabled: true,
        align: 'left',
        verticalAlign: 'top',
        style: {
          fontSize: '15px',
          fontWeight: 'bold'
        }
      }
    }],
    data: [{
      id: 'A',
      name: 'Apples',
      color: "#EC2500"
    }, {
      id: 'B',
      name: 'Farmers',
      color: "#ECE100"
    }, {
      id: 'O',
      name: 'Oranges',
      color: '#EC9800'
    }, {
      name: 'Plot 2',
      parent: 'A',
      value: 5
    }, {
      name: 'Plot 1',
      parent: 'A',
      value: 3
    }, {
      name: 'Plot 3',
      parent: 'A',
      value: 4
    }, {
      name: 'Plot 2',
      parent: 'B',
      value: 4
    }, {
      name: 'Plot 1',
      parent: 'B',
      value: 10
    }, {
      name: 'Plot 3',
      parent: 'B',
      value: 1
    }, {
      name: 'Plot 2',
      parent: 'O',
      value: 1
    }, {
      name: 'Plot 1',
      parent: 'O',
      value: 3
    }, {
      name: 'Plot 3',
      parent: 'O',
      value: 3
    }, {
      name: 'Mill',
      parent: 'Kiwi',
      value: 2,
      color: '#9EDE00'
    }]
  }],
  title: {
    text: 'Contribution of costs'
  }
});