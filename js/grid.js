var plotTableHeader = function(columns, id, isFlex) {

    var gridWrapper = document.getElementById(id);
    var tableRow = document.createElement('div');
    if(isFlex==false)
        tableRow.classList.add('table-row');
    else
        tableRow.classList.add('table-row-flex');    
    var row = columns.ColumnsList;
    for(var i in row){

            var grid = document.createElement('div');
            if(isFlex==false)
                grid.classList.add('table-data');
            else
                grid.classList.add('table-data-flex');
            if(row[i].isInput==true){
                var input = document.createElement('input');
                var att = document.createAttribute('type');
                att.value = row[i].type;
                input.setAttributeNode(att);
                grid.appendChild(input);
            }
            else{
                grid.innerHTML = row[i].name;
                 gridWrapper.appendChild(grid);
            }

            tableRow.appendChild(grid);

    }
    gridWrapper.appendChild(tableRow);
    
}

var plotTableContent = function(rows, id, isFlex){

    var gridWrapper = document.getElementById(id);
    var keys = [];
    
    var row = rows.data;
    for(var key in row[0]){
       
       keys.push(key);
    }
    for(var i in row){

        var tableRow = document.createElement('div');
        if(isFlex==false)
            tableRow.classList.add('table-row');
        else
            tableRow.classList.add('table-row-flex');    
        var grid = document.createElement('div');
        if(isFlex==false)
            grid.classList.add('table-data');
        else
            grid.classList.add('table-data-flex');
        var input = document.createElement('input');
        var att = document.createAttribute('type');
        att.value = 'checkbox';
        input.setAttributeNode(att);
        grid.appendChild(input);
        tableRow.appendChild(grid);

        for(var key in keys){
            var grid = document.createElement('div');
            if(isFlex==false)
                grid.classList.add('table-data');
            else
                grid.classList.add('table-data-flex');
            grid.innerHTML = row[i][keys[key]];
            tableRow.appendChild(grid);
        }
        
        gridWrapper.appendChild(tableRow);

    }


}

var getRandomColor = function() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  var setWidth = function(index,size){

  }