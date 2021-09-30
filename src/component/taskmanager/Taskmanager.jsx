import React from 'react'
import { Row, Col} from 'reactstrap'
import Taskform from './taskform/Taskform'
import Tasklist from './tasklist/tasklist'


const Taskmanager= (props) => {

    return (

        <Row>
            <Col>
                <Taskform  />
            </Col>
        </Row>
        )
}



export default Taskmanager
