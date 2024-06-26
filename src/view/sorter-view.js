import AbstractView from '../framework/view/abstract-view';
import { SortTypes } from '../sorter-utils';
const createSorterTemplate = (currentSortType) => `
        <form class="trip-events__trip-sort  trip-sort" action="#" method="get">
          <div class="trip-sort__item  trip-sort__item--day">
            <input id="sort-day" class="trip-sort__input visually-hidden" data-sort-type="${SortTypes.DEFAULT}" type="radio" name="trip-sort" value="sort-day" ${currentSortType === 'default' ? 'checked' : ''}>
              <label class="trip-sort__btn" for="sort-day">Day</label>
          </div>
          <div class="trip-sort__item  trip-sort__item--event">
            <input id="sort-event" class="trip-sort__input  visually-hidden" data-sort-type="" type="radio" name="trip-sort" value="sort-event" disabled>
              <label class="trip-sort__btn" for="sort-event">Event</label>
          </div>
          <div class="trip-sort__item  trip-sort__item--time">
            <input id="sort-time" class="trip-sort__input  visually-hidden" data-sort-type="${SortTypes.BY_TIME}" type="radio" name="trip-sort" value="sort-time" ${currentSortType === 'time' ? 'checked' : ''} >
              <label class="trip-sort__btn" for="sort-time">Time</label>
          </div>
          <div class="trip-sort__item  trip-sort__item--price">
            <input id="sort-price" class="trip-sort__input  visually-hidden" data-sort-type="${SortTypes.BY_PRICE}" type="radio" name="trip-sort" value="sort-price" ${currentSortType === 'price' ? 'checked' : ''} >
              <label class="trip-sort__btn" for="sort-price">Price</label>
          </div>
          <div class="trip-sort__item  trip-sort__item--offer">
            <input id="sort-offer" class="trip-sort__input  visually-hidden" data-sort-type="" type="radio" name="trip-sort" value="sort-offer" disabled>
              <label class="trip-sort__btn" for="sort-offer">Offers</label>
          </div>
        </form>
            `;

export default class SorterView extends AbstractView{

  #onSort;
  #currentSortType;

  constructor({onSort, currentSortType}){
    super();

    this.#onSort = onSort;
    this.#currentSortType = currentSortType;
    this.element.addEventListener('click', this.#onSortClick);
  }

  #onSortClick = (evt) => {
    if(evt.target.tagName !== 'INPUT'){
      return;
    }

    this.#onSort(evt.target.getAttribute('data-sort-type'));
  };

  get template() {
    return createSorterTemplate(this.#currentSortType);
  }
}
