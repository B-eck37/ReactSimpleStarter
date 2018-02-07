//Define component. This is a functional component.
// import React from 'react';
// const SearchBar = () => {
//     return <input />; //React.createElement
// };

//Define component. This is a 'class' component. If a class, component requires a Render method. Utilizing state requires a class component. Render is directly tied to state.
//Additional Note: If class based, will need to use 'this'. 
//Class Components prove to offer more functionality.

import React, {Component} from 'react';

class SearchBar extends Component {
    //Constructor is responsible for defining state.
    constructor(props){
        super(props);
        //State is only modified directly when it is initialized.
        this.state = {
            term: '',
        }
    }


    render() {
        return (
            <div className='search-bar'>
                <input 
                placeholder='Type here'
                value={this.state.term}
                onChange={e => this.onInputChange(e.target.value)}/><br/>
            
            </div>
        );
    }

    onInputChange(term){
        this.setState({term});
        this.props.onSearchTermChange(term);
    }
}

export default SearchBar;



