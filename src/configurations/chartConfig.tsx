export const usersGrowthConfig = {
    chart: {
      zoom: {
        enabled: true
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
      categories: ['Jan','Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],

    },
    yaxis: {
      tickAmount: 7,
      axisTicks: {
        show: true,
        borderType: 'solid',
        color: '#78909C',
        width: 6,
        offsetX: 0,
        offsetY: 0
    },
      // Set the number of ticks on the y-axis
    //   max: 5000, // Set the maximum value
    },
    
    colors: ['#6356FF'],
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