async function getData() {
    const response = await fetch("molecules.csv");
    //console.log(response);
    const data = await response.text();
    //console.log(data);
    const rows = data.split('\n');
    let dados = {
        "smiles": [],
        "pic50": [],
        "bbb": [],
        "mw": [],
        "logp": [],
        "sas": [],
        "qed": []
    }
    for(let i = 6; i < rows.length - 1; i++) {
        const row = rows[i].split(',');
        dados.smiles.push(row[0]);
        dados.pic50.push(row[1]);
        dados.bbb.push(row[2]);
        dados.mw.push(row[3]);
        dados.logp.push(row[4]);
        dados.sas.push(row[5]);
        dados.qed.push(row[6]);
    }
    //console.log(dados);
    return dados;
}

async function plotData(id, xAxis, yAxis, config, larg, alt) {
    const dados = await getData();
    console.log(dados[xAxis], dados[yAxis]);
    let eixos = [];
    for(let i = 0; i < dados.smiles.length; i++) {
        eixos.push({
        x: dados[xAxis][i],
        y: dados[yAxis][i]
        });
    }
    console.log(eixos);
    config_local = JSON.parse(JSON.stringify(config)); //perguntar se é assim q se faz deepcopy
    config_local.data.datasets[0].data = eixos;
    config_local.options.scales.x.title.text = xAxis
    config_local.options.scales.y.title.text = yAxis
    console.log(config_local);
    let canvas = document.createElement("CANVAS");
    canvas.width = larg;
    canvas.height = alt;
    document.body.appendChild(canvas);
    const ctx = canvas.getContext("2d");
    const plot = new Chart(ctx, config_local);
}






//tooltip




const getOrCreateTooltip = (chart) => {
    let tooltipEl = chart.canvas.parentNode.querySelector('div');
  
    if (!tooltipEl) {
      tooltipEl = document.createElement('div');
      tooltipEl.style.background = 'rgba(0, 0, 0, 0.7)';
      tooltipEl.style.borderRadius = '3px';
      tooltipEl.style.color = 'white';
      tooltipEl.style.opacity = 1;
      tooltipEl.style.pointerEvents = 'none';
      tooltipEl.style.position = 'absolute';
      tooltipEl.style.transform = 'translate(-50%, 0)';
      tooltipEl.style.transition = 'all .1s ease';
  
      const table = document.createElement('table');
      table.style.margin = '0px';
  
      tooltipEl.appendChild(table);
      chart.canvas.parentNode.appendChild(tooltipEl);
    }
  
    return tooltipEl;
  };
  
  const externalTooltipHandler = (context) => {
    // Tooltip Element
    const {chart, tooltip} = context;
    const tooltipEl = getOrCreateTooltip(chart);
  
    // Hide if no tooltip
    if (tooltip.opacity === 0) {
      tooltipEl.style.opacity = 0;
      return;
    }
  
    // Set Text
    if (tooltip.body) {
      const titleLines = tooltip.title || [];
      const bodyLines = tooltip.body.map(b => b.lines);
  
      const tableHead = document.createElement('thead');
  
      titleLines.forEach(title => {
        const tr = document.createElement('tr');
        tr.style.borderWidth = 0;
  
        const th = document.createElement('th');
        th.style.borderWidth = 0;
        const text = document.createTextNode(title);
  
        th.appendChild(text);
        tr.appendChild(th);
        tableHead.appendChild(tr);
      });
  
      const tableBody = document.createElement('tbody');
      bodyLines.forEach((body, i) => {
        const colors = tooltip.labelColors[i];
  
        const span = document.createElement('span');
        span.style.background = colors.backgroundColor;
        span.style.borderColor = colors.borderColor;
        span.style.borderWidth = '2px';
        span.style.marginRight = '10px';
        span.style.height = '10px';
        span.style.width = '10px';
        span.style.display = 'inline-block';
  
        const tr = document.createElement('tr');
        tr.style.backgroundColor = 'inherit';
        tr.style.borderWidth = 0;
  
        const td = document.createElement('td');
        td.style.borderWidth = 0;
  
        const text = document.createTextNode(body);
  
        td.appendChild(span);
        td.appendChild(text);
        tr.appendChild(td);
        tableBody.appendChild(tr);
      });
  
      const tableRoot = tooltipEl.querySelector('table');
  
      // Remove old children
      while (tableRoot.firstChild) {
        tableRoot.firstChild.remove();
      }
  
      // Add new children
      tableRoot.appendChild(tableHead);
      tableRoot.appendChild(tableBody);
    }
  
    const {offsetLeft: positionX, offsetTop: positionY} = chart.canvas;
  
    // Display, position, and set styles for font
    tooltipEl.style.opacity = 1;
    tooltipEl.style.left = positionX + tooltip.caretX + 'px';
    tooltipEl.style.top = positionY + tooltip.caretY + 'px';
    tooltipEl.style.font = tooltip.options.bodyFont.string;
    tooltipEl.style.padding = tooltip.options.padding + 'px ' + tooltip.options.padding + 'px';
  };
  