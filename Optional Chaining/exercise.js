const order = {
  customer: {
    name: 'Charlie',
    address: {
      street: 'Amsterdam Avenue',
      city: undefined,

    },
    order: "Mac'n'cheesse",
    extras: "chedar cheesse"
  }
};

if (order && order.customer && order.customer.address && !order.customer.address.city) {
  console.log('City is required');
}

// Less code?

if (typeof(order.customer.address.city) === "undefined") {
  console.log('City is required');
}

