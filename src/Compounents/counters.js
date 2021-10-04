import React from 'react'
import Counter from './counter';

class Counters  extends React.Component {
    state = {vinoiserie :[{name:"croissant", value:4},{name:"Chocolatine", value:0},{name:"Tarte aux amandes", value:0}]}

    render() { 
        return(this.state.vinoiserie.map(v => <Counter key={this.state.vinoiserie.indexOf(v)} value={v.value} selected={true}>{v.name}</Counter>)) ;
       
    }
}
 
export default Counters;