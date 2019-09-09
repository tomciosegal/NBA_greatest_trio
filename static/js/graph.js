queue()
    .defer(d3.csv, "data/game_highs_stats.csv")
    .defer(d3.csv, "data/salaries.csv")
    .defer(d3.csv, "data/totals_stats.csv")
    .await(makeGraphs);

function makeGraphs(error, game_stats, salaries, totals) {
    var ndx = crossfilter(game_stats);
    var ndx1 = crossfilter(salaries);
    var ndx2 = crossfilter(totals);

    totals.forEach((d, index) => {
        d.Season = new Date(Number(d.Season.slice(0, -3)), 0, 1);
    })
    var i = 0;
    var j = 0;
    var k = 0;
    totalsForMJ = [];
    totalsForKB = [];
    totalsForLJ = [];
    totals.forEach((d, index) => {
        if (d.Player === 'Michael Jordan') {
            totalsForMJ[i] = d;
            i = i + 1;
        }
        else if (d.Player === 'Kobe Bryant') {
            totalsForKB[j] = d;
            j = j + 1;
        }
        else {
            totalsForLJ[k] = d;
            k = k + 1;
        }
    });

    show_player_selector(ndx, ndx1);
    show_highest_points(ndx);
    show_salaries(ndx1);
    show_total_points(ndx2);
    show_teams_played(ndx2);
    show_main_stats_career_MJ(totalsForMJ);
    show_main_stats_career_KB(totalsForKB);
    show_main_stats_career_LJ(totalsForLJ);
    showTotalNumberOfGamesPlayedMJ(totalsForMJ);
    showTotalNumberOfGamesPlayedKB(totalsForKB);
    showTotalNumberOfGamesPlayedLJ(totalsForLJ);

    dc.renderAll();

}

const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
})


function show_player_selector(ndx, ndx1, ndx2) {
    var dim = ndx.dimension(dc.pluck('Player'));
    var group = dim.group();
    var dim1 = ndx1.dimension(dc.pluck('Player'));
    var group1 = dim1.group();

    dc.selectMenu("#player-selector")
        .dimension(dim)
        .group(group)
}

function show_highest_points(ndx) {
    var playerColors = d3.scale.ordinal()
        .domain(["Michael Jordan", "Kobe Bryant", "Lebron James"])
        .range(["#e22b22bf", "#ffe854b5", "#13a3547d"]);

    var eDim = ndx.dimension(dc.pluck("Season"));
    var seasonDim = ndx.dimension(function(d) {
        return [new Date(Number(d.Season.slice(0, -3)), 0, 1), Number(d.PTS), (d.Player)];

    })
    var seasonPlayerGroup = seasonDim.group();
    var minSeason = Number(eDim.bottom(1)[0].Season.slice(0, -3));
    var maxSeason = Number(eDim.top(1)[0].Season.slice(0, -3));

    dc.scatterPlot("#highest-points-per-season")
        .width(600)
        .height(400)
        .x(d3.time.scale().domain([new Date(minSeason, 0, 1), new Date(maxSeason, 0, 1)]))
        .brushOn(false)
        .symbolSize(8)
        .clipPadding(10)
        .xAxisLabel("Season")
        .yAxisLabel("Points")
        .title(function(d) {
            return d.key[2] + ': ' + d.key[1] + ' Points';
        })

        .colorAccessor(function(d) {
            return d.key[2];
        })
        .colors(playerColors)
        .dimension(seasonDim)
        .group(seasonPlayerGroup)
        .margins({ top: 15, right: 40, bottom: 75, left: 120 })
        .on("pretransition", function(chart) {
            chart.selectAll("g.y text")
                .style("font-size", "12px");
            chart.selectAll("g.x text")
                .style("font-size", "12px");
            chart.selectAll(".dc-chart text")
                .attr("fill", "#E5E5E5");
            chart.selectAll(".dc-legend-item text")
                .attr("font-size", "15px")
                .attr("fill", "white");
            chart.selectAll("line")
                .style("stroke", "#E5E5E5");
            chart.selectAll(".domain")
                .style("stroke", "#E5E5E5");
            chart.selectAll(".line")
                .style("stroke-width", "2.5");
        });
}

