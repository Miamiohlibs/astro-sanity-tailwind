async function getData() {

    await axios
        .get('https://www.lib.miamioh.edu:3012/patronapi', {
            crossDomain: true
        })
        .then(res => {
            var patronNumber = parseInt(res.data.patrons);
            if (patronNumber < 0) {
                $("#crowdIndex").html("Temporarily out of service");
            } else {
            // Change the max capacity number at here!!!
            const MAX_CAPACITY = 550; // Talked to Mike on Dec1 2023. Total capacity has reduced the construction part on first floow. Need to re-adjust when constructions completed.
            const BAR_INTERVAL = MAX_CAPACITY / 15;

            var percentageOcc = patronNumber / (MAX_CAPACITY / 100);
            var maxmod = percentageOcc % 10 > 5 ? 10 : 5;
            var maxOcc = Math.floor(percentageOcc/10)*10 + maxmod;
            var minOcc = parseInt(maxOcc)-5;
            $("#crowdIndex").html('Estimated ' + minOcc + ' - ' + maxOcc + '%');

            var linearScale = d3.scaleLinear()
                .domain([0, MAX_CAPACITY])
                .range([0, 255]);

            var sequentialScale = d3.scaleSequential()
                .domain([MAX_CAPACITY, 0]);

            var interpolators = ["interpolateRdYlGn"];

            var myData = d3.range(0, patronNumber, BAR_INTERVAL);
            var maxData = d3.range(0, MAX_CAPACITY, BAR_INTERVAL);

            function dots(d) {
                sequentialScale
                    .interpolator(d3[d]);

                d3.select(this)
                    .selectAll('rect')
                    .data(myData)
                    .enter()
                    .append('rect')
                    .attr('x', function (d) {
                        return linearScale(d);
                    })
                    .attr('width', 15)
                    .attr('height', 30)
                    .style('fill', function (d) {
                        return sequentialScale(d);
                    });
            }

            function maxDots(d) {
                sequentialScale
                    .interpolator(d3[d]);

                d3.select(this)
                    .selectAll('rect')
                    .data(maxData)
                    .enter()
                    .append('rect')
                    .style("stroke", "black")
                    .attr('x', function (d) {
                        return linearScale(d);
                    })
                    .attr('width', 15)
                    .attr('height', 30)
                    .style('fill', function (d) {
                        return sequentialScale(d);
                    })
                    .attr("class", "maxDot");
            }

            d3.select('#wrapper')
                .selectAll('g.interpolator')
                .data(interpolators)
                .enter()
                .append('g')
                .classed('interpolator', true)
                .each(dots)
                .each(maxDots);

            d3.selectAll('.maxDot')
                .style("opacity", 0.1);

            var theMeter = $('svg#crowdBar');
            theMeter[0].setAttribute('aria-label', Math.floor(percentageOcc) + "% capacity");
        }
        }).catch(error => {
            console.log('error', error);
            $("#crowdIndex").html("Temporarily out of service");
        });
}