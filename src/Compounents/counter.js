import React from 'react'

class Counter extends React.Component {
    state={value:this.props.value,
    tags:["tag1","tag2","tag3"]}
    
   handleClick = (product) =>{
       console.log(product);
       this.setState({value: this.state.value + 1})
   }
    rendertags() {
        if (this.state.tags.length === 0) return <p>there are no tags!</p>;
        return  <ul>{this.state.tags.map(t=><li key={t}>{t}</li>)}</ul>
    }
    render() { 
        console.log('props',this.props);
        return (
            <div>
            {this.props.children}
            <span className={this.getBadgeFormat()}>{this.formatValue()}</span>
            <button className="btn secondary-btn " onClick={()=>this.handleClick({id :1})}>increment</button>
            {this.state.tags.length === 0 && "please create new tags!"}
            {/* {this.rendertags()} */}
            </div>
            
            );
    }

    getBadgeFormat() {
        let classes = "badge sm m-2 badge-";
        return classes += this.state.value === 0 ? "warning" : "primary";
    }

    formatValue(){
        const {value}= this.state;
        return value === 0? <h1>zero</h1> : value;
    }
}
 
export default Counter;