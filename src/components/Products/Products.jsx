import "./products.css";
import Data from "../../data.json";
import { ProductCard } from "../ProductCard/ProductCard";
import { useFilter } from "../../context/filterContext";

export const Products = () => {

    const { state } = useFilter();

    const { men, women, boys, girls } = state.categories;
    const { s, m, l, xl } = state.sizes;
    const { Addidas, Roadster, Puma, Hrx } = state.brands;

    const sortByHandler = (productList, sortBy) =>
        sortBy === "LOW_TO_HIGH"
            ? [...productList].sort((a, b) => a.price - b.price)
            : sortBy === "HIGH_TO_LOW"
                ? [...productList].sort((a, b) => b.price - a.price)
                : productList;

    const categoryHandler = (productList, men, women, boys, girls) => {

        const filteredCategoryList = [];

        if (men === false && women === false && boys === false && girls === false) {
            return productList;
        }
        if (men === true) {
            let newList = productList.filter(item => item.category === "men");
            filteredCategoryList.push(...newList);
        }
        if (women === true) {
            let newList = productList.filter(item => item.category === "women");
            filteredCategoryList.push(...newList);
        }
        if (boys === true) {
            let newList = productList.filter(item => item.category === "boys");
            filteredCategoryList.push(...newList);
        }
        if (girls === true) {
            let newList = productList.filter(item => item.category === "girls");
            filteredCategoryList.push(...newList);
        }
        return filteredCategoryList;
    }

    const brandHandler = (productList, Addidas, Roadster, Puma, Hrx) => {

        const filteredBrandList = [];

        if (Addidas === false && Roadster === false && Puma === false && Hrx === false) {
            return productList;
        }
        if (Addidas === true) {
            let newList = productList.filter(item => item.brand === "Addidas");
            filteredBrandList.push(...newList);
        }
        if (Roadster === true) {
            let newList = productList.filter(item => item.brand === "Roadster");
            filteredBrandList.push(...newList);
        }
        if (Puma === true) {
            let newList = productList.filter(item => item.brand === "Puma");
            filteredBrandList.push(...newList);
        }
        if (Hrx === true) {
            let newList = productList.filter(item => item.brand === "Hrx");
            filteredBrandList.push(...newList);
        }
        return filteredBrandList;
    }

    const sizeHandler = (productList, s, m, l, xl) => {

        const filteredBrandList = [];

        if (s === false && m === false && l === false && xl === false) {
            return productList;
        }
        if (s === true) {
            let newList = productList.filter(item => item.size === "s");
            filteredBrandList.push(...newList);
        }
        if (m === true) {
            let newList = productList.filter(item => item.size === "m");
            filteredBrandList.push(...newList);
        }
        if (l === true) {
            let newList = productList.filter(item => item.size === "l");
            filteredBrandList.push(...newList);
        }
        if (xl === true) {
            let newList = productList.filter(item => item.size === "xl");
            filteredBrandList.push(...newList);
        }
        return filteredBrandList;
    }

    const getCategoryData = categoryHandler(Data, men, women, boys, girls);

    const getBrandData = brandHandler(getCategoryData, Addidas, Roadster, Puma, Hrx);

    const getSizeData = sizeHandler(getBrandData,  s, m, l, xl);

    const getSortedData = sortByHandler(getSizeData, state.sortBy);

    return (
        <main className="product-container">
            <h1>Showing {getSortedData.length} products</h1>

            <div className='products'>
                {getSortedData.map(product => <ProductCard key={product.id} product={product} />)}
            </div>
        </main>
    )
}