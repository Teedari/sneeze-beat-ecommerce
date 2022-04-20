import urls from "./routes/page.routes";

export const beatGoTo = (param) => ({
  pathname: urls.beat,
  search: `?query=${param.replace(' ', '_').replace('&','_and_').toLowerCase()}`,
});

export const reverseQueryParams = query => {
  return query.replace('_', ' ').replace(' and_', '&').toLowerCase()
}