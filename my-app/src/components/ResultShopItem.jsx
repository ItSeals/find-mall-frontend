import React from 'react';

function ResultShopItem({name, tags}) {
  return (
    <div className="shop-item">
      <div className="image-wrap">
        <img
          src="assets/images/white-image.png"
          alt="shop-icon"
          width={65}
          height={65}
        />
      </div>
      <div className="shop-text">
        <p className="shop-name">{name}</p>
        <span className="other-tags">
          Інші теги: {tags.map((tag, index) => {
            let sep = "";
            if (index !== 0) {
              sep = ", ";
            }
            return <>{sep}{tag.title}</>;
          })}
        </span>
      </div>
    </div>
  )
}

export default ResultShopItem;