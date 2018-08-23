import React, {Component} from 'react';

class List extends Component {
    constructor(props){
        super(props)
    }
    render(){
        return(
            <ul className="collection">
                <li className="collection-item">This will be the todo list</li>
            </ul>
        )
    }
}

export default List;