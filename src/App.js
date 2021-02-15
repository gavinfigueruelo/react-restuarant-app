import React, {Component} from 'react';
import './App.css';
import MenuList from './MenuList';
import OrderList from './OrderList';
import MenuBar from './MenuBar';


class App extends Component{
  constructor(props){
    super(props);
    this.state = {
        items: [],
        order: [],
        selection: "",
        total: [],
        newItem:{},

    };
    this.menuBarClick = this.menuBarClick.bind(this);
    this.menuClick = this.menuClick.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.addItem = this.addItem.bind(this);
};

componentDidMount(){
      const items = [{
      itemName: "Yogurt Parfait",
      description: "Vanilla Greek Yogurt topped with strawberries, blueberries, and granola(gf available)",
      type: "Light Choices",
      count: 0,
      price: 5,
      },
      {
      itemName: 'Fruit Salad',
      description: "Fresh strawberries, pineapple, grapes, apples, and cantelope",
      type: "Light Choices",
      count: 0,
      price: 5,
      },

      {
      itemName: 'Waffles',
      description: "Our Homemade belgian waffles with choice of fruti toppings. ",
      type: "Fillers",
      count: 0,
      price: 6,
      },
      {
      itemName: "Eggs and Protien",
      description: "2 Eggs, 2 slices of toast, and bacon.",
      type: "Fillers",
      count: 0,
      price: 7,
      },
      {
      itemName: 'Biscuits and Gravy',
      description: "Homemade biscuits and sausage gravy. ",
      type: "Fillers",
      count: 0,
      price: 5,
      },
      {
      itemName: 'Breakfast  Sandwich',
      description: "2 eggs on Cuban bread, bacon, and provolone cheese",
      type: "Fillers",
      count: 0,
      price: 6,
      },

      {
      itemName: "Orange Juice",
      description: "Freshly squeezed oranges",
      type: "drinks",
      count: 0,
      price: 3,
      },
      {
      itemName: 'Coffee',
      description: "House or Breakfast blend",
      type: "desserts",
      count: 0,
      price: 2,
    }
    ];

    this.setState({items});
      }
addItem(item, index){
  const order = [...this.state.order];
  const count = order[index].count ++;
  this.setState({order: order});
}

menuClick(item) {
  const newItem = item;
  const order = [...this.state.order, item];
  this.setState({order: order, total: [...this.state.total, item.price], newItem: item});
  const count = order[order.indexOf(item)].count +=1;
}
menuBarClick(item) {
this.setState({selection: item});
}
deleteItem(item){
  const order = [...this.state.order];
  const total = [...this.state.total];
  order.splice(order.indexOf(item), 1);
  total.splice(order.indexOf(item), 1);
  this.setState({order: order, total: total});
}

  render() {
 const selection = this.state.selection;
 const reducer = (a, b) => a+b;
 const totalPrice = this.state.total.reduce(reducer, 0);
 const newItem = this.state.newItem;

return (
<div id="outerBody">
    <div className="container">
    <div id="titleCard"><img src={titleimg}/>
    <h3>breakfast favorites</h3></div>
         <div className="">
         <MenuBar menuBarClick={this.menuBarClick}/>
         </div>
  <div className="row">
         <div className="col-7" id="menuSpace">
          <MenuList items={this.state.items} selection={this.state.selection} menuClick={this.menuClick}/>
          </div>
      <div className="col-1" id="emptySpace"></div>
           <div className="col-4" id="orderCol">
           <OrderList addItem={this.addItem} order={this.state.order} deleteItem={this.deleteItem} totalPrice={totalPrice} newItem={this.state.newItem}/>
           </div>
      </div>
      </div>
      </div>
  );
}
}
export default App;
