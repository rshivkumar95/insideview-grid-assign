"use strict";

var columnWidth = [];

function setWidth() {
    var columnCount;
    for(columnCount = 1; columnCount<=columnWidth.length; columnCount+=1){
        $(".table-row > .table-data:nth-child("+ columnCount +")").css("width",columnWidth[columnCount-1]);
    }
    
}

function createTableData(data,isInput,inputType) {

    var grid = document.createElement("div");
    grid.classList.add("table-data");
    if(isInput) {
        var input = document.createElement("input");
        var att = document.createAttribute("type");
        att.value = inputType;
        input.setAttributeNode(att);
        grid.appendChild(input);
    }
    else{
        grid.innerHTML = data;
    }
    return grid;
}

function plotTableHeader(columns, id, isFlex) {

    var gridWrapper = document.getElementById(id);
    var tableColumn= document.createElement("div");
    var column = columns.ColumnsList;
    var columnCount;
    var data;
    var isInput;
    var type;
    for(columnCount = 0; columnCount < column.length; columnCount+=1) {
        data = column[columnCount].name;
        isInput = column[columnCount].isInput;
        type = column[columnCount].type;
        tableColumn.appendChild(createTableData(data, isInput, type));
        columnWidth.push(column[columnCount].width);
        //setWidth(columnCount+1, column[columnCount].width);
    }
    if(!isFlex) {
        tableColumn.classList.add("table-row");
    }else{
        tableColumn.classList.add("table-row-flex");
    }
    gridWrapper.appendChild(tableColumn);
    setWidth();
}

function plotTableContent(rows, id, isFlex) {

    var gridWrapper = document.getElementById(id);
    var row = rows.data;
    var key;
    var keys = Object.keys(row[0]);
    var rowCount;
    var data;
    var tableRow;
    for(rowCount = 0; rowCount < row.length; rowCount+=1) {

        tableRow = document.createElement("div");
        if(!isFlex) {
            tableRow.classList.add("table-row");
        }
        else{
            tableRow.classList.add("table-row-flex");
        }
        tableRow.appendChild(createTableData("", true, "checkbox"));
        for(key = 0; key<keys.length; key+=1) {
            data = row[rowCount][keys[key]];
            tableRow.appendChild(createTableData(data, false));
        }
        gridWrapper.appendChild(tableRow);
        setWidth();
    }
}

function plotTable(Columns,Rows,headerId,contentId,isFlex,wrapperId){
    $("#"+wrapperId).load("reusable/table.html",function(){
        $(this).children().children("div.table-header").attr("id",headerId);
        $(this).children().children("div.table-content").attr("id",contentId);
        plotTableHeader(Columns, headerId, isFlex);
        plotTableContent(Rows, contentId, isFlex);
    });    
}
