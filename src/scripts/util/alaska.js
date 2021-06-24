import AK from '../../../alaska_500k.js';
import {renderAreaChart} from './area_chart.js'

const width = window.innerWidth;
const height = window.innerHeight;
const alaskaGeoJson = {
  "type": "FeatureCollection",
  "features": [AK]
}

export const projection = d3.geoMercator()
  .fitExtent(
    [
      [10, 10],
      [width - 10, height - 10],
    ],
    alaskaGeoJson
  )

export const areas = [
    {
      title: "Kotzebue", 
      rect: [
        [-160.91609582550768, 66.02147958101679],
        [-164.173980182047, 66.02147958101679],
        [-164.173980182047, 67.15792670591507],
        [-160.91609582550768, 67.15792670591507],
        [-160.91609582550768, 66.02147958101679]
      ], 
      line: [
        [-162.75075500093894, 66.61030936350049], 
        [-165.45638539991677, 67.35511868130742]
      ]
    },
    {
      title: "Kuskokwim", 
      rect: [
        [-161.58038969052865, 59.06568291400549],
        [-164.385943, 59.06568291400549],
        [-164.385943, 60.449060],
        [-161.58038969052865, 60.449060],
        [-161.58038969052865, 59.06568291400549]
      ], 
      line: [
        [-162.61288934041147, 59.619327200001266], 
        [-166.30680136604542, 58.406451176287135]
      ]
      },
    {
      title: "Norton Sound", 
      rect: [
        [-160.6956461387262, 63.32838529717731],
        [-166.516336, 63.32838529717731],
        [-166.516336, 64.972821],
        [-160.6956461387262, 64.972821],
        [-160.6956461387262, 63.32838529717731]
      ], 
      line: [
        [-162.46535519863104, 64.05190962382768], 
        [-168.14628799425125, 64.24863325775765]
      ]
    },
    {
      title: "Yukon River", 
      identifier: "Yukon",
      rect: [
        [-163.079208, 62.52892775998075],
        [-165.0640988907766, 62.52892775998075],
        [-165.0640988907766, 63.258378298296215],
        [-163.079208, 63.258378298296215],
        [-163.079208, 62.52892775998075]
      ], 
      line: [
        [-165.50660311305106, 62.643382583042005], 
        [-169.15500534976613, 62.288268861541745]
      ]
    },
    {
      title: "Bristol Bay", 
      rect: [
        [-156.941329, 56.965199170004965],
        [-162.05625724615115, 56.965199170004965],
        [-162.05625724615115, 59.036099],
        [-156.941329, 59.036099],
        [-156.941329, 56.965199170004965]
      ], 
      line: [
        [-159.07000261214498, 58.06911606091179], 
        [-152.00712708274554, 66.55522673411546]
      ]
    },
    {
      title: "Cook Inlet", 
      rect: [
        [-154.26499773972284, 59.07109314036479],
        [-149.43830837972038, 59.07109314036479],
        [-149.43830837972038, 61.383330375381526],
        [-154.26499773972284, 61.383330375381526],
        [-154.26499773972284, 59.07109314036479]
      ], 
      line: [
        [-152.65365969078832, 59.42486625786394], 
        [-139.55282541742721, 67.35788579875347]
      ]
    },
    {
      title: "Prince William Sound", 
      rect: [
        [-143.94379487175303, 59.45746863067117],
        [-148.71427099899506, 59.45746863067117],
        [-148.71427099899506, 61.25121467077413],
        [-143.94379487175303, 61.25121467077413],
        [-143.94379487175303, 59.45746863067117]
      ], 
      line: [
        [-147.09391061807054, 60.70650201429044], 
        [-140.2718841215425, 63.85052875477269]
      ]
    },
    {
      title: "Southeast Alaska", 
      identifier: "Southeast",
      rect: [
        [-129.332031, 54.484837],
        [-140.13620545027447, 54.484837],
        [-140.13620545027447, 60.18008915005359],
        [-129.332031, 60.18008915005359],
        [-129.332031, 54.484837]
      ], 
      line: [
        [-134.05013097603768, 57.186978408650454], 
        [-144.44792070227217, 55.91376231220995]
      ]
    },
    {
      title: "Alaskan Peninsula/Aleutian Islands",
      identifier: "AK Pen/AI", 
      rect: [
        [-161.0992717187983, 51.275000],
        [-179.0256032424475, 51.275000],
        [-179.0256032424475, 56.06928416194262],
        [-161.0992717187983, 56.06928416194262],
        [-161.0992717187983, 51.275000]
      ], 
      line: [
        [-165.232772334737, 54.23480436673355], 
        [-172.94678815396927, 58.27739560637519]
      ]
    },
    {
      title: "Chignik", 
      rect: [
        [-155.45638553082975, 54.691240],
        [-160.95876579890668, 54.691240],
        [-160.95876579890668, 56.800398],
        [-155.45638553082975, 56.800398],
        [-155.45638553082975, 54.691240]
      ], 
      line: [
        [-157.96017040218436, 55.86845119828741], 
        [-158.10339730174698, 53.6546519728167]
      ]
    },
    {
      title: "Kodiak", 
      rect: [
        [-151.757786, 56.429975],
        [-154.877566, 56.429975],
        [-154.877566, 58.615083],
        [-151.757786, 58.615083],
        [-151.757786, 56.429975]
      ], 
      line: [
        [-153.33984384526508, 57.450847982884504], 
        [-153.2136639009687, 54.05681980564907]
      ]
    },
  ]

