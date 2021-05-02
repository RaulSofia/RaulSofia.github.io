//const dados = getData();
const alt = window.innerHeight;
const larg = window.innerWidth;
console.log(graficos.length);

//dim = Math.min(alt, larg)

for(let i = 0; i < graficos.length; i++) {
    plotData("plot1", graficos[i].x, graficos[i].y, graficos[i].config, larg , alt);
}
