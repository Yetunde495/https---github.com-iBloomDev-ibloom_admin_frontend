import React, {useState} from 'react'
import Warning from '../../components/modal/Warning'
import Delete from '../../components/modal/Delete'
import SuccessModal from '../../components/modal/Success'
import ErrorModal from '../../components/modal/Error'
import Button from '../../components/button'
import { Section } from '../../components/container'
import useToastNotifications from '../../hooks/useToastNotifications'

export default function BasicComponents() {
    const {showSuccess, showError, showInfo} = useToastNotifications()
    const [error, setError] = useState(false)
    const [warning, setWarning] = useState(false)
    const [success, setSuccess] = useState(false)
    const [deleteModal, setDeleteModal] = useState(false)

    const [errorToast, setErrorToast] = useState(false)
    const [infoToast, setInfoToast] = useState(false)
    const [successToast, setSuccessToast] = useState(false)

   

    React.useEffect(() => {
        if (successToast) {
            showSuccess('This is a Success toast')
        } else if (errorToast) {
            showError('This is an Error toast'); 
        } else if (infoToast) {
            showInfo('This is an info toast')
        }

    }, [successToast, errorToast, infoToast])
  return (
    <div className="max-w-screen-xl mx-auto">
        <Section>
        <section className='mb-6'>
         <h2 className='font-medium mb-2 text-xl'>Buttons</h2>
         <div className='flex gap-3 flex-wrap'>
         <Button variant='primary' onClick={() => {}}>Primary Button</Button>
         <Button variant='secondary' onClick={() => {}}>Secondary Button</Button>
         <Button variant='danger' onClick={() => {}}>Danger Button</Button>
         <Button variant='light' onClick={() => {}}>Light Button</Button>
         <Button variant='link' onClick={() => {}}>Link Button</Button>
         </div>
         </section>

         

         <section className='mb-3'>
         <h2 className='font-medium mb-2 text-xl'>Modals</h2>
         <div className='flex gap-3 flex-wrap'>
        
         <Button variant='light' onClick={() => setSuccess(true)}>Success Modal</Button>
         <Button variant='light' onClick={() => setError(true)}>Error Modal</Button>
         <Button variant='light' onClick={() => setWarning(true)}>Warning Modal</Button>
         <Button variant='light' onClick={() => setDeleteModal(true)}>Delete Modal</Button>
        
         </div>
         </section>

         <section className='mb-3'>
         <h2 className='font-medium mb-2 text-xl'>Toasts</h2>
         <div className='flex gap-3 flex-wrap'>
        
         <Button variant='light' onClick={() => {
            setInfoToast(false)
            setErrorToast(false)
            setSuccessToast(true)}}>Success Toast</Button>
         <Button variant='light' onClick={() => {
            setSuccessToast(false)
            setInfoToast(false)
            setErrorToast(true)}}>Error Toast</Button>
         <Button variant='light' onClick={() => {
            setSuccessToast(false)
            setErrorToast(false)
            setInfoToast(infoToast)}}>Info Toast</Button>
        
         </div>
         </section>
        </Section>
        
        



        

          <SuccessModal
         show={success}
         size="md:w-[400px] w-[350px]"
          title="Successful!"
          desc="This is a success modal"

         onProceed={() => setSuccess(false)}
        >
        </SuccessModal>
        <ErrorModal
        show={error}
        onHide={() => setError(false)}
        onProceed={() => setError(false)}
        size="md:w-[400px] w-[350px]"
        title={`Error!`}
        desc="An error occured while processing your request"
        >

        </ErrorModal>
        
        <Warning
        show={warning}
        onHide={() => setWarning(false)}
        onProceed={() => setWarning(false)}
        size="md:w-[400px] w-[350px]"
        title={`Warning!`}
        desc="This is a warning modal"
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

    </div>
  )
}

