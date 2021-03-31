import { makeAutoObservable } from "mobx";

export default class ItemStore {
  constructor() {
    this._types = [
      { id: 1, name: "Games" },
      { id: 2, name: "Applications" },
    ];

    this._brands = [
      {
        id: 1,
        name: "Books & reference",
      },
      { id: 2, name: "Business" },
    ];

    this._items = [
      {
        id: 1,
        name: "Telegram",
        price: 0,
        rating: 5,
        img:
          "https://aosa.org/wp-content/uploads/2019/04/image-placeholder-350x350.png",
      },
      {
        id: 2,
        name: "Viber",
        price: 0,
        rating: 3,
        img:
          "https://aosa.org/wp-content/uploads/2019/04/image-placeholder-350x350.png",
      },
      {
        id: 3,
        name: "Viber",
        price: 0,
        rating: 3,
        img:
          "https://aosa.org/wp-content/uploads/2019/04/image-placeholder-350x350.png",
      },
      {
        id: 4,
        name: "Viber",
        price: 0,
        rating: 3,
        img:
          "https://aosa.org/wp-content/uploads/2019/04/image-placeholder-350x350.png",
      },
      {
        id: 5,
        name: "Viber",
        price: 0,
        rating: 3,
        img:
          "https://aosa.org/wp-content/uploads/2019/04/image-placeholder-350x350.png",
      },
    ];

    this._selectedType = {};
    this._selectedBrand = {};
    makeAutoObservable(this); //mobx now observes this values
  }

  setTypes(types) {
    this.types = types;
  }
  setBrands(brands) {
    this._brands = brands;
  }
  setItems(items) {
    this._items = items;
  }

  setSelectedType(type) {
    this._selectedType = type;
  }

  setSelectedBrand(brand) {
    this._selectedBrand = brand;
  }
  get types() {
    return this._types;
  }

  get brands() {
    return this._brands;
  }

  get items() {
    return this._items;
  }

  get selectedType() {
    return this._selectedType;
  }
  get selectedBrand() {
    return this._selectedBrand;
  }
}
