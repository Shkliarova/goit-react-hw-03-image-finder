import ReactModal from "react-modal"

ReactModal.setAppElement('#root');

export const Modal = ({isOpen, onClose, item}) => {

    return(
        <div className="Overlay" onClick={onClose}>
            <ReactModal className="Modal"
            isOpen={isOpen}
            onRequestClose={onClose}
            >
                <img src={item.largeImageURL} alt="largeImage" />
            </ReactModal>
        </div>
    )
}