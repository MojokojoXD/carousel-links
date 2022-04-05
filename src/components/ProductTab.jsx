// @ts-nocheck
import React,{Component,createRef} from "react";
import { Link } from "react-router-dom";
import {CSSTransition} from 'react-transition-group'

class ProductTab extends Component{
    constructor(props){
        super(props);
        this.state={
            showLink: ''
        }
    }


    componentDidMount(){
        this.setState({showLink: this.props.toggleLink})
    }


    render(){
        this.picStyle={
        height: '60%',
        width: '50%',
    }
        const { desc, image, price, category, title, id } = this.props.product;
        return(

            !this.props.product ? <p>loading</p> :
                    <div className={'product-div'}>
                        <img src={image} alt={desc} style={this.picStyle}/>
                        <p>{title}</p>
                        <p>{category}</p>
                        <p>Price: {price}</p>
                        {this.state.showLink ? <Link to= {`/details/${id}`}>Details</Link> : null}
                    </div>

        )
    }
}

export {ProductTab as default};

