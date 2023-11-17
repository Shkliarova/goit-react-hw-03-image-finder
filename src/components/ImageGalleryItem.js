export const ImageGalleryItem = ({item}) => {
    return(
        <li className="ImageGalleryItem">
        <img className="ImageGalleryItem-image" src={item.webformatURL} alt="img" />
        </li>
    )
}