function show_salaries(ndx1) {
    var playerColors = d3.scale.ordinal()
        .domain(["Michael Jordan", "Kobe Bryant", "Lebron James"])
        .range(["#e22b22bf", "#ffe854b5", "#13a3547d"]);
    var eDim = ndx1.dimension(dc.pluck("Season"));
    var salaryDim = ndx1.dimension(function(d) {

        return [new Date(Number(d.Season.slice(0, -3)), 0, 1), Number(d.Salary.slice(1)), d.Player];

    })
    var salaryPlayerGroup = salaryDim.group();
    var minSeason = eDim.bottom(1)[0].Season.slice(0, -3);
    var maxSeason = eDim.top(1)[0].Season.slice(0, -3);

    dc.scatterPlot("#salary-vs-season")
        .width(600)
        .height(400)
        .x(d3.time.scale().domain([new Date(minSeason, 0, 1), new Date(maxSeason, 0, 1)]))
        .brushOn(false)
        .symbolSize(8)
        .clipPadding(10)
        .xAxisLabel("Season")
        .yAxisLabel("Salary USD")
        .title(function(d) {
            return d.key[2] + ' ' + formatter.format(d.key[1]);
        })
        .colorAccessor(function(d) {
            return d.key[2];
        })
        .colors(playerColors)
        .dimension(salaryDim)
        .group(salaryPlayerGroup)
        .margins({ top: 10, right: 50, bottom: 75, left: 140 })
         .on("pretransition", function(chart) {
            chart.selectAll("g.y text")
                .style("font-size", "12px");
            chart.selectAll("g.x text")
                .style("font-size", "12px");
            chart.selectAll(".dc-chart text")
                .attr("fill", "#E5E5E5");
            chart.selectAll(".dc-legend-item text")
                .attr("font-size", "15px")
                .attr("fill", "white");
            chart.selectAll("line")
                .style("stroke", "#E5E5E5");
            chart.selectAll(".domain")
                .style("stroke", "#E5E5E5");
            chart.selectAll(".line")
                .style("stroke-width", "2.5");
        });
}

function show_total_points(ndx2) {
    var name_dim = ndx2.dimension(dc.pluck('Player'));
    var total_points_per_player = name_dim.group().reduceSum(dc.pluck('PTS'));
    var playerColors = d3.scale.ordinal()
        .domain(["Michael Jordan", "Kobe Bryant", "Lebron James"])
        .range(["#e22b22bf", "#ffe854b5", "#13a3547d"]);



    dc.pieChart('#points-season-playoffs')
        .height(540)
        .radius(400)
        .colors(playerColors)
        .transitionDuration(1500)
        .dimension(name_dim)
        .group(total_points_per_player)
        
        .title(function(d) {
            return d.key + ': ' + d.value + ' Points';
        });


}

//  function show_teams_played(ndx2) {

//      function teamByPlayers(dimension, team) {
//         return dimension.group().reduce(
//             function (p, v) {
//                 p.total++;

//                 if(v.Tm == team) {
//                     p.match++;
//                 }
//                 return p;
//             },
//             function (p, v) {
//                 p.total--;
//                 if(v.Tm == team) {
//                     p.match--;
//                 }
//                 return p;
//             },
//             function () {
//                 return {total: 0, match: 0};
//             }
//         );
//     }

//     var dim = ndx2.dimension(dc.pluck("Player"));

//     var chi = teamByPlayers(dim, "CHI");
//     var cle = teamByPlayers(dim, "CLE");
//     var lal = teamByPlayers(dim, "LAL");
//     var mia = teamByPlayers(dim, "MIA");
//     var was = teamByPlayers(dim, "WAS");

//     dc.barChart("#show_teams_played")
//         .width(550)
//         .height(450)
//         .dimension(dim)
//         .group(chi, "CHI")
//         .stack(cle, "CLE")
//         .stack(lal, "LAL")
//         .stack(mia, "MIA")
//         .stack(was, "WAS")
//         .valueAccessor(function(d) {
//             if(d.value.total > 0) {
//                 return parseFloat(parseFloat((d.value.match / d.value.total) * 100).toFixed(2));
//             } else {
//                 return 0;
//             }
//         })
//         .x(d3.scale.ordinal())
//         .xUnits(dc.units.ordinal)
//         .legend(dc.legend().x(320).y(20).itemHeight(15).gap(5))
//         .margins({top: 10, right: 100, bottom: 30, left: 30});
// }


