import React from 'react';
import { global } from '../helpers/helpers';

function ResultShopItem({item, unnecessaryTag}) {
  function OutputOtherTags() {
    if (item.tags.length === 1) { return "-" }
    else {
      return (item.tags.filter(tag => tag.title !== unnecessaryTag.title)).map((tag, index) => {
        let sep = "";
        if (index !== 0) {
          sep = ", ";
        }
        return <>{sep}{tag.title}</>;
      })
    }
  }

  return (
    <div className="shop-item">
      <div className="image-wrap">
        <img
          src={item.item_image !== null ? `${apiWithoutURLPattern}/find-mall-backend/src/malls/find_mall${item.item_image}` : "assets/images/white-image.png"}
          alt="shop-icon"
          width={65}
          height={65}
        />
      </div>
      <div className="shop-text">
        <p className="shop-name">{item.title}</p>
        <span className="other-tags">
          Інші теги: {OutputOtherTags()}
        </span>
      </div>
    </div>
  )
}

export default ResultShopItem;