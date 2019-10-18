import React from "react";
import { Link } from "react-router-dom";
import DownButton from "../../../interface/DownButton.png";
import UpButton from "../../../interface/UpButton.png";
import { LightOrange, shiftArray } from "../../../Constants.js";
//import { HeavyOrange, LightOrange, shiftArray } from "../Constants";
import PropTypes from "prop-types";
import "./MainSectionList.scss";

class SectionList extends React.Component {
    constructor(props) {
        super(props);
        const { data, images } = this.props;
        this.state = {
            data,
            images
        };
        this.goUp = this.goUp.bind(this);
        this.goDown = this.goDown.bind(this);
    }
    styles = {
        upArrow: {
            borderStyle: "none none solid none",
            borderColor: LightOrange,
            height: "14%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        },
        downArrow: {
            borderStyle: "solid none none none",
            borderColor: LightOrange,
            height: "14%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        }

    };
    goUp() {
        const { data, images } = this.state;
        let items = data.slice();
        let imgs = images.slice();
        items = shiftArray(items, 1);
        imgs = shiftArray(imgs, 1);
        this.setState({
            data: items,
            images: imgs
        });
    }
    goDown() {
        const { data, images } = this.state;
        let items = data.slice();
        let imgs = images.slice();
        items = shiftArray(items, -1);
        imgs = shiftArray(imgs, -1);
        this.setState({
            data: items,
            images: imgs
        });
    }
    render() {
        const {
            title,
            namespace,
            linkFunction
        } = this.props;
        const { data, images } = this.state;
        return (
            <div

                style={{ width: "100%", height: "100%", display: "flex" }}
                className="section--bottom--animation"
            >
                <div className="left-vertical-nav"
                >

                    <div style={this.styles.upArrow} onClick={this.goUp}>
                        <img src={UpButton} style={{ width: "76px", height: "76px" }} alt="Up" />
                    </div>

                    <div className="vertical-title">
                        <span style={{ transform: "rotate(-90deg)" }}>
                            {title.toUpperCase()}
                        </span>
                    </div>
                    <div style={this.styles.downArrow} onClick={this.goDown}>
                        <img
                            src={DownButton}
                            style={{ width: "76px", height: "76px" }}
                            alt="Down"
                        />
                    </div>
                </div>
                <div
                    style={{ width: "86%", height: "100%", overflow: "hidden" }}
                    id="dynamicSectionList"
                >
                    <div
                        style={{
                            height: "100%",
                            overflowY: "auto",
                            marginRight: "-30px"
                        }}
                    >
                        <div
                            style={{
                                height: "100%",
                                overflow: "auto"
                            }}
                        >
                            {data.map((item, index) => {
                                return (
                                    <Link
                                        key={`${item.id}-${index}`}
                                        to={linkFunction(namespace, item)}
                                        style={{
                                            width: "100%",
                                            height: "33.33333%",
                                            backgroundImage: `url('${
                                                images[index]
                                                }')`,
                                            //    backgroundImage: `url(${item.images})`,
                                            backgroundPosition: "center center",
                                            backgroundRepeat: "no-repeat",
                                            backgroundSize: "cover",
                                            display: "flex",
                                            flexDirection: "column",
                                            justifyContent: "flex-end",
                                            overflowY: "hidden",
                                            textDecoration: "none"
                                        }}
                                    >
                                        <div
                                            style={{
                                                textAlign: "center",
                                                position: "relative"
                                            }}
                                        >
                                            <div
                                                style={{
                                                    position: "absolute",
                                                    top: 0,
                                                    left: 0,
                                                    width: "100%",
                                                    height: "100%",
                                                    backgroundColor:
                                                        "rgb(64,64,65)",
                                                    mixBlendMode: "multiply"
                                                }}
                                            />
                                            <div className="middle-section">
                                                {item.title.toUpperCase()}
                                            </div>
                                        </div>

                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
SectionList.defaultProps = {
    linkFunction: (namespace, item) => {
        return `${namespace}/${item.id}`;
    },
    backgroundPositionValue: "center center"
};
SectionList.propTypes = {
    data: PropTypes.array.isRequired,
    images: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired,
    namespace: PropTypes.string.isRequired
};

export default SectionList;
