import React from "react";
import ReactDOM from "react-dom";

class ProductRow extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const name = this.props.product.stocked ?
      this.props.product.name :
      <span style={{color: "red"}}>
        {this.props.product.name}
      </span>;
    return (
      <tr className="productRow">
        <td>{name}</td>
        <td>{this.props.product.price}</td>
      </tr>
    );
  }
}

class ProductCategoryRow extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <tr className="productCategoryRow">
        <th colSpan="2">{this.props.category}</th>
      </tr>
    );
  }
}

class ProductTable extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let rows = [];
    let lastCategory = null;
    this.props.products.forEach(product => {
      if (product.category !== lastCategory) {
        rows.push(
          <ProductCategoryRow
            category={product.category}
            key={product.category} />
        );
      }
      rows.push(
        <ProductRow
          product={product}
          key={product.name} />
      );
      lastCategory = product.category;
    });
    return (
      <table className="productTable">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <form className="searchBar">
        <input type="text" placeholder="Search..." />
        <p>
          <input type="checkbox" />
          {" "}
          Only show products in stock
        </p>
      </form>
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
        <SearchBar />
        <ProductTable products={this.props.products} />
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <FilterableProductTable
        products={PRODUCTS} />
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
