import { ReactElement } from "react";

export const promises: Promise<ReactElement>[] = [];
export const asyncComponentState: object[] = typeof window !== 'undefined' ? window.ASYNC_COMPONENT_STATE : [];
export const functionCallCounter = { value: 0 }