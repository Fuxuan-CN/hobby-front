/** The global namespace for the app */
declare namespace App {
  namespace Service {
    /** The backend service response data */
    interface Response<T = unknown> {
      /** The backend service response code */
      code: string;
      /** The backend service response message */
      msg: string;
      /** The backend service response data */
      data: T;
    }
  }
}
