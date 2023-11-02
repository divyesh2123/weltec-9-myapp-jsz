import React, { PureComponent } from 'react'
class Task extends React.PureComponent {
    render() {
       console.log("task added");
       return (<div>
          {this.props.title}
       </div>);
    }
 }

 export default Task;

