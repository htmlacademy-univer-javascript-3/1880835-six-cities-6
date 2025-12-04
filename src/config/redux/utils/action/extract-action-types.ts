import { Action } from '@reduxjs/toolkit';

export function extractActionTypes<T>(actions: Action<T>[]) {
  return actions.map((a) => a.type);
}
