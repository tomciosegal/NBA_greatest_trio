queue()
    .defer(d3.csv, "data/game_highs_stats.csv")
    .defer(d3.csv, "data/salaries.csv")
    .defer(d3.csv, "data/totals_stats.csv")
    .await(makeGraphs);

function makeGraphs(error, game_stats, salaries, totals) {
    var ndx = crossfilter(game_stats);
    var ndx1 = crossfilter(salaries);
    var ndx2 = crossfilter(totals);
    
    show_player_selector(ndx)
    show_highest_points(ndx);
    show_salaries(ndx1);
    show_regular_season_points_vs_playoffs(ndx2);
    
    dc.renderAll();

}

function show_player_selector(ndx){
    var dim = ndx.dimension(dc.pluck('Player'));
    var group = dim.group();
    
    dc.selectMenu("#player-selector")
    .dimension(dim)
    .group(group);
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
        .yAxisLabel("Points")
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

function show_salaries(ndx1){
    var playerColors=d3.scale.ordinal()
    .domain(["Micheal Jordan","Kobe Bryant", "Lebron James"])
    .range (["red", "blue", "green"]);

    var eDim= ndx1.dimension(dc.pluck("Salary"));
    var salaryDim= ndx1.dimension(function(d){
        
        return [new Date(Number(d.Season.slice(0, -3)), 0, 1), Number(d.Salary), d.Player];

    })
    var salaryPlayerGroup= salaryDim.group();
    var minSeason  = eDim.bottom(1)[0].Age;
    var maxSeason= eDim.top(1)[0].Age;

    dc.scatterPlot("#salary-vs-season")
    .width(800)
        .height(400)
        .x(d3.time.scale().domain([new Date(minSeason, 0, 1), new Date(maxSeason, 0, 1)]))
        .brushOn(false)
        .symbolSize(8)
        .clipPadding(10)
        .xAxisLabel("Season")
        .yAxisLabel("Salary USD")
        .title(function(d) {
            return d.key[2] + d.key[1];
        })
        .colorAccessor(function (d) {
            return d.key[2];
        })
        .colors(playerColors)
        .dimension(salaryDim)
        .group(salaryPlayerGroup)
        .margins({top: 10, right: 50, bottom: 75, left: 75});
} 

 function show_regular_season_points_vs_playoffs(ndx2) {
            var name_dim = ndx2.dimension(dc.pluck('Player'));
            var total_points_per_player = name_dim.group().reduceSum(dc.pluck('PTS'));
             
            dc.pieChart('#points-season-playoffs')
                .height(600)
                .radius(400)
                .transitionDuration(1500)
                .dimension(name_dim)
                .group(total_points_per_player);
                
            
 }



    

 


