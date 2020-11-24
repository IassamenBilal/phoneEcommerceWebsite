import React, { Component } from "react";
import Title from "../Title";
import CartColumns from "./CartColumns";
import EmptyCart from "./EmptyCart";
import { ProductConsumer } from "../../context";

export default class Cart extends Component {
  render() {
    return (
      <section>
        <div class="dropdown">
          <button
            class="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenu2"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Dropdown
          </button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
            <button class="dropdown-item" type="button">
              Action
            </button>
            <button class="dropdown-item" type="button">
              Another action
            </button>
            <button class="dropdown-item" type="button">
              Something else here
            </button>
          </div>
        </div>
        {/* <ProductConsumer>
          {(value) => {
            const { cart } = value;
            if (cart.length > 0) {
              return (
                <React.Fragment>
                  <Title name="Your" title="cart" />
                  <CartColumns></CartColumns>
                </React.Fragment>
              );
            } else {
              return <EmptyCart />;
            }
          }}
        </ProductConsumer> */}
      </section>
    );
  }
}
