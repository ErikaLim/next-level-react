import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'



const imgUrls = [
  "https://imgur.com/OxaryFA.jpg",
  "https://i.imgur.com/DRmlbME.png",
  "https://imgur.com/yKaUIMb.png",
  "https://imgur.com/fbFMsq4.png",
];


export default class Carousel extends Component {
    constructor(props){
        super(props);

        this.state = {
            currentImageIndex: 0
        };

        this.nextSlide = 
            this.nextSlide.bind(this);
        this.previousSlide = 
            this.previousSlide.bind(this);
    }

    previousSlide() {
        const lastIndex = imgUrls.length -1;
        const { currentImageIndex } = this.state;
        const shouldResetIndex = currentImageIndex === 0;
        const index = shouldResetIndex ? lastIndex : currentImageIndex - 1;

        this.setState({
            currentImageIndex: index
        });
    }

    nextSlide() {
        const lastIndex = imgUrls.length -1;
        const { currentImageIndex } = this.state;
        const shouldResetIndex = currentImageIndex === lastIndex;
        const index = shouldResetIndex ? 0 : currentImageIndex + 1;

        this.setState({
            currentImageIndex: index
        });
    }
    render(){
        return <div className="carousel">
            <Grid item xs={12}>
                <Grid container justify="center">
                    <ImageSlide url={imgUrls[this.state.currentImageIndex]} />
                </Grid>
            </Grid>
            <Arrow direction="left" clickFunction={this.previousSlide} glyph="&#9664;" />
            <Arrow direction="right" clickFunction={this.nextSlide} glyph="&#9654;" />
          </div>;
    }
}

const Arrow = ({ direction, clickFunction, glyph }) => (
  <div className={`slide-arrow ${direction}`} onClick={clickFunction}>
    {glyph}
  </div>
);

const ImageSlide = ({ url }) => {
  const styles = {
    backgroundImage: `url(${url})`,
    backgroundSize: "cover",
 
  };

  return <div className="image-slide" style={styles} />;
};