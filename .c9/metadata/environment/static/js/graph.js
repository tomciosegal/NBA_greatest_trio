{"filter":false,"title":"graph.js","tooltip":"/static/js/graph.js","undoManager":{"mark":100,"position":100,"stack":[[{"start":{"row":159,"column":4},"end":{"row":159,"column":8},"action":"remove","lines":["    "],"id":6089},{"start":{"row":159,"column":0},"end":{"row":159,"column":4},"action":"remove","lines":["    "]},{"start":{"row":158,"column":10},"end":{"row":159,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":158,"column":10},"end":{"row":158,"column":11},"action":"insert","lines":[";"],"id":6090}],[{"start":{"row":145,"column":33},"end":{"row":145,"column":35},"action":"remove","lines":["30"],"id":6091},{"start":{"row":145,"column":33},"end":{"row":145,"column":34},"action":"insert","lines":["0"]},{"start":{"row":145,"column":34},"end":{"row":145,"column":35},"action":"insert","lines":["0"]}],[{"start":{"row":142,"column":44},"end":{"row":146,"column":48},"action":"remove","lines":["","            chart.select(\"svg\")","                .attr(\"height\", \"100%\")","                .attr(\"width\", \"100%\")","                .attr(\"viewBox\", \"0 0 840 340\");"],"id":6092}],[{"start":{"row":102,"column":62},"end":{"row":102,"column":63},"action":"remove","lines":[";"],"id":6093}],[{"start":{"row":102,"column":62},"end":{"row":103,"column":0},"action":"insert","lines":["",""],"id":6094},{"start":{"row":103,"column":0},"end":{"row":103,"column":8},"action":"insert","lines":["        "]}],[{"start":{"row":103,"column":8},"end":{"row":119,"column":11},"action":"insert","lines":[".on(\"pretransition\", function(chart) {","            chart.selectAll(\"g.y text\")","                .style(\"font-size\", \"12px\");","            chart.selectAll(\"g.x text\")","                .style(\"font-size\", \"12px\");","            chart.selectAll(\".dc-chart text\")","                .attr(\"fill\", \"#E5E5E5\");","            chart.selectAll(\".dc-legend-item text\")","                .attr(\"font-size\", \"15px\")","                .attr(\"fill\", \"white\");","            chart.selectAll(\"line\")","                .style(\"stroke\", \"#E5E5E5\");","            chart.selectAll(\".domain\")","                .style(\"stroke\", \"#E5E5E5\");","            chart.selectAll(\".line\")","                .style(\"stroke-width\", \"2.5\");","        });"],"id":6095}],[{"start":{"row":293,"column":29},"end":{"row":294,"column":0},"action":"insert","lines":["",""],"id":6096},{"start":{"row":294,"column":0},"end":{"row":294,"column":8},"action":"insert","lines":["        "]}],[{"start":{"row":294,"column":8},"end":{"row":294,"column":90},"action":"insert","lines":[".x(d3.time.scale().domain([new Date(minSeason, 0, 1), new Date(maxSeason, 0, 1)]))"],"id":6097}],[{"start":{"row":294,"column":9},"end":{"row":294,"column":10},"action":"remove","lines":["x"],"id":6098}],[{"start":{"row":294,"column":9},"end":{"row":294,"column":10},"action":"insert","lines":["y"],"id":6099}],[{"start":{"row":288,"column":0},"end":{"row":296,"column":55},"action":"insert","lines":["","    var salaryDim = ndx1.dimension(function(d) {","","        return [new Date(Number(d.Season.slice(0, -3)), 0, 1), Number(d.Salary.slice(1)), d.Player];","","    })","    var salaryPlayerGroup = salaryDim.group();","    var minSeason = eDim.bottom(1)[0].Season.slice(0, -3);","    var maxSeason = eDim.top(1)[0].Season.slice(0, -3);"],"id":6100}],[{"start":{"row":289,"column":23},"end":{"row":289,"column":24},"action":"remove","lines":["1"],"id":6101}],[{"start":{"row":289,"column":23},"end":{"row":289,"column":24},"action":"insert","lines":["2"],"id":6102}],[{"start":{"row":288,"column":0},"end":{"row":296,"column":55},"action":"remove","lines":["","    var salaryDim = ndx2.dimension(function(d) {","","        return [new Date(Number(d.Season.slice(0, -3)), 0, 1), Number(d.Salary.slice(1)), d.Player];","","    })","    var salaryPlayerGroup = salaryDim.group();","    var minSeason = eDim.bottom(1)[0].Season.slice(0, -3);","    var maxSeason = eDim.top(1)[0].Season.slice(0, -3);"],"id":6103}],[{"start":{"row":293,"column":29},"end":{"row":294,"column":90},"action":"remove","lines":["","        .y(d3.time.scale().domain([new Date(minSeason, 0, 1), new Date(maxSeason, 0, 1)]))"],"id":6104}],[{"start":{"row":293,"column":29},"end":{"row":294,"column":0},"action":"insert","lines":["",""],"id":6105},{"start":{"row":294,"column":0},"end":{"row":294,"column":8},"action":"insert","lines":["        "]}],[{"start":{"row":294,"column":8},"end":{"row":294,"column":24},"action":"insert","lines":["yAxis().ticks(0)"],"id":6106}],[{"start":{"row":294,"column":8},"end":{"row":294,"column":9},"action":"insert","lines":["."],"id":6107}],[{"start":{"row":293,"column":29},"end":{"row":294,"column":25},"action":"remove","lines":["","        .yAxis().ticks(0)"],"id":6108}],[{"start":{"row":335,"column":58},"end":{"row":335,"column":59},"action":"remove","lines":["3"],"id":6109}],[{"start":{"row":154,"column":57},"end":{"row":154,"column":58},"action":"insert","lines":["1"],"id":6115}],[{"start":{"row":154,"column":58},"end":{"row":154,"column":60},"action":"remove","lines":["75"],"id":6116},{"start":{"row":154,"column":58},"end":{"row":154,"column":59},"action":"insert","lines":["4"]},{"start":{"row":154,"column":59},"end":{"row":154,"column":60},"action":"insert","lines":["0"]}],[{"start":{"row":102,"column":57},"end":{"row":102,"column":59},"action":"remove","lines":["75"],"id":6117},{"start":{"row":102,"column":57},"end":{"row":102,"column":58},"action":"insert","lines":["1"]},{"start":{"row":102,"column":58},"end":{"row":102,"column":59},"action":"insert","lines":["4"]},{"start":{"row":102,"column":59},"end":{"row":102,"column":60},"action":"insert","lines":["0"]}],[{"start":{"row":102,"column":25},"end":{"row":102,"column":26},"action":"remove","lines":["0"],"id":6118},{"start":{"row":102,"column":25},"end":{"row":102,"column":26},"action":"insert","lines":["5"]}],[{"start":{"row":294,"column":23},"end":{"row":295,"column":0},"action":"insert","lines":["",""],"id":6119},{"start":{"row":295,"column":0},"end":{"row":295,"column":8},"action":"insert","lines":["        "]}],[{"start":{"row":295,"column":8},"end":{"row":295,"column":29},"action":"insert","lines":[".xAxisLabel(\"Season\")"],"id":6120}],[{"start":{"row":295,"column":21},"end":{"row":295,"column":27},"action":"remove","lines":["Season"],"id":6121},{"start":{"row":295,"column":21},"end":{"row":295,"column":22},"action":"insert","lines":["T"]},{"start":{"row":295,"column":22},"end":{"row":295,"column":23},"action":"insert","lines":["e"]},{"start":{"row":295,"column":23},"end":{"row":295,"column":24},"action":"insert","lines":["a"]},{"start":{"row":295,"column":24},"end":{"row":295,"column":25},"action":"insert","lines":["m"]},{"start":{"row":295,"column":25},"end":{"row":295,"column":26},"action":"insert","lines":["s"]}],[{"start":{"row":336,"column":48},"end":{"row":336,"column":49},"action":"remove","lines":["3"],"id":6122},{"start":{"row":336,"column":48},"end":{"row":336,"column":49},"action":"insert","lines":["6"]}],[{"start":{"row":291,"column":15},"end":{"row":291,"column":17},"action":"remove","lines":["55"],"id":6125},{"start":{"row":291,"column":15},"end":{"row":291,"column":16},"action":"insert","lines":["6"]},{"start":{"row":291,"column":16},"end":{"row":291,"column":17},"action":"insert","lines":["0"]}],[{"start":{"row":292,"column":16},"end":{"row":292,"column":18},"action":"remove","lines":["45"],"id":6126},{"start":{"row":292,"column":16},"end":{"row":292,"column":17},"action":"insert","lines":["5"]},{"start":{"row":292,"column":17},"end":{"row":292,"column":18},"action":"insert","lines":["0"]}],[{"start":{"row":333,"column":37},"end":{"row":333,"column":39},"action":"remove","lines":["10"],"id":6127},{"start":{"row":333,"column":37},"end":{"row":333,"column":38},"action":"insert","lines":["5"]}],[{"start":{"row":333,"column":37},"end":{"row":333,"column":38},"action":"remove","lines":["5"],"id":6128}],[{"start":{"row":333,"column":37},"end":{"row":333,"column":38},"action":"insert","lines":["0"],"id":6129}],[{"start":{"row":333,"column":31},"end":{"row":333,"column":32},"action":"remove","lines":["7"],"id":6130},{"start":{"row":333,"column":31},"end":{"row":333,"column":32},"action":"insert","lines":["9"]}],[{"start":{"row":333,"column":59},"end":{"row":333,"column":60},"action":"insert","lines":["1"],"id":6131}],[{"start":{"row":333,"column":59},"end":{"row":333,"column":61},"action":"remove","lines":["15"],"id":6132},{"start":{"row":333,"column":59},"end":{"row":333,"column":60},"action":"insert","lines":["2"]},{"start":{"row":333,"column":60},"end":{"row":333,"column":61},"action":"insert","lines":["0"]}],[{"start":{"row":333,"column":37},"end":{"row":333,"column":38},"action":"remove","lines":["0"],"id":6133},{"start":{"row":333,"column":37},"end":{"row":333,"column":38},"action":"insert","lines":["1"]},{"start":{"row":333,"column":38},"end":{"row":333,"column":39},"action":"insert","lines":["5"]},{"start":{"row":333,"column":39},"end":{"row":333,"column":40},"action":"insert","lines":["0"]}],[{"start":{"row":333,"column":37},"end":{"row":333,"column":40},"action":"remove","lines":["150"],"id":6134},{"start":{"row":333,"column":37},"end":{"row":333,"column":38},"action":"insert","lines":["-"]},{"start":{"row":333,"column":38},"end":{"row":333,"column":39},"action":"insert","lines":["2"]},{"start":{"row":333,"column":39},"end":{"row":333,"column":40},"action":"insert","lines":["0"]}],[{"start":{"row":333,"column":39},"end":{"row":333,"column":40},"action":"insert","lines":["4"],"id":6135}],[{"start":{"row":333,"column":38},"end":{"row":333,"column":39},"action":"remove","lines":["2"],"id":6136}],[{"start":{"row":333,"column":38},"end":{"row":333,"column":39},"action":"remove","lines":["4"],"id":6137},{"start":{"row":333,"column":38},"end":{"row":333,"column":39},"action":"insert","lines":["8"]}],[{"start":{"row":333,"column":38},"end":{"row":333,"column":39},"action":"remove","lines":["8"],"id":6138},{"start":{"row":333,"column":38},"end":{"row":333,"column":39},"action":"insert","lines":["1"]},{"start":{"row":333,"column":39},"end":{"row":333,"column":40},"action":"insert","lines":["2"]}],[{"start":{"row":102,"column":35},"end":{"row":102,"column":36},"action":"remove","lines":["5"],"id":6139},{"start":{"row":102,"column":35},"end":{"row":102,"column":36},"action":"insert","lines":["4"]}],[{"start":{"row":102,"column":58},"end":{"row":102,"column":59},"action":"remove","lines":["4"],"id":6142},{"start":{"row":102,"column":58},"end":{"row":102,"column":59},"action":"insert","lines":["2"]}],[{"start":{"row":336,"column":58},"end":{"row":336,"column":59},"action":"insert","lines":["2"],"id":6143}],[{"start":{"row":336,"column":58},"end":{"row":336,"column":59},"action":"remove","lines":["2"],"id":6144}],[{"start":{"row":336,"column":58},"end":{"row":336,"column":59},"action":"insert","lines":["4"],"id":6145}],[{"start":{"row":336,"column":48},"end":{"row":336,"column":49},"action":"remove","lines":["6"],"id":6146}],[{"start":{"row":336,"column":48},"end":{"row":336,"column":49},"action":"insert","lines":["1"],"id":6147},{"start":{"row":336,"column":49},"end":{"row":336,"column":50},"action":"insert","lines":["0"]}],[{"start":{"row":333,"column":31},"end":{"row":333,"column":32},"action":"remove","lines":["9"],"id":6148},{"start":{"row":333,"column":31},"end":{"row":333,"column":32},"action":"insert","lines":["0"]}],[{"start":{"row":333,"column":39},"end":{"row":333,"column":40},"action":"remove","lines":["2"],"id":6149},{"start":{"row":333,"column":39},"end":{"row":333,"column":40},"action":"insert","lines":["0"]}],[{"start":{"row":336,"column":49},"end":{"row":336,"column":50},"action":"remove","lines":["0"],"id":6150},{"start":{"row":336,"column":49},"end":{"row":336,"column":50},"action":"insert","lines":["5"]}],[{"start":{"row":336,"column":49},"end":{"row":336,"column":50},"action":"remove","lines":["5"],"id":6151}],[{"start":{"row":336,"column":49},"end":{"row":336,"column":50},"action":"insert","lines":["2"],"id":6152}],[{"start":{"row":408,"column":24},"end":{"row":408,"column":25},"action":"remove","lines":["0"],"id":6154},{"start":{"row":408,"column":24},"end":{"row":408,"column":25},"action":"insert","lines":["5"]}],[{"start":{"row":409,"column":40},"end":{"row":409,"column":41},"action":"remove","lines":["4"],"id":6155},{"start":{"row":409,"column":40},"end":{"row":409,"column":41},"action":"insert","lines":["6"]}],[{"start":{"row":418,"column":24},"end":{"row":418,"column":25},"action":"remove","lines":["0"],"id":6156},{"start":{"row":418,"column":24},"end":{"row":418,"column":25},"action":"insert","lines":["5"]}],[{"start":{"row":428,"column":24},"end":{"row":428,"column":25},"action":"remove","lines":["0"],"id":6157},{"start":{"row":428,"column":24},"end":{"row":428,"column":25},"action":"insert","lines":["5"]}],[{"start":{"row":429,"column":40},"end":{"row":429,"column":41},"action":"remove","lines":["4"],"id":6158},{"start":{"row":429,"column":40},"end":{"row":429,"column":41},"action":"insert","lines":["6"]}],[{"start":{"row":419,"column":40},"end":{"row":419,"column":41},"action":"remove","lines":["4"],"id":6159},{"start":{"row":419,"column":40},"end":{"row":419,"column":41},"action":"insert","lines":["6"]}],[{"start":{"row":137,"column":15},"end":{"row":137,"column":16},"action":"remove","lines":["9"],"id":6160},{"start":{"row":137,"column":15},"end":{"row":137,"column":16},"action":"insert","lines":["6"]}],[{"start":{"row":138,"column":16},"end":{"row":138,"column":17},"action":"remove","lines":["6"],"id":6161}],[{"start":{"row":138,"column":16},"end":{"row":138,"column":17},"action":"insert","lines":["4"],"id":6162}],[{"start":{"row":84,"column":15},"end":{"row":84,"column":16},"action":"remove","lines":["9"],"id":6163},{"start":{"row":84,"column":15},"end":{"row":84,"column":16},"action":"insert","lines":["6"]}],[{"start":{"row":85,"column":16},"end":{"row":85,"column":17},"action":"remove","lines":["6"],"id":6164},{"start":{"row":85,"column":16},"end":{"row":85,"column":17},"action":"insert","lines":["4"]}],[{"start":{"row":84,"column":15},"end":{"row":84,"column":16},"action":"remove","lines":["6"],"id":6167},{"start":{"row":84,"column":15},"end":{"row":84,"column":16},"action":"insert","lines":["8"]}],[{"start":{"row":137,"column":15},"end":{"row":137,"column":16},"action":"remove","lines":["6"],"id":6168},{"start":{"row":137,"column":15},"end":{"row":137,"column":16},"action":"insert","lines":["8"]}],[{"start":{"row":137,"column":15},"end":{"row":137,"column":16},"action":"remove","lines":["8"],"id":6169}],[{"start":{"row":137,"column":15},"end":{"row":137,"column":16},"action":"insert","lines":["9"],"id":6170}],[{"start":{"row":84,"column":15},"end":{"row":84,"column":16},"action":"remove","lines":["8"],"id":6171},{"start":{"row":84,"column":15},"end":{"row":84,"column":16},"action":"insert","lines":["9"]}],[{"start":{"row":198,"column":0},"end":{"row":198,"column":3},"action":"remove","lines":["// "],"id":6172},{"start":{"row":200,"column":0},"end":{"row":200,"column":3},"action":"remove","lines":["// "]},{"start":{"row":201,"column":0},"end":{"row":201,"column":3},"action":"remove","lines":["// "]},{"start":{"row":202,"column":0},"end":{"row":202,"column":3},"action":"remove","lines":["// "]},{"start":{"row":203,"column":0},"end":{"row":203,"column":3},"action":"remove","lines":["// "]},{"start":{"row":205,"column":0},"end":{"row":205,"column":3},"action":"remove","lines":["// "]},{"start":{"row":206,"column":0},"end":{"row":206,"column":3},"action":"remove","lines":["// "]},{"start":{"row":207,"column":0},"end":{"row":207,"column":3},"action":"remove","lines":["// "]},{"start":{"row":208,"column":0},"end":{"row":208,"column":3},"action":"remove","lines":["// "]},{"start":{"row":209,"column":0},"end":{"row":209,"column":3},"action":"remove","lines":["// "]},{"start":{"row":210,"column":0},"end":{"row":210,"column":3},"action":"remove","lines":["// "]},{"start":{"row":211,"column":0},"end":{"row":211,"column":3},"action":"remove","lines":["// "]},{"start":{"row":212,"column":0},"end":{"row":212,"column":3},"action":"remove","lines":["// "]},{"start":{"row":213,"column":0},"end":{"row":213,"column":3},"action":"remove","lines":["// "]},{"start":{"row":214,"column":0},"end":{"row":214,"column":3},"action":"remove","lines":["// "]},{"start":{"row":215,"column":0},"end":{"row":215,"column":3},"action":"remove","lines":["// "]},{"start":{"row":216,"column":0},"end":{"row":216,"column":3},"action":"remove","lines":["// "]},{"start":{"row":217,"column":0},"end":{"row":217,"column":3},"action":"remove","lines":["// "]},{"start":{"row":218,"column":0},"end":{"row":218,"column":3},"action":"remove","lines":["// "]},{"start":{"row":219,"column":0},"end":{"row":219,"column":3},"action":"remove","lines":["// "]},{"start":{"row":220,"column":0},"end":{"row":220,"column":3},"action":"remove","lines":["// "]},{"start":{"row":221,"column":0},"end":{"row":221,"column":3},"action":"remove","lines":["// "]},{"start":{"row":223,"column":0},"end":{"row":223,"column":3},"action":"remove","lines":["// "]},{"start":{"row":225,"column":0},"end":{"row":225,"column":3},"action":"remove","lines":["// "]},{"start":{"row":226,"column":0},"end":{"row":226,"column":3},"action":"remove","lines":["// "]},{"start":{"row":227,"column":0},"end":{"row":227,"column":3},"action":"remove","lines":["// "]},{"start":{"row":228,"column":0},"end":{"row":228,"column":3},"action":"remove","lines":["// "]},{"start":{"row":229,"column":0},"end":{"row":229,"column":3},"action":"remove","lines":["// "]},{"start":{"row":231,"column":0},"end":{"row":231,"column":3},"action":"remove","lines":["// "]},{"start":{"row":232,"column":0},"end":{"row":232,"column":3},"action":"remove","lines":["// "]},{"start":{"row":233,"column":0},"end":{"row":233,"column":3},"action":"remove","lines":["// "]},{"start":{"row":234,"column":0},"end":{"row":234,"column":3},"action":"remove","lines":["// "]},{"start":{"row":235,"column":0},"end":{"row":235,"column":3},"action":"remove","lines":["// "]},{"start":{"row":236,"column":0},"end":{"row":236,"column":3},"action":"remove","lines":["// "]},{"start":{"row":237,"column":0},"end":{"row":237,"column":3},"action":"remove","lines":["// "]},{"start":{"row":238,"column":0},"end":{"row":238,"column":3},"action":"remove","lines":["// "]},{"start":{"row":239,"column":0},"end":{"row":239,"column":3},"action":"remove","lines":["// "]},{"start":{"row":240,"column":0},"end":{"row":240,"column":3},"action":"remove","lines":["// "]},{"start":{"row":241,"column":0},"end":{"row":241,"column":3},"action":"remove","lines":["// "]},{"start":{"row":242,"column":0},"end":{"row":242,"column":3},"action":"remove","lines":["// "]},{"start":{"row":243,"column":0},"end":{"row":243,"column":3},"action":"remove","lines":["// "]},{"start":{"row":244,"column":0},"end":{"row":244,"column":3},"action":"remove","lines":["// "]},{"start":{"row":245,"column":0},"end":{"row":245,"column":3},"action":"remove","lines":["// "]},{"start":{"row":246,"column":0},"end":{"row":246,"column":3},"action":"remove","lines":["// "]},{"start":{"row":247,"column":0},"end":{"row":247,"column":3},"action":"remove","lines":["// "]},{"start":{"row":248,"column":0},"end":{"row":248,"column":3},"action":"remove","lines":["// "]},{"start":{"row":249,"column":0},"end":{"row":249,"column":3},"action":"remove","lines":["// "]},{"start":{"row":250,"column":0},"end":{"row":250,"column":3},"action":"remove","lines":["// "]},{"start":{"row":251,"column":0},"end":{"row":251,"column":3},"action":"remove","lines":["// "]}],[{"start":{"row":254,"column":0},"end":{"row":254,"column":3},"action":"insert","lines":["// "],"id":6173},{"start":{"row":256,"column":0},"end":{"row":256,"column":3},"action":"insert","lines":["// "]},{"start":{"row":257,"column":0},"end":{"row":257,"column":3},"action":"insert","lines":["// "]},{"start":{"row":258,"column":0},"end":{"row":258,"column":3},"action":"insert","lines":["// "]},{"start":{"row":259,"column":0},"end":{"row":259,"column":3},"action":"insert","lines":["// "]},{"start":{"row":261,"column":0},"end":{"row":261,"column":3},"action":"insert","lines":["// "]},{"start":{"row":262,"column":0},"end":{"row":262,"column":3},"action":"insert","lines":["// "]},{"start":{"row":263,"column":0},"end":{"row":263,"column":3},"action":"insert","lines":["// "]},{"start":{"row":264,"column":0},"end":{"row":264,"column":3},"action":"insert","lines":["// "]},{"start":{"row":265,"column":0},"end":{"row":265,"column":3},"action":"insert","lines":["// "]},{"start":{"row":266,"column":0},"end":{"row":266,"column":3},"action":"insert","lines":["// "]},{"start":{"row":267,"column":0},"end":{"row":267,"column":3},"action":"insert","lines":["// "]},{"start":{"row":268,"column":0},"end":{"row":268,"column":3},"action":"insert","lines":["// "]},{"start":{"row":269,"column":0},"end":{"row":269,"column":3},"action":"insert","lines":["// "]},{"start":{"row":270,"column":0},"end":{"row":270,"column":3},"action":"insert","lines":["// "]},{"start":{"row":271,"column":0},"end":{"row":271,"column":3},"action":"insert","lines":["// "]},{"start":{"row":272,"column":0},"end":{"row":272,"column":3},"action":"insert","lines":["// "]},{"start":{"row":273,"column":0},"end":{"row":273,"column":3},"action":"insert","lines":["// "]},{"start":{"row":274,"column":0},"end":{"row":274,"column":3},"action":"insert","lines":["// "]},{"start":{"row":275,"column":0},"end":{"row":275,"column":3},"action":"insert","lines":["// "]},{"start":{"row":276,"column":0},"end":{"row":276,"column":3},"action":"insert","lines":["// "]},{"start":{"row":277,"column":0},"end":{"row":277,"column":3},"action":"insert","lines":["// "]},{"start":{"row":279,"column":0},"end":{"row":279,"column":3},"action":"insert","lines":["// "]},{"start":{"row":280,"column":0},"end":{"row":280,"column":3},"action":"insert","lines":["// "]},{"start":{"row":281,"column":0},"end":{"row":281,"column":3},"action":"insert","lines":["// "]},{"start":{"row":283,"column":0},"end":{"row":283,"column":3},"action":"insert","lines":["// "]},{"start":{"row":285,"column":0},"end":{"row":285,"column":3},"action":"insert","lines":["// "]},{"start":{"row":286,"column":0},"end":{"row":286,"column":3},"action":"insert","lines":["// "]},{"start":{"row":287,"column":0},"end":{"row":287,"column":3},"action":"insert","lines":["// "]},{"start":{"row":290,"column":0},"end":{"row":290,"column":3},"action":"insert","lines":["// "]},{"start":{"row":291,"column":0},"end":{"row":291,"column":3},"action":"insert","lines":["// "]},{"start":{"row":292,"column":0},"end":{"row":292,"column":3},"action":"insert","lines":["// "]},{"start":{"row":293,"column":0},"end":{"row":293,"column":3},"action":"insert","lines":["// "]},{"start":{"row":294,"column":0},"end":{"row":294,"column":3},"action":"insert","lines":["// "]},{"start":{"row":295,"column":0},"end":{"row":295,"column":3},"action":"insert","lines":["// "]},{"start":{"row":296,"column":0},"end":{"row":296,"column":3},"action":"insert","lines":["// "]},{"start":{"row":297,"column":0},"end":{"row":297,"column":3},"action":"insert","lines":["// "]},{"start":{"row":298,"column":0},"end":{"row":298,"column":3},"action":"insert","lines":["// "]},{"start":{"row":299,"column":0},"end":{"row":299,"column":3},"action":"insert","lines":["// "]},{"start":{"row":300,"column":0},"end":{"row":300,"column":3},"action":"insert","lines":["// "]},{"start":{"row":301,"column":0},"end":{"row":301,"column":3},"action":"insert","lines":["// "]},{"start":{"row":302,"column":0},"end":{"row":302,"column":3},"action":"insert","lines":["// "]},{"start":{"row":303,"column":0},"end":{"row":303,"column":3},"action":"insert","lines":["// "]},{"start":{"row":304,"column":0},"end":{"row":304,"column":3},"action":"insert","lines":["// "]},{"start":{"row":305,"column":0},"end":{"row":305,"column":3},"action":"insert","lines":["// "]},{"start":{"row":306,"column":0},"end":{"row":306,"column":3},"action":"insert","lines":["// "]},{"start":{"row":307,"column":0},"end":{"row":307,"column":3},"action":"insert","lines":["// "]},{"start":{"row":308,"column":0},"end":{"row":308,"column":3},"action":"insert","lines":["// "]},{"start":{"row":309,"column":0},"end":{"row":309,"column":3},"action":"insert","lines":["// "]},{"start":{"row":310,"column":0},"end":{"row":310,"column":3},"action":"insert","lines":["// "]},{"start":{"row":311,"column":0},"end":{"row":311,"column":3},"action":"insert","lines":["// "]},{"start":{"row":312,"column":0},"end":{"row":312,"column":3},"action":"insert","lines":["// "]},{"start":{"row":313,"column":0},"end":{"row":313,"column":3},"action":"insert","lines":["// "]},{"start":{"row":314,"column":0},"end":{"row":314,"column":3},"action":"insert","lines":["// "]},{"start":{"row":315,"column":0},"end":{"row":315,"column":3},"action":"insert","lines":["// "]},{"start":{"row":316,"column":0},"end":{"row":316,"column":3},"action":"insert","lines":["// "]},{"start":{"row":317,"column":0},"end":{"row":317,"column":3},"action":"insert","lines":["// "]},{"start":{"row":318,"column":0},"end":{"row":318,"column":3},"action":"insert","lines":["// "]},{"start":{"row":319,"column":0},"end":{"row":319,"column":3},"action":"insert","lines":["// "]},{"start":{"row":323,"column":0},"end":{"row":323,"column":3},"action":"insert","lines":["// "]},{"start":{"row":324,"column":0},"end":{"row":324,"column":3},"action":"insert","lines":["// "]},{"start":{"row":325,"column":0},"end":{"row":325,"column":3},"action":"insert","lines":["// "]},{"start":{"row":326,"column":0},"end":{"row":326,"column":3},"action":"insert","lines":["// "]},{"start":{"row":327,"column":0},"end":{"row":327,"column":3},"action":"insert","lines":["// "]},{"start":{"row":328,"column":0},"end":{"row":328,"column":3},"action":"insert","lines":["// "]},{"start":{"row":329,"column":0},"end":{"row":329,"column":3},"action":"insert","lines":["// "]},{"start":{"row":330,"column":0},"end":{"row":330,"column":3},"action":"insert","lines":["// "]},{"start":{"row":331,"column":0},"end":{"row":331,"column":3},"action":"insert","lines":["// "]},{"start":{"row":332,"column":0},"end":{"row":332,"column":3},"action":"insert","lines":["// "]},{"start":{"row":333,"column":0},"end":{"row":333,"column":3},"action":"insert","lines":["// "]},{"start":{"row":334,"column":0},"end":{"row":334,"column":3},"action":"insert","lines":["// "]},{"start":{"row":336,"column":0},"end":{"row":336,"column":3},"action":"insert","lines":["// "]},{"start":{"row":339,"column":0},"end":{"row":339,"column":3},"action":"insert","lines":["// "]},{"start":{"row":343,"column":0},"end":{"row":343,"column":3},"action":"insert","lines":["// "]}],[{"start":{"row":239,"column":26},"end":{"row":240,"column":0},"action":"insert","lines":["",""],"id":6175},{"start":{"row":240,"column":0},"end":{"row":240,"column":8},"action":"insert","lines":["        "]}],[{"start":{"row":240,"column":8},"end":{"row":259,"column":46},"action":"insert","lines":[".on(\"pretransition\", function(chart) {","            chart.selectAll(\"g.y text\")","                .style(\"font-size\", \"12px\");","            chart.selectAll(\"g.x text\")","                .style(\"font-size\", \"12px\");","            chart.select(\"svg\")","                .attr(\"height\", \"100%\")","                .attr(\"width\", \"130%\")","                .attr(\"viewBox\", \"0 0 840 340\");","            chart.selectAll(\".dc-chart text\")","                .attr(\"fill\", \"#E5E5E5\");","            chart.selectAll(\".dc-legend-item text\")","                .attr(\"font-size\", \"15px\")","                .attr(\"fill\", \"white\");","            chart.selectAll(\"line\")","                .style(\"stroke\", \"#E5E5E5\");","            chart.selectAll(\".domain\")","                .style(\"stroke\", \"#E5E5E5\");","            chart.selectAll(\".line\")","                .style(\"stroke-width\", \"2.5\");"],"id":6176}],[{"start":{"row":259,"column":46},"end":{"row":260,"column":0},"action":"insert","lines":["",""],"id":6177},{"start":{"row":260,"column":0},"end":{"row":260,"column":16},"action":"insert","lines":["                "]}],[{"start":{"row":260,"column":12},"end":{"row":260,"column":14},"action":"insert","lines":["})"],"id":6178},{"start":{"row":260,"column":0},"end":{"row":260,"column":12},"action":"remove","lines":["            "]},{"start":{"row":260,"column":0},"end":{"row":260,"column":8},"action":"insert","lines":["        "]}],[{"start":{"row":270,"column":37},"end":{"row":270,"column":38},"action":"insert","lines":["-"],"id":6182}],[{"start":{"row":270,"column":61},"end":{"row":270,"column":62},"action":"insert","lines":["1"],"id":6183}],[{"start":{"row":270,"column":53},"end":{"row":270,"column":54},"action":"remove","lines":["1"],"id":6184},{"start":{"row":270,"column":53},"end":{"row":270,"column":54},"action":"insert","lines":["2"]}],[{"start":{"row":270,"column":30},"end":{"row":270,"column":31},"action":"remove","lines":["3"],"id":6185},{"start":{"row":270,"column":30},"end":{"row":270,"column":31},"action":"insert","lines":["1"]}],[{"start":{"row":270,"column":30},"end":{"row":270,"column":31},"action":"remove","lines":["1"],"id":6186},{"start":{"row":270,"column":30},"end":{"row":270,"column":31},"action":"insert","lines":["4"]}],[{"start":{"row":270,"column":31},"end":{"row":270,"column":32},"action":"remove","lines":["2"],"id":6187},{"start":{"row":270,"column":31},"end":{"row":270,"column":32},"action":"insert","lines":["8"]}],[{"start":{"row":247,"column":33},"end":{"row":247,"column":34},"action":"remove","lines":["3"],"id":6189},{"start":{"row":247,"column":33},"end":{"row":247,"column":34},"action":"insert","lines":["0"]}],[{"start":{"row":232,"column":15},"end":{"row":232,"column":16},"action":"remove","lines":["5"],"id":6190},{"start":{"row":232,"column":15},"end":{"row":232,"column":16},"action":"insert","lines":["6"]}],[{"start":{"row":233,"column":16},"end":{"row":233,"column":17},"action":"remove","lines":["4"],"id":6191},{"start":{"row":233,"column":16},"end":{"row":233,"column":17},"action":"insert","lines":["5"]}],[{"start":{"row":233,"column":17},"end":{"row":233,"column":18},"action":"remove","lines":["5"],"id":6192}],[{"start":{"row":233,"column":17},"end":{"row":233,"column":18},"action":"insert","lines":["0"],"id":6193}],[{"start":{"row":233,"column":16},"end":{"row":233,"column":19},"action":"remove","lines":["500"],"id":6194},{"start":{"row":233,"column":16},"end":{"row":233,"column":17},"action":"insert","lines":["8"]},{"start":{"row":233,"column":17},"end":{"row":233,"column":18},"action":"insert","lines":["0"]},{"start":{"row":233,"column":18},"end":{"row":233,"column":19},"action":"insert","lines":["0"]}],[{"start":{"row":233,"column":16},"end":{"row":233,"column":17},"action":"remove","lines":["8"],"id":6195}],[{"start":{"row":233,"column":16},"end":{"row":233,"column":17},"action":"insert","lines":["7"],"id":6196}],[{"start":{"row":271,"column":47},"end":{"row":271,"column":48},"action":"insert","lines":["3"],"id":6200}],[{"start":{"row":271,"column":47},"end":{"row":271,"column":48},"action":"remove","lines":["3"],"id":6201}],[{"start":{"row":271,"column":47},"end":{"row":271,"column":48},"action":"insert","lines":["1"],"id":6202},{"start":{"row":271,"column":48},"end":{"row":271,"column":49},"action":"insert","lines":["1"]}],[{"start":{"row":271,"column":48},"end":{"row":271,"column":49},"action":"remove","lines":["1"],"id":6203}],[{"start":{"row":270,"column":30},"end":{"row":270,"column":31},"action":"remove","lines":["4"],"id":6204},{"start":{"row":270,"column":30},"end":{"row":270,"column":31},"action":"insert","lines":["5"]}],[{"start":{"row":242,"column":38},"end":{"row":242,"column":39},"action":"remove","lines":["2"],"id":6205},{"start":{"row":242,"column":38},"end":{"row":242,"column":39},"action":"insert","lines":["8"]}],[{"start":{"row":244,"column":38},"end":{"row":244,"column":39},"action":"remove","lines":["2"],"id":6206},{"start":{"row":244,"column":38},"end":{"row":244,"column":39},"action":"insert","lines":["8"]}],[{"start":{"row":252,"column":37},"end":{"row":252,"column":38},"action":"remove","lines":["5"],"id":6207},{"start":{"row":252,"column":37},"end":{"row":252,"column":38},"action":"insert","lines":["8"]}],[{"start":{"row":271,"column":58},"end":{"row":271,"column":59},"action":"remove","lines":["3"],"id":6208}],[{"start":{"row":271,"column":58},"end":{"row":271,"column":59},"action":"insert","lines":["5"],"id":6209}]]},"ace":{"folds":[],"scrolltop":3607.5625,"scrollleft":0,"selection":{"start":{"row":271,"column":59},"end":{"row":271,"column":59},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":189,"state":"no_regex","mode":"ace/mode/javascript"}},"timestamp":1568198608255,"hash":"1ef389f92a0699f34e37168a3dfa761e9018b570"}