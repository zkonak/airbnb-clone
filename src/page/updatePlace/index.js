import React from 'react';
import UpdatePlace from './updatePlace';



class UpdateForm extends React.Component {

    render() {
        return (
            <>

            
             <UpdatePlace history={this.props.history} />
               
                
            </>
        )
    }
}

export default UpdateForm;