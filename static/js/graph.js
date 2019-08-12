
queue()
    .defer(d3.csv, "data/game_highs_stats.csv") 
    .defer(d3.csv, "data/salaries.csv")
    .await(makeGraphs);//only function name is needed
 
function makeGraphs( error, game_stats,salaries) {
    console.log(game_stats);
    var ndx = crossfilter(game_stats);
    var ndx1 = crossfilter(salaries);
    
    game_stats.forEach(function(d){
      d.Season=parseInt(d.Season);
})


    salaries.forEach(function(d){
      d.Season=parseInt(d.Season);
})


show_highest_points(ndx);
show_salaries(ndx1);
}
function show_highest_points(ndx){
    var playerColors=d3.scale.ordinal()
    .domain(["Micheal Jordan","Kobe Bryant", "Lebron James"])
    .range (["red", "blue", "green"]);
    
    var eDim= ndx.dimension(dc.pluck("Season"));
    var seasonDim= ndx.dimension(function(d){
        return [d.season, d.PTS, d.Player];
        
    })
    var seasonPlayerGroup= seasonDim.group();
    var minSeason= eDim.bottom(1)[0].Season;
    var maxSeason= eDim.top(1)[0].Season;
    
    dc.scatterPlot("#highest-points-per-season")
    .width(800)
        .height(400)
        .x(d3.scale.linear().domain([minSeason, maxSeason]))
        .brushOn(false)
        .symbolSize(8)
        .clipPadding(10)
        .xAxisLabel("Season")
        .title(function(d) {
            return d.key[2] + d.key[1];
        })
        .colorAccessor(function (d) {
            return d.key[2];
        })
        .colors(playerColors)
        .dimension(seasonDim)
        .group(seasonPlayerGroup)
        .margins({top: 10, right: 50, bottom: 75, left: 75});
}

function show_salaries(ndx){
    var playerColors=d3.scale.ordinal()
    .domain(["Micheal Jordan","Kobe Bryant", "Lebron James"])
    .range (["red", "blue", "green"]);
    
    var eDim= ndx.dimension(dc.pluck("Season"));
    var seasonDim= ndx.dimension(function(d){
        return [d.season, d.Salary, d.Player];
        
    })
    var seasonPlayerGroup= seasonDim.group();
    var minSeason= eDim.bottom(1)[0].Season;
    var maxSeason= eDim.top(1)[0].Season;
    
    dc.scatterPlot("#salary-per-season")
    .width(800)
        .height(400)
        .x(d3.scale.linear().domain([minSeason, maxSeason]))
        .brushOn(false)
        .symbolSize(8)
        .clipPadding(10)
        .xAxisLabel("Season")
        .title(function(d) {
            return d.key[2] + d.key[1];
        })
        .colorAccessor(function (d) {
            return d.key[2];
        })
        .colors(playerColors)
        .dimension(seasonDim)
        .group(seasonPlayerGroup)
        .margins({top: 10, right: 50, bottom: 75, left: 75});
}