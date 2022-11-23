import { handleActions } from "redux-actions";
import type { Action, ReducerMap } from "redux-actions";
import type { DynamicContentState, State } from "./types";
import {
  DynamicContentActionTypes,
  DynamicContentPayload,
  DynamicContentSetWalletCardsPayload,
  DynamicContentSetAssetCardsPayload,
  DynamicContentSetDismissCardPayload,
} from "../actions/types";

export const INITIAL_STATE: DynamicContentState = {
  assetsCards: [],
  walletCards: [],
  dismissedCards: [],
};

const handlers: ReducerMap<DynamicContentState, DynamicContentPayload> = {
  [DynamicContentActionTypes.DYNAMIC_CONTENT_SET_WALLET_CARDS]: (
    state,
    action,
  ) => ({
    ...state,
    walletCards: (action as Action<DynamicContentSetWalletCardsPayload>).payload
      .walletCards,
  }),
  [DynamicContentActionTypes.DYNAMIC_CONTENT_SET_ASSET_CARDS]: (
    state,
    action,
  ) => ({
    ...state,
    assetsCards: (action as Action<DynamicContentSetAssetCardsPayload>).payload
      .assetsCards,
  }),
  [DynamicContentActionTypes.DYNAMIC_CONTENT_SET_DISMISS_CARD]: (
    state,
    action,
  ) => ({
    ...state,
    dismissedCards: [
      ...state.dismissedCards,
      (action as Action<DynamicContentSetDismissCardPayload>).payload
        .dismissedCard,
    ],
  }),
};

// Selectors
export const assetsCardsSelector = (s: State) => s.dynamicContent.assetsCards;

export const walletCardsSelector = (s: State) => s.dynamicContent.walletCards;
export const dismissedCardsSelector = (s: State) =>
  s.dynamicContent.dismissedCards;

export default handleActions<DynamicContentState, DynamicContentPayload>(
  handlers,
  INITIAL_STATE,
);
