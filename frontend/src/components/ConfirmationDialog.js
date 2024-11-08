import React from 'react';

const ConfirmationDialog = ({ onConfirm, onCancel }) => (
  <div className="confirmation-dialog">
    <h3>Submit Survey</h3>
    <p>Are you sure you want to submit your responses?</p>
    <button onClick={onConfirm}>Yes</button>
    <button onClick={onCancel}>No</button>
  </div>
);
export default ConfirmationDialog;
