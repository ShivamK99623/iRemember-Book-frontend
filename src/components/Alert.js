import React from 'react'

export const Alert = (props) => {
    const{ alert}=props
    return (
      (alert) &&   <div>
            <div className={`alert alert-${alert.type} alert-dismissible fade show` } style={{height:"50px"}} role="alert">
           <strong>{alert.type}</strong> {alert.msg}
           <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
         </div>
        </div>
    )
}
export default Alert