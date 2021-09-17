Highcharts.chart('container', {
  accessibility: {
    point: {
      descriptionFormatter: function (point) {
        var intersection = point.sets.join(', '),
          name = point.name,
          ix = point.index + 1,
          val = point.value;
        return ix + '. Intersection: ' + intersection + '. ' +
          (point.sets.length > 1 ? name + '. ' : '') + 'Value ' + val + '.';
      }
    }
  },
  series: [{
    type: 'venn',
    name: 'The Unattainable Triangle',
    data: [{
      sets: ['High Quality 25%'],
      value: 2
    }, {
      sets: ['Med Quality 25%'],
      value: 2
    }, {
      sets: ['Low Quality 22%'],
      value: 2
    }, {
      sets: ['High Quality 25%', 'Med Quality 25%'],
      value: 1,
      name: 'Border Line 15%'
    }, {
      sets: ['High Quality 25%', 'Low Quality 22%'],
      value: 1,
      name: 'Border Line 7%'
    }, {
      sets: ['Med Quality 25%', 'Low Quality 22%'],
      value: 1,
      name: 'Border Line 6%'
    }, {
      sets: ['Med Quality 25%', 'Low Quality 22%', 'High Quality 25%'],
      value: 1,
      name: 'Total Yield 84%'
    }]
  }],
  title: {
    text: 'Cotton Bail Quality accross Harvest'
  }
});