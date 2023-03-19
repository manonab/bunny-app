/// <reference types="nativewind/types" />

import { RootStackParamList } from "@/models/root-stack-param-list";

declare global {
  namespace ReactNavigation {
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    interface RootParamList extends RootStackParamList {}
  }
}
