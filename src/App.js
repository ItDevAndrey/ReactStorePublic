import React, { useContext } from "react";
import Catalog from "./Component/Catalog/Catalog";
import Wrapper from "./Component/Wrapper/Wrapper";
import AjaxCart from "./Component/AjaxCart/AjaxCart";
import ProductContext from "./store/product-context";
import Modal from "./Component/UI/Modal";
import FilterList from "./Component/FilterList/FilterList";
import FilterContext from "./store/filter-context";
import Header from "./Component/Header/Header";

function App() {
  const ctx = useContext(ProductContext);
  const ctxFilter = useContext(FilterContext);
  let isZeroProductAfterFiltering = false;
  if (ctxFilter.filterWasApply && ctxFilter.filteredProducts.length === 0) isZeroProductAfterFiltering = true;

  return (
    <React.Fragment>
      <Header />
      <Wrapper classItem='main-container'>
        {ctx.showCartVar && <Modal closeHandler={ctx.closeAjaxCart} />}
        <FilterList />
        <div className={`catalog-wrapper ${isZeroProductAfterFiltering ? 'zero-product' : ''}`}>
          <Catalog productsStatus={isZeroProductAfterFiltering} />
        </div>
        <AjaxCart />
      </Wrapper>
    </React.Fragment>
  );
}

export default App;
