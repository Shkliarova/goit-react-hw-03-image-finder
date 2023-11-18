import { Searchbar } from "./Searchbar";
import { ImageGallery } from "./ImageGallery";
import { Button } from "./Button";
import { Component } from "react";
import { fetchImages } from "./api";
import { Loader } from "./Loader";

export class App extends Component{
  state = {
    images: [],
    query: '',
    page: 1,
    isLoading: false,
  }

  componentDidUpdate(prevProps, prevState){
    if(
      prevState.query !== this.state.query ||
      prevState.page !== this.state.page
    ){
      this.fetchImageData();
    }
  }

  fetchImageData = async () => {
    const {query, page} = this.state;
    try{
      this.setState({isLoading: true});
      const imageData = await fetchImages(query, page);
      if(page === 1){
        this.setState({
          images: imageData.hits,
        })
      } else{
        this.setState(prevState => ({
          images: [...prevState.images, ...imageData.hits],
        }))
      }
    }
    catch(error){

    }
    finally{
      this.setState({isLoading: false});
    }
  }

  handleSubmit = (newQuery) => {
    this.setState({
      query: newQuery,
      page: 1,
    });
  };

  loadMore = () => {
    this.setState(prevState => ({
      page: prevState.page += 1,
    }))
  }

  render(){
    const {images, isLoading} = this.state;
    return (
      <div className="App">
        <Searchbar onSubmit={this.handleSubmit} />
        <ImageGallery items={images}/>
        {images.length > 0 && !isLoading && <Button onClick={this.loadMore}/>}
        {isLoading && <Loader/>}
      </div>
    );
  }
};
