queue()
    .defer(d3.csv, "data/game_highs_stats.csv")
    .await(makeGraphs);

function makeGraphs(error, game_stats) {
    var ndx = crossfilter(game_stats);
    show_highest_points(ndx);
    
    dc.renderAll();

}
function show_highest_points(ndx) {
    var playerColors = d3.scale.ordinal()
        .domain(["Michael Jordan", "Kobe Bryant", "Lebron James"])
        .range(["red", "blue", "green"]);

    var eDim = ndx.dimension(dc.pluck("Season"));
    var seasonDim = ndx.dimension(function (d) {
        return [new Date(Number(d.Season.slice(0, -3)), 0, 1), Number(d.PTS), d.Player];

    })
    var seasonPlayerGroup = seasonDim.group();
    var minSeason = Number(eDim.bottom(1)[0].Season.slice(0, -3));
    var maxSeason = Number(eDim.top(1)[0].Season.slice(0, -3));

    dc.scatterPlot("#highest-points-per-season")
        .width(800)
        .height(400)
        .x(d3.time.scale().domain([new Date(minSeason, 0, 1), new Date(maxSeason, 0, 1)]))
        .brushOn(false)
        .symbolSize(8)
        .clipPadding(10)
        .xAxisLabel("Season")
        .title(function (d) {
            return d.key[2] + ' ' + d.key[1];
        })
        .colorAccessor(function (d) {
            return d.key[2];
        })
        .colors(playerColors)
        .dimension(seasonDim)
        .group(seasonPlayerGroup)
        .margins({ top: 10, right: 50, bottom: 75, left: 75 });
}