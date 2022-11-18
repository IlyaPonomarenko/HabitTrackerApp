import React, { Component } from "react";
import { connect } from "react-redux";
import DiaryForm from "../../components/DiaryForm/DiaryForm";
import DiaryItem from "../../components/DiaryItem/DiaryItem";
import { addItem } from "../../redux/actions";
import Modal from "react-bootstrap/Modal";

export class Journal extends Component {
  constructor() {
    super();
    this.state = {
      show: false,
      activeItem: null, //This is the item that will be shown inside the Modal
    };
  }
  render() {
    const { addItem, diaryItems } = this.props;
    const { show, activeItem } = this.state;
    return (
      <div>
        <div className="grid-container">
          <div className="diary-app">
            <h1>My Journal</h1>
            <DiaryForm addItem={(item) => addItem(item)} />
          </div>
          <div className="diary-app" style={{ paddingTop: 20 }}>
            {diaryItems.length > 0 ? (
              diaryItems.map((item) => {
                return (
                  <DiaryItem
                    showModal={(item) =>
                      this.setState({ show: true, activeItem: item })
                    }
                    key={item.id}
                    item={item}
                  />
                );
              })
            ) : (
              <h1> No items</h1>
            )}
          </div>
        </div>
        <Modal
          size="lg"
          show={show}
          onHide={() => this.setState({ show: false })}
          aria-labelledby="example-modal-sizes-title-lg"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-lg">
              {activeItem?.title}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>{activeItem?.text}</Modal.Body>
          <Modal.Footer>{activeItem?.date}</Modal.Footer>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  diaryItems: state.diaryItems,
});

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Journal);