function show_teams_played(ndx2) {

    function teamByPlayers(dimension, player) {
        return dimension.group().reduce(
            function(p, v) {
                p.total++;

                if (v.Player == player) {
                    p.match++;
                }
                return p;
            },
            function(p, v) {
                p.total--;
                if (v.Player == player) {
                    p.match--;
                }
                return p;
            },
            function() {
                return { total: 0, match: 0 };
            }
        );
    }

    var playerColors = d3.scale.ordinal()
        .domain(["Michael Jordan", "Kobe Bryant", "Lebron James"])
        .range(["#e22b22bf", "#ffe854b5", "#13a3547d"]);

    var dim = ndx2.dimension(dc.pluck("Tm"));

    var mj = teamByPlayers(dim, "Michael Jordan");
    var kb = teamByPlayers(dim, "Kobe Bryant");
    var lj = teamByPlayers(dim, "Lebron James");


    dc.barChart("#show_teams_played")
        .width(600)
        .height(500)
        .colors(playerColors)
        .dimension(dim)
        .xAxisLabel("Teams")
        .group(mj, "Micheal Jordan")
        .stack(kb, "Kobe Bryant")
        .stack(lj, "Lebron James")
        .on("pretransition", function(chart) {
            chart.selectAll("g.y text")
                .style("font-size", "12px");
            chart.selectAll("g.x text")
                .style("font-size", "12px");
            chart.select("svg")
                .attr("height", "100%")
                .attr("width", "130%")
                .attr("viewBox", "0 0 840 340");
            chart.selectAll(".dc-chart text")
                .attr("fill", "#E5E5E5");
            chart.selectAll(".dc-legend-item text")
                .attr("font-size", "15px")
                .attr("fill", "white");
            chart.selectAll("line")
                .style("stroke", "#E5E5E5");
            chart.selectAll(".domain")
                .style("stroke", "#E5E5E5");
            chart.selectAll(".line")
                .style("stroke-width", "2.5");
        })
        


    .valueAccessor(function(d) {
            if (d.value.total > 0) {
                return parseFloat(parseFloat((d.value.match / d.value.total) * 100).toFixed(2));
            }
            else {
                return 0;
            }
        })
        .x(d3.scale.ordinal())
        .xUnits(dc.units.ordinal)
        .legend(dc.legend().x(400).y(-100).itemHeight(15).gap(20)
        )
        
        .margins({ top: 10, right: 100, bottom: 120, left: 40 })
        

    ;



}

function show_main_stats_career_MJ(totalsForMJ) {


    var ndx2 = crossfilter(totalsForMJ);

    let dim = ndx2.dimension(dc.pluck("Season"));
    let ast = dim.group().reduceSum(dc.pluck("AST"));
    let stl = dim.group().reduceSum(dc.pluck("STL"));
    let blk = dim.group().reduceSum(dc.pluck("BLK"));

    // var seasonPlayerGroup = seasonDim.group();

    let minSeason = dim.bottom(1)[0].Season;
    let maxSeason = dim.top(1)[0].Season;

    let composite = dc.compositeChart("#show_points_over_career_MJ");

    composite
        .width(640)
        .height(310)
        .margins({ top: 10, right: 60, bottom: 50, left: 45 })
        .dimension(dim)
        .elasticY(true)
        .legend(dc.legend().x(230).y(320).itemHeight(15).gap(5)
            .horizontal(true).itemWidth(100))
        .x(d3.time.scale().domain([new Date(minSeason, 0, 1), new Date(maxSeason, 0, 1)]))
        .y(d3.scale.linear())
        .transitionDuration(500)
        .shareTitle(false)
        .on("renderlet", (function(chart) {
            chart.selectAll(".dot")
                .style("cursor", "pointer");
        }))
        .on("pretransition", function(chart) {
            chart.selectAll("g.y text")
                .style("font-size", "12px");
            chart.selectAll("g.x text")
                .style("font-size", "12px");
            chart.select("svg")
                .attr("height", "100%")
                .attr("width", "130%")
                .attr("viewBox", "0 0 840 340");
            chart.selectAll(".dc-chart text")
                .attr("fill", "#E5E5E5");
            chart.selectAll(".dc-legend-item text")
                .attr("font-size", "15px")
                .attr("fill", "white");
            chart.selectAll("line")
                .style("stroke", "#E5E5E5");
            chart.selectAll(".domain")
                .style("stroke", "#E5E5E5");
            chart.selectAll(".line")
                .style("stroke-width", "2.5");
        })
        .compose([
            dc.lineChart(composite)
            .group(ast, "Assist")
            .interpolate("monotone")
            .title(function(d) {
                let numberWithCommas = d.value.toLocaleString();
                return numberWithCommas + " assists";
            })
            .colors("#ff7e0e")
            .dotRadius(15)
            .renderDataPoints({ radius: 6 }),
            dc.lineChart(composite)
            .interpolate("monotone")
            .group(stl, "Steal")
            .title(function(d) {
                let numberWithCommas = d.value.toLocaleString();
                return numberWithCommas + " steals";
            })
            .colors("#d95350")
            .dotRadius(15)
            .renderDataPoints({ radius: 6 }),
            dc.lineChart(composite)
            .group(blk, "Block")
            .interpolate("monotone")
            .title(function(d) {
                let numberWithCommas = d.value.toLocaleString();
                return numberWithCommas + "blocks";
            })
            .colors("#1e77b4")
            .dotRadius(15)
            .renderDataPoints({ radius: 6 })
        ])
        .brushOn(false)
        .yAxisPadding("5%")
        .elasticX(true)
        .xAxisPadding("8%")


    composite.yAxis().ticks(5).outerTickSize(0);
}



