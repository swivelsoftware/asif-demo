$( ".chart_section" ).each(function() {
	var chart = $(this).find('ul');
	var chartBaseline = chart.data("baseline");
		console.log(chartBaseline);
	
	$(chart).find('li').each(function() {
		var bar = $(this);
		var barShape = $(this).find('i');
		var barData = bar.data("value");
		var barTotal = (Math.round((barData / chartBaseline) * 100) + '%');
		
		barShape.css({
      //"height": barTotal,
			"flex": '0 0 ' + barTotal,
      //"width": barTotal
    })
		console.log(barTotal);
		//bar.addClass(barData);
		//$(this).find('li').addClass('test');
	});
});

//console.log($('ul li:first-of-type').data("value"))