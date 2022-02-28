import React, { useContext,useEffect} from 'react'
import noteContext from '../context/notes/noteContext';
function Userdetail() {
    const notecontext = useContext(noteContext)
    const {about,userDetail}=notecontext
    const date= new Date(about.date)
    const dDate= JSON.stringify(date).slice(1,11);
    useEffect(() => {
        userDetail()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    
  
  return (
 <div className='container'>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">User Name</label>
                    <div  className="form-control" id="name"  >{about.name}</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <div  className="form-control" id="email"  >{about.email}</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="date" className="form-label">Date of Signup</label>
                    <div  className="form-control" id="date"  >{dDate}</div>
                </div>
    </div>
  )
}

export default Userdetail