function show_main_stats_career_KB(totalsForKB) {


    var ndx2 = crossfilter(totalsForKB);

    let dim = ndx2.dimension(dc.pluck("Season"));
    let ast = dim.group().reduceSum(dc.pluck("AST"));
    let stl = dim.group().reduceSum(dc.pluck("STL"));
    let blk = dim.group().reduceSum(dc.pluck("BLK"));

    // var seasonPlayerGroup = seasonDim.group();

    let minSeason = dim.bottom(1)[0].Season;
    let maxSeason = dim.top(1)[0].Season;

    let composite = dc.compositeChart("#show_points_over_career_KB");

    composite
        .width(640)
        .height(310)
        .margins({ top: 10, right: 60, bottom: 50, left: 45 })
        .dimension(dim)
        .elasticY(true)
        .legend(dc.legend().x(230).y(320).itemHeight(15).gap(5)
            .horizontal(true).itemWidth(100))
        .x(d3.time.scale().domain([new Date(minSeason, 0, 1), new Date(maxSeason, 0, 1)]))
        .y(d3.scale.linear())
        .transitionDuration(500)
        .shareTitle(false)
        .on("renderlet", (function(chart) {
            chart.selectAll(".dot")
                .style("cursor", "pointer");
        }))
        .on("pretransition", function(chart) {
            chart.selectAll("g.y text")
                .style("font-size", "12px");
            chart.selectAll("g.x text")
                .style("font-size", "12px");
            chart.select("svg")
                .attr("height", "100%")
                .attr("width", "130%")
                .attr("viewBox", "0 0 840 340");
            chart.selectAll(".dc-chart text")
                .attr("fill", "#E5E5E5");
            chart.selectAll(".dc-legend-item text")
                .attr("font-size", "15px")
                .attr("fill", "white");
            chart.selectAll("line")
                .style("stroke", "#E5E5E5");
            chart.selectAll(".domain")
                .style("stroke", "#E5E5E5");
            chart.selectAll(".line")
                .style("stroke-width", "2.5");
        })
        .compose([
            dc.lineChart(composite)
            .group(ast, "Assist")
            .interpolate("monotone")
            .title(function(d) {
                let numberWithCommas = d.value.toLocaleString();
                return numberWithCommas + " assists";
            })
            .colors("#ff7e0e")
            .dotRadius(10)
            .renderDataPoints({ radius: 4 }),
            dc.lineChart(composite)
            .interpolate("monotone")
            .group(stl, "Steal")
            .title(function(d) {
                let numberWithCommas = d.value.toLocaleString();
                return numberWithCommas + " steals";
            })
            .colors("#d95350")
            .dotRadius(10)
            .renderDataPoints({ radius: 4 }),
            dc.lineChart(composite)
            .group(blk, "Block")
            .interpolate("monotone")
            .title(function(d) {
                let numberWithCommas = d.value.toLocaleString();
                return numberWithCommas + "blocks";
            })
            .colors("#1e77b4")
            .dotRadius(10)
            .renderDataPoints({ radius: 4 })
        ])
        .brushOn(false)
        .yAxisPadding("5%")
        .elasticX(true)
        .xAxisPadding("8%")


    composite.yAxis().ticks(5).outerTickSize(0);
}







