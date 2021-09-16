// URL: https://echarts.apache.org/examples/en/editor.html?c=bar-label-rotation

var posList = [
  'left', 'right', 'top', 'bottom',
  'inside',
  'insideTop', 'insideLeft', 'insideRight', 'insideBottom',
  'insideTopLeft', 'insideTopRight', 'insideBottomLeft', 'insideBottomRight'
];

app.configParameters = {
  rotate: {
      min: -90,
      max: 90
  },
  align: {
      options: {
          left: 'left',
          center: 'center',
          right: 'right'
      }
  },
  verticalAlign: {
      options: {
          top: 'top',
          middle: 'middle',
          bottom: 'bottom'
      }
  },
  position: {
      options: posList.reduce(function (map, pos) {
          map[pos] = pos;
          return map;
      }, {})
  },
  distance: {
      min: 0,
      max: 100
  }
};

app.config = {
  rotate: 90,
  align: 'left',
  verticalAlign: 'middle',
  position: 'insideBottom',
  distance: 15,
  onChange: function () {
      var labelOption = {
          normal: {
              rotate: app.config.rotate,
              align: app.config.align,
              verticalAlign: app.config.verticalAlign,
              position: app.config.position,
              distance: app.config.distance
          }
      };
      myChart.setOption({
          series: [{
              label: labelOption
          }, {
              label: labelOption
          }],
      });
  }
};


var labelOption = {
  show: true,
  position: app.config.position,
  distance: app.config.distance,
  align: app.config.align,
  verticalAlign: app.config.verticalAlign,
  rotate: app.config.rotate,
  formatter: '{c} {name|{a}}',
  fontSize: 16,
  rich: {
      name: {}
  }
};

option = {
  tooltip: {
      trigger: 'axis',
      axisPointer: {
          type: 'shadow'
      }
  },
  legend: {
      data: ['RPS']
  },
  toolbox: {
      show: true,
      orient: 'vertical',
      left: 'right',
      top: 'center',
      feature: {
          mark: {show: true},
          dataView: {show: true, readOnly: false},
          magicType: {show: true, type: ['line', 'bar', 'stack', 'tiled']},
          restore: {show: true},
          saveAsImage: {show: true}
      }
  },
  xAxis: [
      {
          type: 'category',
          axisTick: {show: false},
          data: ['2', '3', '4', '5', '6', '7', '8', '9', '10', '15', '20']
      }
  ],
  yAxis: [
      {
          name: 'RPS (req/sec)',
          type: 'value'
      }
  ],
  series: [
      {
          name: 'RPS',
          type: 'bar',
          barGap: 0,
          label: labelOption,
          emphasis: {
              focus: 'series'
          },
          data: [44.81, 67.13, 83.58, 104.66, 124.84, 144.48, 151.04, 200.58, 211.37, 300.13, 205.76]
      }
  ]
};