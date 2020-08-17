import React, {Component} from 'react';


class TextCounter extends Component{
    static defaultProps = {
        limit: 15
    }

    constructor(props) {
        super(props);
        this.state = {
            totalChars: 0,
            text: ''
        }
        this.handlerChange = this.handlerChange.bind(this)
    }

    handlerChange(event){
        const element = event.target,
            text = element.value;

        if(text.length <= this.props.limit){
            this.setState({
                totalChars: text.length,
                text
            });
        }
    }

    render(){
        const {state, props} = this;
        
        return (
            <div>
                <h1>Meu contador</h1>
                <textarea onChange={this.handlerChange} value={state.text}/>
                <div>
                    <strong>Total:</strong> {state.totalChars} / {props.limit}
                </div>

            </div>
        )
    }
}

export default TextCounter;


