import { ChangeEvent, Component } from "react";
import Carousel from "react-spring-3d-carousel";
import { v4 as uuidv4 } from "uuid";
import { config } from "react-spring";
import background from "@/assets/photo_2024-10-29_19-01-29.jpg";
import background2 from "@/assets/photo_2024-10-29_19-01-36.jpg";
import background3 from "@/assets/photo_2024-10-29_19-01-42.jpg";
import background4 from "@/assets/photo_2024-10-29_19-06-04.jpg";
import background5 from "@/assets/photo_2024-10-29_19-06-13.jpg";
import background6 from "@/assets/photo_2024-10-29_19-08-06.jpg";
import background7 from "@/assets/photo_2024-10-29_19-10-20.jpg";
import background8 from "@/assets/photo_2024-10-29_19-12-34.jpg";
import background11 from "@/assets/photo_2024-10-29_19-18-56.jpg";
import background12 from "@/assets/photo_2024-10-29_19-20-54.jpg";

import left from "@/assets/free-icon-rewind-left-gpng.png";
import right from "@/assets/free-icon-rewind-right-g.png";

import styles from "./Carousel.module.css";

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
            background: "rgba(233, 219, 193, 0.2)",
            boxShadow: "0 4px 20px #00000033",
            borderRadius: "20px",
            color: "white",
            textAlign: "center",
            width: "300px",
            height: "400px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            overflow: "hidden",
          }}
        >
          <img
            className={styles.heroImage}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
            src={background}
            alt="foto1"
          />
        </div>
      ),
    },
    {
      key: uuidv4(),
      content: (
        <div
          style={{
            border: "4px solid #e9dbc1",
            background: "rgba(233, 219, 193, 0.2)",
            boxShadow: "0 4px 20px #00000033",
            borderRadius: "20px",
            color: "white",
            textAlign: "center",
            width: "300px",
            height: "400px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            overflow: "hidden",
          }}
        >
          <img
            className={styles.heroImage}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
            src={background2}
            alt="foto1"
          />
        </div>
      ),
    },
    {
      key: uuidv4(),
      content: (
        <div
          style={{
            border: "4px solid #e9dbc1",
            background: "rgba(233, 219, 193, 0.2)",
            boxShadow: "0 4px 20px #00000033",
            borderRadius: "20px",
            color: "white",
            textAlign: "center",
            width: "300px",
            height: "400px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            overflow: "hidden",
          }}
        >
          <img
            className={styles.heroImage}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
            src={background3}
            alt="foto1"
          />
        </div>
      ),
    },
    {
      key: uuidv4(),
      content: (
        <div
          style={{
            border: "4px solid #e9dbc1",
            background: "rgba(233, 219, 193, 0.2)",
            boxShadow: "0 4px 20px #00000033",
            borderRadius: "20px",
            color: "white",
            textAlign: "center",
            width: "300px",
            height: "400px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            overflow: "hidden",
          }}
        >
          <img
            className={styles.heroImage}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
            src={background4}
            alt="foto1"
          />
        </div>
      ),
    },
    {
      key: uuidv4(),
      content: (
        <div
          style={{
            border: "4px solid #e9dbc1",
            background: "rgba(233, 219, 193, 0.2)",
            boxShadow: "0 4px 20px #00000033",
            borderRadius: "20px",
            color: "white",
            textAlign: "center",
            width: "300px",
            height: "400px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            overflow: "hidden",
          }}
        >
          <img
            className={styles.heroImage}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
            src={background5}
            alt="foto1"
          />
        </div>
      ),
    },
    {
      key: uuidv4(),
      content: (
        <div
          style={{
            border: "4px solid #e9dbc1",
            background: "rgba(233, 219, 193, 0.2)",
            boxShadow: "0 4px 20px #00000033",
            borderRadius: "20px",
            color: "white",
            textAlign: "center",
            width: "300px",
            height: "400px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            overflow: "hidden",
          }}
        >
          <img
            className={styles.heroImage}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
            src={background6}
            alt="foto1"
          />
        </div>
      ),
    },
    {
      key: uuidv4(),
      content: (
        <div
          style={{
            border: "4px solid #e9dbc1",
            background: "rgba(233, 219, 193, 0.2)",
            boxShadow: "0 4px 20px #00000033",
            borderRadius: "20px",
            color: "white",
            textAlign: "center",
            width: "300px",
            height: "400px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            overflow: "hidden",
          }}
        >
          <img
            className={styles.heroImage}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
            src={background7}
            alt="foto1"
          />
        </div>
      ),
    },
    {
      key: uuidv4(),
      content: (
        <div
          style={{
            border: "4px solid #e9dbc1",
            background: "rgba(233, 219, 193, 0.2)",
            boxShadow: "0 4px 20px #00000033",
            borderRadius: "20px",
            color: "white",
            textAlign: "center",
            width: "300px",
            height: "400px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            overflow: "hidden",
          }}
        >
          <img
            className={styles.heroImage}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
            src={background8}
            alt="foto1"
          />
        </div>
      ),
    },
    {
      key: uuidv4(),
      content: (
        <div
          style={{
            border: "4px solid #e9dbc1",
            background: "rgba(233, 219, 193, 0.2)",
            boxShadow: "0 4px 20px #00000033",
            borderRadius: "20px",
            color: "white",
            textAlign: "center",
            width: "300px",
            height: "400px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            overflow: "hidden",
          }}
        >
          <img
            className={styles.heroImage}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
            src={background12}
            alt="foto1"
          />
        </div>
      ),
    },
    {
      key: uuidv4(),
      content: (
        <div
          style={{
            border: "4px solid #e9dbc1",
            background: "rgba(233, 219, 193, 0.2)",
            boxShadow: "0 4px 20px #00000033",
            borderRadius: "20px",
            color: "white",
            textAlign: "center",
            width: "300px",
            height: "400px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            overflow: "hidden",
          }}
        >
          <img
            className={styles.heroImage}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
            src={background11}
            alt="foto1"
          />
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
    this.setState((prevState) => ({
      goToSlide:
        prevState.goToSlide > 0
          ? prevState.goToSlide - 1
          : this.slides.length - 1,
    }));
  };

  goToNextSlide = () => {
    this.setState((prevState) => ({
      goToSlide:
        prevState.goToSlide < this.slides.length - 1
          ? prevState.goToSlide + 1
          : 0,
    }));
  };

  handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === "ArrowLeft") {
      this.goToPreviousSlide();
    } else if (event.key === "ArrowRight") {
      this.goToNextSlide();
    }
  };

  componentDidMount() {
    window.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeyDown);
  }

  render() {
    return (
      <div
        style={{
          width: "800px",
          height: "500px",
          margin: "0 auto",
          display: "flex",
          gap: "20px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          className={styles.button}
          onClick={() =>
            this.setState({
              goToSlide:
                this.state.goToSlide > 0
                  ? this.state.goToSlide - 1
                  : this.slides.length - 1,
            })
          }
          src={left}
          alt=""
        />
        <Carousel
          slides={this.slides}
          goToSlide={this.state.goToSlide}
          offsetRadius={this.state.offsetRadius}
          showNavigation={false}
          animationConfig={this.state.config}
        />

        <img
          className={styles.button}
          onClick={() =>
            this.setState({
              goToSlide:
                this.state.goToSlide > 0
                  ? this.state.goToSlide + 1
                  : this.slides.length + 1,
            })
          }
          src={right}
          alt=""
        />
      </div>
    );
  }
}
