import data from "./Data";
import React, {Component} from "react";
import Gallery from "react-photo-gallery";
const pub = process.env.PUBLIC_URL;

class ImageGallery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            images: null,
            photos: [
                {
                    src: pub + "/img/" + this.props.id + "/0.jpg",
                    width: 1,
                    height: 1
                },
                {
                    src: pub + "/img/" + this.props.id + "/1.jpg",
                    width: 1,
                    height: 1
                },
                {
                    src: pub + "/img/" + this.props.id + "/2.jpg",
                    width: 1,
                    height: 1
                },
                {
                    src: pub + "/img/" + this.props.id + "/3.jpg",
                    width: 1,
                    height: 1
                },
            ],
        };
    }

    componentDidMount() {
        this.setState()
    }

    render() {
        return (
            <div>
                <h2>Pictures</h2>
                <Gallery
                    photos={this.state.photos}
                    direction={"column"}
                />
            </div>
        );
    }
}

export default ImageGallery;