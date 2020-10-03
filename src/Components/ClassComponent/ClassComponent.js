import React from 'react';
import './ClassComponent.css'

class ClassComponent extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            name: "Nobody",
            email: "",
            validEmails: []
        }
    }

    _buttonClick(){
        console.log("Button Clicked!");  
        if(this.state.name ==="Nobody"){
            console.log(1)
            this.setState({name: "Somebody"})
        } else {
            console.log(2)
            this.setState({name: "Nobody"})
        }
    }

    checkValidEmail(emailStr){
        let splitStr = emailStr.split('@')
        if (splitStr.length === 2){
            return true
        } else {
            return false
        }
    }

    _handleCheckEmail(){
        if (this.checkValidEmail(this.state.email) === true) {
            let validEmails = this.state.validEmails
            validEmails.push(this.state.email)
            this.setState({validEmails: validEmails})
        } else {
            alert("Invalid Email!!!")
        }
    }

    _handleEmailInput(e) {
        const newEmail = e.target.value

        this.setState({email: newEmail})
    }

    displayValidEmails() {
        console.log("Displaying valid Emails: ", this.state.validEmails);
        const validEmails = this.state.validEmails
        let validEmailList

        validEmailList = validEmails.map((email, count) => {
            console.log(email, count);
            return(
                <li>
                    {email}
                </li>
            )
        })

        return(
            <ul>
                {validEmailList}
            </ul>
        )
    }

    render() {
        return(
            <div id = {"newCompContainer"}>
                <p>Hello {this.state.name}</p>
                <button onClick = {() => this._buttonClick()}>Change Name</button>
                <p>----------------</p>
                <label for = "fname">Insert a valid email:</label><br/>
                <input onChange = {(e) => this._handleEmailInput(e)} type = 'text' id = 'fname' name = 'fname'/>
                <button onClick = {() => this._handleCheckEmail()}>Check Email</button>
                <p>Valid emails:</p>

                {this.displayValidEmails()}
                <br/>
            </div>
        )
    }
}

export default ClassComponent;