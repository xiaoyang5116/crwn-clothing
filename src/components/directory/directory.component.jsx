import categoriesJson from "./categories.json";
import DirectoryItem from "../directory-item/directory-item.component";
import "./directory.styles.scss";

const Directory = () => {
  return (
    <div className="categories-container">
      {categoriesJson.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default Directory;