const salmonAreas = areas.map(
  (el, idx) => ({
    title: el.title,
    identifier: el.identifier,
    rect: el.rect.map(pair => projection(pair)),
    line: el.line.map(pair => projection(pair))
  })
)

const areaTitleLocation = projection([-160, 68])

export const renderAK = () => {

  const svg = d3.select(".data")
    .append("svg")
    .attr("id", "alaska")
    .attr("width", width)
    .attr("height", height);

  const path = d3.geoPath()
    .projection(projection)
  
    svg.append("g")
    .attr("id", "alaska-svg")
    .selectAll("path")
    .data(alaskaGeoJson.features)
    .join("path")
    .attr('class', "alaska-path")
    .attr("d", (feature) => path(feature))
    .attr("fill", "rgb(50, 50, 50)")

  const rectGenerator = d3.area()
  const lineGenerator = d3.line()

  salmonAreas.forEach(area => {
    
    const rect = rectGenerator(area.rect)
    const line = lineGenerator(area.line)
    const lines = lineGenerator(area.rect)

    d3.select("#alaska-svg")
      .append("path")
      .attr('id', `${area.title}-rect`)
      .attr('class', 'unzoomed-rect visible-rect')
      .attr('d', lines)
      .attr("stroke", "white")
      .attr("fill", "white")
      .attr("fill-opacity", "0.1")
      .attr('cursor', 'pointer')
      .on("click", () => zoom(area, path))
      .on("mouseenter", () => hover(area.title))
      .on("mouseout", () => unhover(area.title))
  })

  d3.select('#alaska-svg')
    .append('text')
    .attr('id', 'zoom-out-button')
    .attr('fill', 'white')
    .attr('cursor', 'pointer')

  d3.select("#alaska-svg")
    .append("text")
    .attr('id', 'area-title')
    .attr('x', areaTitleLocation[0])
    .attr('y', areaTitleLocation[1])
    .attr('font-size', '12px')
    .attr('fill', 'white')

  document.getElementById('alaska-svg').focus()
}

export const clearAK = () => {
  d3.select("#alaska")
    .remove()
}

const hover = (title) => {
  d3.select('#area-title')
    .text(`${title},`)

  d3.select('#area-title')
    .transition()
    .duration(400)
    .attr('font-size', '20px')

  document.getElementById(`${title}-rect`)
    .style.fillOpacity = '0.3'
}

const unhover = (title) => {
  d3.select('#area-title')
    .transition()
    .duration(400)
    .attr('font-size', '0px')

  document.getElementById(`${title}-rect`)
    .style.fillOpacity = '0.2'
}

const zoom = (area, alaska) => {
  
  const path = document.getElementById(`${area.title}-rect`)
  const rects = document.getElementsByClassName('.visible-rect')
  


  if (path.classList.contains('unzoomed-rect')) {
    
    
    path.classList.remove('unzoomed-rect')
    path.classList.add('zoomed-rect')
    const rect = area.rect
    
    const dx = rect[0][0] - rect[1][0]
    const dy = rect[1][1] - rect[2][1]
    const x = (rect[0][0] + rect[1][0]) / 2
    const y = (rect[1][1] + rect[2][1]) / 2
    const scale = 0.95 / Math.max(dx / width, dy / height)
    const translate = [width / 2 - scale * x, height / 2 - scale * y]
    console.log(translate, 'translate')

    d3.select("#alaska-svg")
      .transition()
      .duration(1000)
      .style("stroke-width", `${0.5 / scale}px`)
      .attr("transform", `translate(${translate})scale(${scale})`)

    d3.select('#zoom-out-button')
      .attr('x', x - ((width / 2) * 0.97) / scale)
      .attr('y', y - ((height / 2) * 0.83) / scale)
      .attr('font-size', 80 / scale)
      .on("click", () => zoom(area, alaska))
      .transition()
      .delay(700)
      .text('⊗')

    d3.selectAll('.visible-rect')
      .transition()
      .delay(500)
      .attr('stroke', 'none')
      .attr('fill', 'none')

    renderAreaChart(area, 'pounds', x, y, scale)

  } else if (path.classList.contains('zoomed-rect')) {
    
    path.classList.remove('zoomed-rect')
    path.classList.add('unzoomed-rect')

    const bounds = alaska.bounds(alaskaGeoJson.features)

    const dx = bounds[1][0] - bounds[0][0]
    const dy = bounds[1][1] - bounds[0][1]
    const x = (bounds[0][0] + bounds[1][0]) / 2
    const y = (bounds[0][1] + bounds[1][1]) / 2
    const scale = 1 / Math.max(dx / width, dy / height)
    const translate = [width / 2 - scale * x, height / 2 - scale * y]

    d3.select("#alaska-svg")
      .transition()
      .duration(1000)
      .style("stroke-width", `0.8px`)
      .attr("transform", `translate(${translate})scale(${scale})`)

    d3.select(".area-chart-g")
      .transition()
      .delay(200)
      .remove()

    d3.select('#zoom-out-button')
      .transition()
      .delay(200)
      .text('')

    d3.selectAll('.visible-rect')
      .transition()
      .duration(1000)
      .delay(500)
      .attr('stroke', 'white')
      .attr('fill', 'white')
      .attr('stroke-opacity', '1')
      .attr('fill-opacity', '0.1')
  }
}