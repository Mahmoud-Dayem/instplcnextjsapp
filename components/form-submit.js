'use client'
import React from 'react'
import { useFormState} from 'react-dom'


function FormSubmit() {
    const   status   = useFormState()
    const name = 'eyad'
    
    if (status === 'pending') {
        return (
            <button type="submit" className="btn btn-success" disabled>Submitting...</button>
        )
    }
    return (

     

        <button type="submit" className="btn btn-success">Submit & Print</button>


    )
}

export default FormSubmit