import React from "react";


export default class Exemple extends React.Component {
    state = {
        name: 'Loc',
        age: 23
    }
    handleOnChangeName = (event) => {
        this.setState({
            name: event.target.value
        })
    }
    handleClick = (event) => {
        alert("ban đã click", event)
    }
    render() {
        return (
            <>
                <input value={this.state.name} type="text" onChange={(event) => { this.handleOnChangeName(event) }} />
                <div> Hello Bạn Cần Gì {this.state.name} +  {this.state.age} tuổi </div>
                <div className='The First'>
                    <button onClick={(event) => { this.handleClick(event) }}> Click</button>
                </div>
            </>
        )
    }

}