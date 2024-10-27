import  { ChangeEvent, Component } from "react";
import Carousel from "react-spring-3d-carousel";
import { v4 as uuidv4 } from "uuid";
import { config } from "react-spring";

import left from "@/assets/free-icon-rewind-left-gpng.png"
import right from "@/assets/free-icon-rewind-right-g.png"

import styles from "./Carousel.module.css"

export default class Example extends Component {
  state = {
    goToSlide: 0,
    offsetRadius: 2,
    showNavigation: true,
    config: config.gentle,
  };

  slides = [
    {
      key: uuidv4(),
      content: (
        <div
          style={{
            border: "4px solid #e9dbc1",
            background: 'rgba(233, 219, 193, 0.2)',
            boxShadow: "0 4px 20px #00000033",
            borderRadius: "20px",
            padding: "20px",
            color: "white",
            textAlign: "center",
            width: "300px",
            height: "400px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h2>Slide 1</h2>
        </div>
      ),
    },
    {
      key: uuidv4(),
      content: (
        <div
          style={{
            border: "4px solid #e9dbc1",
            background: 'rgba(233, 219, 193, 0.2)',
            boxShadow: "0 4px 20px #00000033",
            borderRadius: "20px",
            padding: "20px",
            color: "white",
            textAlign: "center",
            width: "300px",
            height: "400px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h2>Slide 2</h2>
        </div>
      ),
    },
    {
      key: uuidv4(),
      content: (
        <div
          style={{
            border: "4px solid #e9dbc1",
            background: 'rgba(233, 219, 193, 0.2)',
            boxShadow: "0 4px 20px #00000033",
            borderRadius: "20px",
            padding: "20px",
            color: "white",
            textAlign: "center",
            width: "300px",
            height: "400px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h2>Slide 3</h2>
        </div>
      ),
    },
    {
      key: uuidv4(),
      content: (
        <div
          style={{
            border: "4px solid #e9dbc1",
            background: 'rgba(233, 219, 193, 0.2)',
            boxShadow: "0 4px 20px #00000033",
            borderRadius: "20px",
            padding: "20px",
            color: "white",
            textAlign: "center",
            width: "300px",
            height: "400px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h2>Slide 4</h2>
        </div>
      ),
    },
    {
      key: uuidv4(),
      content: (
        <div
          style={{
            border: "4px solid #e9dbc1",
            background: 'rgba(233, 219, 193, 0.2)',
            boxShadow: "0 4px 20px #00000033",
            borderRadius: "20px",
            padding: "20px",
            color: "white",
            textAlign: "center",
            width: "300px",
            height: "400px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h2>Slide 5</h2>
        </div>
      ),
    },
    {
      key: uuidv4(),
      content: (
        <div
          style={{
            border: "4px solid #e9dbc1",
            background: 'rgba(233, 219, 193, 0.2)',
            boxShadow: "0 4px 20px #00000033",
            borderRadius: "20px",
            padding: "20px",
            color: "white",
            textAlign: "center",
            width: "300px",
            height: "400px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h2>Slide 6</h2>
        </div>
      ),
    },
    {
      key: uuidv4(),
      content: (
        <div
          style={{
            border: "4px solid #e9dbc1",
            background: 'rgba(233, 219, 193, 0.2)',
            boxShadow: "0 4px 20px #00000033",
            borderRadius: "20px",
            padding: "20px",
            color: "white",
            textAlign: "center",
            width: "300px",
            height: "400px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h2>Slide 7</h2>
        </div>
      ),
    },
    {
      key: uuidv4(),
      content: (
        <div
          style={{
            border: "4px solid #e9dbc1",
            background: 'rgba(233, 219, 193, 0.2)',
            boxShadow: "0 4px 20px #00000033",
            borderRadius: "20px",
            padding: "20px",
            color: "white",
            textAlign: "center",
            width: "300px",
            height: "400px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h2>Slide 8</h2>
        </div>
      ),
    },
  ].map((slide, index) => {
    return { ...slide, onClick: () => this.setState({ goToSlide: index }) };
  });

  onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({
      [e.target.name]: parseInt(e.target.value, 10) || 0,
    });
  };

  goToPreviousSlide = () => {
    this.setState(prevState => ({
      goToSlide: (prevState.goToSlide > 0) ? prevState.goToSlide - 1 : this.slides.length - 1,
    }));
  };

  goToNextSlide = () => {
    this.setState(prevState => ({
      goToSlide: (prevState.goToSlide < this.slides.length - 1) ? prevState.goToSlide + 1 : 0,
    }));
  };

  handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'ArrowLeft') {
      this.goToPreviousSlide();
    } else if (event.key === 'ArrowRight') {
      this.goToNextSlide();
    }
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  render() {
    return (
      <div style={{ width: "800px", height: "500px", margin: "0 auto" }}>
        <Carousel
          slides={this.slides}
          goToSlide={this.state.goToSlide}
          offsetRadius={this.state.offsetRadius}
          showNavigation={false}
          animationConfig={this.state.config}
        />
        <div className={styles.buttonsContainer}>
         
          <img className={styles.button} onClick={() => this.setState({ goToSlide: this.state.goToSlide > 0 ? this.state.goToSlide - 1 : this.slides.length - 1 })} src={left} alt="" />
          <img className={styles.button} onClick={() => this.setState({ goToSlide: this.state.goToSlide > 0 ? this.state.goToSlide + 1 : this.slides.length - 1 })} src={right} alt="" />
         
        </div>
      </div>
    );
  }
}
  
