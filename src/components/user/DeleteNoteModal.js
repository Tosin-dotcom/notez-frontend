import '../../assests/styles/note/deletenotemodal.css'


const DeleteNoteModal = ({ isOpen, onClose, onDelete }) => {

    if (!isOpen) return null;

    
    return (
        <section className='modal-overlay'>
            <div className='modal-content'>
                <h2>Are you sure you want to delete this note?</h2>

                <div className='modal-actions'>
                    <button className='cancel-button'onClick={onClose} >Cancel</button>
                    <button className='delete-button' onClick={onDelete}>Delete</button>
                </div>
            </div>
        </section>
    )
}

export default DeleteNoteModal