import React,{Component} from 'react';

class AddTodo extends Component  {
    state = {
        content :'',
        contenterror : ''
    }

    handleChange = (e) => {
        this.setState({
            content: e.target.value,
            contenterror:''
        })
    }
    validate = () => {
        let contenterror = "";
        
        if(!this.state.content) {
            contenterror = "Task is reuired";
            this.setState({
                contenterror
                
            })
            return false;
        }
       /* if(contenterror) {
            this.setState({
                contenterror
                
            })
            return false;
        } */  
           
    
        return true;

    }

    handleSumbit = (e) => {
        e.preventDefault();
      //  console.log(this.state);
      const isValid = this.validate();
      if (isValid) {
        this.props.addtodo (this.state);

        this.setState({ // Text box becomes empty , once you press the enter.
            content:''
        })
    }
      
    }

    render(){

        return(
            <div>
                <form onSubmit={this.handleSumbit}>
                   
                    <input className="text" type="text" onChange={this.handleChange} value={this.state.content} placeholder="Type your task here..." />
                     <div className="error">{this.state.contenterror }</div>
                </form>
            </div>
        )
    } 

}
export default AddTodo