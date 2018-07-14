import React, {Component} from 'react';
import {Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup} from 'react-transition-group';
import {connect} from 'react-redux';
import {getItems, deleteItem, addItem} from '../actions/itemActions';
import PropTypes from 'prop-types';

class ShopingList extends Component {
 
  state = {
    name: ''
  }

  componentDidMount() {
    this.props.getItems();
  }

  handleRemove = (id) => {
    this.props.deleteItem(id)
  } 

  addItemHandler = async () => {
      const nejm = await prompt('name');
      await this.setState({name: nejm})
      await this.props.addItem({name: this.state.name})
  }

  render() {
    const {items} = this.props.item

    if (this.props.item.loading) {
      return (
        <div>
          SPINNER.....
        </div>
      )
    }

    return (
      <Container>
        <Button color="dark" style={{marginBottom: "2rem"}} onClick={this.addItemHandler}>Add Item</Button>
        <ListGroup>
          <TransitionGroup className="shopping-list">
            {items.map(({_id, name}) => (
              <CSSTransition key={_id} timeout={0} classNames="fade">
                <ListGroupItem>
                <Button
                  className="remove-btn"
                  color="danger"
                  size="sm"
                  onClick={() => this.handleRemove(_id)}
                >&times;</Button>
                  {name}
                </ListGroupItem>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </ListGroup>
      </Container>
    )
  }
}

ShopingList.propTypes = {
  getItems: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  item: state.item
})
export default connect(mapStateToProps, {getItems, deleteItem, addItem})(ShopingList)