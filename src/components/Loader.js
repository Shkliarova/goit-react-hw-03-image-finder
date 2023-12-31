import { Hearts } from "react-loader-spinner"

export const Loader = () => {
    return(
        <div className="Loader">
            <Hearts 
            height="80"
            width="80"
            color="#3f51b5"
            ariaLabel="hearts-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            />
        </div>
    )
}