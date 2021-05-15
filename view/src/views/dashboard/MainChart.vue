<script>
    import {Line} from 'vue-chartjs'
    import {getStyle, hexToRgba} from '@coreui/utils/src'
    import {CustomTooltips} from '@coreui/coreui-plugin-chartjs-custom-tooltips'

    export default {
        extends: Line,
        props: ['height'],
        mounted() {
            const brandDanger = getStyle('--danger') || '#f86c6b';

          let data1 = [];
          data1.push(65);
          this.renderChart({
                labels: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
                datasets: [
                    {
                        label: 'Sales Dataset',
                        backgroundColor: 'transparent',
                        borderColor: brandDanger,
                        pointHoverBackgroundColor: '#fff',
                        borderWidth: 1,
                        borderDash: [8, 5],
                        data: data1
                    }
                ]
            }, {
                tooltips: {
                    enabled: false,
                    custom: CustomTooltips,
                    intersect: true,
                    mode: 'index',
                    position: 'nearest',
                    callbacks: {
                        labelColor: function (tooltipItem, chart) {
                            return {backgroundColor: chart.data.datasets[tooltipItem.datasetIndex].borderColor}
                        }
                    }
                },
                maintainAspectRatio: false,
                legend: {
                    display: false
                },
                scales: {
                    xAxes: [{
                        gridLines: {
                            drawOnChartArea: false
                        }
                    }],
                    yAxes: [{
                        ticks: {
                            beginAtZero: true,
                            maxTicksLimit: 5,
                            stepSize: Math.ceil(250 / 5),
                            max: 250
                        },
                        gridLines: {
                            display: true
                        }
                    }]
                },
                elements: {
                    point: {
                        radius: 0,
                        hitRadius: 10,
                        hoverRadius: 4,
                        hoverBorderWidth: 3
                    }
                }
            })
        }
    }
</script>
