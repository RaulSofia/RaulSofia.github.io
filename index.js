async function getData(){
    const response = await fetch("molecules.csv");
    const data = await response.text();
    //console.log(data);
    const rows = data.split('\n').slice(5);
    
    for(let i = 0; i<rows.length; i++) {
        const row = rows[i].split(',');
        const pic50 = row[1];
        const bbb = row[2]
        console.log(pic50, bbb);
    }
}

getData();
