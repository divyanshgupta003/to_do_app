import React from 'react';
import {connect} from 'react-redux';

class List extends React.Component{
    render(){
        const items = this.props.items.map(item=>{
            return (
                <div onClick={()=>this.props.onDelete(item.key)} key={item.key}>
                    <h3>{item.text}</h3>
                </div>
            )
        });
        return(
            <div>
                {items}
            </div>
        );
    }
}

const mapStateToProps = state =>{
    return{
        items : state.red.items
    }
}

export default connect(mapStateToProps)(List);