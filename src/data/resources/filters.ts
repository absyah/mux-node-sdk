/*!
 * Mux Filters
 * Copyright(c) 2018 Mux Inc.
 */
import { Base } from '../../base.js';
import { FilterGetResponse, FilterQueryParams } from '../domain.js';

/**
 * @private Base filters path for the Mux API
 * */
const PATH = '/data/v1/filters';

/**
 * Filters Class - Provides access to the Mux Data Filters API
 *
 * @extends Base
 * @example
 * const muxClient = new Mux(accessToken, secret);
 * const { Data } = muxClient;
 *
 * // Lists all the filters broken out into basic and advanced
 * Data.Filters.list();
 */
export class Filters extends Base {
  /**
   * Lists the values for a filter along with a total count of related views
   *
   * @param {string} filterId - The filter name/id for see https://api-docs.mux.com/#filter-get-1 for a list of all filter ids
   * @param {Object} [queryParams] - example { timeframe: ['7:days'], filters: ['operating_system:windows'] }
   * @returns {Promise} - Returns a resolved Promise with a response from the Mux API
   *
   * @example
   * const muxClient = new Mux(accessToken, secret);
   * const { Data } = muxClient;
   *
   * // Lists the values for a filter along with a total count of related views
   * Data.Filters.get('browser', { timeframe: ['7:days'] });
   *
   * @see https://docs.mux.com/api-reference/data#operation/list-filter-values
   */
  get(
    filterId: string,
    params?: FilterQueryParams
  ): Promise<FilterGetResponse> {
    process.emitWarning( 'The Filter API has been deprecated, please use Dimension instead','DeprecatedWarning');
    if (!filterId) {
      throw new Error('Filter Id is required to get filter information.');
    }
    return this.http.get(`${PATH}/${filterId}`, { params });
  }

  /**
   * Lists all the filters broken out into basic and advanced
   * @returns {Promise} - Returns a resolved Promise with a response from the Mux API
   *
   * @example
   * const muxClient = new Mux(accessToken, secret);
   * const { Data } = muxClient;
   *
   * // Lists the available video view exports along with URLs to retrieve them
   * Data.Filters.list();
   *
   * @see https://docs.mux.com/api-reference/data#operation/list-filters
   */
  list() {
    process.emitWarning( 'The Filter API has been deprecated, please use Dimension instead','DeprecatedWarning');
    return this.http.get(PATH);
  }
}
