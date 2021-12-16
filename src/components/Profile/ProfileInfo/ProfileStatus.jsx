import s from "./ProfileInfo.module.css";
import React from "react";

class ProfileStatus extends React.Component {

  state = {
    editMode: false,
    status: this.props.status 
  };

  activateEditMode = () => {
    this.setState({
        editMode: true
    })
  }

  deactivateEditMode = () => {
    this.setState({
        editMode: false
    })
    this.props.updateStatus(this.state.status)
  }

  onStatusChange = (e) => {
      this.setState({
        status: e.currentTarget.value
      })
  } 

  componentDidUpdate(prevProps, prevState){
    if (prevProps.status !== this.props.status) {
      this.setState({
        status: this.props.status
      })
    }
  }

  render() {
    // console.log("render")
    return (
      <div>
        {!this.state.editMode ? (
          <div>
            <span className={s.status} onDoubleClick={this.activateEditMode}>{this.props.status || "-------"}</span>
          </div>
        ) : (
          <div>
            <input onChange={this.onStatusChange} type="text" value={this.state.status} autoFocus={true} onBlur={ this.deactivateEditMode} />
          </div>
        )}
      </div>
    );
  }
}

export default ProfileStatus;
