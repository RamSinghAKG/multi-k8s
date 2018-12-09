import React, { Component } from 'react';
class DragDrop extends Component {
    constructor(){
        super();
        this.state = {  rows:  [   {firstName: "Ram1", lastName: "Singh1"}, 
                                    {firstName: "Ram2", lastName: "Singh2"},
                                    {firstName: "Ram3", lastName: "Singh3"}
                                ]
                        }
    }
    allowDrop(ev) {
        ev.preventDefault();
    }

    drag(ev) {
        ev.dataTransfer.setData("text", ev.target.id);
        console.log(ev.target.id)
        console.log(ev.dataTransfer);
    }
    exchangeElements(element1, element2) {
        const index1 = element1.id.substr(3) - 1;
        const index2 = element2.id.substr(3) - 1;
        let tempRows = this.state.rows.slice(0);
        let tempRow = {...tempRows[index1]};
        tempRows[index1] = tempRows[index2];
        tempRows[index2] = tempRow;
        this.setState({rows: tempRows});
    }

    drop(ev) {
        ev.preventDefault();
        var data = ev.dataTransfer.getData("text");
        
        let droppedRow = ev.target.parentElement;
        let draggedRow = document.getElementById(data);
        
        this.exchangeElements(droppedRow, draggedRow);
    }
    render() {
        return (
            <table>
                <tbody>
                    {this.state.rows.map((item, index) => {
                        let rowId = "row"+ ++index;
                        return (<tr id={rowId} key={index} onDrop={(event) => this.drop(event)} onDragOver={(event) => this.allowDrop(event)} draggable="true"
                        onDragStart={(event) => this.drag(event)}>
                        <td>{item.firstName}</td><td>{item.lastName}</td>
                    </tr>);
                    })}
                </tbody>
            </table>
        );
    }
};
export default DragDrop;