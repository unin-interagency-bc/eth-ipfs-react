import React from 'react'
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';

export const ModalsForTables = (props) => {
    const allModals = [];
    console.log(props.rows)
    props.rows.map((row, key) => {
        console.log(row.modalState)
        return allModals.push(
        <Modal
            key={key}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            open={row.modalState}
            onClose={row.handleCloseFn}
        >
          <div style={{ marginTop:'10%', marginLeft:'33%', outline: 'none', maxWidth:'33%', backgroundColor: 'white'}}>
            <div style={{marginLeft:'20px', marginTop:'50px'}}>
            <Typography variant="h6" id="modal-title">
              {row.name}
            </Typography>
            <Typography variant="subtitle1" id="simple-modal-description">
              This is the certificate that was issued to {row.name}
            </Typography>
            <img alt='cert' style={{ maxWidth:'90%'}} src={row.imgSrc}></img>
            </div>
          </div>
        </Modal>)              
      })
    return allModals
}