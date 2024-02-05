/* eslint-disable @typescript-eslint/no-explicit-any */




export const monthlyRevenueConfig = {
  chart: {
    id: "Monthly Revenue",
    // height: 950,
    zoom: {
      enabled: false
    }
  },
  dataLabels: {
    enabled: false
  },
  grid: {
    row: {
      colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
      opacity: 0.5
    },
  },
  xaxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
    namespace: "month"
  }
};


export const usersGrowthConfig = {
    chart: {
      height: 350,
      zoom: {
        enabled: false
      }
    },
    dataLabels: {
      enabled: false
    },
    
    // subtitle: {
    //   text: 'Price Movements',
    //   align: 'left'
    // },
    xaxis: {
      // type: "category",
        categories: [
          new Date().getFullYear().toString(), // Current year
          (new Date().getFullYear() + 1).toString(),
          (new Date().getFullYear() + 2).toString(),
          (new Date().getFullYear() + 3).toString(),
          (new Date().getFullYear() + 4).toString(),
          (new Date().getFullYear() + 5).toString(),
          (new Date().getFullYear() + 6).toString(),
          // (new Date().getFullYear() + 7).toString(),
        ]
    },
    yaxis: {
      tickAmount: 5, // Set the number of ticks on the y-axis
      max: 5000, // Set the maximum value
    },
    
    colors: ['#25CD2566'],
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 0.9,
        stops: [0, 90, 100]
      }
    },
 
};

export const earningsChartConfig = {
    chart: {
      height: 350
    },
    
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '25%',
        endingShape: 'rounded',
        borderRadius: 8,
        // borderRadiusApplication: 'top'
      },
    },
    responsive: [
      {
        breakpoint: 2000,
        options: {
          chart: {
            height:450
          },
        }
      },
      {
      breakpoint: 1400,
      options: {
        chart: {
          height: 350
        },
        
        
      }
    },
    
  ],
    dataLabels: {
      enabled: false
    },
    grid: {
      borderColor: '#f2f2f2',
    },
    xaxis: {
      categories: ['Jan','Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    },
    yaxis: {
      tickAmount: 8, // Set the number of ticks on the y-axis
      // max: 100000,
      // title: {
      //   text: '$ (thousands)'
      // }
    },
    colors: ['#3843D0', '#C6A4F1'],
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'light',
        type: "vertical",
        shadeIntensity: 0.5,
        gradientToColors: undefined, // optional, if not defined - uses the shades of same color in series
        inverseColors: false,
        opacityFrom: 1,
        opacityTo: 0.8,
        stops: [50, 100],
        colorStops: []
      }
    },
    tooltip: {
      y: {
        formatter: function (val:any) {
          return "$ " + val
        }
      }
    }

}


