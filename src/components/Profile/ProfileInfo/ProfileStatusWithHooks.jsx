import s from "./ProfileInfo.module.css";
import React, { useEffect, useState } from "react";

const ProfileStatusWithHooks = (props) => {
  // let stateWirhSetState = useState(true);
  // let editMode = stateWirhSetState[0];
  // let setEditMode = stateWirhSetState[1];

  let [editMode, setEditMode] = useState(false)
  let [status, setStatus] = useState(props.status)

  useEffect(() => {
    setStatus(props.status)
   
  }, [props.status])

  const activateEditMode = () => {
    setEditMode(true)
  }

  const deactivateEditMode = () => {
    setEditMode(false)
    props.updateStatus(status)
  }

  const onStatusChange = (e) => {
    setStatus(e.currentTarget.value)
} 

  return (
    <div>
      {!editMode && (
        <div>
          <span onDoubleClick={activateEditMode} className={s.status}>{props.status || "-------"}</span>
        </div>
      )}

      {editMode && (
        <div>
          <input type="text" autoFocus={true} onBlur={deactivateEditMode} onChange={onStatusChange} value={status} />
        </div>
      )}
    </div>
  );
};

export default ProfileStatusWithHooks;
