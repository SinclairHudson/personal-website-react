import data from "./Data";
import React from "react";
import Gallery from "react-photo-gallery";

class ImageGallery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            photos: "Default Title",
        };
    }
    componentDidMount() {
        this.setState()
    }

    render() {
        return (
        <Gallery photos={this.state.photos} direction={"column"} />
    );
    }
}

export default ImageGallery;