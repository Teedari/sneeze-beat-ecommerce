import urls from "./routes/page.routes";

export const beatGoTo = (param) => ({
  pathname: urls.beat,
  search: `?query=${param.replace(' ', '').replace('&','_and_').toLowerCase()}`,
});