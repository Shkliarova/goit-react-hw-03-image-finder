import { ImageGalleryItem } from "./ImageGalleryItem"

export const ImageGallery = () => {
    return(
        <ul class="gallery">
            {.map( => {
                <ImageGalleryItem/>
            })}
        </ul>
    )
}