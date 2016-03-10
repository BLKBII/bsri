




$(document).ready(function() {

//on load fade out the loading screen gif.
 $(".se-pre-con").fadeOut("slow"); // Loading screen

  //FIRST BUILD DATA VIEWS FROM INITIAL DATA


//All country names in string form (e.g. New Zealand has a space)
  var countryListString = ["Argentina", "Australia", "Austria", "Belgium", "Brazil", "Canada", "Chile", "China", "Colombia", "Croatia", "Czech Republic", "Denmark", "Egypt", "Finland", "France", "Germany", "Greece", "Hungary", "India", "Indonesia", "Ireland", "Israel", "Italy", "Japan", "Malaysia", "Mexico", "Netherlands", "New Zealand", "Nigeria", "Norway", "Peru", "Philippines", "Poland", "Portugal", "Russia", "Singapore", "Slovakia", "Slovenia", "South Africa", "South Korea", "Spain", "Sweden", "Switzerland", "Taiwan", "Thailand", "Turkey", "Ukraine", "U.K.", "U.S.", "Venezuela"];
//List of the components
  var categoryList = ["Fiscal Space", "Willingness to Pay", "External Finance", "Financial Sector Health", "Overall Score"];


//All country names in variable for (no space)
  var countryList = [];
  $.each(overall, function(key, arrValue) {
    countryList.push(key);
  });
//All countries two letter code (for map)  
  var countryCode = [];
  $.each(newData, function(i, arrValue) {
    countryCode.push(arrValue.code);
  });
  
//CREATE DATA FOR MAP
    var newArr = [];
  // For each country get the last (latest) overall value for each country and put into new array
  $.each(overall, function(key, arrValue) {
    newArr.push(arrValue[arrValue.length - 1]);
  });
  //then rank it
  var sorted = newArr.slice().sort(function(a, b) {
    return b - a;
  });
  var ranks = newArr.slice().map(function(v) {
    return sorted.indexOf(v) + 1;
  });

  $.each(mapData, function(i, arrValue) {
    //Get the mapData and add the latest overall value
       arrValue.name = countryListString[i]; //add in correct name as string
    arrValue.y = newArr[i];

    //Then set the correct colour according to the quintile rank
    if (ranks[i] < 11) {
      arrValue.color = 'rgb(135,185,38)';
    } else {
      if (ranks[i] < 21) {
        arrValue.color = 'rgb(0,157,61)';
      } else {
        if (ranks[i] < 31) {
          arrValue.color = 'rgb(41,101,72)';
        } else {
          if (ranks[i] < 41) {
            arrValue.color = 'rgb(96,35,118)';
          } else {
            arrValue.color = 'rgb(50,33,115)';
          }
        }
      }
    }
  });
  
//FUNCTION TO CREATE DATA FOR VERTICAL COMPONENT BAR CHART
function barFunction(dataSet){
  var newArr = [];
  // For each get the last (latest) value for chosen component (dataSet) for each country and put into new array
  $.each(dataSet, function(key, arrValue) {
    newArr.push(arrValue[arrValue.length - 1]);
  });
  //get rank
  var sorted = newArr.slice().sort(function(a, b) {
    return b - a;
  });
  var ranks = newArr.slice().map(function(v) {
    return sorted.indexOf(v) + 1;
  });

   $.each(newData, function(i, arrValue) {
  //Copy the right data into the dataset for the vertical bar chart (newData) 
    arrValue.name = countryListString[i]; //add in correct name as string
    arrValue.y = newArr[i]; //add in latest value
  
    //Then set the correct colour according to the quintile rank 
    if (ranks[i] < 11) {
       arrValue.color = 'rgb(135,185,38)';
    } else {
      if (ranks[i] < 21) {
        arrValue.color = 'rgb(0,157,61)';
      } else {
        if (ranks[i] < 31) {
          arrValue.color = 'rgb(41,101,72)';
        } else {
          if (ranks[i] < 41) {
            arrValue.color = 'rgb(96,35,118)';
          } else {
            arrValue.color = 'rgb(50,33,115)';
          }
        }
      }
    }
  });
  //sort the dataset so that it is sorted descending when charted
   newData.sort(function(a, b) {
    return parseFloat(b.y) - parseFloat(a.y);
  });
}

barFunction(overall); //call the function to run the chart for the first time

// FOR THE COUNRY DETAIL SECTION CONVERT RAW SCORES INTO CONTRIBUTION
  var fiscalSpaceContribution = []; // array to hold contribution time series
  $.each(fiscalSpace, function(key, arrValue) {
    var oldArray = arrValue.slice(); // take a copy of the original value
    $.each(arrValue, function(i, val) {
      arrValue[i] = val * 0.4; // multiply the original value by the weighting to get he contribution
    });
    fiscalSpace[key] = oldArray; //put the original value back in the original array
    fiscalSpaceContribution[key] = arrValue; //put the contribution value into the new array
  });

  var willingnessContribution = [];
  $.each(willingness, function(key, arrValue) {
    var oldArray = arrValue.slice();
    $.each(arrValue, function(i, val) {
      arrValue[i] = val * 0.3;
    });
    willingness[key] = oldArray;
    willingnessContribution[key] = arrValue;
  });

  var externalContribution = [];
  $.each(external, function(key, arrValue) {
    var oldArray = arrValue.slice();
    $.each(arrValue, function(i, val) {
      arrValue[i] = val * 0.2;
    });
    external[key] = oldArray;
    externalContribution[key] = arrValue;
  });

  var financialHealthContribution = [];
  $.each(financialHealth, function(key, arrValue) {
    var oldArray = arrValue.slice();
    $.each(arrValue, function(i, val) {
      arrValue[i] = val * 0.1;
    });
    financialHealth[key] = oldArray;
    financialHealthContribution[key] = arrValue;
  });

  // WORK OUT HISTORICAL RANKINGS FOR COMPARISON CHART
  var rankArr = [];
  //just strip out values from the 'overall' data input
  $.each(overall, function(key, arrValue) {
    rankArr.push(arrValue);
  });

  //transpose that array so you have monthly comparison arrays that can then be ranked
  var newRankArray = rankArr[0].map(function(col, i) {
    return rankArr.map(function(row) {
      return row[i];
    });
  });

  //get monthly ranks
  var newRankArray2 = [];
  $.each(newRankArray, function(i, value) {
    var sorted = value.slice().sort(function(a, b) {
      return b - a;
    });
    var ranks = value.slice().map(function(v) {
      if (v) {
        return sorted.indexOf(v) + 1;
      } else {
        return null;
      }
    });
    newRankArray2.push(ranks);
  });

  //transpose back again to create time series ranks for all countries
  var newRankArray3 = newRankArray2[0].map(function(col, i) {
    return newRankArray2.map(function(row) {
      return row[i];
    });
  });
  //Add back in country keys
  var newRankArray4 = [];
  for (i = 0; i < newRankArray3.length; i++) {
    newRankArray4[countryList[i]] = newRankArray3[i];
  }


  //POPULATE THE COUNTRY DROPDOWNS
  var dropdown = document.getElementById("selectCountry");
  for (var i = 0; i < countryListString.length; ++i) {
    dropdown[dropdown.length] = new Option(countryListString[i], countryListString[i]);
  }

  dropdown = document.getElementById("selectCountry1");
  for (i = 0; i < countryListString.length; ++i) {
    dropdown[dropdown.length] = new Option(countryListString[i], countryListString[i]);
  }

  dropdown = document.getElementById("selectCountry2");
  for (i = 0; i < countryListString.length; ++i) {
    dropdown[dropdown.length] = new Option(countryListString[i], countryListString[i]);
  }

//POPULATE THE COMPONENT DROPDOWN
 dropdown = document.getElementById("selectComponent");
for ( i = 0; i < categoryList.length; ++i) { dropdown[dropdown.length] = new Option(categoryList[i], categoryList[i]);}
//Choose Overall Score as the default when loaded	
$("#selectComponent").val("Overall Score");

  //SET UP COMPARISON SELECTIONS 
  var s1 = "Argentina"; // Initial starting selection for country 1
  var s2 = "Australia"; //Intitial starting selection for country 2
  var columnData1 = []; //Array to hold comparison chart data
  var columnData2 = []; //Array to hold comparison chart data
  //populate with the latest data for each component
  columnData1.push(fiscalSpace[s1][fiscalSpace[s1].length - 1], willingness[s1][willingness[s1].length - 1], external[s1][external[s1].length - 1], financialHealth[s1][financialHealth[s1].length - 1], overall[s1][overall[s1].length - 1]);
  columnData2.push(fiscalSpace[s2][fiscalSpace[s2].length - 1], willingness[s2][willingness[s2].length - 1], external[s1][external[s2].length - 1], financialHealth[s2][financialHealth[s2].length - 1], overall[s2][overall[s2].length - 1]);
  var rankingData1 = newRankArray4[s1]; //set up initial ranking time series for country 1
  var rankingData2 = newRankArray4[s2]; //set up initial ranking time series for country 2

  //FIRST VERTICAL BAR CHART SHOWING ALL COUNTRIES

  $('#barChart').highcharts({
    chart: {
      backgroundColor: 'transparent',
      type: 'bar'
    },
    title: {
      text: ''
    },
    legend: {
      enabled: false
    },
    credits: {
      enabled: false,
    },
    xAxis: {
      lineWidth: 0,
      tickWidth: 0,
      labels: {
        enabled: false
      },
      type: 'category',
      title: {
        text: null
      },
      plotLines: [{
        color: 'rgb(220,220,220)',
        value: '9.5',
        width: 1
      }, {
        color: 'rgb(220,220,220)',
        value: '19.5',
        width: 1
      }, {
        color: 'rgb(220,220,220)',
        value: '29.5',
        width: 1
      }, {
        color: 'rgb(208,208,208)',
        value: '39.5',
        width: 1
      }],
    },
    yAxis: {
      labels: {
        style: {
          fontSize: '11px',
          fontFamily: 'AkkuratProRegular, Arial, Sans-Serif',
          color: 'rgb(79, 78, 80)',
          overflow: 'justify'
        }
      },
      gridLineColor: 'transparent',
      startOnTick: false,
      min: -2.5,
      max: 2.5,
      endOnTick: false,
      title: {
        text: 'BSRI SCORE',
        align: 'middle',
        style: {
          fontSize: '12px',
          fontFamily: 'AkkuratProRegular, Arial, Sans-Serif',
          color: 'rgb(79, 78, 80)'
        }
      }
    },
    tooltip: {
      style: {
        fontSize: '13.5px',
        fontFamily: 'AkkuratProRegular, Arial, Sans-Serif',
        color: 'rgb(79, 78, 80)'
      },
      formatter: function() {
        return '<b>' + this.key + '</b>' + " " + (this.x + 1) + " of 50";
      }
    },
    plotOptions: {
      series: {
        states: {
          hover: {
            brightness: 0.35
          }
        }
      },

      bar: {
        dataLabels: {
          style: {
            fontSize: '10.5px',
            fontWeight: 'normal',
            fontFamily: 'AkkuratProRegular, Arial, Sans-Serif',
            color: 'rgb(79, 78, 80)'
          },
          crop: false,
          overflow: 'none',
          enabled: true,
          allowOverlap: true,
          formatter: function() {
            return this.point.name;
          }
        },

        cursor: 'pointer',
       				point:{events:{click:function(){
					
								var drilldown = this.name;
		 						   $('html, body').animate({
        scrollTop: $("#headerCountryDetail").offset().top -70 //on click scroll to the country detail section
    }, 1000);				
      $("#selectCountry").val(drilldown).change(); // change the country selected in the country detail section
									
													}												
                          }		
                      }			
      }

    },

    series: [{
      name: 'BSRI',
      data: newData,
      color: newData
    }]
  });

//CONTRIBUTION TO BSRI OVERALL SCORE STACKED COLUMN CHART TIME SERIES

  $('#tsChart').highcharts({
    chart: {
      type: 'column'
    },
    credits: {
      enabled: false,
    },
    title: {
      text: ''
    },
    xAxis: {
      labels: {
        style: {
          fontSize: '11px',
          fontFamily: 'AkkuratProRegular, Arial, Sans-Serif',
          color: 'rgb(79, 78, 80)',
          overflow: 'justify'
        }
      },
      categories: rankingQuarters,
    },
    yAxis: {
      labels: {
        style: {
          fontSize: '11px',
          fontFamily: 'AkkuratProRegular, Arial, Sans-Serif',
          color: 'rgb(79, 78, 80)',
          overflow: 'justify'
        }
      },

      title: {
        text: 'BSRI SCORE',
        style: {
          fontSize: '13.5px',
          fontFamily: 'AkkuratProRegular, Arial, Sans-Serif',
          color: 'rgb(79, 78, 80)'
        }
      },
      stackLabels: {
        enabled: false
      }
    },
    legend: {
      enabled: true,

      itemHoverStyle: {
        color: 'rgb(79, 78, 80)',
        cursor: 'default'
      },
      borderWidth: 0,
      itemStyle: {

        cursor: 'default',
        fontSize: '14px',
        fontWeight: 'normal',
        fontFamily: 'AkkuratProRegular, Arial, Sans-Serif',
        color: 'rgb(79, 78, 80)'
      },
    },
    tooltip: {
       style: {
        fontSize: '13.5px',
        fontFamily: 'AkkuratProRegular, Arial, Sans-Serif',
        color: 'rgb(79, 78, 80)'
      },
      headerFormat: '<b>{point.x}</b><br/>',
      pointFormat: 'Overall: {point.y:.2f}'
    },
    plotOptions: {
      column: {
        stacking: 'normal',
        pointPadding: 0.2,
        size: '95%',
        borderWidth: 0,
        events: {
          legendItemClick: function() { //stop user being able to deselect items from legend
            return false;
          }
        }
      },
      allowPointSelect: false,
    },
    series: [{
        name: 'Fiscal Space',
        enableMouseTracking: false, //only allow user to tooltip the overall series in release 1
        data: fiscalSpaceContribution[s1],
        color: 'rgb(0,157,61)'
      }, {
        name: 'Willingness to Pay',
        enableMouseTracking: false,
        data: willingnessContribution[s1],
        color: 'rgb(50,33,115)'
      }, {
        name: 'External Finance',
        enableMouseTracking: false,
        data: externalContribution[s1],
        color: 'rgb(96,35,118)'
      }, {
        name: 'Financial Sector Health',
        enableMouseTracking: false,
        data: financialHealthContribution[s1],
        color: 'rgb(135,185,38)'
      }, {
        name: 'Overall',
        type: 'spline',
        data: overall[s1],
        color: 'rgb(147,147,147)'
      }


    ]
  });

  //COUNTRY HEAD TO HEAD COMPARISON CHART

  $('#compChart').highcharts({
    chart: {
      type: 'column',
      marginLeft: 35
    },
    title: {
      text: '',
      style: {
        fontSize: '17px',
        fontFamily: 'AkkuratProRegular, Arial, Sans-Serif',
        color: 'rgb(79, 78, 80)'
      }
    },
    legend: {
      enabled: true,
      
      borderWidth: 0,
      itemHoverStyle: {
        color: 'rgb(79, 78, 80)',
        cursor: 'default'
      },
      itemStyle: {
        fontSize: '14px',
        fontWeight: 'normal',
        fontFamily: 'AkkuratProRegular, Arial, Sans-Serif',
        color: 'rgb(79, 78, 80)'
      },
    },
    credits: {
      enabled: false,
      text: "Data as at December 2015",
      href: "http://www.blackrock.com/corporate/en-us/news-and-insights/blackrock-investment-institute/insights/sovereign-risk",
      style: {
        fontSize: '10.5px',
        fontFamily: 'AkkuratProRegular, Arial, Sans-Serif',
        color: 'rgb(79, 78, 80)'
      }
    },
    xAxis: {
      plotBands: {
        color: 'rgb(230,230,230)',
        from: '3.5',
        to: '4.5'
      },
      categories: categoryList,
      title: {
        text: null
      },
      labels: {
        autoRotation: false,
        
        style: {
          fontSize: '13px',
          fontWeight: 'normal',
          fontFamily: 'AkkuratProRegular, Arial, Sans-Serif',
          color: 'rgb(79, 78, 80)'

        }
      }
    },
    yAxis: {
      gridLineColor: 'rgb(225,225,225)',
      min: -2.5,
      max: 2.5,
      title: {
        text: 'BSRI SCORE',
        align: 'middle',
        style: {
          fontSize: '13px',
          fontFamily: 'AkkuratProRegular, Arial, Sans-Serif',
          color: 'rgb(79, 78, 80)'
        }
      },
      labels: { align: 'left',
                x: 0,
                y: -2,
        style: {
          fontSize: '10.5px',
          fontFamily: 'AkkuratProRegular, Arial, Sans-Serif',
          color: 'rgb(79, 78, 80)'
        },
        overflow: 'justify'
      }
    },
    tooltip: {
      style: {
        fontSize: '13.5px',
        fontFamily: 'AkkuratProRegular, Arial, Sans-Serif',
        color: 'rgb(79, 78, 80)'
      },
      formatter: function() {
        return '<b>' + this.series.name + '</b><br>' + this.x;
      }
    },
    plotOptions: {
      series: {
        borderWidth: 0,
        borderColor: 'black'
      }
    },
    series: [{
        name: s1,
        data: columnData1,
        color: 'rgb(41,101,72)'
      },


      {
        name: s2,
        data: columnData2,
        color: 'rgb(85,40,115)'
      }



    ]
  });

  //TIME SERIES RANKING CHART

  $('#rankChart').highcharts({
    chart: {
      type: 'line',
      marginLeft: 100
    },
    title: {
      text: '',
      style: {
        fontSize: '17px',
        fontFamily: 'AkkuratProRegular, Arial, Sans-Serif',
        color: 'rgb(79, 78, 80)'
      }
    },
    legend: {
      enabled: false
    },
    plotOptions: {
      series: {
        dataLabels: {
          style: {
            fontSize: '13px',
            fontWeight: 'normal',
            fontFamily: 'AkkuratProRegular, Arial, Sans-Serif',
          
          },
          enabled: true,
          x:-10,
          overflow:'none',
          verticalAlign: 'middle',
          crop: false,
       //   reserveSpace: false,
          align: 'right',
             formatter: function() {
  //Set up labels on chart, rather than in a legend
            if (this.point.x === 0 ) {
              return $('<div/>').css({
                'color': this.series.color, //colour code the labels to align with the series selection
              }).text(this.series.name)[0].outerHTML;
            } else {
              return null;
            }
            
          }
        }
      }
    },
    credits: {
      enabled: false,
      text: "Data as at December 2015",
      href: "http://www.blackrock.com/corporate/en-us/news-and-insights/blackrock-investment-institute/insights/sovereign-risk",
      style: {
        fontSize: '10.5px',
        fontFamily: 'AkkuratProRegular, Arial, Sans-Serif',
        color: 'rgb(79, 78, 80)'
      }
    },
    xAxis: {
      categories: rankingQuarters,
      title: {
        text: "Month",
        style: {
          fontSize: '12px',
          fontFamily: 'AkkuratProRegular, Arial, Sans-Serif',
          color: 'rgb(79, 78, 80)'
        }
      },
      labels: {
        style: {
          fontSize: '12px',
          fontFamily: 'AkkuratProRegular, Arial, Sans-Serif',
          color: 'rgb(79, 78, 80)',
          overflow: 'justify'
        }
      }
    },
    yAxis: {
      reversed: true,
      tickPositions: [1, 10, 20, 30, 40, 50],
      gridLineColor: 'rgb(225,225,225)',
      min: 1,
      max: 50,
      title: {
        text: 'Overall Score Rank',
        align: 'middle',
        style: {
          fontSize: '12px',
          fontFamily: 'AkkuratProRegular, Arial, Sans-Serif',
          color: 'rgb(79, 78, 80)'
        }
      },
      labels: {
        style: {
          fontSize: '10.5px',
          fontFamily: 'AkkuratProRegular, Arial, Sans-Serif',
          color: 'rgb(79, 78, 80)'
        },
        overflow: 'justify'
      },
      opposite: true
    },
       tooltip: {
       style: {
        fontSize: '13.5px',
        fontFamily: 'AkkuratProRegular, Arial, Sans-Serif',
        color: 'rgb(79, 78, 80)'
      },
      headerFormat: '<b>{point.x}</b><br/>',
      pointFormat: '{series.name} overall rank: {point.y:.0f}'
    },
    series: [{
        name: s1,
        data: rankingData1,
        marker: {
          enabled: true,
          symbol: 'circle'
        },
        color: 'rgb(41,101,72)'
      }, {
        name: s2,
        data: rankingData2,
        marker: {
          symbol: 'circle'
        },
        color: 'rgb(85,40,115)'
      }

    ]
  });

//BUILD THE MAP
  $('#mapChart').highcharts('Map', {
    title: {
      text: ''
    },
    credits: {
      enabled: false,
    },
    subtitle: {
      text: ''
    },
       mapNavigation: {
                enabled: true,
                enableMouseWheelZoom: false,
                         buttonOptions: {
                    theme: {
                        fill: 'white',
                        'stroke-width': 1,
                        stroke: '#337ab7',
                        r: 0,
                        states: {
                            hover: {
                                fill: '#337ab7'
                            },
                            select: {
                                stroke: '#039',
                                fill: '#337ab7'
                            }
                        }
                    },
                    verticalAlign: 'top',
                    align: 'right'
                    
                }
            },

    legend: {
      enabled: false
    },
         plotOptions: { //code to highlight the table below on mouseover
                series: {
                    point: {
                        events: {
                            mouseOver: function () {
                         var mapMouseOver = this.name;
                     var mapMouseOverColor = this.color;
                           $('#mapTable td').each(function()
{

    if($(this).html()== mapMouseOver)
    {
        $(this).css({'background':mapMouseOverColor});
        $(this).css({'font-weight':'bold'});
        $(this).css({'color':'white'});
      
    }        
});
                           
                           
                            },
                                 mouseOut: function () {
                     var mapMouseOver = this.name;
                           $('#mapTable td').each(function()
{

    if($(this).html()== mapMouseOver)
    {
        $(this).css({'background':'white'});
        $(this).css({'font-weight':'normal'});
        $(this).css({'color':'#222'});
    }        
});
                           
                           
                            }
                        }
                    }
                }
            },
    
    tooltip: {
      style: {
        fontSize: '14.5px',
        fontFamily: 'AkkuratProRegular, Arial, Sans-Serif',
        color: 'rgb(79, 78, 80)'
      },
                useHTML: true,
                padding: 0,
                pointFormat: '<span class="f32"><span class="flag {point.flag}"></span></span>' +
                    ' {point.name}: <b>{point.y:.2f}',
            },
    series: [{
      name: 'Overall Score',
      mapData: Highcharts.maps.world,
      data: mapData,
      joinBy: ['code'],
      dataLabels: {
        enabled: false
      }
    }]
  });

  //DROPDOWN CONTROLS

//Component dropdown change code
	$("#selectComponent").change(function(){
	var option1 = $("#selectComponent").find('option:selected').val(); //find which component is selected
	var chart = $('#barChart').highcharts(); // define chart to be changed
	while(chart.series.length > 0) chart.series[0].remove(false); // existing series
		switch(option1)
	{
	case "Fiscal Space" :
 barFunction(fiscalSpace); //call function to update the data
 	chart.addSeries({data:newData, color: newData}, false); //add new series
	chart.yAxis[0].setExtremes(-2.5, 4,false); //reset the axis to fit the dataset
	chart.redraw(); //then redraw the chart
	break;
	case "Willingness to Pay" :
 barFunction(willingness);
 	chart.addSeries({data:newData, color: newData}, false); 
	chart.yAxis[0].setExtremes(-3, 2.5);
	break;
	case "External Finance" :
	 barFunction(external);
 	chart.addSeries({data:newData, color: newData}, false); 
	chart.yAxis[0].setExtremes(-3, 3);
	break;
	case "Financial Sector Health" :
	 barFunction(financialHealth);
 	chart.addSeries({data:newData, color: newData}, false); 
	chart.yAxis[0].setExtremes(-2, 2);
	break;
	case "Overall Score" :
 barFunction(overall);
 	chart.addSeries({data:newData, color: newData}, false); 
	chart.yAxis[0].setExtremes(-2.5, 2.5);
	break;
	}
	});

//country detail dropdown change (this is also called from the text call outs)
  $("#selectCountry").change(function() {
    var option1 = $("#selectCountry").find('option:selected').val(); //find out which country is selected
    var s1 = countryList[countryListString.indexOf(option1)]; //get the string name of that country
	$("#flag").removeClass().addClass("flag " + s1); //change the flag
    var chart = $('#tsChart').highcharts(); //define chart to be changed
    while (chart.series.length > 0) chart.series[0].remove(false); //remove existing data
    chart.addSeries({
      name: 'Fiscal Space',
      enableMouseTracking: false, //only allow tooltip on overall
      data: fiscalSpaceContribution[s1], //add in new contribution data based on country called
      color: 'rgb(0,157,61)'
    }, false);
    chart.addSeries({
      name: 'Willingness to Pay',
      enableMouseTracking: false,
      data: willingnessContribution[s1],
      color: 'rgb(50,33,115)'
    }, false);
    chart.addSeries({
      name: 'External Finance',
      enableMouseTracking: false,
      data: externalContribution[s1],
      color: 'rgb(96,35,118)'
    }, false);
    chart.addSeries({
      name: 'Financial Sector Health',
      enableMouseTracking: false,
      data: financialHealthContribution[s1],
      color: 'rgb(135,185,38)'
    }, false);
    chart.addSeries({
      name: 'Overall',
      type: 'spline',
      data: overall[s1],
      marker: {
        enabled: true,
        symbol: 'circle'
      },
      color: 'rgb(147,147,147)'
    }, false);
    chart.redraw(); 
    //set up information to be used in the machine written text bullets that go with country detail section
    var columnData1 = [];
    //get latest values for all components
    columnData1.push(fiscalSpace[s1][fiscalSpace[s1].length - 1], willingness[s1][willingness[s1].length - 1], external[s1][external[s1].length - 1], financialHealth[s1][financialHealth[s1].length - 1], overall[s1][overall[s1].length - 1]);
  //find the strongest and weakest components for the chosen country
    var highCat = categoryList[columnData1.indexOf(Math.max.apply(Math, columnData1))];
    var minCat = categoryList[columnData1.indexOf(Math.min.apply(Math, columnData1))];
  //add the text to the bullets
    $("#bullet1").text(option1 + " ranks " + newRankArray4[s1][newRankArray4[s1].length - 1] + " out of 50 countries.");
    $("#bullet2").text(option1 + " scores most highly on " + highCat);
    $("#bullet3").text(" Its weakest score comes in " + minCat);


  });

  //HEAD TO HEAD DROPDOWN - COUNTRY 1
  $("#selectCountry2").val(s2);

  $("#selectCountry1").change(function() {
    var option1 = $("#selectCountry1").find('option:selected').val();
    var s1 = countryList[countryListString.indexOf(option1)];
    var option2 = $("#selectCountry2").find('option:selected').val();
    var s2 = countryList[countryListString.indexOf(option2)];
    	$("#flag2").removeClass().addClass("flag " + s1);
    	
    
    var columnData1 = [];
    var columnData2 = [];
    columnData1.push(fiscalSpace[s1][fiscalSpace[s1].length - 1], willingness[s1][willingness[s1].length - 1], external[s1][external[s1].length - 1], financialHealth[s1][financialHealth[s1].length - 1], overall[s1][overall[s1].length - 1]);
    columnData2.push(fiscalSpace[s2][fiscalSpace[s2].length - 1], willingness[s2][willingness[s2].length - 1], external[s1][external[s2].length - 1], financialHealth[s2][financialHealth[s2].length - 1], overall[s2][overall[s2].length - 1]);
    var chart = $('#compChart').highcharts();
    while (chart.series.length > 0) chart.series[0].remove(false);
    chart.addSeries({
      name: option1,
      data: columnData1,
      color: 'rgb(41,101,72)'
    }, false);
    chart.addSeries({
      name: option2,
      data: columnData2,
      color: 'rgb(85,40,115)'
    }, false);
    chart.redraw();
    var chart2 = $('#rankChart').highcharts();
    while (chart2.series.length > 0) chart2.series[0].remove(false);
    chart2.addSeries({
      name: option1,
      data: newRankArray4[s1],
      marker: {
        enabled: true,
        symbol: 'circle'
      },
      color: 'rgb(41,101,72)'
    }, false);
    chart2.addSeries({
      name: option2,
      data: newRankArray4[s2],
      marker: {
        enabled: true,
        symbol: 'circle'
      },
      color: 'rgb(85,40,115)'
    }, false);
    chart2.redraw();
  });

//HEAD TO HEAD DROPDOWN - COUNTRY 1
  $("#selectCountry2").change(function() {
    var option1 = $("#selectCountry1").find('option:selected').val();
    var s1 = countryList[countryListString.indexOf(option1)];
    var option2 = $("#selectCountry2").find('option:selected').val();
    var s2 = countryList[countryListString.indexOf(option2)];
    	$("#flag3").removeClass().addClass("flag " + s2);
    var columnData1 = [];
    var columnData2 = [];
    columnData1.push(fiscalSpace[s1][fiscalSpace[s1].length - 1], willingness[s1][willingness[s1].length - 1], external[s1][external[s1].length - 1], financialHealth[s1][financialHealth[s1].length - 1], overall[s1][overall[s1].length - 1]);
    columnData2.push(fiscalSpace[s2][fiscalSpace[s2].length - 1], willingness[s2][willingness[s2].length - 1], external[s1][external[s2].length - 1], financialHealth[s2][financialHealth[s2].length - 1], overall[s2][overall[s2].length - 1]);
    var chart = $('#compChart').highcharts();
    while (chart.series.length > 0) chart.series[0].remove(false);
    chart.addSeries({
      name: option1,
      data: columnData1,
      color: 'rgb(41,101,72)'
    }, false);
    chart.addSeries({
      name: option2,
      data: columnData2,
      color: 'rgb(85,40,115)'
    }, false);
    chart.redraw();
    var chart2 = $('#rankChart').highcharts();
    while (chart2.series.length > 0) chart2.series[0].remove(false);
    chart2.addSeries({
      name: option1,
      data: newRankArray4[s1],
      marker: {
        enabled: true,
        symbol: 'circle'
      },
      color: 'rgb(41,101,72)'
    }, false);
    chart2.addSeries({
      name: option2,
      data: newRankArray4[s2],
      marker: {
        enabled: true,
        symbol: 'circle'
      },
      color: 'rgb(85,40,115)'
    }, false);
    chart2.redraw();
  });

//SET UP INITIAL BULLET TEXT FOR COUNTRY DETAIL
  $("#bullet1").text(s1 + " ranks " + newRankArray4[s1][newRankArray4[s1].length - 1] + " out of 50 countries.");
  var highCat = categoryList[columnData1.indexOf(Math.max.apply(Math, columnData1))];
  var minCat = categoryList[columnData1.indexOf(Math.min.apply(Math, columnData1))];
  $("#bullet1").text(s1 + " ranks " + newRankArray4[s1][newRankArray4[s1].length - 1] + " out of 50 countries.");
  $("#bullet2").text(s1 + " scores most highly on " + highCat);
  $("#bullet3").text(" Its weakest score comes in " + minCat);


//TOP NAVIGATION BUTTONS
$("#topButtonDetail").click(function() {
    $('html, body').animate({
        scrollTop: $("#headerCountryDetail").offset().top -70 //on click the screen scrolls down to the selected section
    }, 1000);
});

$("#topButtonHead2Head").click(function() {
    $('html, body').animate({
        scrollTop: $("#headerHead2Head").offset().top -70
    }, 1000);
});

$("#topButtonMap").click(function() {
    $('html, body').animate({
        scrollTop: $("#headerMap").offset().top -70
    }, 1000);
});

$("#topButtonHowitWorks").click(function() {
    $('html, body').animate({
        scrollTop: $("#headerHowitWorks").offset().top -70
    }, 1000);
});

//COUNTRY CALLOUTS WITHIN UPDATE BULLET TEXT JUMP USER TO COUNTRY DETAIL ON THAT SELECTED COUNTRY
$(".countryLink").click(function() {
    $('html, body').animate({
        scrollTop: $("#headerCountryDetail").offset().top -70 //on click scroll to the country detail section
    }, 1000);
    
    var txt = $(this).text(); //get the name of the country that has been selected
     $("#selectCountry").val(txt).change(); // change the country selected in the country detail section
    return false; //Make sure the screen doesn't jump to the top due to a href = "#"
});

 $('#mapTable .target1').each(function(i) {
    $(this).html( newData[i].name); 
 
 });
  $('#mapTable .number1').each(function(i) {
    $(this).html(i + 1); 
 
 });
 
  $('#mapTable .target2').each(function(i) {
    $(this).html(  newData[i + 10].name); 
 
 });
 
   $('#mapTable .number2').each(function(i) {
    $(this).html(i + 11); 
 
 });
 
   $('#mapTable .target3').each(function(i) {
    $(this).html( newData[i + 20].name); 
 
 });
   $('#mapTable .number3').each(function(i) {
    $(this).html(i + 21); 
 
 });
 
    $('#mapTable .target4').each(function(i) {
    $(this).html( newData[i + 30].name); 
 
 });
    $('#mapTable .number4').each(function(i) {
    $(this).html(i + 31); 
 
 });
 
    $('#mapTable .target5').each(function(i) {
    $(this).html( newData[i + 40].name); 
 
 });
    $('#mapTable .number5').each(function(i) {
    $(this).html(i + 41); 
 
 });


});
