import React, { Component } from 'react'

export default class Modal extends Component {
    render() {
        return (
            <div
            className="modal"
            style={{ display: this.props.visible ? "flex" : "none" }}
          >
            <p>Picture</p>
            <input type="text" name="picture"/>
            <p>Name</p>
            <input type="text" name="name"/>
            <p>Email</p>
            <input type="text" name="email"/>
            <p>Enrollment Number</p>
            <input
              type="text"
              name="enrollmentNumber"
            />
            <div>
              <input
                type="button"
                value="Add"
              />
              <input type="button" value="Close" />
            </div>
          </div>
        
        )
    }
}
