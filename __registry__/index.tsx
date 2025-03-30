import React from "react";

export const Index: Record<string, any> = {
  "new-york": {
    "hello-world": {
      displayName: "Hello World",
      component: React.lazy(
        () => import("@/__registry__/new-york/previews/hello-world")
      ),
    },
  },
}
