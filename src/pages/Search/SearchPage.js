import React, { Fragment } from "react";
import { Link } from "react-router-dom";

import NavBar from "../../components/UI/NavBar/NavBar";
import Footer from "../../components/UI/Footer/Footer";
import SearchResultCard from "../../components/SearchResultCard/SearchResultCard";

import classes from "./SearchPage.module.css";

const Search = () => {
  const searchHandler = (event) => {
    console.log(event.target.value);
  };

  return (
    <Fragment>
      <NavBar />
      <main className={classes.search__main}>
        <div className={classes.search__form}>
          <div className={classes.earch__form__bar}>
            <input type="search" placeholder="Search..." onChange={searchHandler} />
            <button type="submit">Find</button>
          </div>
          <div className={classes.search__form__filters}>
            <label htmlFor="role">Role: </label>
            <select id="role">
              <option value="gamer">Gamer</option>
              <option value="company">Company</option>
            </select>
            <label htmlFor="order-by">Order by: </label>
            <select id="order-by">
              <option value="relevance-ascending">Relevance ascending</option>
              <option value="relevance-descending">Relevance descending</option>
              <option value="alphabetical-ascending">Alphabetical ascending</option>
              <option value="alphabetical-descending">Alphabetical descending</option>
              <option value="date-ascending">Recent</option>
              <option value="date-descending">Older</option>
            </select>
          </div>
        </div>
        <div className={classes.search__results}>
          <Link to="/user-profile">
            <SearchResultCard title="Card 1" date="4h ago" desc="banane banane banane banane banane banane" />
          </Link>
          <Link to="/user-profile">
            <SearchResultCard title="Card 2" date="15h ago" desc="banane banane banane banane banane banane" />
          </Link>
          <Link to="/user-profile">
            <SearchResultCard title="Card 3" date="1d ago" desc="banane banane banane banane banane banane" />
          </Link>
          <Link to="/user-profile">
            <SearchResultCard title="Card 4" date="2d ago" desc="banane banane banane banane banane banane" />
          </Link>
          <Link to="/user-profile">
            <SearchResultCard title="Card 5" date="6d ago" desc="banane banane banane banane banane banane" />
          </Link>
          <Link to="/user-profile">
            <SearchResultCard title="Card 6" date=">1w ago" desc="banane banane banane banane banane banane" />
          </Link>
          <Link to="/user-profile">
            <SearchResultCard title="Card 7" date=">1mo ago" desc="banane banane banane banane banane banane" />
          </Link>
          <Link to="/user-profile">
            <SearchResultCard title="Card 8" date=">2mo ago" desc="banane banane banane banane banane banane" />
          </Link>
        </div>
      </main>
      <Footer />
    </Fragment>
  );
};

export default Search;
