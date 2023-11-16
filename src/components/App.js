import { Searchbar } from "./Searchbar";
import { ImageGallery } from "./ImageGallery";
import { Button } from "./Button";
import { Component } from "react";

export class App extends Component{
  state = {
    images: [],
    query: '',
    page: 1,
  }

  componentDidMount(){

  }

  componentDidUpdate(){

  }

  handleSubmit = (newQuery) => {
        this.setState({
        query: newQuery,
        })
    }

  render(){
    const {images, page} = this.state;
    return (
      <div>
        <Searchbar onSubmit={this.handleSubmit} />
        <ImageGallery page={page} items={images}/>
        <Button/>
      </div>
    );
  }
};
