
 queue()
    .defer(d3.csv, "data/game_highs_stats.csv") 
    .await(makeGraphs);//only function name is needed
 
function makeGraphs( error, game_stats) {
    console.log(game_stats);
    var ndx = crossfilter(game_stats);
    
    
    game_stats.forEach(function(d){
        
        // d.yrs_since_phd = parseInt(d["yrs.since.phd"]);
        // d.yrs_service = parseInt(d["yrs.service"]);
})
show_highest_points(ndx);

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