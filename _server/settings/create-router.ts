// Helper function to create a router with your app's context
import * as trpc from "@trpc/server";
import { Context } from "_server/settings/context";

export function createRouter() {
  return trpc.router<Context>();
}
