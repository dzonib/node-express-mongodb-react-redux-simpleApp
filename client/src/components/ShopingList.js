import React, {Component} from 'react';
import {Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup} from 'react-transition-group';
import uuid from 'uuid';

class ShopingList extends Component {
  state = {
    items: [
      {id: uuid(), name: 'Eier'},
      {id: uuid(), name: 'Milch'},
      {id: uuid(), name: 'Flaish'},
      {id: uuid(), name: 'Wasser'},
    ]
  }

  render() {
    const {items} = this.state.items

    return (
      <Container>
        <Button color="dark" style={{marginBottom: "2rem"}} onClick={() => {
          const name = prompt("Enter Item");
          if (name) {
            this.setState(prevState => ({
              items: [...prevState.items, {id: uuid(), name}]
            }))
          }
        }}>Add Item</Button>
        <ListGroup>
          <TransitionGroup className="shopping-list">
            {this.state.items.map(({id, name}) => (
              <CSSTransition key={id} timeout={500} classNames="fade">
                <ListGroupItem>
                <Button
                  className="remove-btn"
                  color="danger"
                  size="sm"
                  onClick={() => {
                    this.setState(prevState => {
                      return {
                        items: prevState.items.filter(item => {
                          console.log(item)
                          return (
                            item.id !== id
                          )
                        })
                      }
                    });
                  }}
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

export default ShopingList