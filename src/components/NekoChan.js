import React from 'react';

class nekoChan extends React.Component {
    render(){
        let current;
        if(this.props.index === this.props.current){
            current = 'current';
        }
        return(
            <li onClick={this.props.onClick} className={current}>
                <img src={`${process.env.PUBLIC_URL}/img/neko0${this.props.index}.jpg`} alt={this.props.name} />
                <p>{this.props.index}:{this.props.name}</p>
            </li>
        )
    }
}

export default nekoChan;