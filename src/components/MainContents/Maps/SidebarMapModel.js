import React from "react";
import { Modal } from "react-bootstrap";
import {
    MAX_ZOOM_LEVEL,
    MAP_HEIGHT,
    MAP_WIDTH,
    HOVER_DELAY
} from "../../../Constants.js";
import ReactImageMagnify from "react-image-magnify";
import { MuiThemeProvider } from '@material-ui/core/styles';
import CloseIcon from '@material-ui/icons/Close';
import PropTypes from "prop-types";

class SidebarMapModel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false
        };
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }
    openModal() {
        this.setState({ showModal: true });
    }
    closeModal() {
        this.setState({ showModal: false });
    }
    render() {
        const { showModal } = this.state;
        const { item, mainTitle, mapImage } = this.props;
       
        return (
            <div>
                <div
                    style={{ flexBasis: "14%" }}
                    key={item.index}
                    onClick={this.openModal}
                >
                    <div
                        className="leftSide-menu--container"

                    >
                        <img
                            className="leftSide-menu--img"
                            src={item.icon}

                            alt=""
                        />
                        <div
                            className="menu-title"

                        >
                            {item.title}
                        </div>
                    </div>
                </div>

                <Modal
                    className="modal-100"
                    show={showModal}
                    onHide={this.closeModal}
                    dialogClassName="map-modal"
                >
                    <Modal.Body>
                        <div style={{ position: "absolute", right: 0, top: 0 }}>
                            <MuiThemeProvider>
                                <CloseIcon
                                    onClick={this.closeModal}
                                    color="white"
                                    style={{
                                        padding: 0,
                                        height: 32,
                                        width: 32,
                                        color: "white",
                                        float: "right",
                                        marginRight: "20px",
                                        marginTop: "20px"
                                    }}
                                />
                            </MuiThemeProvider>
                        </div>
                        <div className="map-title">
                            MAP OF
                            <br />
                            {mainTitle.toUpperCase()}
                        </div>
                        <ReactImageMagnify
                            {...{
                                smallImage: {
                                    alt: `Map of ${mainTitle}`,
                                    isFluidWidth: true,
                                    src: mapImage
                                },
                                largeImage: {
                                    src: mapImage,
                                    width: MAX_ZOOM_LEVEL * MAP_WIDTH,
                                    height: MAX_ZOOM_LEVEL * MAP_HEIGHT
                                },
                                hoverOffDelayInMs: HOVER_DELAY,
                                enlargedImagePosition: "over",
                                isHintEnabled: true,
                                isActivatedOnTouch: true,
                                shouldHideHintAfterFirstActivation: false,
                                hintTextMouse: "Long-Touch to Zoom"
                            }}
                        />
                        <div
                            style={{
                                backgroundColor: "rgb(13,109,121)",
                                color: "rgb(107,193,209)",
                                padding: 5,
                                textAlign: "center"
                            }}
                        >
                            TAP OUTSIDE OF MAP TO CLOSE
                        </div>
                    </Modal.Body>
                </Modal>
            </div>
        );
    }
}

SidebarMapModel.propTypes = {
    item: PropTypes.object.isRequired,
    mainTitle: PropTypes.string.isRequired,
    //maps: PropTypes.array.isRequired
};

export default SidebarMapModel;

