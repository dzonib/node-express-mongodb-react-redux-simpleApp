import React, {Component} from 'react';
import {Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup} from 'react-transition-group';
import uuid from 'uuid';
import {connect} from 'react-redux';
import {getItems, deleteItem, addItem} from '../actions/itemActions';
import PropTypes from 'prop-types';

class ShopingList extends Component {
 
  state = {
    name: 'asd'
  }

  componentDidMount() {
    console.log(this.props)
    this.props.getItems();
  }

  handleRemove = (id) => {
    this.props.deleteItem(id)
  } 

  addItemHandler = () => {

  }

  render() {
    console.log(this.props)
    const {items} = this.props.item

    return (
      <Container>
        <Button color="dark" style={{marginBottom: "2rem"}} onClick={ async () => {
          const nejm = await prompt('name');
          await this.setState({name: nejm})
          await this.props.addItem({name: this.state.name})

        
        }}>Add Item</Button>
        <ListGroup>
          <TransitionGroup className="shopping-list">
            {items.map(({id, name}) => (
              <CSSTransition key={id} timeout={500} classNames="fade">
                <ListGroupItem>
                <Button
                  className="remove-btn"
                  color="danger"
                  size="sm"
                  onClick={() => this.handleRemove(id)}
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