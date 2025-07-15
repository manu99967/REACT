function ParentComponent() {
  const name = "Dress1";
  const img = "https://m.media-amazon.com/images/I/716H7P4ga3L._AC_SY741_.jpg";
  const price = 2000;
  const onStock = true;

  // <Component a={23} b={34} key={value} key={value} />
  // {key:value}

  return (
    <div>
      <ChildComponent
        name={name}
        img={img}
        price={price}
        onStock={onStock}
        any={343}
      />
      <ChildComponent2 name={name} img={img} price={price} onStock={onStock} />
      <ChildComponent3 name={name} img={img} price={price} onStock={onStock} />
    </div>
  );
}

// img,name,price
function ChildComponent(props) {
  console.log(props);
  return (
    <div>
      <h1>Child component 1</h1>
      <div>
        <img src={props.img} />
      </div>
      <div>
        Name: <b>{props.name}</b>
      </div>
      <div>
        Price: <b>{props.price}</b>
      </div>
    </div>
  );
}

function ChildComponent2(props) {
  //   destructure
  const { img, name, price } = props;
  return (
    <div>
      <h2>Child component 2</h2>
      <div>
        <img src={img} />
      </div>
      <div>
        Name: <b>{name}</b>
      </div>
      <div>
        Price: <b>{price}</b>
      </div>
    </div>
  );
}

function ChildComponent3({ img, name, price }) {
  //   const {} = props;
  return (
    <div>
      <h2>Child component 3</h2>
      <div>
        <img src={img} />
      </div>
      <div>
        Name: <b>{name}</b>
      </div>
      <div>
        Price: <b>{price}</b>
      </div>
    </div>
  );
}

export default ParentComponent;