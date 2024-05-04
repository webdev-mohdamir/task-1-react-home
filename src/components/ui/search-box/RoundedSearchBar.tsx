import searchIcon from "@/assets/images/icons/search-24.svg";

const RoundedSearchBar = () => {
  return (
    <label className="roundedSearchBar d-flex gap-2" htmlFor="search">
      <div className="icon">
        <img src={searchIcon} alt="search icon" />
      </div>
      <input
        className="search_box"
        type="text"
        id="search"
        placeholder="Search for your favorite groups in ATG"
      />
    </label>
  );
};

export default RoundedSearchBar;
