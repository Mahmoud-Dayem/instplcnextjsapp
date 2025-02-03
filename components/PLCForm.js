import React from 'react'
// import './PLCForm.css'; // Import the CSS file

function PLCForm() {
    return (
        <div className='print-container'>
            <div className='print-content'>
                <form className='form-container'>
                    <hr />
                    <div className="row mb-3 justify-content-between align-items-center">
                        <div className="col-auto">
                            <p className='fw-bold'>Modification #</p>
                        </div>
                        <div className="col-auto d-flex align-items-center">
                            <p className='mb-0 p-3 fw-bold'>Date: </p>
                            <input type="date" className="form-control" id="date" style={{ width: 'auto' }} />
                        </div>
                    </div>

                    <div className="row mb-3 align-items-center form-group">
                        <label className="col-2 col-form-label fw-bold" htmlFor='plctag'>PLC Tag </label>
                        <div className="col-10">
                            <input type="input" className="form-control text-uppercase" id="plctag" />
                        </div>
                    </div>

                    <div className="row mb-3 align-items-center form-group">
                        <label className="col-2 col-form-label fw-bold" htmlFor='desc'>Description</label>
                        <div className="col-10">
                            <input type="input" className="form-control" id="desc" />
                        </div>
                    </div>

                    <div className="row mb-3 align-items-center form-group">
                        <label className="col-3 col-form-label fw-bold" htmlFor='eq'>Equipment to be affected</label>
                        <div className="col-9">
                            <input type="input" className="form-control" id="eq" />
                        </div>
                    </div>

                    <div className="row mb-3 align-items-center form-group">
                        <div>
                            <label className="col col-form-label fw-bold" htmlFor='details'>Details of PLC modification</label>
                        </div>
                        <div className="col">
                            <textarea className="form-control fixed-size" id="details" rows="2" />
                        </div>
                    </div>

                    <div className="col-sm-10 d-flex">
                        <div className='me-3'>
                            <p className='fw-bold'>Type of Request</p>
                        </div>
                        <div className="form-check">
                            <label htmlFor="new">New </label>
                            <input className="form-check-input" type="checkbox" id="new" />
                        </div>

                        <div className='ms-5 d-flex'>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="permanent" />
                                <label className="form-check-label" htmlFor="gridRadios1">Permanent</label>
                            </div>
                            <div className="form-check ms-5">
                                <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="temporarily" />
                                <label className="form-check-label" htmlFor="gridRadios2">Temporarily</label>
                            </div>
                        </div>
                    </div>

                    <div className="row mb-3 align-items-center form-group">
                        <label className="col-3 col-form-label fw-bold" htmlFor='reason'>Reason for PLC modification</label>
                        <div className="col-9">
                            <input type="input" className="form-control text-uppercase" id="reason" />
                        </div>
                    </div>
                    <hr />

                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th colSpan="2">Expected Duration of PLC modification if Temporarily</th>
                            </tr>
                        </thead>
                        <thead>
                            <tr>
                                <th colSpan="2" className="text-center">Date and Time</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="text-center" style={{ height: "10px" }}>
                                <td>Applied</td>
                                <td>Cancelled</td>
                            </tr>
                            <tr style={{ height: "1.5rem" }}>
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>

                    <div className="d-flex m-5">
                        <div className="col-5 fw-bold">
                            <p>Performed by:</p>
                        </div>
                        <div className="fw-bold col-4">
                            <p>Signature:</p>
                        </div>
                        <div>
                            <button type="submit" className="btn btn-warning">Submit & Print</button>
                        </div>
                    </div>
                    <hr />
                    <div className="row mb-3 justify-content-between align-items-center">
                        <div className="col-6">
                            <p className='fw-bold'>HOD Requester:</p>
                        </div>
                        <div className="col-6 d-flex align-items-center">
                            <p className='mb-0 p-3 fw-bold'>Signature:</p>
                        </div>
                        <div className="col-6">
                            <p className='fw-bold'>Requester Manager:</p>
                        </div>
                        <div className="col-6 d-flex align-items-center">
                            <p className='mb-0 p-3 fw-bold'>Signature:</p>
                        </div>
                        <div className="col-6">
                            <p className='fw-bold'>E&I HOD:</p>
                        </div>
                        <div className="col-6 d-flex align-items-center">
                            <p className='mb-0 p-3 fw-bold'>Signature:</p>
                        </div>
                        <div className="col-6">
                            <p className='fw-bold'>PME HOD:</p>
                        </div>
                        <div className="col-6 d-flex align-items-center">
                            <p className='mb-0 p-3 fw-bold'>Signature:</p>
                        </div>
                        <div className="col-6">
                            <p className='fw-bold'>Maintenance Manager:</p>
                        </div>
                        <div className="col-6 d-flex align-items-center">
                            <p className='mb-0 p-3 fw-bold'>Signature:</p>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default PLCForm
