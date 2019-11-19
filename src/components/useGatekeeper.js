// @flow
import { createContext, useContext } from 'react';
export const GatekeeperContext = createContext<boolean>(false);

export default function useGatekeeper() {
  return useContext(GatekeeperContext);
}
