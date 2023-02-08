import { withLive } from "$live/live.ts";

export const handler = withLive({
  siteId: 508,
  site: "testebruno",
  domains: ["testebruno.deco.site"],
});