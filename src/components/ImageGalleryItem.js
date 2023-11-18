import { Component } from "react"
import { Modal } from "./Modal"

export class ImageGalleryItem extends Component {
    state = {
        isModalOpen: false,
    }

    openModal = () => {
        this.setState({
            isModalOpen: true,
        })
    }

    closeModal = () => {
        this.setState({
            isModalOpen: false,
        })
    }

    render(){
        const {item} = this.props;
        return(
            <div>
                <li className="ImageGalleryItem" onClick={this.openModal}>
                    <img className="ImageGalleryItem-image" src={item.webformatURL} alt="img" />
                </li>
                <Modal 
                isOpen={this.state.isModalOpen}
                onClose={this.closeModal}
                item={item}
                />
            </div>
        )
    }
}