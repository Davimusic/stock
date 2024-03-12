const initialState = {
  stock: [
    { id: 1, name: 'casa', quantity: 10, location: 'Warehouse 1', purchasePrice: 50, info: 'texto de relleno' },
    { id: 2, name: 'Product 2', quantity: 5, location: 'Warehouse 2', purchasePrice: 100, info: 'texto de relleno2' },
    { id: 3, name: 'Product 3', quantity: 10, location: 'Warehouse 1', purchasePrice: 50, info: 'texto de relleno' },
    { id: 4, name: 'Product 4', quantity: 5, location: 'Warehouse 2', purchasePrice: 100, info: 'texto de relleno2' },
    { id: 5, name: 'carro', quantity: 10, location: 'Warehouse 1', purchasePrice: 50, info: 'texto de relleno' },
    { id: 6, name: 'Product 6', quantity: 5, location: 'Warehouse 2', purchasePrice: 100, info: 'texto de relleno2' },
    { id: 7, name: 'carro', quantity: 10, location: 'Warehouse 1', purchasePrice: 50, info: 'texto de relleno' },
    { id: 8, name: 'Product 8', quantity: 5, location: 'Warehouse 2', purchasePrice: 100, info: 'texto de relleno2' },
    { id: 9, name: 'Product 9', quantity: 10, location: 'Warehouse 1', purchasePrice: 50, info: 'texto de relleno' },
    { id: 10, name: 'casa', quantity: 5, location: 'dela casa de la madre 2', purchasePrice: 100, info: 'texto de relleno2' },
    { id: 11, name: 'Product 11', quantity: 10, location: 'Warehouse 1', purchasePrice: 50, info: 'texto de relleno' },
    { id: 12, name: 'carro', quantity: 5, location: 'Warehouse 2', purchasePrice: 100, info: 'texto de relleno2' },
    { id: 13, name: 'casa', quantity: 10, location: 'Warehouse 1', purchasePrice: 50, info: 'texto de relleno' },
    { id: 14, name: 'Product 14', quantity: 5, location: 'Warehouse 2', purchasePrice: 100, info: 'texto de relleno2' },
  ]
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_STOCK':
        return {
          ...state,
          stock: action.payload, 
        };                                                           
    default:
      return state;
  }
};

export default counterReducer;