function show_main_stats_career_LJ(totalsForLJ) {


    var ndx2 = crossfilter(totalsForLJ);

    let dim = ndx2.dimension(dc.pluck("Season"));
    let ast = dim.group().reduceSum(dc.pluck("AST"));
    let stl = dim.group().reduceSum(dc.pluck("STL"));
    let blk = dim.group().reduceSum(dc.pluck("BLK"));

    // var seasonPlayerGroup = seasonDim.group();

    let minSeason = dim.bottom(1)[0].Season;
    let maxSeason = dim.top(1)[0].Season;

    let composite = dc.compositeChart("#show_points_over_career_LJ");

    composite
        .width(640)
        .height(310)
        .margins({ top: 10, right: 60, bottom: 50, left: 45 })
        .dimension(dim)
        .elasticY(true)
        .legend(dc.legend().x(230).y(320).itemHeight(15).gap(5)
            .horizontal(true).itemWidth(100))
        .x(d3.time.scale().domain([new Date(minSeason, 0, 1), new Date(maxSeason, 0, 1)]))
        .y(d3.scale.linear())
        .transitionDuration(500)
        .shareTitle(false)
        .on("renderlet", (function(chart) {
            chart.selectAll(".dot")
                .style("cursor", "pointer");
        }))
        .on("pretransition", function(chart) {
            chart.selectAll("g.y text")
                .style("font-size", "12px");
            chart.selectAll("g.x text")
                .style("font-size", "12px");
            chart.select("svg")
                .attr("height", "100%")
                .attr("width", "130%")
                .attr("viewBox", "0 0 840 340");
            chart.selectAll(".dc-chart text")
                .attr("fill", "#E5E5E5");
            chart.selectAll(".dc-legend-item text")
                .attr("font-size", "15px")
                .attr("fill", "white");
            chart.selectAll("line")
                .style("stroke", "#E5E5E5");
            chart.selectAll(".domain")
                .style("stroke", "#E5E5E5");
            chart.selectAll(".line")
                .style("stroke-width", "2.5");
        })
        .compose([
            dc.lineChart(composite)
            .group(ast, "Assist")
            .interpolate("monotone")
            .title(function(d) {
                let numberWithCommas = d.value.toLocaleString();
                return numberWithCommas + " assists";
            })
            .colors("#ff7e0e")
            .dotRadius(10)
            .renderDataPoints({ radius: 4 }),
            dc.lineChart(composite)
            .interpolate("monotone")
            .group(stl, "Steal")
            .title(function(d) {
                let numberWithCommas = d.value.toLocaleString();
                return numberWithCommas + " steals";
            })
            .colors("#d95350")
            .dotRadius(10)
            .renderDataPoints({ radius: 4 }),
            dc.lineChart(composite)
            .group(blk, "Block")
            .interpolate("monotone")
            .title(function(d) {
                let numberWithCommas = d.value.toLocaleString();
                return numberWithCommas + "blocks";
            })
            .colors("#1e77b4")
            .dotRadius(10)
            .renderDataPoints({ radius: 4 })
        ])
        .brushOn(false)
        .yAxisPadding("5%")
        .elasticX(true)
        .xAxisPadding("8%")


    composite.yAxis().ticks(5).outerTickSize(0);
}



function showTotalNumberOfGamesPlayedMJ(totalsForMJ) {
    let ndx2 = crossfilter(totalsForMJ);
    let dim = ndx2.dimension(dc.pluck("Player"));
    let totalGames = dim.group().reduceSum(dc.pluck("G"));

    dc.numberDisplay("#totalNumberOfGamesPlayedMJ")
        .formatNumber(d3.format(",.0f"))
        .group(totalGames)
        .valueAccessor(function(d) {
            return (d.value);
        });
}

function showTotalNumberOfGamesPlayedKB(totalsForKB) {
    let ndx2 = crossfilter(totalsForKB);
    let dim = ndx2.dimension(dc.pluck("Player"));
    let totalGames = dim.group().reduceSum(dc.pluck("G"));

    dc.numberDisplay("#totalNumberOfGamesPlayedKB")
        .formatNumber(d3.format(",.0f"))
        .group(totalGames)
        .valueAccessor(function(d) {
            return (d.value);
        });
}

function showTotalNumberOfGamesPlayedLJ(totalsForLJ) {
    let ndx2 = crossfilter(totalsForLJ);
    let dim = ndx2.dimension(dc.pluck("Player"));
    let totalGames = dim.group().reduceSum(dc.pluck("G"));

    dc.numberDisplay("#totalNumberOfGamesPlayedLJ")
        .formatNumber(d3.format(",.0f"))
        .group(totalGames)
        .valueAccessor(function(d) {
            return (d.value);
        });
}
