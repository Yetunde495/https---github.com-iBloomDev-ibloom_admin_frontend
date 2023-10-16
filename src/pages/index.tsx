import SuccessModal from "../components/modal/Success";
import Warning from "../components/modal/Warning";
import DefaultLayout from "../layout/DefaultLayout"
import React, {useState} from "react";
import Delete from "../components/modal/Delete";

export default function HomePage() {
    const [error, setError] = useState(false)
    const [success, setSuccess] = useState(false)
    const [deleteModal, setDeleteModal] = useState(false)
  
    return (
      <DefaultLayout>
        
        <h1 className='text-red-700 font-sans'>Vite + React</h1>
        <div className="card">
          <button onClick={() => setSuccess(true)}>
            Success Modal
          </button>
          <button onClick={() => setError(true)}>
            Warning Modal
          </button>
          <button onClick={() => setDeleteModal(true)}>
           Delete Modal
          </button>
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
        <SuccessModal
         show={success}
         size="md:w-[400px] w-[350px]"
          title="Successful!"
          desc="This is a success modal"

         onProceed={() => setSuccess(false)}
        >
        </SuccessModal>
        
        <Warning
        show={error}
        onHide={() => setError(false)}
        onProceed={() => setError(false)}
        size="md:w-[400px] w-[350px]"
        title={`Error?`}
        desc="An error occured while processing your transaction?"
        >
        </Warning>
        <Delete
        show={deleteModal}
        onHide={() => setDeleteModal(false)}
        onProceed={() => setDeleteModal(false)}
        size="md:w-[400px] w-[350px]"
        title={`Delete Course?`}
        desc="Are you sure you want to delete this course?"
        >

        </Delete>
      </DefaultLayout>
    )
  }