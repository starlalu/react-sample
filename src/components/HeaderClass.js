import { Component } from "react";

class HeaderClass extends Component{

    render()
    {
        return(<h1 className='test'>Hello Iam   {this.props.data1} from Class</h1>);
    }
}
export default HeaderClass;