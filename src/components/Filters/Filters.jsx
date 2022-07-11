import { useFilter } from "../../context/filterContext";
import "./filters.css";

export const Filters = () => {

    const { state, dispatch } = useFilter();
    const { men, women, boys, girls } = state.categories;
    const { s, m, l, xl } = state.sizes;
    const { Addidas, Roadster, Puma, Hrx } = state.brands;

    return (
        <aside className="filter-container">

            <div className="filter-wrapper">
                <div className="filter-head">
                    <h4>Filters</h4>
                    <button onClick={() => dispatch({ type: "CLEAR_ALL"})} className="clear-all-btn">CLEAR ALL</button>
                </div>

                <div className="filter-category">
                    <h3 className="filter_sub_headings">Category</h3>
                    <div className="inp_checkbox flex flex_justify_start flex_align_center">
                        <label>
                            <input className="inp_checkbox"
                                name="MEN"
                                type="checkbox"
                                checked={men}
                                onChange={() => dispatch({ type: "MEN" })}
                            />
                            <span className="checkbox_notify">Men Clothing</span>
                        </label>
                    </div>
                    <div className="inp_checkbox flex flex_justify_start flex_align_center">
                        <label>
                            <input className="inp_checkbox"
                                onChange={() => dispatch({ type: "WOMEN" })}
                                name="WOMEN"
                                type="checkbox"
                                checked={women}
                            />
                            <span className="checkbox_notify">Women Clothing</span>
                        </label>
                    </div>
                    <div className="inp_checkbox flex flex_justify_start flex_align_center">
                        <label>
                            <input className="inp_checkbox"
                                onChange={() => dispatch({ type: "BOYS" })}
                                name="BOYS"
                                type="checkbox"
                                checked={boys}
                            />
                            <span className="checkbox_notify">Boys Clothing</span>
                        </label>
                    </div>
                    <div className="inp_checkbox flex flex_justify_start flex_align_center">
                    <label >
                        <input className="inp_checkbox"
                        onChange={() => dispatch({ type: "GIRLS" })}
                        name="GIRLS"
                        type="checkbox"
                        checked={girls}
                        />
                        <span className="checkbox_notify">Girls Clothing</span>
                    </label>
                </div>
                </div>

                {/* Brands */} 

                <div className="filter-category">
                    <h3 className="filter_sub_headings">Brands</h3>
                    <div className="inp_checkbox flex flex_justify_start flex_align_center">
                        <label>
                            <input className="inp_checkbox"
                                name="ADDIDAS"
                                type="checkbox"
                                checked={Addidas}
                                onChange={() => dispatch({ type: "ADDIDAS" })}
                            />
                            <span className="checkbox_notify">Addidas</span>
                        </label>
                    </div>
                    <div className="inp_checkbox flex flex_justify_start flex_align_center">
                        <label>
                            <input className="inp_checkbox"
                                onChange={() => dispatch({ type: "ROADSTER" })}
                                name="ROADSTER"
                                type="checkbox"
                                checked={Roadster}
                            />
                            <span className="checkbox_notify">Roadster</span>
                        </label>
                    </div>
                    <div className="inp_checkbox flex flex_justify_start flex_align_center">
                        <label>
                            <input className="inp_checkbox"
                                onChange={() => dispatch({ type: "PUMA" })}
                                name="PUMA"
                                type="checkbox"
                                checked={Puma}
                            />
                            <span className="checkbox_notify">Puma</span>
                        </label>
                    </div>
                    <div className="inp_checkbox flex flex_justify_start flex_align_center">
                        <label>
                            <input className="inp_checkbox"
                                onChange={() => dispatch({ type: "HRX" })}
                                name="HRX"
                                type="checkbox"
                                checked={Hrx}
                            />
                            <span className="checkbox_notify">Hrx</span>
                        </label>
                    </div>
                </div>

                {/* Sizes */}

                <div className="filter-category">
                    <h3 className="filter_sub_headings">Size</h3>
                    <div className="inp_checkbox flex flex_justify_start flex_align_center">
                        <label>
                            <input className="inp_checkbox"
                                name="S"
                                type="checkbox"
                                checked={s}
                                onChange={() => dispatch({ type: "S" })}
                            />
                            <span className="checkbox_notify">S</span>
                        </label>
                    </div>
                    <div className="inp_checkbox flex flex_justify_start flex_align_center">
                        <label>
                            <input className="inp_checkbox"
                                onChange={() => dispatch({ type: "M" })}
                                name="M"
                                type="checkbox"
                                checked={m}
                            />
                            <span className="checkbox_notify">M</span>
                        </label>
                    </div>
                    <div className="inp_checkbox flex flex_justify_start flex_align_center">
                        <label>
                            <input className="inp_checkbox"
                                onChange={() => dispatch({ type: "L" })}
                                name="L"
                                type="checkbox"
                                checked={l}
                            />
                            <span className="checkbox_notify">L</span>
                        </label>
                    </div>
                    <div className="inp_checkbox flex flex_justify_start flex_align_center">
                        <label>
                            <input className="inp_checkbox"
                                onChange={() => dispatch({ type: "XL" })}
                                name="XL"
                                type="checkbox"
                                checked={xl}
                            />
                            <span className="checkbox_notify">XL</span>
                        </label>
                    </div>
                </div>

                {/* sort */}

                <div className="filter_sortby flex flex_col filter_spaces">
                    <h3 className="filter_sub_headings">SORT BY</h3>
                    <form className="rating_options flex flex_col">
                        <label>
                            <input className="filter_margin" onChange={() =>
                                dispatch({ type: "SORT_BY", payload: "LOW_TO_HIGH" })
                            }
                                type="radio"
                                name="sortByFilter"
                                checked={state.sortBy === "LOW_TO_HIGH"}
                            />
                            <span>Low to High</span>
                        </label>
                        <label>
                            <input className="filter_margin" onChange={() =>
                                dispatch({ type: "SORT_BY", payload: "HIGH_TO_LOW" })
                            }
                                type="radio"
                                name="sortByFilter"
                                checked={state.sortBy === "HIGH_TO_LOW"}
                            />
                            <span>High to Low</span>
                        </label>
                    </form>
                </div>


            </div>
        </aside >
    )
}