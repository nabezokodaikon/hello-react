import React from "react";
import ReactDOM from "react-dom";

class ProductRow extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="productRow">
      </div>
    );
  }
}

class ProductCategoryRow extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="productCategoryRow">
      </div>
    );
  }
}

class ProductTable extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="productTable">
      </div>
    );
  }
}

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="searchBar">
      </div>
    );
  }
}

class FilterableProductTable extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="filterableProductTable">
        <SearchBar>
        </SearchBar>
        <ProductTable>
        </ProductTable>
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        Hello!
        <FilterableProductTable>
        </FilterableProductTable>
      </div>
    );
  }
}

const PRODUCTS = [
  {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
  {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
  {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
  {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
  {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
  {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];

ReactDOM.render(
  <App />,
  document.getElementById("root")
);
