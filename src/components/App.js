import { Searchbar } from "./Searchbar";
import { ImageGallery } from "./ImageGallery";
import { Button } from "./Button";
import { Component } from "react";

export class App extends Component{
  state = {
    images: []
  }

  componentDidMount(){

  }

  componentDidUpdate(){

  }

  render(){
    return (
      <div>
        <Searchbar />
        <ImageGallery/>
        <Button/>
      </div>
    );
  }
};
