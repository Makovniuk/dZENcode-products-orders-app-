import ProductsItem from '../../components/ProductsItem/ProductsItem'

export default function Products() { 
    return (
      <div className="p-4">
        <h2>Продукты</h2>
        <ProductsItem
          status="в ремонте"
          isNew={false}
          condition="б/у"
          user="Христорождественский Александр"
        />
      </div>
    );
};
  