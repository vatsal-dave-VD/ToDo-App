import React, { Component } from 'react'
import { Formik, Form, Field } from 'formik'


class AddForm extends Component {
    state = {
        id: undefined,
        content: undefined
    }
    render() {
        return (
            <div>
                <Formik
                    initialValues={{todoTask: ''}}
                    onSubmit={(values) => {
                        this.setState({
                            content:values.todoTask,
                            id:Date.now()
                        })
                        this.props.addTodoTask(this.state)
                        values.todoTask = ''
                    }}
                >
                    {(props) => (
                        <Form>
                            <Field
                                name="todoTask"
                                placeholer="Enter the To-Do task"
                                className="input-field"
                                style={{width:"85%", marginRight:"20px"}}
                                autoComplete="off"
                            />
                            <button 
                                type="submit"
                                className="btn waves-effect waves-dark"
                                style={{width:"12%"}}>
                                    Add
                            </button>
                            
                        </Form>
                    )}
                </Formik>
            </div>
        )
    }
}

export default AddForm
