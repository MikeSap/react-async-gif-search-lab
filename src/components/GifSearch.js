import React, { Component } from 'react';

class GifSearch extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            searchParams: ""
         }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.fetchGIFs(this.state.searchParams)
    }

    render() { 
        return ( 
            <div>
                <form onSubmit={this.handleSubmit}>                    
                    <input onChange={this.handleChange} name="searchParams" type="text" value={this.state.searchParams}/>
                    <input onChange={this.handleChange} name="submit" type="submit"/>
                </form>
            </div>
         );
    }
}
 
export default GifSearch;